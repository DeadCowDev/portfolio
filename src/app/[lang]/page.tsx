"use client";
import {
  Header,
  HomeCreativity,
  HomeMembers,
  HomeTechnical,
  HomeWelcome,
} from "@/components";
import ContactUs from "@/components/form";
import { useI18n } from "@/i18n";

import "swiper/css";

export default function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = useI18n();
  return (
    <main>
      <head>
        <title>{t("home_meta_title")}</title>
        <meta name="description" content={t("home_meta_description")}></meta>
      </head>
      <Header lightOnDesktop cb={`/${lang}`} />
      <HomeWelcome />
      <HomeCreativity />
      <HomeTechnical />
      <HomeMembers />
    </main>
  );
}
