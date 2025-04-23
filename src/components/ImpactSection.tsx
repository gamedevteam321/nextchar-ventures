import React from 'react';
import { getImagePath } from "@/lib/utils";

const stats = [
  
  {
    id: 1,
    number: '3,500,000+',
    label: 'tons/year of residue to be\nrepurposed annually',
    icon: getImagePath('/our plan/residue.svg')
  },
  {
    id: 2,
    number: '1,000,000+',
    label: 'Tons/Year of Biochar to be produced annually',
    icon: getImagePath('/our plan/Biochar.svg')
  },
  {
    id: 3,
    number: '2,500,000+',
    label: 'tons/year of CO2\nto be removed annually',
    icon: getImagePath('/our plan/Co2.svg')
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
    label: 'Decentralized Carbon Project in the World',
    icon: getImagePath('/our plan/Decentralized carbon.svg')
  }
];

const ImpactSection: React.FC = () => {
  return (
    <section className="bg-white w-full overflow-x-hidden py-8">
      <div className="container-padding pt-8 md:pt-8 pb-1 md:pb-0.5">
        <div className="container mx-auto text-left w-full pl-6 sm:pl-6 md:pl-8 lg:pl-12 xl:pl-14">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-10 font-montserrat leading-[100%] tracking-[0%] capitalize"
            style={{
              background: 'linear-gradient(90deg, #886808 32.21%, #C5A133 76.44%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Our Plan
          </h2>
        </div>
      </div>
      
      <div className="container mx-auto w-full px-4 sm:px-10 md:px-28 lg:px-32 xl:px-36 ">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 w-full">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center gap-4 w-full">
              <div className="w-16 h-16 relative">
                <div 
                  className="w-full h-full svg-mask-gradient-caramel"
                  style={{
                    '--icon-url': `url(${stat.icon})`,
                  } as React.CSSProperties}
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-2 w-full">
                {stat.number && (
                  <h3 className="text-xl font-bold bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
                    {stat.number}
                  </h3>
                )}
                <p className="text-[#474747] whitespace-pre-line text-center text-sm">
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
