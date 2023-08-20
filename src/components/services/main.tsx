import { TranslationKeys, i18N } from "@/i18n";
import { htmlClass } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "../button";
import { Content } from "../content";
import { Typography } from "../typography";
import { ScrollLink } from "../link-with-scroll";

interface ServiceMainSectionProps {
  image: string;
  imageAlt: TranslationKeys;
  title: TranslationKeys;
  subtitle: TranslationKeys;
  button: TranslationKeys;
  link: string;
  gradient: string;
  lang: string;
}

export const ServiceMainSection: FC<ServiceMainSectionProps> = ({
  gradient,
  button,
  image,
  imageAlt,
  link,
  subtitle,
  title,
  lang,
}) => {
  const { t } = i18N(lang);

  return (
    <Content className="bg-grey-1 pt-4 flex flex-col justify-start items-center gap-4 xl:flex-row xl:pt-0 xl:items-stretch">
      <div className="bg-grey-1 pt-4 flex flex-col justify-start items-center gap-4 xl:my-auto xl:flex-[3] xl:items-start xl:pl-20">
        <Typography
          variant="headlineSXlHeadlineXl"
          className="text-white px-4 text-center xl:text-left"
          el="h1"
        >
          {t(title)}
        </Typography>
        <Typography
          variant="mobileLongTextRegularXlLongTextRegular"
          className="text-grey-6 text-center px-4 xl:text-left max-w-3xl"
        >
          {t(subtitle)}
        </Typography>
        <ScrollLink
          href={link}
          className="w-full mt-10 max-w-[293px] hidden ml-40 xl:inline "
          scroll
        >
          <Button
            color="blue"
            buttonSize="normal"
            className="w-full max-w-[293px]"
          >
            {t(button)}
          </Button>
        </ScrollLink>
      </div>
      <div className="relative mt-auto p-[68px_16px_24px] flex flex-col justify-start items-center gap-6 isolate w-full xl:m-0 xl:flex-[2] xl:justify-center">
        <div
          className={htmlClass(
            "absolute top-0 right-0 w-full h-full -z-[1]",
            gradient
          )}
          style={{
            clipPath: "url(#clip-path-service)",
          }}
        >
          <svg>
            <clipPath id="clip-path-service" clipPathUnits="objectBoundingBox">
              <path
                className="xl:hidden"
                d="M0.347,0.159 C0.541,-0.011,1,0.003,1,0.003 V1 H0 L0.144,0.604 C0.144,0.604,0.229,0.263,0.347,0.159"
              ></path>
              <path
                className="max-xl:hidden"
                d="M0.026,1 C0.026,1,0.064,0.969,0.034,0.824 C0.01,0.71,-0.025,0.595,0.033,0.46 C0.079,0.354,0.235,0.22,0.235,0.22 C0.235,0.22,0.406,0.026,0.445,0 C0.445,0,0.535,0.001,0.607,0 H1 V1 H0.026"
              ></path>
            </clipPath>
          </svg>
        </div>
        <Image
          priority
          src={image}
          alt={t(imageAlt)}
          width={237}
          height={207}
          className="ml-auto xl:ml-0 xl:scale-[1.6] 2xl:scale-[2.3]"
        />
        <ScrollLink
          href={link}
          className="w-full max-w-[293px] xl:hidden"
          scroll
        >
          <Button
            color="blue"
            buttonSize="small"
            className="w-full max-w-[293px]"
          >
            {t(button)}
          </Button>
        </ScrollLink>
      </div>
    </Content>
  );
};
