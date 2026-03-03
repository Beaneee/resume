import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김종빈 - 이력서",
  description: "Frontend Developer 김종빈의 경력기술서",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
