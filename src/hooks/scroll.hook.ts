import { useEffect } from "react";
import { MediaQueries, useInMediaQuery } from "./viewport.hook";

export function usePreventScrollOnFlag(
  flag: boolean,
  deactivateSize?: MediaQueries
) {
  const inSize = useInMediaQuery(deactivateSize);
  useEffect(() => {
    if (flag && !inSize) {
      const x = window.scrollX;
      const y = window.scrollY;
      window.onscroll = function () {
        window.scrollTo(x, y);
      };
    } else {
      window.onscroll = function () {};
    }
  }, [flag, inSize]);
}
