import { Shield, Award, Target } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';

const features = [
  {
    icon: Shield,
    title: '여성전용 공간',
    description: '시선 걱정 없는 편안한 환경에서 오직 나만을 위한 운동에 집중하세요. 쾌적한 시설과 프라이빗한 공간을 제공합니다.',
  },
  {
    icon: Award,
    title: '전문가 운영',
    description: '국가공인 건강운동관리사가 직접 운영합니다. 체계적인 운동 처방과 과학적 프로그램으로 안전한 운동을 보장합니다.',
  },
  {
    icon: Target,
    title: '맞춤 프로그램',
    description: '3D 체형분석, 인바디 측정, 맞춤 운동 처방까지. 3단계 체계적 관리 시스템으로 확실한 변화를 만들어드립니다.',
  },
];

export default function BrandIntro() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading subtitle="FITNESSBELLE" title="Why FitnessBelle?" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.15}>
              <div className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
