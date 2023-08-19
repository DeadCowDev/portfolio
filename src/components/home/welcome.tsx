"use client";
import { FC } from "react";
import { Content } from "../content";
import { Typography } from "../typography";
import { useI18n } from "@/i18n";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";
import { useInMediaQuery, useScrollLinkSmooth } from "@/hooks";

export const HomeWelcome: FC = () => {
  const { t } = useI18n();
  const btnRef = useScrollLinkSmooth();
  const btnRefDesktop = useScrollLinkSmooth();

  const isXl = useInMediaQuery("xl");
  return (
    <Content className="flex flex-col  xl:flex-row xl:pt-0 xl:items-stretch">
      <div className="p-4 flex flex-col justify-start items-center gap-4 xl:my-auto xl:flex-[3] xl:items-start xl:pl-20">
        <Typography
          variant={isXl ? "headlineXl" : "headlineS"}
          className="text-blue-1 text-center xl:text-left max-w-3xl"
        >
          {t("home_section_welcome_title")}
        </Typography>
        <Typography
          variant={isXl ? "longTextRegular" : "mobileLongTextRegular"}
          className="text-grey-2 text-center xl:text-left max-w-3xl"
        >
          {t("home_section_welcome_subtitle")}
        </Typography>

        <Link
          href="#creative-section"
          className="w-[293px] hidden ml-40 xl:block"
          ref={btnRefDesktop}
          scroll
        >
          <Button color="blue" buttonSize="normal" className="w-full">
            {t("home_section_welcome_button")}
          </Button>
        </Link>
      </div>
      <div className="relative mt-auto p-[68px_16px_24px] flex flex-col justify-start items-center gap-6 xl:m-0 xl:flex-[2] xl:justify-center">
        <div
          className="absolute top-0 right-0 w-full h-full bg-gradient-1 -z-[1]"
          style={{
            clipPath: "url(#clip-path-home)",
          }}
        >
          <svg>
            <clipPath id="clip-path-home" clipPathUnits="objectBoundingBox">
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
          src="/images/home-page.svg"
          alt={t("home_section_welcome_image_alt")}
          width={315}
          height={207}
          className=" xl:scale-[1.6] 2xl:scale-[2.3] xl:mr-10 xl:mb-28"
        />
        <Link
          href="#creative-section"
          className="w-full xl:hidden"
          ref={btnRef}
          scroll
        >
          <Button color="blue" buttonSize="small" className="w-full">
            {t("home_section_welcome_button")}
          </Button>
        </Link>
      </div>
    </Content>
  );
};
