import { TranslationKeys, i18N } from "@/i18n";
import i18nConfig from "@/i18n/config";
import { LanguageParams } from "@/models";
import { Metadata } from "next";

export function htmlClass(...classes: string[]) {
  return classes
    .map((c) => c.trim())
    .filter(Boolean)
    .join(" ");
}

export function getMetadataTitle(
  title: TranslationKeys,
  description: TranslationKeys,
  lang: string
): Metadata {
  const { t } = i18N(lang);
  return {
    title: t(title),
    description: t(description),
  };
}

export function getLanguageSubpath(lang: string) {
  return lang === i18nConfig.defaultLocale ? "/" : `/${lang}/`;
}
