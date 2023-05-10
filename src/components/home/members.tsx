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

const members = [
  {
    name: "Diogo Viana",
    image:
      "https://media.licdn.com/dms/image/C4D03AQEbKSh8QlRxjw/profile-displayphoto-shrink_400_400/0/1582745236694?e=1689206400&v=beta&t=rVOUOd422kP1UvAEOi9R112AmeQJBYdM20opALgHaGU",
    alt: "home_section_members_dviana_imageAlt",
    role: "Frontend Developer",
    linkedinLink: "https://www.linkedin.com/in/diogo-viana-7a973390",
    description: "home_section_members_dviana_description",
  },
  {
    name: "Pedro Grácio",
    image:
      "https://media.licdn.com/dms/image/D4E35AQGx7M5YKfTtCA/profile-framedphoto-shrink_400_400/0/1656941186124?e=1684173600&v=beta&t=STJWh3Jpe6fcVslX7ZGx6TAIPuXPkPYNnLG6VkDsmv8",
    alt: "home_section_members_pgracio_imageAlt",
    role: "Backend Developer",
    linkedinLink: "https://www.linkedin.com/in/pedro-gr%C3%A1cio-8ab572120",
    description: "home_section_members_pgracio_description",
  },
];

export const HomeMembers: FC = () => {
  const { t, locale } = useI18n();
  return (
    <Content
      hug
      className="pt-14 pb-4 px-4 bg-grey-4 flex flex-col justify-start items-center gap-10"
    >
      <Typography variant="titleXlBold">
        {t("home_section_members_title")}
      </Typography>
      <Swiper
        className="w-full"
        grabCursor
        modules={[Pagination, Navigation, Keyboard, Mousewheel]}
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

      <Link href={`/${locale}/services`}>
        <Button color="pink" buttonSize="small">
          {t("home_section_members_contactButton")}
        </Button>
      </Link>
    </Content>
  );
};

const Member = ({ member }: { member: (typeof members)[0] }) => {
  const { t } = useI18n();
  return (
    <div className="flex flex-col justify-start items-center gap-4">
      <Image
        src={member.image}
        alt={t(member.alt as any)}
        width={167}
        height={167}
        className="rounded-full mb-2 shrink-0"
      />
      <div className="flex flex-col items-center justify-start shrink-0">
        <Typography variant="smallTextXlBold">{member.name}</Typography>
        <Typography variant="smallTextLRegular">{member.role}</Typography>
      </div>

      <Link href={member.linkedinLink}>
        <Image
          src="/icons/linkedin.svg"
          alt="linkedin"
          width={32}
          height={32}
          className=""
        />
      </Link>
      <Typography variant="mobileLongTextRegular" className="text-center">
        {t(member.description as any)}
      </Typography>
    </div>
  );
};
