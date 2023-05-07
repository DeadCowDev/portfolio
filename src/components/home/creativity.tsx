import { FC, useEffect, useMemo, useRef, useState } from "react";
import { Content } from "../content";
import { Typography } from "../typography";
import { htmlClass } from "@/utils";
import { TitleWithStack } from "../title-with-stack";
import { useI18n } from "@/i18n";
import { useInView } from "@/hooks";

export const HomeCreativity: FC = () => {
  const { t } = useI18n();
  const [state, setState] = useState({
    titleIndex: -1,
    animate: false,
    switchText: false,
    finished: false,
    showScrollBubble: false,
  });
  const movementStarted = useMemo(() => state.titleIndex >= 0, [state]);

  const setNext = (switchText?: boolean) => {
    setState((s) => ({
      ...s,
      titleIndex: s.titleIndex + 1,
      switchText: switchText ?? s.switchText,
    }));
  };

  useEffect(() => {
    setState((s) => ({ ...s, animate: true }));
  }, []);

  const { inView, ref: containerRef } = useInView();

  useEffect(() => {
    if (!inView) {
      if (state.showScrollBubble) {
        setState((s) => ({ ...s, showScrollBubble: false }));
      }
      return;
    }
    setTimeout(() => {
      setNext();
    }, 500);
  }, [inView]);

  return (
    <Content
      innerRef={containerRef}
      onClick={() => {
        setNext();
      }}
      className={htmlClass(
        "h-24 py-14 px-4 flex flex-col relative transition-all duration-[4.5s] delay-300",
        movementStarted ? "bg-green-2" : "bg-blue-2"
      )}
      id="creative-section"
    >
      <div className="flex flex-col justify-start items-center gap-6">
        <TitleWithStack
          on={state.animate}
          active
          indexSelected={state.titleIndex >= 0}
          onNext={() => {
            setNext();
          }}
          switchText={state.switchText}
        >
          {t("home_section_creativity_title1")}
        </TitleWithStack>

        <TitleWithStack
          on={state.animate}
          active={state.titleIndex >= 1}
          indexSelected={state.titleIndex >= 1}
          onNext={() => {
            setNext(true);
          }}
          switchText={state.switchText}
        >
          {t("home_section_creativity_title2")}
        </TitleWithStack>

        <TitleWithStack
          on={state.animate}
          active={state.titleIndex >= 2}
          indexSelected={state.titleIndex >= 2}
          onNext={() => setState((s) => ({ ...s, finished: true }))}
          switchText={state.switchText}
        >
          {t("home_section_creativity_title3")}
        </TitleWithStack>
      </div>
      <Typography
        variant="mediumTextMedium"
        className={htmlClass(
          "mt-[70px] text-center transition-all duration-1000 text-grey-1",
          state.finished ? "opacity-100" : "opacity-0"
        )}
        onTransitionEnd={() => {
          setState((s) => ({ ...s, showScrollBubble: true }));
        }}
      >
        {t("home_section_creativity_description")}
      </Typography>
      <div className="absolute left-0 bottom-0 w-full z-[1] overflow-y-hidden h-24 flex justify-center items-start">
        <button
          aria-label={t("home_section_creativity_button")}
          onClick={() => {
            document.querySelector("#technical")?.scrollIntoView({
              behavior: "smooth",
            });
            setState((s) => ({ ...s, showScrollBubble: false }));
          }}
          className={htmlClass(
            "w-10 aspect-square rounded-full bg-grey-3 opacity-40 transition-all duration-700 delay-500 ease-[cubic-bezier(0.29,0.21,0.68,1.49)]",
            state.showScrollBubble ? "mt-6" : "mt-44"
          )}
        ></button>
      </div>
    </Content>
  );
};
