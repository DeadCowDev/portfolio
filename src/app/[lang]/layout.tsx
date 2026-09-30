import i18nConfig from "@/i18n/config";
import { ContactModalProvider } from "@/components/contact-modal/context";
import { ContactModal } from "@/components/contact-modal";

export default function LangLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <ContactModalProvider>
      <div lang={lang}>
        {children}
        <ContactModal lang={lang} />
      </div>
    </ContactModalProvider>
  );
}

export async function generateStaticParams() {
  return i18nConfig.locales.map((lang) => ({ lang }));
}
