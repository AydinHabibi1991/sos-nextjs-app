import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeClient from "./ThemeClient";
import Header from "./components/Headers";
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
  title: "SOS Next.js App - Aydin Habibi",
  description: "SOS NEXT PROJECT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        
      </head>
      <body
        className="font-iransans"
      >
        <Header />
        <ThemeClient>{children}</ThemeClient>
      </body>
    </html>
  );
}