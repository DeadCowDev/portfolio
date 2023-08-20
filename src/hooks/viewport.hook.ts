/* eslint-disable react-hooks/exhaustive-deps */
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
import { useEffect, useRef, useState } from "react";

export type MediaQueries = "2xl" | "xl" | "lg" | "md" | "sm" | undefined;

export function useInMediaQuery(value: MediaQueries) {
  const [sizes] = useState(
    resolveConfig(tailwindConfig).theme?.screens as {
      [key: string]: string;
    }
  );
  const [active, setActive] = useState<boolean>(false);

  const handleSizeChange = () => {
    const width = window.innerWidth;
    const width2Xl = parseInt(sizes?.["2xl"]!.replace("px", ""));
    const widthXl = parseInt(sizes?.["xl"]!.replace("px", ""));
    const widthLg = parseInt(sizes?.["lg"]!.replace("px", ""));
    const widthMd = parseInt(sizes?.["md"]!.replace("px", ""));
    const widthSm = parseInt(sizes?.["sm"]!.replace("px", ""));

    let active = [];

    if (width >= width2Xl) active.push("2xl");
    if (width >= widthXl) active.push("xl");
    if (width >= widthLg) active.push("lg");
    if (width >= widthMd) active.push("md");
    if (width >= widthSm) active.push("sm");

    setActive(active.includes(value ?? ""));
  };

  useEffect(() => {
    // check size of the screen on resize
    const handleResize = () => {
      handleSizeChange();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [sizes, value]);

  useEffect(() => {
    handleSizeChange();
  }, []);

  return active;
}

export function useInView() {
  const elem = useRef<HTMLDivElement>(null);

  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (elem.current) {
        const rect = elem.current.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = rect.bottom;

        const isVisible = elemTop < window.innerHeight && elemBottom >= 0;

        setInView(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { inView, ref: elem };
}
