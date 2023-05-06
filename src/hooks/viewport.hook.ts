import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
import { useEffect, useState } from "react";

export type MediaQueries = "2xl" | "xl" | "lg" | "md" | "sm" | undefined;

export function useInMediaQuery(value: MediaQueries) {
  const [sizes] = useState(
    resolveConfig(tailwindConfig).theme?.screens as {
      [key: string]: string;
    }
  );
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    // check size of the screen on resize
    const handleResize = () => {
      const width = window.innerWidth;
      const width2Xl = parseInt(sizes?.["2xl"]!.replace("px", ""));
      const widthXl = parseInt(sizes?.["xl"]!.replace("px", ""));
      const widthLg = parseInt(sizes?.["lg"]!.replace("px", ""));
      const widthMd = parseInt(sizes?.["md"]!.replace("px", ""));
      const widthSm = parseInt(sizes?.["sm"]!.replace("px", ""));

      let curr = "";

      if (width >= width2Xl) curr = "2xl";
      else if (width >= widthXl) curr = "xl";
      else if (width >= widthLg) curr = "lg";
      else if (width >= widthMd) curr = "md";
      else if (width >= widthSm) curr = "sm";

      setActive(curr === value);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [sizes, value]);

  return active;
}
