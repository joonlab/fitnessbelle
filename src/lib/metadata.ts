import type { Metadata } from 'next';

const SITE_NAME = '피트니스벨';
const DEFAULT_DESCRIPTION =
  '피트니스벨 - 김포 구래동, 고양 화정 여성전용 프리미엄 헬스장. 1:1 PT, 원더우먼 패키지, 앰플PT 등 다양한 프로그램 운영.';

export function createMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle = title
    ? `${title} | ${SITE_NAME} - 여성전용 헬스장`
    : `${SITE_NAME} - 여성전용 프리미엄 헬스장 | 김포 구래동 · 고양 화정`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: path ? `https://fitnessbelle.co.kr${path}` : 'https://fitnessbelle.co.kr',
      siteName: SITE_NAME,
      locale: 'ko_KR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  };
}
