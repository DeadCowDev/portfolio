import { FC } from "react";
import { Content } from "../content";
import { Typography } from "../typography";
import { useI18n } from "@/i18n";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import { Keyboard, Mousewheel, Navigation, Scrollbar } from "swiper";
import { htmlClass } from "@/utils";

const SwiperElement = ({
  img,
  text,
  imgAlt,
}: {
  text: string;
  img: string;
  imgAlt: string;
}) => {
  return (
    <div className="w-[132px] aspect-square bg-white border-grey-6 rounded-[12px] border-[1px] py-2 px-6 flex flex-col justify-start items-center gap-6">
      <Image alt={imgAlt} src={img} width={85} height={85} />
      <Typography
        variant="smallTextXlMedium"
        className="text-grey-1 text-center"
      >
        {text}
      </Typography>
    </div>
  );
};

const slides: { text: string; img: string; imgAlt: string }[] = [
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
];

export const HomeTechnical: FC = () => {
  const { t } = useI18n();
  return (
    <Content
      id="technical"
      hug
      className="pt-44 pb-24 flex flex-col justify-start items-center gap-14 bg-grey-4"
    >
      <div className="mx-4 flex flex-col justify-start items-center gap-4">
        <Typography variant="titleXlBold" className="text-center text-grey-1">
          {t("home_section_technical_expertise_title")}
        </Typography>
        <Typography
          variant="mobileLongTextRegular"
          className="text-center text-grey-1"
        >
          {t("home_section_technical_expertise_subtitle")}
        </Typography>
      </div>
      <Swiper
        spaceBetween={16}
        slidesPerView="auto"
        className="w-full"
        grabCursor
        modules={[Navigation, Mousewheel, Scrollbar, Keyboard]}
        navigation
        mousewheel
        keyboard
        scrollbar
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
