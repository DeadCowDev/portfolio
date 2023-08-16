"use client";

import { Button, Card, Typography } from "@/components";
import { useI18n } from "@/i18n";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import { Content } from "@/components/content";
import { HeaderSmall } from "@/components/header-small";

export default function Services() {
  const { t, locale } = useI18n();
  return (
    <main>
      <HeaderSmall
        closeAltText={t("services_header_title_button")}
        closeLink={`/${locale}`}
        text={t("services_header_title")}
      />
      <Content className="bg-grey-4 py-9 px-6 flex flex-col justify-start items-center gap-8">
        <Typography variant="headlineS" className="text-grey-1">
          {t("services_header_title")}
        </Typography>
        <div className="flex flex-col gap-4 justify-start items-stretch w-full">
          <Card className="gap-6">
            <Image
              src="/images/web-app.svg"
              alt={t("services_card_frontend_image_alt")}
              width={184}
              height={160}
              className="mb-4"
            />
            <Typography
              variant="titleLBold"
              className="text-grey-1 text-center"
            >
              {t("services_card_frontend_title")}
            </Typography>
            <Typography
              variant="mobileLongTextRegular"
              className="text-grey-1 text-center"
            >
              {t("services_card_frontend_description")}
            </Typography>

            <Link
              href={`/${locale}/services/application-development`}
              className="mt-4 w-full"
            >
              <Button buttonSize="small" color="blue" className="w-full">
                {t("services_card_frontend_button")}
              </Button>
            </Link>
          </Card>
          <Card className="gap-6">
            <Image
              src="/images/backend.svg"
              alt={t("services_card_backend_image_alt")}
              width={184}
              height={160}
              className="mb-4"
            />
            <Typography
              variant="titleLBold"
              className="text-grey-1 text-center"
            >
              {t("services_card_backend_title")}
            </Typography>
            <Typography
              variant="mobileLongTextRegular"
              className="text-grey-1 text-center"
            >
              {t("services_card_backend_description")}
            </Typography>

            <Link
              href={`/${locale}/services/backend-development`}
              className="mt-4 w-full"
            >
              <Button buttonSize="small" color="blue" className="w-full">
                {t("services_card_backend_button")}
              </Button>
            </Link>
          </Card>
        </div>
      </Content>
    </main>
  );
}
