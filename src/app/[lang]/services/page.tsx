"use client";

import { Button, Card, Typography } from "@/components";
import { useI18n } from "@/i18n";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import { Content } from "@/components/content";

const ServiceHeader: FC = () => {
  const { t, locale } = useI18n();
  return (
    <div className="z-10 h-[60px] bg-grey-1 sticky top-0 flex justify-start items-center px-4 gap-4">
      <Link href={`/${locale}`} className="w-6 h-6">
        <button className="w-6 h-6">
          <Image
            src="/icons/close.svg"
            width={24}
            height={24}
            alt={t("services_header_title_button")}
          />
        </button>
      </Link>
      <Typography variant="smallTextLBold" className="text-white">
        {t("services_header_title")}
      </Typography>
    </div>
  );
};

export default function Services() {
  const { t, locale } = useI18n();
  return (
    <main>
      <ServiceHeader />
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
            <Typography variant="titleLBold" className="text-grey-1">
              {t("services_card_frontend_title")}
            </Typography>
            <Typography
              variant="mobileLongTextRegular"
              className="text-grey-1 text-center"
            >
              {t("services_card_frontend_description")}
            </Typography>

            <Link
              href={`/${locale}/services/application`}
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
            <Typography variant="titleLBold" className="text-grey-1">
              {t("services_card_backend_title")}
            </Typography>
            <Typography
              variant="mobileLongTextRegular"
              className="text-grey-1 text-center"
            >
              {t("services_card_backend_description")}
            </Typography>

            <Link href={`/${locale}/services/backend`} className="mt-4 w-full">
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
