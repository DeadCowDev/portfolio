"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import i18nConfig from "@/i18n/config";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const browserLang = navigator.language?.split("-")[0];
    const locale = i18nConfig.locales.includes(browserLang)
      ? browserLang
      : i18nConfig.defaultLocale;
    router.replace(`/${locale}`);
  }, [router]);

  return null;
}
