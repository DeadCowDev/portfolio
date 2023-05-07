import { htmlClass } from "@/utils";
import { FC } from "react";
import { typographyVariants } from "./typography";

type ButtonSizeType = "normal" | "small" | "xSmall";

type ButtonProps = {
  buttonSize?: ButtonSizeType;
  color: "blue" | "pink";
  innerRef?: React.Ref<HTMLButtonElement>;
} & React.HTMLProps<HTMLButtonElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  buttonSize = "normal",
  color,
  className,
  style,
  ...props
}) => {
  const colorBg: Record<typeof color, string> = {
    blue: "bg-button-blue",
    pink: "bg-button-pink",
  };
  const buttonSizeMap: Record<ButtonSizeType, string[]> = {
    normal: [
      typographyVariants.titleLMedium,
      "h-[64px] rounded-[16px] px-[24px]",
    ],
    small: [
      typographyVariants.smallTextLMedium,
      "h-[48px] rounded-[16px] px-[24px]",
    ],
    xSmall: [
      typographyVariants.xSmallTextLMedium,
      "h-[28px] rounded-[12px] px-[8px]",
    ],
  };
  return (
    <button
      style={{
        ...(style ?? {}),
        backgroundSize: "200%",
      }}
      className={htmlClass(
        className ?? "",
        ...buttonSizeMap[buttonSize],
        "text-white",
        colorBg[color],
        "hover:bg-[-100%] active:bg-[-100%] focus:bg-[-100%] transition-[background-position] duration-[.3s]"
      )}
      {...props}
    />
  );
};
