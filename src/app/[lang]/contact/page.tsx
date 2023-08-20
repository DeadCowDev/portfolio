import ContactUs from "@/components/form";
import { LanguageParams } from "@/models";
import { getMetadataTitle } from "@/utils";
import { Metadata } from "next";

export function generateMetadata({
  params,
}: {
  params: LanguageParams;
}): Metadata {
  return getMetadataTitle(
    "contact_meta_title",
    "contact_meta_description",
    params.lang
  );
}

function Contact({
  searchParams: { cb },
  params,
}: {
  params: LanguageParams;
  searchParams: { cb?: string };
}) {
  return <ContactUs link={cb || `/${params.lang}`} lang={params.lang} />;
}
export default Contact;
