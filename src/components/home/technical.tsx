"use client";
import { i18N } from "@/i18n";
import { htmlClass } from "@/utils";
import Image from "next/image";
import { FC } from "react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Content } from "../content";
import { Typography } from "../typography";

type SlideType = {
  text: string;
  img: string;
  imgAlt: string;
  centerImage?: boolean;
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

const SwiperElement = ({ img, text, imgAlt, centerImage }: SlideType) => {
  return (
    <div className="w-[132px] h-[148px] bg-white border-grey-6 rounded-[12px] border-[1px] py-2 px-6 flex flex-col justify-between items-center gap-6">
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
};

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
      <Swiper
        spaceBetween={16}
        slidesPerView="auto"
        className="w-full xl:w-[60%]"
        grabCursor
        modules={[Navigation, Keyboard, Autoplay]}
        navigation
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        keyboard={{
          onlyInViewport: true,
        }}
      >
        {slides.map((props, i) => (
          <SwiperSlide
            key={props.text}
            className={htmlClass(
              "w-[132px_!important]",
              i === 0 ? "ml-4" : "",
              i === slides.length - 1 ? "mr-[66px]" : ""
            )}
          >
            <SwiperElement {...props} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Content>
  );
};
