import type { Metadata } from "next";
import { Lato, Pacifico } from "next/font/google";
import "./globals.css";

const jakarta = Lato({ subsets: ["latin"], weight: ["400", "700", "300"] });
export const logoFont = Pacifico({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Universal downloader",
  description:
    "Downloader Tiktok videos in HD, non-hd, without watermark, non-watermark and in mp3",
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
