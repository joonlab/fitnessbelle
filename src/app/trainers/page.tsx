import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: '트레이너',
  description: '피트니스벨의 전문 트레이너를 소개합니다.',
  path: '/trainers',
});

export default function TrainersPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-primary-600">트레이너 소개</h1>
      <p className="mt-4 text-gray-400">페이지 준비 중입니다.</p>
    </main>
  );
}
