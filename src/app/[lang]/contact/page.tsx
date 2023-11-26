import { CurrentPageProvider } from "@/components/current-page.provider";
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

function Contact({ params }: { params: LanguageParams }) {
  return (
    <CurrentPageProvider>
      <ContactUs lang={params.lang} />
    </CurrentPageProvider>
  );
}
export default Contact;
