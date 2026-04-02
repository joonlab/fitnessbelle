import HeroSection from '@/components/home/HeroSection';
import BrandIntro from '@/components/home/BrandIntro';
import BranchSelector from '@/components/home/BranchSelector';
import ProgramOverview from '@/components/home/ProgramOverview';
import TestimonialSlider from '@/components/home/TestimonialSlider';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandIntro />
      <BranchSelector />
      <ProgramOverview />
      <TestimonialSlider />
      <CTASection />
    </>
  );
}
