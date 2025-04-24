import React from 'react';
import { getImagePath } from "@/lib/utils";

const stats = [
  {
    id: 1,
    number: '3,500,000+',
    label: 'tons/year of residue\nto be repurposed annually',
    icon: getImagePath('/our plan/residue.svg')
  },
  {
    id: 2,
    number: '1,000,000+',
    label: 'Tons/Year of Biochar\nto be produced annually',
    icon: getImagePath('/our plan/Biochar.svg')
  },
  {
    id: 3,
    number: '2,500,000+',
    label: 'tons/year of CO2 to\nbe removed annually',
    icon: getImagePath('/our plan/Co2.svg')
  },
  {
    id: 4,
    number: '1000',
    label: 'Decentralized\nProduction facilities projected',
    icon: getImagePath('/our plan/Decentralized.svg')
  },
  {
    id: 5,
    number: '20,000+',
    label: 'Rural Jobs Created',
    icon: getImagePath('/our plan/Jobs.svg')
  },
  {
    id: 6,
    number: 'The Largest',
    label: 'Decentralized Carbon Project\n in the World',
    icon: getImagePath('/our plan/Decentralized carbon.svg')
  }
];

const ImpactSection: React.FC = () => {
  return (
    <section className="w-full min-h-screen relative py-8 md:py-16 flex items-center">
      
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black before:opacity-40"
        style={{
          backgroundImage: `url(${getImagePath('/impact-bg.png')})`,
        }}
      />
      
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px] relative">
        <div className="bg-white/70 backdrop-blur-sm rounded-[20px] md:rounded-[32px] p-6 md:p-12">
          <h2 className="text-[#3D4E3A] text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 md:mb-16 font-montserrat">
            Our Plan
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-10 md:gap-y-20">
            {stats.map((stat) => (
              <div key={stat.id} className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0">
                  <div 
                    className="w-full h-full bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${stat.icon})`,
                    }}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#3D4E3A] text-xl sm:text-2xl font-semibold">
                    {stat.number}
                  </h3>
                  <p className="text-[#474747] whitespace-pre-line text-sm sm:text-base">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
