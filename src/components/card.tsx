import { htmlClass } from "@/utils";
import { FC } from "react";

type CardProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const Card: FC<CardProps> = ({ className, ...props }) => {
  return (
    <div
      {...props}
      className={htmlClass(
        "flex flex-col justify-start items-center",
        className ?? "",
        "bg-white rounded-[12px] p-[24px_16px] shadow-card"
      )}
    />
  );
};
