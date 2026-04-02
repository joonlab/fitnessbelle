import { Leaf, FlaskConical, Heart } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';

const philosophies = [
  {
    icon: Leaf,
    title: '환경이 습관을 만듭니다',
    description:
      '의지만으로는 부족합니다. 피트니스벨은 자연스럽게 운동이 습관이 되는 환경을 설계합니다. 편안한 공간, 체계적인 프로그램, 세심한 관리가 당신의 변화를 이끕니다.',
  },
  {
    icon: FlaskConical,
    title: '과학적 운동 처방',
    description:
      '3D 체형분석, 인바디 측정, 관절 가동범위 평가를 바탕으로 개인에게 최적화된 운동 프로그램을 처방합니다. 데이터 기반의 정확한 관리가 확실한 결과를 만듭니다.',
  },
  {
    icon: Heart,
    title: '함께하는 즐거움',
    description:
      '혼자가 아닌 함께이기에 가능한 변화가 있습니다. 회원 커뮤니티, 그룹 수업, 이벤트를 통해 운동이 즐거운 문화가 되는 공간을 만들어갑니다.',
  },
];

export default function PhilosophySection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading subtitle="PHILOSOPHY" title="우리의 철학" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophies.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
