import { useI18n } from "@/i18n";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Content } from "../content";
import { Typography } from "../typography";

import "swiper/css/pagination";
import { Button } from "../button";
import { useInMediaQuery } from "@/hooks";

const members = [
  {
    name: "Diogo Viana",
    image: "/images/dv-img.jpg",
    alt: "home_section_members_dviana_imageAlt",
    role: "Frontend Developer",
    linkedinLink: "https://www.linkedin.com/in/diogo-viana-7a973390",
    description: "home_section_members_dviana_description",
  },
  {
    name: "Pedro Grácio",
    image: "/images/pg-img.jpg",
    alt: "home_section_members_pgracio_imageAlt",
    role: "Backend Developer",
    linkedinLink: "https://www.linkedin.com/in/pedro-gr%C3%A1cio-8ab572120",
    description: "home_section_members_pgracio_description",
  },
];

export const HomeMembers: FC = () => {
  const { t, locale } = useI18n();

  const isXl = useInMediaQuery("xl");
  return (
    <Content
      hug
      className="pt-14 pb-4 px-4 bg-grey-4 flex flex-col justify-start items-center gap-10 xl:items-start xl:px-48 xl:relative xl:pb-14 xl:pt-44"
      id="about"
    >
      <Typography variant={isXl ? "headlineS" : "titleXlBold"}>
        {t("home_section_members_title")}
      </Typography>
      <Swiper
        className="w-full"
        grabCursor
        modules={[Pagination, Navigation, Keyboard]}
        mousewheel
        keyboard
        centeredSlides
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<div class="${className}"></div>`;
          },
        }}
      >
        {members.map((member) => (
          <SwiperSlide key={member.linkedinLink}>
            <Member member={member} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Link
        href={`/${locale}/services`}
        className="xl:absolute xl:bottom-10 xl:right-10"
      >
        <Button color="pink" buttonSize={isXl ? "normal" : "small"}>
          {t("home_section_members_contactButton")}
        </Button>
      </Link>
    </Content>
  );
};

const Member = ({ member }: { member: (typeof members)[0] }) => {
  const { t } = useI18n();
  const isXl = useInMediaQuery("xl");
  return (
    <div className="flex flex-col justify-start items-center gap-4 xl:flex-row xl:gap-20">
      <Image
        src={member.image}
        alt={t(member.alt as any)}
        width={isXl ? 400 : 167}
        height={isXl ? 400 : 167}
        className="rounded-full mb-2 shrink-0"
      />
      <div>
        <div className="flex flex-col items-center justify-start shrink-0 xl:items-start">
          <Typography variant={isXl ? "titleLBold" : "smallTextXlBold"}>
            {member.name}
          </Typography>
          <Typography variant="smallTextLRegular">{member.role}</Typography>
        </div>

        <Link href={member.linkedinLink} className="mt-4 xl:hidden">
          <Image
            src="/icons/linkedin.svg"
            alt="linkedin"
            width={32}
            height={32}
            className=""
          />
        </Link>
        <Typography
          variant={isXl ? "mediumTextRegular" : "mobileLongTextRegular"}
          className="text-center 2xl:w-[700px] xl:block mt-4 xl:text-left"
        >
          {t(member.description as any)}
        </Typography>
        <Link href={member.linkedinLink} className="mt-4 hidden xl:block">
          <Image
            src="/icons/linkedin.svg"
            alt="linkedin"
            width={32}
            height={32}
            className=""
          />
        </Link>
      </div>
    </div>
  );
};
