import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    quote: 'Global soils are collapsing—overworked, depleted, and contaminated.\n\nBiochar is the most effective known solution to restore them & biomass waste has no better use than becoming biochar.\n\nNothing else comes close.',
    author: "— Arjun Dhawan",
    position: "Co-Founder, Nexchar"
  },
  {
    id: 2,
    quote: "Our focus from the start has been to design purpose-driven technology that works within the realities of where it's needed most—in rural villages across the developing world. Our solutions are practical, portable and predictable - producing the highest quality Biochar with the Lowest Skills and complexity.",
    author: "— Paramjeet Singh Sehra",
    position: "Co-Founder, Nexchar"
  }
];

export default function ClosingSection() {
  return (
    <section className="py-8 sm:py-12 md:py-[40px] w-full px-4 sm:px-8 md:px-[150px]">
      <div className="max-w-[90rem] mx-auto">
        <div 
          className="rounded-[32px] overflow-hidden"
          style={{
            background: 'linear-gradient(99.49deg, #222D2B 0.47%, #44615B 98.81%)'
          }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            speed={1000}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
              renderBullet: function (index, className) {
                return index === 0 
                  ? `<span class="${className}" style="width: 24px; height: 4px; border-radius: 2px; background-color: #00A92D;"></span>`
                  : `<span class="${className}" style="width: 24px; height: 4px; border-radius: 2px; background-color: #FFFFFF;"></span>`;
              },
            }}
            className="w-full !pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="flex flex-col items-center justify-center min-h-[180px] py-8 px-8 md:px-16">
                  <div className="text-center w-full">
                    <blockquote className="text-lg sm:text-xl md:text-xl font-medium mb-4"
                      style={{
                        background: 'linear-gradient(90deg, #F0EDE4 0%, #A4966E 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="space-y-1 text-right">
                      <p 
                        className="text-base sm:text-lg font-medium"
                        style={{
                          background: 'linear-gradient(90deg, #F0EDE4 0%, #A4966E 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      >
                        {testimonial.author}
                      </p>
                      <p className="text-white/80 text-sm">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
