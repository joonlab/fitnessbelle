import Link from 'next/link';
import { MapPin, Phone, Clock, Camera } from 'lucide-react';
import { branches } from '@/data/branches';

export default function Footer() {
  const gurae = branches.gurae;
  const hwajeong = branches.hwajeong;

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <span className="text-2xl font-extrabold bg-gradient-to-r from-primary-400 to-pink-400 bg-clip-text text-transparent">
              FITNESSBELLE
            </span>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              여성전용 프리미엄 피트니스.
              <br />
              의지가 아닌 환경이 만드는 변화.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.instagram.com/fitnessbelle_official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Camera className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Gurae Branch */}
          <div>
            <h3 className="text-white font-bold mb-4">{gurae.shortName}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-400" />
                <span>{gurae.address}</span>
              </li>
              <li className="flex gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-400" />
                <a href={`tel:${gurae.phone}`} className="hover:text-white transition-colors">
                  {gurae.phone.replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3')}
                </a>
              </li>
              <li className="flex gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-400" />
                <div>
                  <p>평일 {gurae.operatingHours.weekday}</p>
                  <p>토요일 {gurae.operatingHours.saturday}</p>
                  <p>일요일 {gurae.operatingHours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Hwajeong Branch */}
          <div>
            <h3 className="text-white font-bold mb-4">{hwajeong.shortName}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-400" />
                <span>{hwajeong.address}</span>
              </li>
              <li className="flex gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-400" />
                <a href={`tel:${hwajeong.phone}`} className="hover:text-white transition-colors">
                  {hwajeong.phone.replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3')}
                </a>
              </li>
              <li className="flex gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-400" />
                <div>
                  <p>평일 {hwajeong.operatingHours.weekday}</p>
                  <p>토요일 {hwajeong.operatingHours.saturday}</p>
                  <p>일요일 {hwajeong.operatingHours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">바로가기</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: '소개', href: '/about' },
                { label: '프로그램', href: '/programs' },
                { label: '트레이너', href: '/trainers' },
                { label: 'Before & After', href: '/results' },
                { label: '후기', href: '/reviews' },
                { label: '무료 체험 신청', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} FitnessBelle. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
