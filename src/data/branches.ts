import type { Branch } from '@/types';

export const branches: Record<string, Branch> = {
  gurae: {
    slug: 'gurae',
    name: '피트니스벨 구래동 본점',
    shortName: '구래동 본점',
    address: '경기도 김포시 김포한강9로 79 연세프라자5차 6층',
    phone: '050713381365',
    kakaoChannelUrl: 'https://pf.kakao.com/_FitnessBelle',
    naverBookingUrl: 'https://booking.naver.com/booking/13/bizes/1046988',
    naverMapUrl: 'https://map.naver.com/v5/entry/place/1046988',
    coordinates: { lat: 37.6385, lng: 126.6267 },
    openDate: '2020',
    operatingHours: {
      weekday: '06:00 - 23:00',
      saturday: '09:00 - 18:00',
      sunday: '정기 휴무',
      holiday: '공지 확인',
      note: '런치타임 없이 운영',
    },
    amenities: [
      { icon: 'dumbbell', label: '헬스존' },
      { icon: 'stretch', label: '필라테스존' },
      { icon: 'shirt', label: '운동복 무료 대여' },
      { icon: 'towel', label: '수건 제공' },
      { icon: 'sparkles', label: '어메니티 완비' },
      { icon: 'sofa', label: '힐링존' },
      { icon: 'lock', label: '개인 락커' },
      { icon: 'shower', label: '샤워실/파우더룸' },
    ],
    facilityImages: [
      { src: '/images/facilities/gurae/health-zone.jpg', alt: '구래동 본점 헬스존', category: '헬스존' },
      { src: '/images/facilities/gurae/pilates-zone.jpg', alt: '구래동 본점 필라테스존', category: '필라테스존' },
      { src: '/images/facilities/gurae/locker-room.jpg', alt: '구래동 본점 탈의실', category: '탈의실' },
      { src: '/images/facilities/gurae/healing-zone.jpg', alt: '구래동 본점 힐링존', category: '힐링존' },
    ],
    trainerCount: 9,
  },
  hwajeong: {
    slug: 'hwajeong',
    name: '피트니스벨 화정점',
    shortName: '화정점',
    address: '경기도 고양시 덕양구 화신로272번길 48 유퍼스트빌딩 9층',
    phone: '050713381365',
    kakaoChannelUrl: 'https://pf.kakao.com/_FitnessBelle_hj',
    naverBookingUrl: 'https://booking.naver.com/booking/13/bizes/fitnessbelle-hj',
    naverMapUrl: 'https://map.naver.com/v5/entry/place/fitnessbelle-hj',
    coordinates: { lat: 37.6342, lng: 126.8322 },
    openDate: '2025.08.25',
    operatingHours: {
      weekday: '06:00 - 23:00',
      saturday: '09:00 - 18:00',
      sunday: '정기 휴무',
      holiday: '공지 확인',
      note: '런치타임 없이 운영',
    },
    amenities: [
      { icon: 'dumbbell', label: '헬스존' },
      { icon: 'coffee', label: '카페형 라운지' },
      { icon: 'shirt', label: '운동복 무료 대여' },
      { icon: 'towel', label: '수건 제공' },
      { icon: 'sparkles', label: '어메니티 완비' },
      { icon: 'lock', label: '개인 락커' },
      { icon: 'shower', label: '샤워실/파우더룸' },
      { icon: 'camera', label: '셀프 포토존' },
    ],
    facilityImages: [
      { src: '/images/facilities/hwajeong/health-zone.jpg', alt: '화정점 헬스존', category: '헬스존' },
      { src: '/images/facilities/hwajeong/lounge.jpg', alt: '화정점 카페형 라운지', category: '라운지' },
      { src: '/images/facilities/hwajeong/locker-room.jpg', alt: '화정점 탈의실', category: '탈의실' },
      { src: '/images/facilities/hwajeong/interior.jpg', alt: '화정점 인테리어', category: '인테리어' },
    ],
    trainerCount: 6,
  },
};

export const branchList = Object.values(branches);

export function getBranch(slug: string): Branch | undefined {
  return branches[slug];
}
