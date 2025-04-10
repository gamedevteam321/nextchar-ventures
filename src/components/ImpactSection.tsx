"use client";

import React from 'react';

const stats = [
  {
    id: 1,
    number: '1,650,000',
    label: 'tons/year of CO2\nto be removed',
    icon: '/our plan/Co2.png'
  },
  {
    id: 2,
    number: '3,000,000',
    label: 'tons/year of residue to\nbe removed',
    icon: '/our plan/residue.png'
  },
  {
    id: 3,
    number: '750,000',
    label: 'Tons/Year of\nBiochar to be\nproduced',
    icon: '/our plan/Biochar.png'
  },
  {
    id: 4,
    number: '1000',
    label: 'Production\nfacilities\nplanned\n(Decentralized)',
    icon: '/our plan/Decentralized.png'
  },
  {
    id: 5,
    number: '10,000+',
    label: 'Rural Jobs\nCreated',
    icon: '/our plan/Jobs.png'
  },
  {
    id: 6,
    number: 'The Largest',
    label: 'Decentralized\nCarbon Project\nin the World',
    icon: '/our plan/Decentralized carbon.png'
  }
];

const ImpactSection: React.FC = () => {
  return (
    <section className="section-padding bg-carbon-dark px-6 md:px-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text">
          Our Plan
        </h2>
        
        {/* Upper layer */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-[49px] w-full mb-12">
          {stats.slice(0, 3).map((stat) => (
            <div key={stat.id} className="flex items-center gap-[47px] flex-1">
              <img 
                src={stat.icon} 
                alt={stat.label}
                className="w-[100px] h-[100px] aspect-square object-contain"
              />
              <div className="flex flex-col justify-center items-center gap-[11px] flex-1 self-stretch">
                {stat.number && (
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text">
                    {stat.number}
                  </h3>
                )}
                <p className="text-white/80 whitespace-pre-line text-center">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lower layer */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-[49px] w-full">
          {stats.slice(3).map((stat) => (
            <div key={stat.id} className="flex items-center gap-[47px] flex-1">
              <img 
                src={stat.icon} 
                alt={stat.label}
                className="w-[100px] h-[100px] aspect-square object-contain"
              />
              <div className="flex flex-col justify-center items-center gap-[11px] flex-1 self-stretch">
                {stat.number && (
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text">
                    {stat.number}
                  </h3>
                )}
                <p className="text-white/80 whitespace-pre-line text-center">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
