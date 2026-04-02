import type { NavItem } from '@/types';

export const navigation: NavItem[] = [
  { label: '소개', href: '/about' },
  {
    label: '지점 안내',
    href: '/locations/gurae',
    children: [
      { label: '구래동 본점', href: '/locations/gurae' },
      { label: '화정점', href: '/locations/hwajeong' },
    ],
  },
  { label: '프로그램', href: '/programs' },
  { label: '트레이너', href: '/trainers' },
  { label: 'Before & After', href: '/results' },
  { label: '후기', href: '/reviews' },
  { label: '문의/예약', href: '/contact' },
];
