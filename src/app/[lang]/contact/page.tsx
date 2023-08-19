"use client";
import ContactUs from "@/components/form";
import { useI18n } from "@/i18n";

function Contact({
  searchParams: { cb },
  params: { lang },
}: {
  params: { lang: string };
  searchParams: { cb?: string };
}) {
  const { t } = useI18n();
  return (
    <>
      <head>
        <title>{t("contact_meta_title")}</title>
        <meta name="description" content={t("contact_meta_description")}></meta>
      </head>
      <ContactUs link={cb || `/${lang}`} />
    </>
  );
}
export default Contact;
