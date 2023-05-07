import { FC, useRef } from "react";
import { Typography } from "./typography";
import { htmlClass } from "@/utils";

interface TitleWithStackProps {
  on: boolean;
  active: boolean;
  indexSelected: boolean;
  switchText: boolean;
  onNext: () => void;
  children: React.ReactNode;
}

export const TitleWithStack: FC<TitleWithStackProps> = ({
  on,
  active,
  children,
  indexSelected,
  switchText,
  onNext,
}) => {
  const textRef = useRef<HTMLElement>(null);
  return (
    <>
      <Typography
        variant="headlineL"
        className={htmlClass("text-center transition-all duration-300")}
        style={{ visibility: "hidden" }}
        innerRef={textRef}
      >
        <span
          className={htmlClass(
            "transition-all duration-1000",
            switchText ? "text-grey-1" : "text-white"
          )}
        >
          {children}
        </span>
      </Typography>
      {on && (
        <Typography
          style={{
            top: indexSelected ? textRef.current?.offsetTop : "50%",
            left: indexSelected
              ? textRef?.current?.getBoundingClientRect().left
              : "50%",
            transform: indexSelected ? "none" : "translate(-50%, -50%)",
          }}
          variant="headlineL"
          className="text-center absolute transition-all duration-1000 delay-500 w-[max-content] max-w-[calc(100vw-32px)]"
          onTransitionEnd={(e) => {
            textRef.current!.style.visibility = "visible";
            const target = e.target as HTMLElement;
            target.parentElement?.removeChild(target);
            onNext();
          }}
        >
          {active && (
            <span
              className={htmlClass(
                "transition-all duration-1000",
                switchText ? "text-grey-1" : "text-white"
              )}
            >
              {children}
            </span>
          )}
        </Typography>
      )}
    </>
  );
};
