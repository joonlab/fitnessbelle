import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: '문의/예약',
  description: '피트니스벨에 문의하거나 체험 수업을 예약하세요.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-primary-600">문의 / 예약</h1>
      <p className="mt-4 text-gray-400">페이지 준비 중입니다.</p>
    </main>
  );
}
