import { i18N } from "@/i18n";
import Image from "next/image";
import { FC } from "react";
import { Content } from "../content";
import { Typography } from "../typography";

const projects = [
  {
    name: "home_section_our_work_siesta_name",
    description: "home_section_our_work_siesta_description",
    image: "/images/siesta-campers-preview.png",
    url: "https://siestacampers.com",
  },
  {
    name: "home_section_our_work_tourmanager_name",
    description: "home_section_our_work_tourmanager_description",
    image: "/images/tourmanager-preview.png",
    url: "https://tourmanager.pro",
  },
] as const;

export const HomeOurWork: FC<{ lang: string }> = ({ lang }) => {
  const { t } = i18N(lang);
  return (
    <Content className="pt-14 pb-14 px-4 bg-white flex flex-col justify-start items-center gap-10 xl:px-48">
      <Typography variant="titleXlBoldXlHeadlineS" el="h2">
        {t("home_section_our_work_title")}
      </Typography>
      <Typography
        variant="mobileLongTextRegularXlMediumTextRegular"
        className="text-grey-3 text-center max-w-2xl"
      >
        {t("home_section_our_work_description")}
      </Typography>
      <div className="flex flex-col gap-6 w-full xl:flex-row xl:justify-center xl:gap-12">
        {projects.map((project) => (
          <a
            key={project.url}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 max-w-[500px] mx-auto bg-white rounded-[16px] overflow-hidden shadow-card hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-full h-[200px] xl:h-[260px] overflow-hidden">
              <Image
                src={project.image}
                alt={t(project.name)}
                width={1830}
                height={980}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <Typography
                variant="titleLBoldXlTitleXlBold"
                className="text-grey-1 mb-3"
                el="h3"
              >
                {t(project.name)}
              </Typography>
              <Typography
                variant="mobileLongTextRegularXlMediumTextRegular"
                className="text-grey-3"
              >
                {t(project.description)}
              </Typography>
              <span className="inline-block mt-4 text-sm font-medium text-blue-1 group-hover:underline">
                {project.url.replace("https://", "")} →
              </span>
            </div>
          </a>
        ))}
      </div>
    </Content>
  );
};
