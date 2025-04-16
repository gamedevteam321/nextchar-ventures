import React from 'react';
import { getImagePath } from "@/lib/utils";

const stats = [
  {
    id: 1,
    number: '2,500,000+',
    label: 'tons/year of CO2\nto be removed annually',
    icon: getImagePath('/our plan/Co2.svg')
  },
  {
    id: 2,
    number: '3,500,000+',
    label: 'tons/year of residue to be\nrepurposed annually',
    icon: getImagePath('/our plan/residue.svg')
  },
  {
    id: 3,
    number: '1,000,000+',
    label: 'Tons/Year of\nBiochar to be\nproduced annually',
    icon: getImagePath('/our plan/Biochar.svg')
  },
  {
    id: 4,
    number: '1000',
    label: 'Decentralized Production \nfacilities projected ',
    icon: getImagePath('/our plan/Decentralized.svg')
  },
  {
    id: 5,
    number: '20,000+',
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
    <section className="section-padding bg-green-dark w-full overflow-x-hidden">
      <div className="container mx-auto w-full px-4 sm:px-10 md:px-16 lg:px-20 xl:px-40">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-1 md:mb-1 font-montserrat leading-[100%] tracking-[0%] capitalize">
          <span className="bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] bg-clip-text text-transparent">
           Our Plan
          </span>
        </h2>
        
        {/* Upper layer */}
        <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-12 w-full mb-8 md:mb-12 mt-8 md:mt-12">
          {stats.slice(0, 3).map((stat) => (
            <div key={stat.id} className="flex flex-col lg:flex-row items-center gap-4 md:gap-[47px] flex-1 w-full">
              <div className="w-16 h-16 md:w-[100px] md:h-[100px] relative">
                <div 
                  className="w-full h-full svg-mask-gradient"
                  style={{
                    '--icon-url': `url(${stat.icon})`,
                  } as React.CSSProperties}
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-2 md:gap-[11px] flex-1 self-stretch w-full">
                {stat.number && (
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text">
                    {stat.number}
                  </h3>
                )}
                <p className="text-white/80 whitespace-pre-line text-center text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lower layer */}
        <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-12 w-full">
          {stats.slice(3).map((stat) => (
            <div key={stat.id} className="flex flex-col lg:flex-row items-center gap-4 md:gap-[47px] flex-1 w-full">
              <div className="w-16 h-16 md:w-[100px] md:h-[100px] relative">
                <div 
                  className="w-full h-full svg-mask-gradient"
                  style={{
                    '--icon-url': `url(${stat.icon})`,
                  } as React.CSSProperties}
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-2 md:gap-[11px] flex-1 self-stretch w-full">
                {stat.number && (
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] text-transparent bg-clip-text">
                    {stat.number}
                  </h3>
                )}
                <p className="text-white/80 whitespace-pre-line text-center text-sm md:text-base">
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
