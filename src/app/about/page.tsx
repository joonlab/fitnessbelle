import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import AnimatedSection from '@/components/ui/AnimatedSection';
import StorySection from '@/components/about/StorySection';
import PhilosophySection from '@/components/about/PhilosophySection';
import OwnerProfile from '@/components/about/OwnerProfile';

export const metadata: Metadata = createMetadata({
  title: '소개',
  description:
    '피트니스벨의 이야기 - 아내를 위해 시작한 여성전용 프리미엄 헬스장. 국가공인 건강운동관리사가 운영하는 체계적인 피트니스.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-pink-500" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <AnimatedSection>
            <p className="text-primary-200 font-semibold text-sm tracking-wide uppercase mb-4">
              ABOUT US
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">피트니스벨을 소개합니다</h1>
            <p className="text-white/80 text-lg">
              아내를 위해 시작한 헬스장, 5년간 1,600명의 변화를 함께한 이야기
            </p>
          </AnimatedSection>
        </div>
      </section>

      <StorySection />
      <PhilosophySection />
      <OwnerProfile />
    </>
  );
}
