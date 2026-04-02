import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Before & After',
  description: '피트니스벨 회원들의 놀라운 변화를 확인하세요.',
  path: '/results',
});

export default function ResultsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-primary-600">Before &amp; After</h1>
      <p className="mt-4 text-gray-400">페이지 준비 중입니다.</p>
    </main>
  );
}
