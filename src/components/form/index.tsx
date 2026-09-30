"use client";
import { i18N } from "@/i18n";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { Content } from "../content";
import { HeaderSmall } from "../header-small";
import { Typography } from "../typography";
import { PREVIOUS_PAGE_KEY } from "@/constants";

const ContactUs: FC<{ lang: string }> = ({ lang }) => {
  const { t } = i18N(lang);
  const [closeLink, setCloseLink] = useState(`/${lang}`);

  useEffect(() => {
    const prevPage = sessionStorage.getItem(PREVIOUS_PAGE_KEY);
    if (prevPage) {
      setCloseLink(prevPage);
    }
  }, []);

  return (
    <main className="w-full h-[100dvh] xl:flex xl:justify-center xl:items-center xl:p-8 xl:bg-grey-1 xl:relative">
      <HeaderSmall
        closeAltText={t("contact_header")}
        closeLink={closeLink}
        text="Contact us"
        className="xl:hidden"
      />

      <Link
        className="w-10 aspect-square  items-center justify-center rounded-full bg-white shadow-card absolute top-8 right-12 z-10 hidden xl:flex"
        href={closeLink}
      >
        <Image
          src="/icons/close-dark.svg"
          width={24}
          height={24}
          alt={t("contact_close")}
        />
      </Link>
      <Content className="bg-grey-4 pt-6 pb-10 px-4 flex flex-col justify-start items-center xl:shadow-card xl:rounded-xl xl:bg-white xl:min-h-[unset]">
        <Typography
          variant="titleLBold"
          className="text-grey-1 text-center"
          el="h1"
        >
          {t("contact_title")}
        </Typography>

        <Typography
          variant="mobileLongTextRegular"
          className="text-grey-3 text-center mt-4"
        >
          {t("contact_subtitle")}
        </Typography>

        <a
          href="mailto:members@deadcow.enterprises"
          className="mt-8 text-blue-5 underline text-lg hover:opacity-80 transition-opacity"
        >
          members@deadcow.enterprises
        </a>
      </Content>
    </main>
  );
};
export default ContactUs;
