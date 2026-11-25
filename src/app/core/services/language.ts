import { DOCUMENT, inject, Service, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { catchError, forkJoin, Observable, of, switchMap } from 'rxjs';
import { LanguageCode } from '../../shared/models/language.model';

/** localStorage key for the language chosen by the user. */
const STORAGE_KEY = 'language';

/** Fallback when neither a saved nor a supported browser language exists. */
const DEFAULT_LANGUAGE: LanguageCode = 'en';

/** All languages with a translation file in `public/i18n/`. */
const SUPPORTED_LANGUAGES: readonly LanguageCode[] = ['de', 'en'];

/**
 * Manages the active UI language: preloads all translations, restores the user's choice
 * and keeps ngx-translate and the `lang` attribute of `<html>` in sync.
 */
@Service()
export class LanguageService {
  private readonly translateService = inject(TranslateService);
  private readonly document = inject(DOCUMENT);

  /** Writable source of {@link LanguageService.currentLang}. */
  private readonly lang = signal<LanguageCode>(DEFAULT_LANGUAGE);

  /** Currently active language. */
  readonly currentLang = this.lang.asReadonly();

  /** All supported language codes. */
  readonly languages = SUPPORTED_LANGUAGES;

  /**
   * Loads all translation files and activates the initial language.
   * Errors are swallowed so a failing translation file never blocks the app start.
   *
   * @returns Observable for `provideAppInitializer` that completes once the language is ready.
   */
  init(): Observable<unknown> {
    return this.loadAllLanguages().pipe(
      switchMap(() => this.translateService.setFallbackLang(DEFAULT_LANGUAGE)),
      switchMap(() => this.applyLanguage(this.getInitialLanguage())),
      catchError(() => of(null)),
    );
  }

  /**
   * Switches to the given language and saves the choice.
   *
   * @param lang - Language to activate; ignored if it is already active.
   */
  use(lang: LanguageCode): void {
    if (lang === this.lang()) return;
    this.applyLanguage(lang);
    this.saveLanguage(lang);
  }

  /**
   * Loads every supported translation file, so all languages can be rendered at once.
   *
   * @returns Observable that emits once all files are loaded.
   */
  private loadAllLanguages(): Observable<unknown> {
    return forkJoin(SUPPORTED_LANGUAGES.map((lang) => this.translateService.reloadLang(lang)));
  }

  /**
   * Updates the language signal, the `lang` attribute of `<html>` and ngx-translate.
   *
   * @param lang - Language to apply.
   * @returns Observable returned by `TranslateService.use`.
   */
  private applyLanguage(lang: LanguageCode): Observable<unknown> {
    this.lang.set(lang);
    this.document.documentElement.lang = lang;
    return this.translateService.use(lang);
  }

  /**
   * Picks the start language: saved choice, then browser language, then default.
   *
   * @returns Language to activate on app start.
   */
  private getInitialLanguage(): LanguageCode {
    return this.loadSavedLanguage() ?? this.getBrowserLanguage() ?? DEFAULT_LANGUAGE;
  }

  /**
   * Reads the saved language from localStorage.
   *
   * @returns Saved language, or `null` if missing, unsupported or storage is blocked.
   */
  private loadSavedLanguage(): LanguageCode | null {
    try {
      return this.toSupportedLanguage(localStorage.getItem(STORAGE_KEY));
    } catch {
      return null;
    }
  }

  /**
   * Derives the language from the browser locale (e.g. `de-DE` → `de`).
   *
   * @returns Browser language, or `null` if it is not supported.
   */
  private getBrowserLanguage(): LanguageCode | null {
    return this.toSupportedLanguage(navigator.language.slice(0, 2).toLowerCase());
  }

  /**
   * Saves the language in localStorage; fails silently if storage is blocked.
   *
   * @param lang - Language to save.
   */
  private saveLanguage(lang: LanguageCode): void {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  }

  /**
   * Narrows an arbitrary string to a supported language code.
   *
   * @param value - Raw value, e.g. from localStorage or the browser.
   * @returns Matching language code, or `null`.
   */
  private toSupportedLanguage(value: string | null): LanguageCode | null {
    return SUPPORTED_LANGUAGES.find((lang) => lang === value) ?? null;
  }
}
