'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { branches } from '@/data/branches';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const gurae = branches.gurae;

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="flex">
        <a
          href={gurae.kakaoChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-yellow-400 text-gray-900 font-semibold text-sm"
        >
          <MessageCircle className="w-5 h-5" />
          카카오톡 상담
        </a>
        <a
          href={`tel:${gurae.phone}`}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-primary-600 text-white font-semibold text-sm"
        >
          <Phone className="w-5 h-5" />
          전화 문의
        </a>
      </div>
    </div>
  );
}
