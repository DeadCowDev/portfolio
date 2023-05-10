import { TranslationKeys, useI18n } from "@/i18n";
import { FC } from "react";
import { Content } from "../content";
import { Typography } from "../typography";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";
import { htmlClass } from "@/utils";
import { useScrollLinkSmooth } from "@/hooks";

interface ServiceMainSectionProps {
  image: string;
  imageAlt: TranslationKeys;
  title: TranslationKeys;
  subtitle: TranslationKeys;
  button: TranslationKeys;
  link: string;
  gradient: string;
}

export const ServiceMainSection: FC<ServiceMainSectionProps> = ({
  gradient,
  button,
  image,
  imageAlt,
  link,
  subtitle,
  title,
}) => {
  const { t } = useI18n();
  const btnRef = useScrollLinkSmooth();
  return (
    <Content className="bg-grey-1 pt-4 flex flex-col justify-start items-center gap-4">
      <Typography variant="headlineS" className="text-white px-4 text-center">
        {t(title)}
      </Typography>
      <Typography
        variant="mobileLongTextRegular"
        className="text-grey-6 text-center px-4"
      >
        {t(subtitle)}
      </Typography>
      <div className="relative mt-auto p-[68px_16px_24px] flex flex-col justify-start items-center gap-6 isolate w-full">
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
              <path d="M0.347,0.159 C0.541,-0.011,1,0.003,1,0.003 V1 H0 L0.144,0.604 C0.144,0.604,0.229,0.263,0.347,0.159"></path>
            </clipPath>
          </svg>
        </div>
        <Image
          priority
          src={image}
          alt={t(imageAlt)}
          width={237}
          height={207}
          className="ml-auto"
        />
        <Link href={link} className="w-full max-w-[293px]" ref={btnRef} scroll>
          <Button
            color="blue"
            buttonSize="small"
            className="w-full max-w-[293px]"
          >
            {t(button)}
          </Button>
        </Link>
      </div>
    </Content>
  );
};
