import { effect, inject, Service, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageCode } from '../../shared/models/language.model';
import { LanguageService } from './language';

/** Prefix shown before every page title. */
const TITLE_PREFIX = 'Rekyi • ';

/**
 * Router title strategy that treats the `title` of each route as a translation key
 * and updates the browser tab title whenever the route or the language changes.
 */
@Service()
export class TranslatedTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly translateService = inject(TranslateService);
  private readonly languageService = inject(LanguageService);

  /** Title translation key of the current route. */
  private readonly pageKey = signal<string | undefined>(undefined);

  /** Re-renders the page title whenever the route key or the language changes. */
  constructor() {
    super();
    effect(() => this.setPageTitle(this.pageKey(), this.languageService.currentLang()));
  }

  /**
   * Called by the router after each navigation; stores the title key of the new route.
   *
   * @param snapshot - Router state of the finished navigation.
   */
  override updateTitle(snapshot: RouterStateSnapshot): void {
    this.pageKey.set(this.buildTitle(snapshot));
  }

  /**
   * Translates the key and writes the prefixed result to the document title.
   *
   * @param key - Title translation key; does nothing if missing.
   * @param lang - Language to translate into.
   */
  private setPageTitle(key: string | undefined, lang: LanguageCode): void {
    if (!key) return;
    this.title.setTitle(`${TITLE_PREFIX}${this.translateService.instant(key, undefined, lang)}`);
  }
}
