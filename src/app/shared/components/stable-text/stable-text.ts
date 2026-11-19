import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, contentChild, inject, input, TemplateRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../../core/services/language';
import { LanguageCode, StableTextContext, TextVariant } from '../../models/language.model';

@Component({
  imports: [NgTemplateOutlet],
  selector: 'app-stable-text',
  styleUrl: './stable-text.scss',
  templateUrl: './stable-text.html',
})
export class StableText {
  private readonly translateService = inject(TranslateService);
  private readonly languageService = inject(LanguageService);

  readonly key = input.required<string | string[]>();
  readonly params = input<Record<string, string>>();

  protected readonly template = contentChild<TemplateRef<StableTextContext>>(TemplateRef);
  protected readonly variants = computed(() =>
    this.languageService.languages.map((lang) => this.getVariant(lang)),
  );

  protected getContext(variant: TextVariant): StableTextContext {
    return { $implicit: variant.texts[0], texts: variant.texts };
  }

  private getVariant(lang: LanguageCode): TextVariant {
    return {
      lang,
      texts: [this.key()].flat().map((key) => this.translate(key, lang)),
      isActive: lang === this.languageService.currentLang(),
    };
  }

  private translate(key: string, lang: LanguageCode): string {
    return String(this.translateService.instant(key, this.params(), lang));
  }
}
