import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import ReviewList from '@/components/reviews/ReviewList';

export const metadata: Metadata = createMetadata({
  title: '회원 후기',
  description:
    '피트니스벨 회원님들의 솔직한 후기를 확인하세요. 네이버, 카카오 등 실제 플랫폼의 생생한 리뷰.',
  path: '/reviews',
});

export default function ReviewsPage() {
  return (
    <main>
      {/* 페이지 배너 */}
      <section className="bg-gradient-to-br from-primary-50 to-pink-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            솔직한 후기
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            피트니스벨과 함께한 회원님들의 생생한 이야기를 들어보세요
          </p>
        </div>
      </section>

      {/* 후기 리스트 */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <ReviewList />
        </div>
      </section>
    </main>
  );
}
