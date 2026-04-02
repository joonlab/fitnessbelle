import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: '후기',
  description: '피트니스벨 회원들의 생생한 후기를 확인하세요.',
  path: '/reviews',
});

export default function ReviewsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-primary-600">회원 후기</h1>
      <p className="mt-4 text-gray-400">페이지 준비 중입니다.</p>
    </main>
  );
}
