import { htmlClass } from "@/utils";
import { FC } from "react";

export const typographyVariants = {
  headlineXl: "font-public font-bold text-[56px]/[64px]",
  headlineL: "font-public font-bold text-[40px]/[48px]",
  headlineS: "font-public font-bold text-[32px]/[48px]",

  longTextBold: "font-public font-bold text-[24px]/[48px]",
  longTextMedium: "font-public font-medium text-[24px]/[48px]",
  longTextRegular: "font-public font-normal text-[24px]/[48px]",

  titleXlBold: "font-public font-bold text-[28px]/[32px]",
  titleLBold: "font-public font-bold text-[24px]/[32px]",
  titleLMedium: "font-public font-medium text-[24px]/[32px]",
  titleLRegular: "font-public font-normal text-[24px]/[32px]",

  mediumTextBold: "font-public font-bold text-[20px]/[32px]",
  mediumTextMedium: "font-public font-medium text-[20px]/[32px]",
  mediumTextRegular: "font-public font-normal text-[20px]/[32px]",

  smallTextXlBold: "font-public font-bold text-[20px]/[24px]",
  smallTextXlMedium: "font-public font-medium text-[20px]/[24px]",
  smallTextXlRegular: "font-public font-normal text-[20px]/[24px]",

  smallTextLBold: "font-public font-bold text-[16px]/[24px]",
  smallTextLMedium: "font-public font-medium text-[16px]/[24px]",
  smallTextLRegular: "font-public font-normal text-[16px]/[24px]",

  xSmallTextLMedium: "font-public font-medium text-[14px]/[24px]",

  inputLabel: "font-public font-normal text-[14px]/[22px]",

  inputContent: "font-public font-medium text-[16px]/[24px]",

  mobileLongTextBold: "font-public font-bold text-[16px]/[32px]",
  mobileLongTextMedium: "font-public font-medium text-[16px]/[32px]",
  mobileLongTextRegular: "font-public font-normal text-[16px]/[32px]",
};

export const Typography: FC<
  Omit<
    {
      variant: keyof typeof typographyVariants;
      innerRef?: React.Ref<HTMLElement>;
    } & React.HTMLProps<HTMLSpanElement>,
    "ref"
  >
> = ({ variant, innerRef, className, ...props }) => {
  return (
    <span
      {...props}
      ref={innerRef}
      className={htmlClass(className ?? "", typographyVariants[variant])}
    />
  );
};
