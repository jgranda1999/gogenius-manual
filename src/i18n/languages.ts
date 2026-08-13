export type LanguageCode =
  | 'ar'
  | 'ru'
  | 'uk'
  | 'ro'
  | 'en'
  | 'fr'
  | 'es'
  | 'zh'
  | 'de';

export type Language = {
  code: LanguageCode;
  nativeName: string;
  englishName: string;
  htmlLang: string;
  dir: 'ltr' | 'rtl';
};

/** Order matches the nine support languages shown in the app. */
export const LANGUAGES: Language[] = [
  { code: 'ar', nativeName: 'العربية', englishName: 'Arabic', htmlLang: 'ar', dir: 'rtl' },
  { code: 'ru', nativeName: 'Русский', englishName: 'Russian', htmlLang: 'ru', dir: 'ltr' },
  { code: 'uk', nativeName: 'Українська', englishName: 'Ukrainian', htmlLang: 'uk', dir: 'ltr' },
  { code: 'ro', nativeName: 'Română', englishName: 'Romanian', htmlLang: 'ro', dir: 'ltr' },
  { code: 'en', nativeName: 'English', englishName: 'English', htmlLang: 'en', dir: 'ltr' },
  { code: 'fr', nativeName: 'Français', englishName: 'French', htmlLang: 'fr', dir: 'ltr' },
  { code: 'es', nativeName: 'Español', englishName: 'Spanish', htmlLang: 'es', dir: 'ltr' },
  { code: 'zh', nativeName: '中文', englishName: 'Mandarin', htmlLang: 'zh-Hans', dir: 'ltr' },
  { code: 'de', nativeName: 'Deutsch', englishName: 'German', htmlLang: 'de', dir: 'ltr' },
];

export const DEFAULT_LANGUAGE: LanguageCode = 'en';

export const LANGUAGE_CODES = LANGUAGES.map((lang) => lang.code);

export function isLanguageCode(value: string): value is LanguageCode {
  return LANGUAGE_CODES.includes(value as LanguageCode);
}

export function getLanguage(code: LanguageCode): Language {
  return LANGUAGES.find((lang) => lang.code === code) ?? LANGUAGES.find((lang) => lang.code === DEFAULT_LANGUAGE)!;
}
