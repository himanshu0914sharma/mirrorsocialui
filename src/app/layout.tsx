import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({ 
  weight: ["400", "700"],
  variable: '--font-libre-baskerville',
  subsets: ["latin-ext"]
 });

export const metadata: Metadata = {
  title: "Mirror Social",
  description: "See through it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
       <meta charSet="UTF-8"/>
      </head>
      <body className={libreBaskerville.className}>{children}</body>
    </html>
  );
}
