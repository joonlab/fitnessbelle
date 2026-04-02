import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { branchList } from '@/data/branches';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function BranchSelector() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading subtitle="LOCATIONS" title="가까운 지점을 선택하세요" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {branchList.map((branch, i) => (
            <AnimatedSection key={branch.slug} delay={i * 0.15}>
              <Link
                href={`/locations/${branch.slug}`}
                className="group block rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Placeholder */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <div className={`absolute inset-0 ${
                    branch.slug === 'gurae'
                      ? 'bg-gradient-to-br from-primary-500 to-primary-700'
                      : 'bg-gradient-to-br from-pink-400 to-primary-600'
                  } group-hover:scale-105 transition-transform duration-500`} />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">{branch.shortName}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{branch.name}</h3>
                  <p className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <MapPin className="w-4 h-4 text-primary-500" />
                    {branch.address}
                  </p>
                  <div className="flex items-center gap-1 text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all">
                    자세히 보기
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
