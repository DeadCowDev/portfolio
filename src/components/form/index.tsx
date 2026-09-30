"use client";
import { i18N } from "@/i18n";
import { useRouter } from "next/navigation";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Typography } from "../typography";
import { PREVIOUS_PAGE_KEY } from "@/constants";

const EMAIL = "members@deadcow.enterprises";

const ContactUs: FC<{ lang: string }> = ({ lang }) => {
  const { t } = i18N(lang);
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);
  const [closeLink, setCloseLink] = useState(`/${lang}`);

  useEffect(() => {
    const prevPage = sessionStorage.getItem(PREVIOUS_PAGE_KEY);
    if (prevPage) {
      setCloseLink(prevPage);
    }
  }, []);

  const dismiss = useCallback(() => {
    router.push(closeLink);
  }, [router, closeLink]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        dismiss();
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") dismiss();
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [dismiss]);

  return (
    <main className="w-full h-[100dvh] flex justify-center items-center p-4 bg-transparent">
      <div
        ref={cardRef}
        className="bg-white p-10 flex flex-col items-center gap-6 max-w-[360px] w-full shadow-[0_8px_40px_rgba(0,0,0,0.15)]"
      >
        <Typography
          variant="titleLBold"
          className="text-grey-1 text-center"
          el="h1"
        >
          {t("contact_title")}
        </Typography>

        <Typography
          variant="mobileLongTextRegular"
          className="text-grey-3 text-center"
        >
          {t("contact_subtitle")}
        </Typography>

        <div className="p-4">
          <QRCodeSVG
            value={`mailto:${EMAIL}`}
            size={160}
            level="M"
          />
        </div>

        <a
          href={`mailto:${EMAIL}`}
          className="text-blue-5 text-sm hover:opacity-70 transition-opacity"
        >
          {EMAIL}
        </a>
      </div>
    </main>
  );
};
export default ContactUs;
