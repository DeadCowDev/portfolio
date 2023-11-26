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
        <meta
          name="ahrefs-site-verification"
          content="e5c423a42930a9e32b5c3e79cdf31b07bce1c5d1f0d8fb13b18baf8464e6c6aa"
        ></meta>
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
