import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeClient from "./ThemeClient";
import { I18nProvider } from "../I18nProvider";
import Header from "./components/Headers";
import { cookies } from "next/headers";
import { Toolbar } from "@mui/material";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "بیمه کمک رسان ایرانیان sos",
  description: "SOS NEXT PROJECT",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies(); 
  const language = cookieStore.get("language")?.value || "en";
  const isRtl = language === "fa";

  return (
    <html lang={language} dir={isRtl ? "rtl" : "ltr"}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <I18nProvider>
          <ThemeClient>
            <Header />
           
            <Toolbar />
            {children}
          </ThemeClient>
        </I18nProvider>
      </body>
    </html>
  );
}