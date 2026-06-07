import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "途优校园影像 | 用镜头珍藏校园时光",
  description:
    "专注校园影像服务，为中小学提供高品质活动拍摄、宣传片制作、毕业相册及毕业微电影服务。",
  keywords: ["校园影像", "毕业相册", "毕业微电影", "活动拍摄", "宣传片", "途优"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
