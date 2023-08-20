"use client";
import { usePreventScrollOnFlag } from "@/hooks";
import { i18N } from "@/i18n";
import { htmlClass } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";
import { Button } from "./button";
import { Typography } from "./typography";

const MenuIcon: FC<{
  open: boolean;
  onClick: () => void;
  lang: string;
}> = ({ onClick, open, lang }) => {
  const { t } = i18N(lang);
  return (
    <button
      aria-label={t("header_burger_alt")}
      onClick={() => onClick()}
      className="py-[4px] px-[3px] w-[24px] aspect-square flex items-center relative flex-shrink-0 xl:hidden"
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

export const Header: FC<{
  lightOnDesktop?: boolean;
  cb: string;
  className?: string;
  lang: string;
}> = ({ lightOnDesktop, cb, className, lang }) => {
  const [open, setOpen] = useState(false);
  const { t, locale, locales } = i18N(lang);
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
      href: `/${locale}/contact?cb=${cb}`,
      label: t("header_link_contact"),
    },
  ];

  const desktopLinks = [
    {
      href: `/${locale}#about`,
      label: t("header_link_about"),
    },
    {
      href: `/${locale}/services`,
      label: t("header_services"),
    },
    {
      href: `/${locale}/contact?cb=${cb}`,
      label: t("header_link_contact"),
    },
  ];

  return (
    <div
      className={htmlClass(
        "z-10 h-[60px] bg-grey-1 sticky top-0 flex justify-start items-center px-[16px] gap-4 xl:sticky xl:h-[unset] xl:w-full xl:py-6 xl:px-10 xl:justify-between",
        lightOnDesktop ? "xl:bg-grey-4 xl:shadow-card" : "",
        className ?? ""
      )}
    >
      <MenuIcon
        open={open}
        lang={lang}
        onClick={() => {
          setOpen((o) => !o);
        }}
      />
      <Link href={`/${locale}`}>
        <Typography
          variant="smallTextLBoldXlTitleXlBold"
          className={htmlClass(
            "text-white",
            lightOnDesktop ? "xl:text-grey-1" : ""
          )}
        >
          {t("header_title")}
        </Typography>
      </Link>

      <Link href={`/${locale}/services`} className="ml-auto xl:hidden">
        <Button color="blue" buttonSize="xSmall">
          {t("header_services")}
        </Button>
      </Link>

      <div className="hidden xl:flex justify-start items-center gap-20">
        <div className="flex justify-start items-center gap-6">
          {desktopLinks.map(({ href, label }) => (
            <Link href={href} key={label}>
              <Typography
                variant="mediumTextMedium"
                className={htmlClass(
                  lightOnDesktop ? "text-blue-5" : "text-white",
                  path === href ? "opacity-30" : ""
                )}
              >
                {label}
              </Typography>
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center gap-2">
          {locales.map((l) => (
            <Link href={path.replace(locale, l)} key={l}>
              <Typography
                variant="smallTextLMedium"
                className={htmlClass(
                  "uppercase",
                  lightOnDesktop ? "text-blue-5" : "text-white",
                  l === locale ? "opacity-30" : ""
                )}
              >
                {l}
              </Typography>
            </Link>
          ))}
        </div>
      </div>

      <div
        style={{
          height: open ? "calc(100dvh - 60px)" : "0",
        }}
        className="overflow-hidden absolute bottom-0 bg-grey-1 translate-y-[100%] w-full left-0 transition-[height] ease-[cubic-bezier(0.69,0.01,0.38,1.38)] duration-500 xl:hidden"
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
