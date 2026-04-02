import Link from 'next/link';
import { Dumbbell, Users, Sparkles, Syringe, Zap } from 'lucide-react';
import { programs } from '@/data/programs';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Badge from '@/components/ui/Badge';

const iconMap: Record<string, React.ElementType> = {
  facility: Dumbbell,
  'wonder-woman': Sparkles,
  pt: Users,
  'ampl-pt': Syringe,
  'synergy-pt': Zap,
};

export default function ProgramOverview() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading subtitle="PROGRAMS" title="나에게 맞는 프로그램" />

        {/* Mobile: horizontal scroll, Desktop: grid */}
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory md:snap-none -mx-4 px-4 md:mx-0 md:px-0">
          {programs.map((program, i) => {
            const Icon = iconMap[program.slug] || Dumbbell;
            return (
              <AnimatedSection key={program.slug} delay={i * 0.1}>
                <Link
                  href={`/programs#${program.slug}`}
                  className="group flex-shrink-0 w-56 md:w-auto snap-start block p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
                    <Icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-gray-900 text-sm">{program.name}</h3>
                    {program.badge && (
                      <Badge variant={program.badge === 'NEW' ? 'pink' : 'primary'}>
                        {program.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{program.shortDescription}</p>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
