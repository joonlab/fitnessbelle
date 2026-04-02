import type { Branch } from '@/types';
import { MapPin, Phone, Clock, MessageCircle, Calendar } from 'lucide-react';

interface ContactCardProps {
  branch: Branch;
}

export default function ContactCard({ branch }: ContactCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{branch.name}</h3>

      <div className="space-y-3 mb-6">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
          <span className="text-gray-600 text-sm">{branch.address}</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-primary-500 shrink-0" />
          <a
            href={`tel:${branch.phone}`}
            className="text-gray-600 text-sm hover:text-primary-600 transition"
          >
            {branch.phone.replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3')}
          </a>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
          <div className="text-sm text-gray-600 space-y-0.5">
            <p>평일 {branch.operatingHours.weekday}</p>
            <p>토요일 {branch.operatingHours.saturday}</p>
            <p>일요일 {branch.operatingHours.sunday}</p>
            {branch.operatingHours.note && (
              <p className="text-primary-500 text-xs mt-1">
                * {branch.operatingHours.note}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <a
          href={branch.naverBookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition"
        >
          <Calendar className="w-4 h-4" />
          네이버 예약
        </a>
        <a
          href={branch.kakaoChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-yellow-400 text-gray-900 text-sm font-medium hover:bg-yellow-500 transition"
        >
          <MessageCircle className="w-4 h-4" />
          카카오톡
        </a>
        <a
          href={`tel:${branch.phone}`}
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition"
        >
          <Phone className="w-4 h-4" />
          전화하기
        </a>
      </div>
    </div>
  );
}
