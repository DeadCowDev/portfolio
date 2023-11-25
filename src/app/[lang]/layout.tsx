import { Inter, Public_Sans } from "next/font/google";
import "./globals.css";
import i18nConfig from "@/i18n/config";

const inter = Public_Sans({ subsets: ["latin"], variable: "--font-sans" });
export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang} className="!scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export async function generateStaticParams() {
  return i18nConfig.locales.map((lang) => ({ lang }));
}
