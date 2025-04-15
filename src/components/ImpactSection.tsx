import React from 'react';
import { getImagePath } from "@/lib/utils";

const stats = [
  {
    id: 1,
    number: '1,650,000',
    label: 'tons/year of CO2\nto be removed',
    icon: getImagePath('/our plan/Co2.svg')
  },
  {
    id: 2,
    number: '3,000,000',
    label: 'tons/year of residue to\nbe removed',
    icon: getImagePath('/our plan/residue.svg')
  },
  {
    id: 3,
    number: '750,000',
    label: 'Tons/Year of\nBiochar to be\nproduced',
    icon: getImagePath('/our plan/Biochar.svg')
  },
  {
    id: 4,
    number: '1000',
    label: 'Production\nfacilities\nplanned\n(Decentralized)',
    icon: getImagePath('/our plan/Decentralized.svg')
  },
  {
    id: 5,
    number: '10,000+',
    label: 'Rural Jobs\nCreated',
    icon: getImagePath('/our plan/Jobs.svg')
  },
  {
    id: 6,
    number: 'The Largest',
    label: 'Decentralized\nCarbon Project\nin the World',
    icon: getImagePath('/our plan/Decentralized carbon.svg')
  }
];

const ImpactSection: React.FC = () => {
  return (
    <section className="section-padding bg-carbon-dark px-[200px] py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text">
          Our Plan
        </h2>
        
        {/* Upper layer */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-[49px] w-full mb-12">
          {stats.slice(0, 3).map((stat) => (
            <div key={stat.id} className="flex items-center gap-[47px] flex-1">
              <div className="w-[100px] h-[100px] relative">
                <img 
                  src={stat.icon} 
                  alt={stat.label}
                  className="w-full h-full aspect-square object-contain [filter:drop-shadow(0_0_0_#886808)_brightness(0)_saturate(100%)_invert(74%)_sepia(11%)_saturate(1960%)_hue-rotate(359deg)_brightness(89%)_contrast(84%)]"
                  style={{
                    WebkitMask: `url(${stat.icon}) center/contain no-repeat`,
                    mask: `url(${stat.icon}) center/contain no-repeat`,
                    background: 'linear-gradient(90deg, #886808 32.21%, #C5A133 76.44%)',
                  }}
                />
              </div>
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
              <div className="w-[100px] h-[100px] relative">
                <img 
                  src={stat.icon} 
                  alt={stat.label}
                  className="w-full h-full aspect-square object-contain [filter:drop-shadow(0_0_0_#886808)_brightness(0)_saturate(100%)_invert(74%)_sepia(11%)_saturate(1960%)_hue-rotate(359deg)_brightness(89%)_contrast(84%)]"
                  style={{
                    WebkitMask: `url(${stat.icon}) center/contain no-repeat`,
                    mask: `url(${stat.icon}) center/contain no-repeat`,
                    background: 'linear-gradient(90deg, #886808 32.21%, #C5A133 76.44%)',
                  }}
                />
              </div>
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
