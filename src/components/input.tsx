import { htmlClass } from "@/utils";
import { FC } from "react";
import { typographyVariants } from "./typography";

type InputProps = {
  label: string;
} & React.HTMLProps<HTMLInputElement> &
  React.ButtonHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = ({ label, className, id, ...props }) => {
  return (
    <div
      className={htmlClass(
        className ?? "",
        "flex flex-col justify-start items-start gap-1 w-full"
      )}
    >
      <label
        htmlFor={id}
        className={htmlClass(
          "text-grey-3 w-full",
          typographyVariants.inputLabel
        )}
      >
        {label}
      </label>
      <input
        {...props}
        className={htmlClass(
          typographyVariants.inputContent,
          "text-grey-1 px-4 py-2 border-grey-3 border w-full rounded-[4px] bg-transparent"
        )}
        id={id}
      />
    </div>
  );
};
