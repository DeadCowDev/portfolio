import { htmlClass } from "@/utils";
import { FC } from "react";
import { typographyVariants } from "./typography";

type ButtonProps = {
  small?: boolean;
} & React.HTMLProps<HTMLButtonElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ small, className, ...props }) => {
  return (
    <button
      className={htmlClass(
        className ?? "",
        small
          ? typographyVariants.smallTextLMedium
          : typographyVariants.titleLMedium,
        small ? "p-[12px_24px]" : "p-[16px_24px]",
        "rounded-[16px]"
      )}
      {...props}
    />
  );
};
