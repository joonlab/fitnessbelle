import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { branchList } from '@/data/branches';
import ContactCard from '@/components/contact/ContactCard';
import ReservationGuide from '@/components/contact/ReservationGuide';
import ContactFAQ from '@/components/contact/ContactFAQ';

export const metadata: Metadata = createMetadata({
  title: '문의 및 예약',
  description:
    '피트니스벨 구래동 본점, 화정점 문의 및 예약. 무료 체험 상담, 네이버 예약, 카카오톡 채팅으로 편하게 연락주세요.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <main>
      {/* 페이지 배너 */}
      <section className="bg-gradient-to-br from-primary-50 to-pink-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            문의 및 예약
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            편하게 연락주세요. 친절하게 안내해드리겠습니다
          </p>
        </div>
      </section>

      {/* 지점별 연락처 */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {branchList.map((branch) => (
              <ContactCard key={branch.slug} branch={branch} />
            ))}
          </div>
        </div>
      </section>

      {/* 예약 안내 */}
      <ReservationGuide />

      {/* FAQ */}
      <ContactFAQ />
    </main>
  );
}
