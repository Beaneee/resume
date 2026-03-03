import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://beaneee.github.io/resume";

export const metadata: Metadata = {
  title: "김종빈 이력서 | Frontend Developer",
  description:
    "4년차 프론트엔드 개발자 김종빈의 이력서입니다. React, TypeScript, Next.js 기반 서비스 개발 및 운영 경험을 보유하고 있습니다.",
  keywords: [
    "김종빈",
    "김종빈 이력서",
    "프론트엔드 개발자",
    "Frontend Developer",
    "React",
    "TypeScript",
    "Next.js",
    "이력서",
    "포트폴리오",
  ],
  authors: [{ name: "김종빈" }],
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "김종빈 이력서 | Frontend Developer",
    description:
      "4년차 프론트엔드 개발자 김종빈의 이력서입니다. React, TypeScript, Next.js 기반 서비스 개발 및 운영 경험을 보유하고 있습니다.",
    url: BASE_URL,
    siteName: "김종빈 이력서",
    locale: "ko_KR",
    type: "profile",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "김종빈",
  url: "https://beaneee.github.io/resume",
  jobTitle: "Frontend Developer",
  description:
    "4년차 프론트엔드 개발자로 React 기반 서비스 개발 및 운영 경험 보유",
  sameAs: ["https://github.com/Beaneee"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
