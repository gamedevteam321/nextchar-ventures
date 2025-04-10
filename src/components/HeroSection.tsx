
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    });
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative py-20 px-6 md:px-12">
      <div 
        className="absolute inset-0 z-0 bg-carbon-dark opacity-90" 
        style={{
          backgroundImage: `url('/lovable-uploads/45fcfcd9-65c8-4d7b-9846-bd622ffc461c.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply'
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 reveal">
            <span className="text-white">Scalable Carbon Solutions</span><br />
            <span className="text-white">For a Sustainable Future</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gold mb-6 reveal" style={{ animationDelay: '0.2s' }}>
            Clean Planet. Clean Soil. Clean Food.
          </h2>
          
          <p className="text-gray-300 mb-8 reveal" style={{ animationDelay: '0.4s' }}>
            We transform biomass waste streams that are presently being burnt, landfilled or underutilised to products imperative for life
          </p>
          
          <div className="reveal" style={{ animationDelay: '0.6s' }}>
            <Button className="btn-gold">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
