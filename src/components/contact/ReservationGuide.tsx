import { MessageSquare, Users, Dumbbell, ChevronRight } from 'lucide-react';

const STEPS = [
  {
    icon: MessageSquare,
    title: '상담 예약',
    desc: '네이버 예약 또는 카카오톡으로 상담을 예약하세요',
  },
  {
    icon: Users,
    title: '무료 체험 및 상담',
    desc: '방문하여 시설 둘러보기와 무료 상담을 받으세요',
  },
  {
    icon: Dumbbell,
    title: '프로그램 시작',
    desc: '나에게 맞는 프로그램을 선택하고 운동을 시작하세요',
  },
];

export default function ReservationGuide() {
  return (
    <section className="py-20 md:py-28 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
          예약 방법
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
          {STEPS.map((step, i) => (
            <div key={step.title} className="flex items-center gap-4">
              <div className="flex flex-col items-center text-center w-56">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-primary-600" />
                </div>
                <span className="text-xs font-semibold text-primary-500 mb-1">
                  STEP {i + 1}
                </span>
                <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>

              {i < STEPS.length - 1 && (
                <ChevronRight className="w-6 h-6 text-primary-300 hidden md:block shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
