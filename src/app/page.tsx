import HeroSection from '@/components/HeroSection';
import ImpactSection from '@/components/ImpactSection';
import TechnologySection from '@/components/TechnologySection';
import QuoteSliderSection from '@/components/QuoteSliderSection';
import CarbonCreditsSection from '@/components/CarbonCreditsSection';
import ClosingSection from '@/components/ClosingSection';
import FooterCTA from '@/components/FooterCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111]">
      <HeroSection />
      <ImpactSection />
      <TechnologySection />
      <QuoteSliderSection />
      <CarbonCreditsSection />
      <ClosingSection />
      <FooterCTA />
    </main>
  );
} 