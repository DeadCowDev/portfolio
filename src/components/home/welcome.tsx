"use client";
import { FC } from "react";
import { Content } from "../content";
import { Typography } from "../typography";
import { useI18n } from "@/i18n";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";
import { useScrollLinkSmooth } from "@/hooks";

export const HomeWelcome: FC = () => {
  const { t } = useI18n();
  const btnRef = useScrollLinkSmooth();
  return (
    <Content className="flex flex-col">
      <div className="p-4 flex flex-col justify-start items-center gap-4">
        <Typography variant="headlineS" className="text-blue-1 text-center">
          {t("home_section_welcome_title")}
        </Typography>
        <Typography
          variant="mobileLongTextRegular"
          className="text-grey-2 text-center"
        >
          {t("home_section_welcome_subtitle")}
        </Typography>
      </div>
      <div className="relative mt-auto p-[68px_16px_24px] flex flex-col justify-start items-center gap-6">
        <div
          className="absolute top-0 right-0 w-full h-full bg-gradient-1 -z-[1]"
          style={{
            clipPath: "url(#clip-path-home)",
          }}
        >
          <svg>
            <clipPath id="clip-path-home" clipPathUnits="objectBoundingBox">
              <path d="M0.347,0.159 C0.541,-0.011,1,0.003,1,0.003 V1 H0 L0.144,0.604 C0.144,0.604,0.229,0.263,0.347,0.159"></path>
            </clipPath>
          </svg>
        </div>
        <Image
          priority
          src="/images/home-page.svg"
          alt={t("home_section_welcome_image_alt")}
          width={315}
          height={207}
        />
        <Link href="#creative-section" className="w-full" ref={btnRef} scroll>
          <Button color="blue" buttonSize="small" className="w-full">
            {t("home_section_welcome_button")}
          </Button>
        </Link>
      </div>
    </Content>
  );
};
