import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

const timeline = [
  {
    year: '2020',
    title: '아내를 위해 만든 헬스장',
    description:
      '운동을 좋아하는 아내가 편안하게 운동할 수 있는 공간을 만들고 싶었습니다. 남성들의 시선에서 자유로운, 여성만을 위한 프리미엄 피트니스를 구래동에 오픈했습니다.',
  },
  {
    year: '2020-2025',
    title: '5년간의 성장',
    description:
      '김포 구래동에서 시작하여 1,600명 이상의 회원과 함께했습니다. 70%가 넘는 높은 재등록율은 피트니스벨의 가치를 보여주는 증거입니다.',
  },
  {
    year: '2025',
    title: '화정점 오픈',
    description:
      '회원님들의 성원에 힘입어 2025년 8월, 고양시 화정에 2호점을 오픈했습니다. 카페형 라운지와 셀프 포토존을 갖춘 한층 업그레이드된 공간입니다.',
  },
  {
    year: '현재',
    title: '더 나은 변화를 향해',
    description:
      '앰플PT, 원더우먼 패키지 등 트렌드에 맞는 새로운 프로그램을 지속적으로 개발하며, 회원님들의 건강한 변화를 위해 끊임없이 노력하고 있습니다.',
  },
];

export default function StorySection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading subtitle="OUR STORY" title="피트니스벨의 이야기" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 md:-translate-x-0.5" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.15}>
                <div className={`relative flex items-start gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary-600 rounded-full border-4 border-primary-100 -translate-x-1.5 md:-translate-x-1.5 mt-1.5 z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}>
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-bold mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
