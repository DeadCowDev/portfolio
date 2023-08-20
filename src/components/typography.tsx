import { htmlClass } from "@/utils";
import { FC, forwardRef } from "react";

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

  //responsive
  titleLBoldXlTitleXlBold:
    "font-public font-bold text-[24px]/[32px] xl:text-[28px]/[32px]",

  mobileLongTextRegularXlMediumTextRegular:
    "font-public font-normal text-[16px]/[32px] xl:text-[20px]/[32px]",

  smallTextLBoldXlTitleXlBold:
    "font-public font-bold text-[16px]/[24px] xl:text-[28px]/[32px]",

  titleXlBoldXlHeadlineS:
    "font-public font-bold text-[28px]/[32px] xl:text-[32px]/[48px]",

  smallTextXlBoldXlTitleLBold:
    "font-public font-bold text-[20px]/[24px] xl:text-[24px]/[32px]",

  titleXlBoldXlHeadlineL:
    "font-public font-bold text-[28px]/[32px] xl:text-[40px]/[48px]",

  mobileLongTextRegularXlLongTextRegular:
    "font-public font-normal text-[16px]/[32px] xl:text-[24px]/[48px]",

  headlineSXlHeadlineXl:
    "font-public font-bold text-[32px]/[48px] xl:text-[56px]/[64px]",
};

export const Typography = forwardRef<
  HTMLElement,
  Omit<
    {
      variant: keyof typeof typographyVariants;
      el?: "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    } & React.HTMLProps<HTMLElement>,
    "ref"
  >
>(({ variant, el, className, ...props }, ref) => {
  const klass = htmlClass(className ?? "", typographyVariants[variant]);
  switch (el) {
    case "h1":
      return <h1 {...props} ref={ref as any} className={klass} />;
    case "h2":
      return <h2 {...props} ref={ref as any} className={klass} />;
    case "h3":
      return <h3 {...props} ref={ref as any} className={klass} />;
    case "h4":
      return <h4 {...props} ref={ref as any} className={klass} />;
    case "h5":
      return <h5 {...props} ref={ref as any} className={klass} />;
    case "h6":
      return <h6 {...props} ref={ref as any} className={klass} />;
    case "span":
    default:
      return <span {...props} ref={ref} className={klass} />;
  }
});

Typography.displayName = "Typography";
