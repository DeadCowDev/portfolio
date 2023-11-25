import i18nConfig from "@/i18n/config";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

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
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return i18nConfig.locales.map((lang) => ({ lang }));
}
