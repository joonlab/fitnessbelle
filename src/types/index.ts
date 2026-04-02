export type BranchSlug = 'gurae' | 'hwajeong';

export interface Branch {
  slug: BranchSlug;
  name: string;
  shortName: string;
  address: string;
  phone: string;
  kakaoChannelUrl: string;
  naverBookingUrl: string;
  naverMapUrl: string;
  coordinates: { lat: number; lng: number };
  openDate: string;
  operatingHours: {
    weekday: string;
    saturday: string;
    sunday: string;
    holiday: string;
    note?: string;
  };
  amenities: { icon: string; label: string }[];
  facilityImages: { src: string; alt: string; category: string }[];
  trainerCount: number;
}

export type ProgramSlug = 'facility' | 'wonder-woman' | 'pt' | 'ampl-pt' | 'synergy-pt';

export interface Program {
  slug: ProgramSlug;
  name: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  image: string;
  badge?: string;
  availableAt: BranchSlug[];
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  branch: BranchSlug;
  photo: string;
  certifications: string[];
  specialties: string[];
  introduction: string;
}

export interface BeforeAfterResult {
  id: string;
  memberInitial: string;
  duration: string;
  program: string;
  beforeImage: string;
  afterImage: string;
  weightBefore: number;
  weightAfter: number;
  bodyFatBefore: number;
  bodyFatAfter: number;
  testimonial: string;
}

export interface Review {
  id: string;
  author: string;
  branch: BranchSlug;
  rating: number;
  content: string;
  date: string;
  source: 'naver' | 'kakao' | 'direct';
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
