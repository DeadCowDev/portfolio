import { htmlClass } from "@/utils";
import { FC } from "react";

type ContentProps = Omit<
  {
    innerRef?: React.Ref<HTMLDivElement>;
    hug?: boolean;
  } & React.HTMLAttributes<HTMLDivElement>,
  "ref"
>;

export const Content: FC<ContentProps> = ({
  innerRef,
  hug,
  className,
  ...props
}) => {
  return (
    <div
      className={htmlClass(
        className ?? "",
        hug ? "" : "min-h-[calc(100dvh-60px)]",
        "scroll-m-[60px]"
      )}
      {...props}
      ref={innerRef}
    ></div>
  );
};
