'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  {
    q: '주차는 가능한가요?',
    a: '네, 건물 내 주차장을 이용하실 수 있습니다. 운동 시간 동안 무료 주차가 가능합니다. 자세한 내용은 각 지점에 문의해주세요.',
  },
  {
    q: '운동복을 가져가야 하나요?',
    a: '아니요, 운동복과 수건을 무료로 대여해드립니다. 편하게 오시면 됩니다. 개인 운동복 착용도 물론 가능합니다.',
  },
  {
    q: '체험은 어떻게 진행되나요?',
    a: '네이버 예약 또는 카카오톡으로 체험 예약 후 방문해주시면 됩니다. 시설 안내와 함께 기초 체력 측정, 인바디 검사 후 맞춤 상담을 진행합니다.',
  },
  {
    q: '여성전용인가요?',
    a: '네, 피트니스벨은 여성전용 헬스장입니다. 여성 회원님들이 눈치 보지 않고 편안하게 운동하실 수 있는 환경을 제공합니다.',
  },
  {
    q: '등록 후 환불이 가능한가요?',
    a: '소비자 보호법에 따라 등록 후 환불이 가능합니다. 잔여 기간에 따른 환불 절차는 각 지점 데스크에서 안내해드립니다.',
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
          자주 묻는 질문
        </h2>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-medium text-gray-900">{item.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 ml-4" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
