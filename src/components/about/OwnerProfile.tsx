import { Award } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Badge from '@/components/ui/Badge';

const certifications = [
  '국가공인 건강운동관리사',
  '생활스포츠지도사 2급',
  '스포츠경영관리사',
];

export default function OwnerProfile() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Photo Placeholder */}
            <div className="flex-shrink-0 w-64 h-80 rounded-2xl bg-gradient-to-br from-primary-200 to-primary-400 flex items-center justify-center shadow-xl">
              <div className="text-center text-white">
                <Award className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <p className="font-bold text-lg">정성묵 대표</p>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <p className="text-primary-600 font-semibold text-sm mb-2">FOUNDER & CEO</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">정성묵</h2>
              <p className="text-gray-500 mb-6">국가공인 건강운동관리사 | 피트니스벨 대표</p>

              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  &ldquo;아내가 편안하게 운동할 수 있는 공간을 만들고 싶다&rdquo;는 마음에서 피트니스벨을 시작했습니다.
                  운동을 좋아하지만 남녀공용 헬스장에서 불편함을 느끼는 여성들이 많다는 것을 알았고,
                  그 불편함을 해소할 수 있는 공간을 만들기로 결심했습니다.
                </p>
                <p>
                  국가공인 건강운동관리사로서 과학적 근거에 기반한 운동 처방을 제공하고,
                  5년간 1,600명 이상의 회원님들과 함께하며 쌓은 경험을 바탕으로
                  누구나 건강한 변화를 경험할 수 있는 프로그램을 운영하고 있습니다.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <Badge key={cert} variant="primary">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
