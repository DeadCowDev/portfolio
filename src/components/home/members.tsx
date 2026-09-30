"use client";
import { i18N } from "@/i18n";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "../button";
import { Carousel } from "../carousel";
import { Content } from "../content";
import { Typography } from "../typography";
import bsImage from "/public/images/bs-img.jpg";
import ccImage from "/public/images/cc-img.png";
import pgImage from "/public/images/pg-img.jpg";
const members = [
  {
    name: "Pedro Grácio",
    image: pgImage,
    alt: "home_section_members_pgracio_imageAlt",
    role: "Backend Developer",
    linkedinLink: "https://www.linkedin.com/in/pedro-gr%C3%A1cio-8ab572120",
    description: "home_section_members_pgracio_description",
  },
  {
    name: "The Enigmatic Full Stack Adventurer",
    image: ccImage,
    alt: "home_section_members_ccastaneda_imageAlt",
    role: "Full Stack Developer",
    linkedinLink: "https://www.linkedin.com/company/deadcow-enterprises",
    description: "home_section_members_ccastaneda_description",
  },
  {
    name: "Bruno Serrano",
    image: bsImage,
    alt: "home_section_members_bserrano_imageAlt",
    role: "Managing Director & Project Manager",
    linkedinLink: "https://www.linkedin.com/in/brunojdserrano",
    description: "home_section_members_bserrano_description",
  },
];

export const HomeMembers: FC<{ lang: string }> = ({ lang }) => {
  const { t, locale } = i18N(lang);
  return (
    <Content
      hug
      className="pt-14 pb-4 px-4 bg-grey-4 flex flex-col justify-start items-center gap-10 xl:px-48 xl:relative xl:pb-14 xl:pt-44"
      id="about"
    >
      <Typography variant="titleXlBoldXlHeadlineS" el="h2">
        {t("home_section_members_title")}
      </Typography>
      <Carousel
        className="w-full 2xl:w-[60%]"
        elemCount={members.length}
        bullets
        centered
        renderBullet={function (index, className, onClick) {
          return (
            <div key={index} className={className} onClick={onClick}></div>
          );
        }}
      >
        {members.map((member) => (
          <Member key={member.linkedinLink} member={member} lang={lang} />
        ))}
      </Carousel>

      <Link
        href={`/${locale}/services`}
        className="xl:absolute xl:bottom-10 xl:right-10"
      >
        <Button color="pink" buttonSize="smallXlNormal">
          {t("home_section_members_contactButton")}
        </Button>
      </Link>
    </Content>
  );
};

const Member = ({
  member,
  lang,
}: {
  member: (typeof members)[0];
  lang: string;
}) => {
  const { t } = i18N(lang);
  return (
    <div className="flex px-1 flex-col justify-start items-center gap-4 xl:flex-row xl:gap-20">
      <Image
        src={member.image}
        alt={t(member.alt as any)}
        className="rounded-full mb-2 shrink-0 w-[167px] xl:w-[400px] aspect-square object-cover"
      />
      <div>
        <div className="flex flex-col items-center justify-start shrink-0 xl:items-start">
          <Typography variant="smallTextXlBoldXlTitleLBold">
            {member.name}
          </Typography>
          <Typography variant="smallTextLRegular">{member.role}</Typography>
        </div>

        <Link
          href={member.linkedinLink}
          className="my-4 xl:hidden flex justify-center"
        >
          <Image
            src="/icons/linkedin.svg"
            alt="linkedin"
            width={32}
            height={32}
          />
        </Link>
        <Typography
          variant="mobileLongTextRegularXlMediumTextRegular"
          className="text-center 2xl:max-w-[700px] mt-4 xl:text-left block"
        >
          {t(member.description as any)}
        </Typography>
        <Link href={member.linkedinLink} className="mt-4 hidden xl:block">
          <Image
            src="/icons/linkedin.svg"
            alt="linkedin"
            width={32}
            height={32}
          />
        </Link>
      </div>
    </div>
  );
};
