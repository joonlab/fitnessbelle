import { Phone, MessageCircle } from 'lucide-react';
import { branches } from '@/data/branches';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function CTASection() {
  const gurae = branches.gurae;

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-pink-500" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center text-white">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">지금 시작하세요</h2>
          <p className="text-white/80 text-lg mb-10">
            첫 방문 무료 체험을 예약하세요. 여성만을 위한 프리미엄 공간에서 새로운 변화를 경험하실 수 있습니다.
          </p>

          <Button
            href="/contact"
            size="lg"
            className="bg-white text-primary-700 hover:bg-gray-100 shadow-2xl mb-8"
          >
            무료 체험 예약
          </Button>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/90">
            <a
              href={`tel:${gurae.phone}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              {gurae.phone.replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3')}
            </a>
            <a
              href={gurae.kakaoChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              카카오톡 상담
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
