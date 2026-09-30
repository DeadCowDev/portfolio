import i18nConfig from "@/i18n/config";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "../../../public/fonts/GFSDidot-Regular.woff2",
  variable: "--font-sans",
});
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
