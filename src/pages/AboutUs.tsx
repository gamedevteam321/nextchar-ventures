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

His passion stems from his early experiences and belief  that sustainable stewardship of people and the environment is integral to human success. Arjun's forward-thinking approach and never say die attitude, drives the company to make a real-world difference.`
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

Basant's experience and commitment to empowering farming communities  are integral to Nexchar's mission of enriching soils, protecting forests, and fostering a living planet.`
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

        <div className="relative z-20 h-full flex flex-col justify-end items-start text-left px-4 sm:px-8 pb-8 sm:pb-12">
          <h1 className="font-montserrat text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-medium leading-[120%] sm:leading-[110%] tracking-[0%] mb-4
                       text-white">
            We are innovators dedicated to fostering a living planet
          </h1>

        </div>
      </section>

      {/* who are weSection */}
      <section className="py-8 sm:py-12 md:py-[50px] px-4 sm:px-8 md:px-[150px] bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="text-white order-2 md:order-1">
            <h2 className="font-montserrat font-semibold text-xl sm:text-2xl md:text-[35px] leading-normal sm:leading-normal tracking-[0%] mb-4 sm:mb-6 pb-1
                         text-heading">
              Who are we ?
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-[#474747] font-regular text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              We are a waste to value enterprise leveraging proprietary modular technologies engineered for exceptional energy and operating efficiency, to transform diverse biomass waste streams into high quality, sustainable carbon products like Biochar.
              </p>
              <p className="text-[#474747] font-regular text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              Our decentralized approach enables scalable deployment across hyperlocal sites, addressing critical waste management issues while revitalizing soils, preventing deforestation and actively removing & sequestering Carbon for lasting ecological impact.
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

      

      {/* why matters Section */}
      <section className="py-8 sm:py-12 md:py-[50px] px-4 sm:px-8 md:px-[150px] bg-olive">
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
                         text-heading">
              Why it matters?
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-[#474747] font-regular text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              Soil degradation is accelerating at an alarming rate—<b>33% of global soils are already significantly degraded</b> and <b>90% of soils could be degraded by 2050</b>. This threatens the very basis of existence on the planet .. No Soil .. No Life 
              </p>
              <p className="text-[#474747] font-regular text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[150%] tracking-[0%]">
              <b>Why now?</b>  Because without immediate action, soil and environmental systems face irreversible decline. Our solutions transform waste biomass into biochar, restoring degraded soils, capturing carbon, and ensuring long-term ecological resilience—preserving the vitality of our planet for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Hyperlocal Section */}
      <section className="w-full min-h-screen relative py-8 md:py-16 flex items-center">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black before:opacity-20"
          style={{
            backgroundImage: `url(${getImagePath('/hyperlocal-bg.png')})`,
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px] relative">
          <div className="bg-white/70 backdrop-blur-sm rounded-[20px] md:rounded-[32px] p-6 md:p-12">
            <h2 className="text-[#3D4E3A] text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 md:mb-16 font-montserrat">
              Why are we hyperlocal?
            </h2>
            
            <div className="text-[#474747]">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-para md:text-lg font-regular leading-relaxed">
                  At Nexchar, we design technology that works where it's needed most—directly at the source of biomass residues. Our modular pyrolysis systems are built for adaptability, operating efficiently in rural and agricultural settings where conventional solutions often fail.
                </p>
                  <p className="text-para md:text-lg font-regular leading-relaxed">
                  This approach enables two key advantages: first, it eliminates unnecessary transportation costs by processing biomass locally, ensuring practical logistics for decentralized operations. <b>Second,</b> it allows effortless scaling—deploying additional units where needed to repurpose all available residues into valuable biochar, preventing waste, restoring soil health and sequestering carbon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Team Section */}
      <section className="py-8 sm:py-12 md:py-[50px] px-4 sm:px-8 md:px-[150px] bg-white">
        <h2 className="font-montserrat font-semibold text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-[100%] tracking-[0%] mb-8 sm:mb-12
                     text-heading">
          Our Team
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col">
              <div className="relative bg-olive rounded-lg overflow-hidden transition-all duration-300">
                <img
                  src={getImagePath(member.image)}
                  alt={member.name}
                  className="w-full h-[280px] object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-heading mb-2">{member.name}</h3>
                  <p className="text-para font-medium mb-4">{member.role}</p>
                  <button
                    onClick={() => toggleTeamMember(member.id)}
                    className="text-heading hover:text-olive transition-colors duration-300"
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

      
      
      {/* Advisory Board Section */}
      <section className="py-12 md:py-[50px] px-4 sm:px-8 md:px-[150px] bg-olive">
        <h2 className="font-montserrat font-semibold text-2xl sm:text-3xl md:text-[40px] leading-normal sm:leading-normal tracking-[0%] mb-8 sm:mb-8 pb-1
                     text-heading">
          Advisory Board
        </h2>
        
        <div className="max-w-[1200px]">
          <p className="text-para font-regular text-base sm:text-lg md:text-xl leading-relaxed">
          Nexchar's advisory board is composed of seasoned experts, industry leaders, and sustainability pioneers who serve as invaluable guides in shaping our mission. Their insights and experience help steer Nexchar toward practical, high-impact solutions for soil restoration and biomass utilization.
          </p>
        </div>
      </section>

      

      {/* Partner with Us Section */}
      <section className="py-8 md:py-[50px] px-4 sm:px-8 md:px-[150px] bg-white">
        <h2 className="font-montserrat font-semibold text-2xl sm:text-3xl md:text-[40px] leading-normal sm:leading-normal tracking-[0%] mb-8 sm:mb-8 pb-1
                     text-heading">
          Partner with Us
        </h2>
        
        <div className="max-w-[1200px]">
          <p className="text-[#474747] mb-4 font-regular text-base sm:text-lg md:text-xl leading-relaxed">
          <b>At Nexchar, we believe</b> that restoring soils and transforming waste into value is a mission too big for any one organization to tackle alone. That's why we've built a unique <b>low-risk, high-impact franchise model</b> designed to empower individuals and businesses to join us in scaling sustainable solutions while earning and contributing meaningfully to environmental restoration.
          </p>
          <p className="text-[#474747] mb-4 font-regular text-base sm:text-lg md:text-xl leading-relaxed">
          We provide our  complete cutting-edge proprietary technology at a <b>fraction of the cost</b>, with <b>full equipment and maintenance support</b>—ensuring that partners can focus on making an impact without operational risks. With <b>complete buy back</b>,  this model is designed to be completely de-risked and an  ideal opportunity to invest in sustainability while building a profitable enterprise.
          </p>
          <p className="text-[#474747] mb-4 font-regular text-base sm:text-lg md:text-xl leading-relaxed">
          By partnering with us, you'll gain access to <b>proven technology</b>, <b>operational expertise, and a thriving network</b>, all working toward a shared goal: restoring soils, reducing waste, and creating a more sustainable future. 
          </p>
          <p className="text-[#474747] mb-4 font-medium text-base sm:text-lg md:text-xl leading-relaxed">
          Together, we can drive change, scale solutions, and contribute to building a resilient future that benefits generations to come.
          </p>
        </div>
      </section>

      

      {/* Connect Section */}
      <section id="connect" className="py-12 md:py-[50px] px-4 sm:px-8 md:px-[150px] bg-olive">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-4 lg:pr-12">
            <h2 className="text-heading text-2xl sm:text-3xl font-medium">Connect</h2>
            <h3 className="text-heading text-2xl sm:text-3xl font-medium">Want to join our team?</h3>
            
            <p className="text-[#474747] text-sm sm:text-base leading-relaxed max-w-lg">
              A world of possibilities and opportunities is open to those who believe in our purpose of renewing life inspired by trees. To learn more about our way of working and job openings, visit the Join our Team page.
            </p>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex justify-center">
            <div className="bg-white rounded-xl p-6 shadow-lg max-w-md w-full">
              <div className="space-y-4">
                <h3 className="text-heading text-xl sm:text-2xl mb-4 font-semibold">Contact Us</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-[#474747] block mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-olive rounded-lg p-3 text-[#474747] focus:outline-none"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-[#474747] block mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-olive rounded-lg p-3 text-[#474747] focus:outline-none"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-[#474747] block mb-2">Write to us....</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full bg-olive rounded-lg p-3 text-[#474747] focus:outline-none"
                      placeholder="Enter your message"
                    />
                  </div>

                  <button className="w-full bg-[#3D4E3A] text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                    Send Message
                  </button>

                  <p className="text-center text-sm text-[#474747]">
                    Or reach out at <a href="mailto:info@nexcharventures.com" className="text-[#474747] hover:underline">info@nexcharventures.com</a>
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