import { effect, inject, Service, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageCode } from '../../shared/models/language.model';
import { LanguageService } from './language';

const TITLE_PREFIX = 'Rekyi • ';

@Service()
export class TranslatedTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly translateService = inject(TranslateService);
  private readonly languageService = inject(LanguageService);
  private readonly pageKey = signal<string | undefined>(undefined);

  constructor() {
    super();
    effect(() => this.setPageTitle(this.pageKey(), this.languageService.currentLang()));
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    this.pageKey.set(this.buildTitle(snapshot));
  }

  private setPageTitle(key: string | undefined, lang: LanguageCode): void {
    if (!key) return;
    this.title.setTitle(`${TITLE_PREFIX}${this.translateService.instant(key, undefined, lang)}`);
  }
}
