export type LanguageCode = 'de' | 'en';

export interface LanguageOption {
  code: LanguageCode;
  labelKey: string;
}

export interface TextVariant {
  lang: LanguageCode;
  texts: string[];
  isActive: boolean;
}

export interface StableTextContext {
  $implicit: string;
  texts: string[];
}
