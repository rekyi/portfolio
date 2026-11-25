/** Supported UI language. */
export type LanguageCode = 'de' | 'en';

/** Option of the language switch. */
export interface LanguageOption {
  /** Language to activate. */
  code: LanguageCode;
  /** Translation key of the accessible label. */
  labelKey: string;
}

/** Translations of one or more keys in one language, as rendered by `StableText`. */
export interface TextVariant {
  /** Language of the texts. */
  lang: LanguageCode;
  /** Translated texts in key order. */
  texts: string[];
  /** Whether this language is active and therefore visible. */
  isActive: boolean;
}

/** Context of a custom template inside `StableText`. */
export interface StableTextContext {
  /** First translated text, available via `let-text`. */
  $implicit: string;
  /** All translated texts, available via `let-texts="texts"`. */
  texts: string[];
}
