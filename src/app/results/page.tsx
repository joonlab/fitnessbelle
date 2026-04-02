import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import ResultStats from '@/components/results/ResultStats';
import ResultsGrid from '@/components/results/ResultsGrid';

export const metadata: Metadata = createMetadata({
  title: 'Before & After 변화 사례',
  description:
    '피트니스벨 회원님들의 놀라운 변화를 확인하세요. PT, 원더우먼 패키지 등을 통한 실제 다이어트 성공 사례.',
  path: '/results',
});

export default function ResultsPage() {
  return (
    <main>
      {/* 페이지 배너 */}
      <section className="bg-gradient-to-br from-primary-50 to-pink-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            회원님들의 놀라운 변화
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            체계적인 운동 프로그램과 맞춤 관리로 이루어낸 실제 변화 기록입니다
          </p>
        </div>
      </section>

      {/* 통계 + 결과 그리드 */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <ResultStats />
          <ResultsGrid />
        </div>
      </section>
    </main>
  );
}
