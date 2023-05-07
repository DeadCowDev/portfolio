import { MouseEvent, MouseEventHandler, useEffect, useRef } from "react";

export function useScrollLinkSmooth() {
  const elemRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (!elemRef.current) return;

    const elem = elemRef.current;

    const handler = (e: any) => {
      const target = e.target as HTMLAnchorElement | null;
      const parent = target?.parentElement as HTMLAnchorElement | null;

      const hrefTarget = target?.getAttribute("href");
      const parentHref = parent?.getAttribute("href");
      const href = hrefTarget || parentHref;

      if (!href?.startsWith("#")) return;

      e.preventDefault();

      document.querySelector(href)?.scrollIntoView({
        behavior: "smooth",
      });
    };
    elem.addEventListener("click", handler);
    return () => elem.removeEventListener("click", handler);
  }, [elemRef]);

  return elemRef;
}
