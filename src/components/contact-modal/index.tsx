"use client";
import { FC, useEffect, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { i18N } from "@/i18n";
import { Typography } from "../typography";
import { useContactModal } from "./context";

const EMAIL = "members@deadcow.enterprises";

export const ContactModal: FC<{ lang: string }> = ({ lang }) => {
  const { t } = i18N(lang);
  const { open, setOpen } = useContactModal();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, setOpen]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      onMouseDown={(e) => {
        if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      }}
    >
      <div
        ref={cardRef}
        className="bg-white p-10 flex flex-col items-center gap-6 max-w-[360px] w-full shadow-[0_8px_40px_rgba(0,0,0,0.15)] animate-[fadeIn_0.2s_ease-out]"
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
          <QRCodeSVG value={`mailto:${EMAIL}`} size={160} level="M" />
        </div>

        <a
          href={`mailto:${EMAIL}`}
          className="text-blue-5 text-sm hover:opacity-70 transition-opacity"
        >
          {EMAIL}
        </a>
      </div>
    </div>
  );
};
