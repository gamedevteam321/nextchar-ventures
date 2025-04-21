import React, { useState } from 'react';
import { getImagePath } from "@/lib/utils";
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';

const AboutUs = () => {
  const [expandedTeamMember, setExpandedTeamMember] = useState<number | null>(null);

  const teamMembers = [
    {
      id: 1,
      name: "Arjun Dhawan",
      role: "Driving Force & Strategy",
      image: "/team/member1.png",
      description: `Arjun Dhawan (Jun), Co-Founder of Nexchar, brings a unique perspective shaped by his academic focus, studying Quantitative Economics, Business, and Organizational Management at Northwestern University, as well as experience in ESG Investing, Venture Capital, Deep Tech & Defense.

His passion stems from his early experiences and belief  that sustainable stewardship of people and the environment is integral to human success. Arjun’s forward-thinking approach and never say die attitude, drives the company to make a real-world difference.`
    },
    {
      id: 2,
      name: "Paramjeet Singh Sehra",
      role: "Innovator & Anchor",
      image: "/team/member2.png",
      description: `Paramjeet Singh Sehra (PS), Co-Founder of Nexchar, is a seasoned entrepreneur with decades of experience in pioneering innovative, sustainable, and decentralized solutions to address critical challenges and deliver real-world impact at scale.

As the inventor of the Kalefaction Reactor, a ground-breaking technology designed to efficiently repurpose biomass into premium biochar, his commitment to practical, purpose-driven solutions is at the heart of Nexchar's mission to drive meaningful change.`
    },
    {
      id: 3,
      name: "Basanta Nayak",
      role: "Supply Chains & Scale",
      image: "/team/member3.png",
      description: `Basanta Kumar Nayak ( BN ), Director at  Nexchar, brings over 3 decades of expertise in agribusiness, with a proven track record in managing large-scale operations across the food supply chain, agri-inputs, and fresh produce. An accomplished leader he has driven transformational initiatives in many organizations including Adani Agrifresh and Reliance Retail.

Basant's experience and commitment to empowering farming communities  are integral to Nexchar’s mission of enriching soils, protecting forests, and fostering a living planet.`
    }
  ];

  const toggleTeamMember = (id: number) => {
    setExpandedTeamMember(expandedTeamMember === id ? null : id);
  };

  return (
    <div className="text-[#474747] font-montserrat bg-[#F0EDE4]">
      {/* Hero Section */}
      <section id="overview" className="relative min-h-[400px] sm:min-h-[600px] h-[80vh] sm:h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          {/* Hero Image */}
          <img
            src={getImagePath("/about-us-hero.png")}
            alt="About Us Hero"
            className="w-full h-full object-cover"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10" />
        </div>

        <div className="relative z-20 h-full flex flex-col justify-end items-end text-left px-4 sm:px-16 pb-8 sm:pb-12">
          <h1 className="font-montserrat text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-medium leading-[120%] sm:leading-[110%] tracking-[0%] mb-4
                       bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text">
            We are innovators dedicated to fostering a living planet.
          </h1>

        </div>
      </section>

      {/* who are weSection */}
      <section className="py-8 sm:py-12 md:py-[25px] px-4 sm:px-8 md:px-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="text-white order-2 md:order-1">
            <h2 className="font-montserrat font-semibold text-xl sm:text-2xl md:text-[35px] leading-normal sm:leading-normal tracking-[0%] mb-4 sm:mb-6 pb-1
                         bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
              Who are we ?
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-[#474747] font-light text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              We are a carbon project developer leveraging proprietary modular pyrolysis technology to transform diverse biomass waste streams into sustainable and high quality Biochar and Biocoal. Our decentralized approach is designed for scalable deployment across hyperlocal sites and tackles critical waste management issues while revitalizing soils, preventing deforestation and sequestering Carbon.
              </p>
            </div>
          </div>
          <div className="w-full order-1 md:order-2">
            <img
              src={getImagePath("/who-are-we.png")}
              alt="The Biochar Cycle"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* why matters Section */}
      <section className="py-8 sm:py-12 md:py-[25px] px-4 sm:px-8 md:px-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="w-full order-1">
            <img
              src={getImagePath("/why-matters.png")}
              alt="The Biochar Cycle"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
          <div className="text-white order-2">
            <h2 className="font-montserrat font-semibold text-xl sm:text-2xl md:text-[35px] leading-normal sm:leading-normal tracking-[0%] mb-4 sm:mb-6 pb-1
                         bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
              Why it matters?
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-[#474747] font-light text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              Soil degradation is accelerating at an alarming rate—<b>33% of India's soil is already degraded</b>, and globally, <b>up to 90% of soils could be degraded by 2050.</b> This threatens the very basis of existence on the planet .. No Soil .. No Life
              </p>
              <p className="text-[#474747] font-light text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              <b>Why now?</b> Because without immediate action, soil and environmental restoration will face irreversible damage. Our solutions repurpose biomass into biochar, revitalizing soils and ensuring long-term sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Hyperlocal Section */}
      <section className="py-8 sm:py-12 md:py-[25px] px-4 sm:px-8 md:px-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="text-white order-2 md:order-1">
            <h2 className="font-montserrat font-semibold text-xl sm:text-2xl md:text-[35px] leading-normal sm:leading-normal tracking-[0%] mb-4 sm:mb-6 pb-1
                         bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
              Why are we hyperlocal?
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-[#474747] font-light text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              At Nexchar, we design technology that works where it's needed most—directly at the source of biomass residues. Our modular pyrolysis systems are built for adaptability, operating efficiently in rural and agricultural settings where conventional solutions often fail.
              </p>
              <p className="text-[#474747] font-light text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              This approach enables two key advantages: first, it eliminates unnecessary transportation costs by processing biomass locally, ensuring practical logistics for decentralized operations. Second, it allows effortless scaling—deploying additional units where needed to repurpose all available residues into valuable biochar, preventing waste, restoring soil health and sequestering carbon.
              </p>
            </div>
          </div>
          <div className="w-full order-1 md:order-2">
            <img
              src={getImagePath("/who-are-we.png")}
              alt="The Biochar Cycle"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Team Section */}
      <section className="px-4 sm:px-8 md:px-[150px]">
        <h2 className="font-montserrat font-semibold text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-[100%] tracking-[0%] mb-8 sm:mb-12
                     bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
          Our Team
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col">
              <div className="relative bg-[#F8F8F8] rounded-lg overflow-hidden transition-all duration-300">
                <img
                  src={getImagePath(member.image)}
                  alt={member.name}
                  className="w-full h-[280px] object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-medium text-[#474747] mb-2">{member.name}</h3>
                  <p className="text-[#666666] mb-4">{member.role}</p>
                  <button
                    onClick={() => toggleTeamMember(member.id)}
                    className="text-[#886808] hover:text-[#C5A133] transition-colors duration-300"
                  >
                    {expandedTeamMember === member.id ? 'Read less' : 'Read more'}
                  </button>
                </div>
                
                {/* Expanded Content */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  expandedTeamMember === member.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-6 pt-0">
                    <p className="text-[#474747] text-sm leading-relaxed whitespace-pre-line">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />
      
      {/* Advisory Board Section */}
      <section className="py-4 px-4 sm:px-8 md:px-[150px]">
        <h2 className="font-montserrat font-semibold text-2xl sm:text-3xl md:text-[40px] leading-normal sm:leading-normal tracking-[0%] mb-8 sm:mb-8 pb-1
                     bg-gradient-to-r from-[#886808] to-[#C5A133] text-transparent bg-clip-text">
          Advisory Board
        </h2>
        
        <div className="max-w-[1200px]">
          <p className="text-[#474747] font-light text-base sm:text-lg md:text-xl leading-relaxed">
          Nexchar’s advisory board is composed of seasoned experts, industry leaders, and sustainability pioneers who serve as invaluable guides in shaping our mission. Their insights and experience help steer Nexchar toward practical, high-impact solutions for soil restoration and biomass utilization.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Connect Section */}
      <section id="connect" className="pt-4 pb-20 px-4 sm:px-8 md:px-[150px]">
        <div className="bg-gradient-to-r from-[#222D2B] to-[#44615B] rounded-2xl p-6 sm:p-8 id='connect'">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-2xl sm:text-3xl font-medium leading-normal sm:leading-normal pb-1 bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text">Connect<br/>Want to join our team?</h2>
              
              <p className="pt-4 text-[#F0EDE4]/80 text-sm sm:text-base leading-relaxed">
              A world of possibilities and opportunities is open to those who believe in our vision of building Scalable Carbon Solutions for a Sustainable Future . Contact us to  learn more about our way of working and job openings.
              </p>
            </div>

            {/* Right Column - Contact Form */}
            <div className="rounded-xl">
              <div className="space-y-4">
                <h3 className="text-[#F0EDE4] text-xl sm:text-2xl mb-4">Contact <span className="text-[#A4966E]">Us</span></h3>
                
                <div className="space-y-3">
                  <div>
                    <label htmlFor="name" className="text-[#F0EDE4] block mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-[#2C3B38] border border-[#F0EDE4]/20 rounded-lg p-2.5 text-[#F0EDE4] focus:outline-none focus:border-[#A4966E]"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-[#F0EDE4] block mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-[#2C3B38] border border-[#F0EDE4]/20 rounded-lg p-2.5 text-[#F0EDE4] focus:outline-none focus:border-[#A4966E]"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-[#F0EDE4] block mb-1">Write to us....</label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full bg-[#2C3B38] border border-[#F0EDE4]/20 rounded-lg p-2.5 text-[#F0EDE4] focus:outline-none focus:border-[#A4966E]"
                      placeholder="Enter your message"
                    />
                  </div>

                  <button className="w-full bg-gradient-to-r from-[#886808] to-[#C5A133] text-white py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity">
                    Send Message
                  </button>

                  <p className=" text-center text-xs sm:text-sm bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] text-transparent bg-clip-text">
                    Or reach out at <a href="mailto:info@nexcharventures.com" className="text-[#A4966E] hover:underline">info@nexcharventures.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs; 