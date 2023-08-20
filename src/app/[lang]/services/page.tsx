import { Content } from "@/components/content";
import { HeaderSmall } from "@/components/header-small";
import { i18N } from "@/i18n";
import Image from "next/image";
import Link from "next/link";

import backendServices from "/public/images/backend.svg";
import frontendServices from "/public/images/web-app.svg";
import { LanguageParams } from "@/models";
import { getMetadataTitle } from "@/utils";
import { Metadata } from "next";
import { Header } from "@/components/header";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Typography } from "@/components/typography";

export function generateMetadata({
  params,
}: {
  params: LanguageParams;
}): Metadata {
  return getMetadataTitle(
    "services_meta_title",
    "services_meta_description",
    params.lang
  );
}

export default function Services({
  params: { lang },
}: {
  params: LanguageParams;
}) {
  const { t, locale } = i18N(lang);
  return (
    <main>
      <Header
        lightOnDesktop
        cb={`/${locale}/services`}
        className="max-xl:hidden"
        lang={lang}
      />
      <HeaderSmall
        closeAltText={t("services_header_title_button")}
        closeLink={`/${locale}`}
        text={t("services_header_title")}
        className="xl:hidden"
      />

      <Content className="bg-grey-4 py-9 px-6 flex flex-col justify-start items-center gap-8 xl:gap-16">
        <Typography variant="headlineS" className="text-grey-1">
          {t("services_header_title")}
        </Typography>
        <div className="flex flex-col gap-4 justify-start items-stretch w-full xl:flex-row xl:justify-center xl:gap-28">
          <Card className="gap-6 xl:w-[500px]">
            <Image
              priority
              src={frontendServices}
              alt={t("services_card_frontend_image_alt")}
              className="mb-4 w-[184px] h-[160px] xl:w-[229px] xl:h-[200px]"
            />
            <Typography
              variant="titleLBoldXlTitleXlBold"
              className="text-grey-1 text-center"
            >
              {t("services_card_frontend_title")}
            </Typography>
            <Typography
              variant="mobileLongTextRegularXlMediumTextRegular"
              className="text-grey-1 text-center"
            >
              {t("services_card_frontend_description")}
            </Typography>

            <Link
              href={`/${locale}/services/application-development`}
              className="mt-4 w-full xl:mt-auto xl:max-w-[293px]"
            >
              <Button
                buttonSize="smallXlNormal"
                color="blue"
                className="w-full"
              >
                {t("services_card_frontend_button")}
              </Button>
            </Link>
          </Card>
          <Card className="gap-6 xl:w-[500px]">
            <Image
              priority
              src={backendServices}
              alt={t("services_card_backend_image_alt")}
              className="mb-4 w-[184px] h-[160px] xl:w-[227px] xl:h-[200px]"
            />
            <Typography
              variant="titleLBoldXlTitleXlBold"
              className="text-grey-1 text-center"
            >
              {t("services_card_backend_title")}
            </Typography>
            <Typography
              variant="mobileLongTextRegularXlMediumTextRegular"
              className="text-grey-1 text-center"
            >
              {t("services_card_backend_description")}
            </Typography>

            <Link
              href={`/${locale}/services/backend-development`}
              className="mt-4 w-full xl:mt-auto xl:max-w-[293px]"
            >
              <Button
                buttonSize="smallXlNormal"
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
