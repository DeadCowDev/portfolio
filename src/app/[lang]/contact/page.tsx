"use client";
import ContactUs from "@/components/form";

function Contact({
  searchParams: { cb },
  params: { lang },
}: {
  params: { lang: string };
  searchParams: { cb?: string };
}) {
  return <ContactUs link={cb || `/${lang}`} />;
}
export default Contact;
