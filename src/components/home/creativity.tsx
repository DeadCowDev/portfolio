/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useInView } from "@/hooks";
import { i18N } from "@/i18n";
import { htmlClass } from "@/utils";
import { FC, useEffect, useMemo, useState } from "react";
import { Content } from "../content";
import { TitleWithStack } from "../title-with-stack";
import { Typography } from "../typography";
import Link from "next/link";
import { ScrollLink } from "../link-with-scroll";

export const HomeCreativity: FC<{ lang: string }> = ({ lang }) => {
  const { t } = i18N(lang);
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
    if (movementStarted) {
      return;
    }
    setTimeout(() => {
      setNext();
    }, 500);
  }, [inView]);

  return (
    <Content
      innerRef={containerRef}
      className={htmlClass(
        "h-24 py-14 px-4 flex flex-col relative transition-[background-color] duration-[4.5s] delay-300 xl:justify-center xl:items-center",
        movementStarted ? "bg-green-2" : "bg-blue-2"
      )}
      id="creative-section"
    >
      <div className="flex flex-col justify-start items-center gap-6 xl:flex-row xl:justify-center">
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

        <div
          className={htmlClass(
            "w-7 aspect-square rounded-full bg-grey-3 transition-all duration-700 delay-500 hidden xl:block",
            state.finished ? "opacity-40" : "opacity-0"
          )}
        ></div>

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

        <div
          className={htmlClass(
            "w-7 aspect-square rounded-full bg-grey-3 transition-all duration-700 delay-500 hidden xl:block",
            state.finished ? "opacity-40" : "opacity-0"
          )}
        ></div>

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
          "mt-[70px] text-center transition-all duration-1000 text-grey-1 xl:max-w-3xl xl:mt-32",
          state.finished ? "opacity-100" : "opacity-0"
        )}
        onTransitionEnd={() => {
          setState((s) => ({ ...s, showScrollBubble: true }));
        }}
      >
        {t("home_section_creativity_description")}
      </Typography>
      <div className="absolute left-0 bottom-0 w-full z-[1] overflow-y-hidden h-24 flex justify-center items-start">
        <ScrollLink
          href="#technical"
          aria-label={t("home_section_creativity_button")}
          onClick={() => {
            setState((s) => ({ ...s, showScrollBubble: false }));
          }}
          className={htmlClass(
            "w-10 aspect-square rounded-full bg-grey-3 opacity-40 transition-all duration-700 delay-500 ease-[cubic-bezier(0.29,0.21,0.68,1.49)]",
            state.showScrollBubble ? "mt-6" : "mt-44"
          )}
        ></ScrollLink>
      </div>
    </Content>
  );
};
