import en from "./en";
import pt from "./pt";

import { useLocale } from "@/hooks";

export type TranslationKeys = keyof typeof en | keyof typeof pt;

export type Translation = Record<TranslationKeys, string>;

export type I18nResult = {
  t: (key: TranslationKeys, params?: { [key: string]: any }) => string;
  locale: string;
  locales: string[];
  defaultLocale?: string;
  translations: { [lang: string]: Translation };

  get currentTranslation(): Translation | undefined;
  get defaultTranslation(): Translation;
};

const translations: I18nResult["translations"] = {
  pt,
  en,
};

export function useI18n() {
  const { defaultLocale, locale, locales } = useLocale();

  const t = (key: TranslationKeys, params?: { [key: string]: any }) => {
    if (!locale) {
      return key;
    }
    const translation: Translation = translations[locale] as Translation;

    if (!translation) {
      return key;
    }

    const value = translation[key];

    if (typeof value !== "string") {
      return key;
    }

    return (
      Object.keys(params || {}).reduce((acc, curr) => {
        return acc.replace(`{${curr}}`, params![curr]);
      }, value) ?? value
    );
  };
  return {
    t,
    locale,
    locales,
    translations,
    defaultLocale,
    get currentTranslation() {
      return locale ? (translations[locale] as Translation) : undefined;
    },
    get defaultTranslation() {
      return translations[defaultLocale!] as Translation;
    },
  };
}
