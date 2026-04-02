import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '피트니스벨 - 여성전용 프리미엄 헬스장 | 김포 구래동 · 고양 화정',
  description:
    '피트니스벨 - 김포 구래동, 고양 화정 여성전용 프리미엄 헬스장. 1:1 PT, 원더우먼 패키지, 앰플PT 등 다양한 프로그램 운영.',
  keywords: [
    '여성전용 헬스장',
    '김포 헬스장',
    '구래동 헬스장',
    '화정 헬스장',
    '여자 헬스장',
    '피트니스벨',
    '여성 PT',
    '다이어트',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
