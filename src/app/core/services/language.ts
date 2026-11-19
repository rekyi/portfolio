import { DOCUMENT, inject, Service, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { catchError, forkJoin, Observable, of, switchMap } from 'rxjs';
import { LanguageCode } from '../../shared/models/language.model';

const STORAGE_KEY = 'language';
const DEFAULT_LANGUAGE: LanguageCode = 'en';
const SUPPORTED_LANGUAGES: readonly LanguageCode[] = ['de', 'en'];

@Service()
export class LanguageService {
  private readonly translateService = inject(TranslateService);
  private readonly document = inject(DOCUMENT);
  private readonly lang = signal<LanguageCode>(DEFAULT_LANGUAGE);
  readonly currentLang = this.lang.asReadonly();
  readonly languages = SUPPORTED_LANGUAGES;

  init(): Observable<unknown> {
    return this.loadAllLanguages().pipe(
      switchMap(() => this.translateService.setFallbackLang(DEFAULT_LANGUAGE)),
      switchMap(() => this.applyLanguage(this.getInitialLanguage())),
      catchError(() => of(null)),
    );
  }

  use(lang: LanguageCode): void {
    if (lang === this.lang()) return;
    this.applyLanguage(lang);
    this.saveLanguage(lang);
  }

  private loadAllLanguages(): Observable<unknown> {
    return forkJoin(SUPPORTED_LANGUAGES.map((lang) => this.translateService.reloadLang(lang)));
  }

  private applyLanguage(lang: LanguageCode): Observable<unknown> {
    this.lang.set(lang);
    this.document.documentElement.lang = lang;
    return this.translateService.use(lang);
  }

  private getInitialLanguage(): LanguageCode {
    return this.loadSavedLanguage() ?? this.getBrowserLanguage() ?? DEFAULT_LANGUAGE;
  }

  private loadSavedLanguage(): LanguageCode | null {
    try {
      return this.toSupportedLanguage(localStorage.getItem(STORAGE_KEY));
    } catch {
      return null;
    }
  }

  private getBrowserLanguage(): LanguageCode | null {
    return this.toSupportedLanguage(navigator.language.slice(0, 2).toLowerCase());
  }

  private saveLanguage(lang: LanguageCode): void {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  }

  private toSupportedLanguage(value: string | null): LanguageCode | null {
    return SUPPORTED_LANGUAGES.find((lang) => lang === value) ?? null;
  }
}
