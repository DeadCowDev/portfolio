import i18nConfig from "@/i18n/config";

export default function LangLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return <div lang={lang}>{children}</div>;
}

export async function generateStaticParams() {
  return i18nConfig.locales.map((lang) => ({ lang }));
}
