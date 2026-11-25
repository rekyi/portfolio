import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, contentChild, inject, input, TemplateRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../../core/services/language';
import { LanguageCode, StableTextContext, TextVariant } from '../../models/language.model';

/**
 * Renders a translated text in all languages stacked on top of each other and shows only
 * the active one, so switching the language causes no layout shift.
 *
 * @example
 * ```html
 * <app-stable-text key="section.title" />
 *
 * <app-stable-text [key]="['section.text', 'section.link']">
 *   <ng-template let-texts="texts">{{ texts[0] }} <a>{{ texts[1] }}</a></ng-template>
 * </app-stable-text>
 * ```
 */
@Component({
  imports: [NgTemplateOutlet],
  selector: 'app-stable-text',
  styleUrl: './stable-text.scss',
  templateUrl: './stable-text.html',
})
export class StableText {
  private readonly translateService = inject(TranslateService);
  private readonly languageService = inject(LanguageService);

  /** Translation key, or several keys for a custom template. */
  readonly key = input.required<string | string[]>();

  /** Interpolation parameters passed to every key. */
  readonly params = input<Record<string, string>>();

  /** Optional projected template for inline markup such as links or `<q>`. */
  protected readonly template = contentChild<TemplateRef<StableTextContext>>(TemplateRef);

  /** One entry per supported language with its translated texts. */
  protected readonly variants = computed(() =>
    this.languageService.languages.map((lang) => this.getVariant(lang)),
  );

  /**
   * Builds the context passed to the projected template.
   *
   * @param variant - Translations of one language.
   * @returns Context with the first text as `$implicit` and all texts as `texts`.
   */
  protected getContext(variant: TextVariant): StableTextContext {
    return { $implicit: variant.texts[0], texts: variant.texts };
  }

  /**
   * Translates all keys into one language.
   *
   * @param lang - Target language.
   * @returns Translated texts plus whether this language is currently active.
   */
  private getVariant(lang: LanguageCode): TextVariant {
    return {
      lang,
      texts: [this.key()].flat().map((key) => this.translate(key, lang)),
      isActive: lang === this.languageService.currentLang(),
    };
  }

  /**
   * Translates a single key into a given language, independent of the active one.
   *
   * @param key - Translation key.
   * @param lang - Target language.
   * @returns Translated text, or the key itself if no translation exists.
   */
  private translate(key: string, lang: LanguageCode): string {
    return String(this.translateService.instant(key, this.params(), lang));
  }
}
