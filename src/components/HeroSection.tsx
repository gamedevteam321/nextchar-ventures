
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
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background wrapper with a base color to ensure something shows */}
      <div className="absolute inset-0 bg-black">
        {/* Background image with max z-index for this layer */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('/lovable-uploads/1eed848a-4e4c-4d64-83f7-24d58181c18e.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="container mx-auto relative z-10 px-6 md:px-12 lg:px-16 pt-32 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 reveal">
            <span className="text-white">Scalable Carbon Solutions</span><br />
            <span className="text-white">For a Sustainable Future</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl mb-8 reveal" style={{ animationDelay: '0.2s' }}>
            <span className="text-white/70">Clean</span> <span className="text-white font-medium">Planet.</span> <span className="text-white/70">Clean</span> <span className="text-white font-medium">Soil.</span> <span className="text-white/70">Clean</span> <span className="text-white font-medium">Food.</span>
          </h2>
          
          <p className="text-white/80 text-lg mb-10 max-w-2xl reveal" style={{ animationDelay: '0.4s' }}>
            We transform Biomass Waste streams that are presently being burnt, landfilled or underutilised to products imperative for life
          </p>
          
          <div className="reveal" style={{ animationDelay: '0.6s' }}>
            <Button className="bg-gold hover:bg-gold-light text-black px-8 py-2 rounded-md">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
