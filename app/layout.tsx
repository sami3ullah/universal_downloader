import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const jakarta = Lato({ subsets: ["latin"], weight: ["400", "700", "300"] });

export const metadata: Metadata = {
  title: "Universal downloader",
  description:
    "Universal Downloader is an online TikTok Downloader tool, through which you can easily download TikTok videos with or without watermark and Tiktok music in mp3 format.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={jakarta.className}>{children}</body>
    </html>
  );
}
