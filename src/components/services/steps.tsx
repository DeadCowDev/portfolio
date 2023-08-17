import { FC } from "react";
import { Content } from "../content";
import { Button } from "../button";
import { TranslationKeys, useI18n } from "@/i18n";
import { Typography } from "../typography";
import { Card } from "../card";
import Image from "next/image";
import { htmlClass } from "@/utils";

const Connector: FC<{ direction: "left" | "right"; color: string }> = ({
  color,
  direction,
}) => {
  switch (direction) {
    case "left":
      return (
        <div className="relative">
          <div
            className={htmlClass(
              "absolute w-[calc(100%-24px)] h-[calc(50%+48px)] top-1/2 right-0 border-t-4 border-l-4 rounded-tl-3xl border-dashed",
              color
            )}
          ></div>
        </div>
      );
    case "right":
      return (
        <div className="relative">
          <div
            className={htmlClass(
              "absolute w-[calc(100%-24px)] h-[calc(50%+48px)] top-1/2 left-0 border-t-4 border-r-4 rounded-tr-3xl border-dashed",
              color
            )}
          ></div>
        </div>
      );
  }
};

export const ServicesSteps: FC<{
  steps: {
    title: TranslationKeys;
    subtitle: TranslationKeys;
    connectorBorderClass: string;
  }[];
  title: TranslationKeys;
  subtitle: TranslationKeys;
  footer: TranslationKeys;
  button: TranslationKeys;
  lang: string;
}> = ({ button, footer, steps, subtitle, title, lang }) => {
  const { t } = useI18n();
  return (
    <Content
      className="bg-grey-4 flex flex-col items-stretch pt-10 px-4 pb-8 gap-6"
      id="steps-section"
    >
      <Typography variant="titleXlBold" className="text-center text-grey-1">
        {t(title)}
      </Typography>
      <Typography
        variant="mediumTextRegular"
        className="text-center text-grey-1 xl:max-w-2xl xl:mx-auto"
      >
        {t(subtitle)}
      </Typography>
      <div className="flex flex-col gap-12 items-start mt-4 mb-8 xl:max-w-[min(60%,1368px)] xl:w-full xl:mx-auto">
        {steps.map((step, i) => (
          <div
            className={htmlClass(
              "grid w-full",
              i % 2 === 0 ? "grid-cols-[255px,1fr]" : "grid-cols-[1fr,255px]"
            )}
            key={i}
          >
            {i % 2 !== 0 && i !== steps.length - 1 && (
              <Connector color={step.connectorBorderClass} direction="left" />
            )}
            <Card className={htmlClass("gap-4 max-w-[255px]")}>
              <Image
                src={`/icons/numbers/${i + 1}.svg`}
                alt={t(step.title)}
                width={63}
                height={63}
              />
              <Typography
                variant="smallTextXlBold"
                className="text-grey-1 text-center"
              >
                {t(step.title)}
              </Typography>
              <Typography
                variant="inputContent"
                className="text-grey-1 text-center"
              >
                {t(step.subtitle)}
              </Typography>
            </Card>
            {i % 2 === 0 && i !== steps.length - 1 && (
              <Connector color={step.connectorBorderClass} direction="right" />
            )}
          </div>
        ))}
      </div>
      <Typography variant="titleXlBold" className="text-center text-grey-1">
        {t(footer)}
      </Typography>
      <Button
        color="blue"
        buttonSize="small"
        className="max-w-[255px] w-full mx-auto xl:mt-16"
        href={`/${lang}/contact`}
      >
        {t(button)}
      </Button>
    </Content>
  );
};
