import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: '소개',
  description: '피트니스벨을 소개합니다. 여성만을 위한 프리미엄 피트니스 공간.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-primary-600">피트니스벨 소개</h1>
      <p className="mt-4 text-gray-400">페이지 준비 중입니다.</p>
    </main>
  );
}
