import type { Program } from '@/types';

export const programs: Program[] = [
  {
    slug: 'facility',
    name: '시설권 (무제한 시설이용)',
    shortDescription: '자유롭게 운동하고 싶은 분들을 위한 무제한 시설 이용권',
    description:
      '피트니스벨의 최신 운동 기구와 쾌적한 시설을 자유롭게 이용할 수 있는 시설 이용권입니다. 운동복, 수건, 어메니티가 모두 제공되어 가벼운 마음으로 방문하실 수 있습니다.',
    highlights: [
      '월 3만원대의 합리적인 가격',
      '최신 운동 기구 무제한 이용',
      '운동복·수건·어메니티 무료 제공',
      '쾌적한 여성 전용 공간',
    ],
    image: '/images/programs/facility.jpg',
    availableAt: ['gurae', 'hwajeong'],
  },
  {
    slug: 'wonder-woman',
    name: '원더우먼 패키지',
    shortDescription: 'PT 없이도 체계적 관리가 가능한 올인원 패키지',
    description:
      '매달 인바디 측정, 맞춤 운동 처방, 그룹 수업까지 포함된 체계적인 관리 프로그램입니다. PT 부담 없이도 전문적인 관리를 받고 싶은 분들에게 추천합니다.',
    highlights: [
      '월 4만원대',
      '매달 인바디 측정 및 분석',
      '맞춤 운동 처방전 제공',
      '그룹 수업 참여 가능',
      '시설 무제한 이용 포함',
    ],
    image: '/images/programs/wonder-woman.jpg',
    badge: '인기',
    availableAt: ['gurae', 'hwajeong'],
  },
  {
    slug: 'pt',
    name: '퍼스널 트레이닝 (PT)',
    shortDescription: '1:1 맞춤 퍼스널 트레이닝',
    description:
      '전문 트레이너와 함께하는 1:1 맞춤 트레이닝입니다. 개인의 체형, 목표, 체력 수준에 맞춘 프로그램으로 효과적인 변화를 이끌어냅니다.',
    highlights: [
      '1:1 맞춤 운동 프로그램',
      '체형 분석 및 목표 설정',
      '식단 관리 코칭',
      '정기 인바디 측정',
      '다이어트·체형교정·바디프로필 전문',
    ],
    image: '/images/programs/pt.jpg',
    availableAt: ['gurae', 'hwajeong'],
  },
  {
    slug: 'ampl-pt',
    name: '앰플 PT',
    shortDescription: '위고비·마운자로 복용자 특화 PT 프로그램',
    description:
      'GLP-1 계열 약물(위고비, 마운자로) 복용 중인 분들을 위한 특화 프로그램입니다. 근손실을 최소화하면서 체지방 감량 효과를 극대화하는 맞춤 트레이닝을 제공합니다.',
    highlights: [
      '위고비·마운자로 복용자 전문',
      '근손실 최소화 프로그램',
      '체지방 감량 극대화',
      '전문 트레이너 1:1 관리',
      '정기 체성분 모니터링',
    ],
    image: '/images/programs/ampl-pt.jpg',
    badge: 'NEW',
    availableAt: ['hwajeong'],
  },
  {
    slug: 'synergy-pt',
    name: '시너지 PT',
    shortDescription: '2:1 그룹 퍼스널 트레이닝',
    description:
      '친구나 가족과 함께하는 2:1 그룹 PT입니다. 합리적인 가격에 전문적인 트레이닝을 받을 수 있으며, 함께 운동하는 즐거움까지 누릴 수 있습니다.',
    highlights: [
      '2:1 소그룹 트레이닝',
      '합리적인 PT 비용',
      '함께하는 동기부여',
      '맞춤 운동 프로그램',
    ],
    image: '/images/programs/synergy-pt.jpg',
    availableAt: ['gurae', 'hwajeong'],
  },
];

export function getProgram(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
