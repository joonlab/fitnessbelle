'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { X, Phone, MessageCircle } from 'lucide-react';
import { navigation } from '@/data/navigation';
import { branches } from '@/data/branches';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const gurae = branches.gurae;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100">
              <span className="text-lg font-bold bg-gradient-to-r from-primary-600 to-pink-500 bg-clip-text text-transparent">
                FITNESSBELLE
              </span>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="닫기"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 overflow-y-auto py-4">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block px-6 py-3 text-base font-medium text-gray-800 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-10">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="block py-2 text-sm text-gray-500 hover:text-primary-600 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Bottom CTA */}
            <div className="p-6 border-t border-gray-100 space-y-3">
              <a
                href={gurae.kakaoChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-xl transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                카카오톡 상담
              </a>
              <a
                href={`tel:${gurae.phone}`}
                className="flex items-center justify-center gap-2 w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5" />
                전화 문의
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
