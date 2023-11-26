"use client";

import { CURRENT_PAGE_KEY, PREVIOUS_PAGE_KEY } from "@/constants";
import { FC, useEffect } from "react";

interface CurrentPageProviderProps {
  children: React.ReactNode;
}

export const CurrentPageProvider: FC<CurrentPageProviderProps> = ({
  children,
}) => {
  useEffect(() => {
    const path = window.location.pathname;
    setTimeout(() => {
      sessionStorage.setItem(CURRENT_PAGE_KEY, path);
    }, 500);

    return () => {
      sessionStorage.setItem(PREVIOUS_PAGE_KEY, path);
    };
  }, []);

  return <>{children}</>;
};
