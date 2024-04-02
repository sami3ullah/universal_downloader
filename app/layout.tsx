import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const jakarta = Lato({ subsets: ["latin"], weight: ["400", "700", "300"] });

export const metadata: Metadata = {
  title: "Universal downloader",
  description:
    "Universal Downloader is an online TikTok Downloader tool, through which you can easily download TikTok videos with or without watermark and Tiktok music in mp3 format.",
  metadataBase: new URL("https://universal-downloader-6xk2.vercel.app/"),
  openGraph: {
    title: "Universal Downloader",
    description:
      "Universal Downloader is an online TikTok Downloader tool, through which you can easily download TikTok videos with or without watermark and Tiktok music in mp3 format.",
    type: "website",
    url: "https://universal-downloader-6xk2.vercel.app/tiktok",
    images: [
      {
        url: "/universal_downloader.png",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Universal Downloader",
    images: [
      {
        url: "/universal_downloader.png",
      },
    ],
    creator: "samidev_",
    creatorId: "samidev_",
  },
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
