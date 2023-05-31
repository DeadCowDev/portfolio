"use client";
import { htmlClass } from "@/utils";
import { FC, useEffect, useState } from "react";
import { Typography } from "./typography";
import { useI18n } from "@/i18n";
import { Button } from "./button";
import { useLocale, usePreventScrollOnFlag } from "@/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
          "absolute right-[3px] top-[4px] w-[18px] h-[2px] bg-white origin-[top_right] transition-all ease-[cubic-bezier(0.69,0.01,0.38,1.38)] duration-500",
          open ? "-rotate-[44deg] right-[6.5px] top-[5px]" : ""
        )}
      ></span>
      <span
        className={htmlClass(
          "absolute top-1/2 -translate-y-1/2 w-[12px] h-[2px] bg-white origin-right transition-all ease-[cubic-bezier(0.69,0.01,0.38,1.38)] duration-500 delay-100",
          open ? "w-[9px] scale-0" : ""
        )}
      ></span>
      <span
        className={htmlClass(
          "absolute right-[3px] bottom-[4px] w-[18px] h-[2px] bg-white origin-[bottom_right] transition-all ease-[cubic-bezier(0.69,0.01,0.38,1.38)] duration-500",
          open ? "rotate-[44deg] right-[6.5px] bottom-[5px]" : ""
        )}
      ></span>
    </button>
  );
};

export const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const { t, locale, locales } = useI18n();
  usePreventScrollOnFlag(open, "lg");
  const path = usePathname();

  const links = [
    {
      href: `/${locale}`,
      label: t("header_link_home"),
    },
    {
      href: `/${locale}#about`,
      label: t("header_link_about"),
    },
    {
      href: `/${locale}/about`,
      label: t("header_link_contact"),
    },
  ];

  return (
    <div className="z-10 h-[60px] bg-grey-1 sticky top-0 flex justify-start items-center px-[16px] gap-4">
      <MenuIcon
        open={open}
        onClick={() => {
          setOpen((o) => !o);
        }}
      />
      <Typography variant="smallTextLBold" className="text-white">
        {t("header_title")}
      </Typography>

      <Link href={`/${locale}/services`} className="ml-auto">
        <Button color="blue" buttonSize="xSmall">
          {t("header_services")}
        </Button>
      </Link>

      <div
        style={{
          height: open ? "calc(100dvh - 60px)" : "0",
        }}
        className="overflow-hidden absolute bottom-0 bg-grey-1 translate-y-[100%] w-full left-0 transition-[height] ease-[cubic-bezier(0.69,0.01,0.38,1.38)] duration-500"
      >
        <div className="overflow-y-scroll h-full flex flex-col justify-start items-center gap-10 pt-16 pb-12">
          {links.map(({ href, label }) => (
            <Link
              href={href}
              aria-disabled={!open}
              key={label}
              onClick={() => {
                setOpen(false);
              }}
            >
              <Typography
                variant="titleLMedium"
                className={htmlClass(
                  "text-white",
                  path === href ? "opacity-30" : ""
                )}
              >
                {label}
              </Typography>
            </Link>
          ))}
          <div className="mt-auto flex justify-center items-center gap-6">
            {locales.map((l) => (
              <Link
                href={path.replace(locale, l)}
                aria-disabled={!open}
                key={l}
                onClick={() => {
                  setOpen(false);
                }}
              >
                <Typography
                  variant="longTextMedium"
                  className={htmlClass(
                    "text-white uppercase",
                    l === locale ? "opacity-30" : ""
                  )}
                >
                  {l}
                </Typography>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
