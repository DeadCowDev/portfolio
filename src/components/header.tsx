"use client";
import { htmlClass } from "@/utils";
import { FC, useEffect, useState } from "react";
import { Typography } from "./typography";
import { useI18n } from "@/i18n";
import { Button } from "./button";
import { usePreventScrollOnFlag } from "@/hooks";

const MenuIcon: FC<{
  open: boolean;
  onClick: () => void;
}> = ({ onClick, open }) => {
  const { t } = useI18n();
  return (
    <button
      aria-label={t("header_burger_alt")}
      onClick={() => onClick()}
      className="py-[4px] px-[3px] w-[24px] aspect-square flex items-center relative flex-shrink-0"
    >
      <span
        className={htmlClass(
          "absolute right-[3px] top-[4px] w-[18px] h-[2px] bg-white origin-[top_right] transition-all ease-[cubic-bezier(0.69,0.01,0.38,1.38)] duration-300",
          open ? "-rotate-[44deg] right-[6.5px] top-[5px]" : ""
        )}
      ></span>
      <span
        className={htmlClass(
          "absolute top-1/2 -translate-y-1/2 w-[12px] h-[2px] bg-white origin-right transition-all ease-[cubic-bezier(0.69,0.01,0.38,1.38)] duration-300 delay-100",
          open ? "w-[9px] scale-0" : ""
        )}
      ></span>
      <span
        className={htmlClass(
          "absolute right-[3px] bottom-[4px] w-[18px] h-[2px] bg-white origin-[bottom_right] transition-all ease-[cubic-bezier(0.69,0.01,0.38,1.38)] duration-300",
          open ? "rotate-[44deg] right-[6.5px] bottom-[5px]" : ""
        )}
      ></span>
    </button>
  );
};

export const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();
  usePreventScrollOnFlag(open, "lg");

  return (
    <div className="h-[60px] bg-grey-1 sticky top-0 flex justify-start items-center px-[16px] gap-4">
      <MenuIcon
        open={open}
        onClick={() => {
          setOpen((o) => !o);
        }}
      />
      <Typography variant="smallTextLBold" className="text-white">
        {t("header_title")}
      </Typography>
      <Button color="blue" buttonSize="xSmall" className="ml-auto">
        {t("header_services")}
      </Button>
      <div
        className={htmlClass(
          "absolute bottom-0 bg-grey-1 translate-y-[100%] w-full left-0 h-0 transition-[height] ease-[cubic-bezier(0.69,0.01,0.38,1.38)] duration-300 lg:hidden",
          open ? "h-[calc(100vh-60px)]" : ""
        )}
      ></div>
    </div>
  );
};
