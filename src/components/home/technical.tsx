"use client";
import { i18N } from "@/i18n";
import { htmlClass } from "@/utils";
import Image from "next/image";
import { FC, forwardRef, useEffect, useRef, useState } from "react";
import { Carousel } from "../carousel";
import { Content } from "../content";
import { Typography } from "../typography";

type SlideType = {
  text: string;
  img: string;
  imgAlt: string;
  centerImage?: boolean;
  className?: string;
};

const slides: SlideType[] = [
  {
    img: "/icons/react.svg",
    text: "React",
    imgAlt: "React logo",
  },
  {
    img: "/icons/next.png",
    text: "Next.js",
    imgAlt: "Next.js logo",
  },
  {
    img: "/icons/vue.svg",
    text: "Vue.js",
    imgAlt: "Vue.js logo",
  },
  {
    img: "/icons/angular.svg",
    text: "Angular",
    imgAlt: "Angular logo",
  },
  {
    img: "/icons/flutter.svg",
    text: "Flutter",
    imgAlt: "Flutter logo",
  },
  {
    img: "/icons/sso.svg",
    text: "SSO",
    imgAlt: "SSO logo",
  },
  {
    img: "/icons/oauth.svg",
    text: "OAuth",
    imgAlt: "OAuth logo",
  },
  {
    img: "/icons/openid.svg",
    text: "OpenID",
    imgAlt: "OpenId Connect logo",
  },
  {
    img: "/icons/node.svg",
    text: "NodeJs",
    imgAlt: "NodeJS logo",
  },
  {
    img: "/icons/dotnet.svg",
    text: "DotNet",
    imgAlt: "DotNet logo",
  },
  {
    img: "/icons/mongodb.svg",
    text: "MongoDB",
    imgAlt: "MongoDB logo",
  },
  {
    img: "/icons/sql.svg",
    text: "SQL",
    imgAlt: "SQL logo",
  },
  {
    img: "/icons/aws.svg",
    text: "AWS",
    imgAlt: "AWS logo",
    centerImage: true,
  },
  {
    img: "/icons/docker.svg",
    text: "Docker",
    imgAlt: "Docker logo",
    centerImage: true,
  },
  {
    img: "/icons/k8s.svg",
    text: "K8S",
    imgAlt: "Kubernetes logo",
  },
];

const Card = forwardRef<HTMLDivElement, SlideType>(
  ({ img, text, imgAlt, centerImage, className }, ref) => {
    return (
      <div
        ref={ref}
        className={htmlClass(
          "w-[132px] h-[148px] bg-white border-grey-6 rounded-[12px] border-[1px] py-2 px-6 flex flex-col justify-between items-center gap-6",
          className ?? ""
        )}
      >
        <Image
          alt={imgAlt}
          src={img}
          width={85}
          height={85}
          className={centerImage ? "my-auto" : ""}
        />
        <Typography
          variant="smallTextXlMedium"
          className="text-grey-1 text-center"
        >
          {text}
        </Typography>
      </div>
    );
  }
);
Card.displayName = "Card";

export const HomeTechnical: FC<{ lang: string }> = ({ lang }) => {
  const { t } = i18N(lang);
  return (
    <Content
      id="technical"
      hug
      className="pt-10 flex flex-col justify-start items-center gap-14 bg-grey-4 xl:gap-40"
    >
      <div className="mx-4 flex flex-col justify-start items-center gap-4 xl:max-w-4xl">
        <Typography
          variant="titleXlBoldXlHeadlineL"
          className="text-center text-grey-1"
          el="h2"
        >
          {t("home_section_technical_expertise_title")}
        </Typography>
        <Typography
          variant="mobileLongTextRegularXlLongTextRegular"
          className="text-center text-grey-1"
        >
          {t("home_section_technical_expertise_subtitle")}
        </Typography>
      </div>
      <Carousel
        elemCount={slides.length}
        autoPlay
        autoPlayDurationMs={1750}
        className="w-full xl:w-[60%]"
      >
        {slides.map((props, i) => (
          <Card
            {...props}
            key={props.text}
            className={htmlClass(
              "w-[132px_!important]",
              i === 0 ? "" : "",
              i === slides.length - 1 ? "" : ""
            )}
          />
        ))}
      </Carousel>
    </Content>
  );
};
