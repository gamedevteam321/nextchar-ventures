import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import BiocharSection from '@/components/BiocharSection';
import ImpactSection from '@/components/ImpactSection';
import QuoteSliderSection from '@/components/QuoteSliderSection';
import TechnologySection from '@/components/TechnologySection';
import CarbonCreditsSection from '@/components/CarbonCreditsSection';
import ClosingSection from '@/components/ClosingSection';
import FooterCTA from '@/components/FooterCTA';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SectionDivider from '@/components/SectionDivider';

const Index: React.FC = () => {
  useEffect(() => {
    // Initialize scroll reveal animation
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1
    });
    
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-beige text-green-dark min-h-screen">
      <Header />
      <div id="hero">
        <HeroSection />
      </div>
      <SectionDivider />
      <ProductsSection />
      
      <BiocharSection />
      
      <ImpactSection />
      
      <QuoteSliderSection />
      <TechnologySection />
      
      <CarbonCreditsSection />
      <ClosingSection />
      <FooterCTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
