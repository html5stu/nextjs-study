import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "紫爵酒庄 · 红酒品鉴馆",
  description:
    "紫爵酒庄红酒品鉴馆 —— 精选全球优质产区红葡萄酒，从葡萄园到酒杯，带您领略每一滴红酒的优雅与故事。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#1a0b2e] text-[#f3ecff]">
        {children}
      </body>
    </html>
  );
}
