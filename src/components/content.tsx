import { htmlClass } from "@/utils";
import { FC } from "react";

type ContentProps = Omit<
  {
    innerRef?: React.Ref<HTMLDivElement>;
  } & React.HTMLAttributes<HTMLDivElement>,
  "ref"
>;

export const Content: FC<ContentProps> = ({
  innerRef,
  className,
  ...props
}) => {
  return (
    <div
      className={htmlClass(
        className ?? "",
        "min-h-[calc(100dvh-60px)] scroll-m-[60px]"
      )}
      {...props}
      ref={innerRef}
    ></div>
  );
};
