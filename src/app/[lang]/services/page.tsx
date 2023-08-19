"use client";

import { Button, Card, Header, Typography } from "@/components";
import { useI18n } from "@/i18n";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import { Content } from "@/components/content";
import { HeaderSmall } from "@/components/header-small";
import { useInMediaQuery } from "@/hooks";

export default function Services() {
  const { t, locale } = useI18n();
  const isXl = useInMediaQuery("xl");
  return (
    <main>
      <head>
        <title>{t("services_meta_title")}</title>
        <meta
          name="description"
          content={t("services_meta_description")}
        ></meta>
      </head>
      {isXl ? (
        <Header lightOnDesktop cb={`/${locale}/services`} />
      ) : (
        <HeaderSmall
          closeAltText={t("services_header_title_button")}
          closeLink={`/${locale}`}
          text={t("services_header_title")}
        />
      )}

      <Content className="bg-grey-4 py-9 px-6 flex flex-col justify-start items-center gap-8 xl:gap-16">
        <Typography variant="headlineS" className="text-grey-1">
          {t("services_header_title")}
        </Typography>
        <div className="flex flex-col gap-4 justify-start items-stretch w-full xl:flex-row xl:justify-center xl:gap-28">
          <Card className="gap-6 xl:w-[500px]">
            <Image
              src="/images/web-app.svg"
              alt={t("services_card_frontend_image_alt")}
              width={isXl ? 229 : 184}
              height={isXl ? 200 : 160}
              className="mb-4"
            />
            <Typography
              variant={isXl ? "titleXlBold" : "titleLBold"}
              className="text-grey-1 text-center"
            >
              {t("services_card_frontend_title")}
            </Typography>
            <Typography
              variant={isXl ? "mediumTextRegular" : "mobileLongTextRegular"}
              className="text-grey-1 text-center"
            >
              {t("services_card_frontend_description")}
            </Typography>

            <Link
              href={`/${locale}/services/application-development`}
              className="mt-4 w-full xl:mt-auto xl:max-w-[293px]"
            >
              <Button
                buttonSize={isXl ? "normal" : "small"}
                color="blue"
                className="w-full"
              >
                {t("services_card_frontend_button")}
              </Button>
            </Link>
          </Card>
          <Card className="gap-6 xl:w-[500px]">
            <Image
              src="/images/backend.svg"
              alt={t("services_card_backend_image_alt")}
              width={isXl ? 227 : 184}
              height={isXl ? 200 : 160}
              className="mb-4"
            />
            <Typography
              variant={isXl ? "titleXlBold" : "titleLBold"}
              className="text-grey-1 text-center"
            >
              {t("services_card_backend_title")}
            </Typography>
            <Typography
              variant={isXl ? "mediumTextRegular" : "mobileLongTextRegular"}
              className="text-grey-1 text-center"
            >
              {t("services_card_backend_description")}
            </Typography>

            <Link
              href={`/${locale}/services/backend-development`}
              className="mt-4 w-full xl:mt-auto xl:max-w-[293px]"
            >
              <Button
                buttonSize={isXl ? "normal" : "small"}
                color="blue"
                className="w-full"
              >
                {t("services_card_backend_button")}
              </Button>
            </Link>
          </Card>
        </div>
      </Content>
    </main>
  );
}
