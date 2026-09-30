import localFont from "next/font/local";
import "./[lang]/globals.css";

const inter = localFont({
  src: "../../public/fonts/GFSDidot-Regular.woff2",
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="!scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
