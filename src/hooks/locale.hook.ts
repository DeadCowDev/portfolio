import { usePathname } from "next/navigation";
import i18nConfig from "../i18n-config";

export function useLocale() {
  const path = usePathname();
  const locales = i18nConfig.locales;
  const locale =
    locales.find((l) => path.startsWith(`/${l}`)) ?? i18nConfig.defaultLocale;
  const defaultLocale = i18nConfig.defaultLocale;

  return {
    locale,
    locales,
    defaultLocale,
  };
}
