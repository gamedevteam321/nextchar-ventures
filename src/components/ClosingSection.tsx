import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    quote: "Global soils are collapsing—overworked, depleted, and contaminated. Biochar is the most effective known solution to restore them & biomass waste has no better use than becoming biochar. Nothing else comes close.",
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
    <section className="py-8 sm:py-12 md:py-[40px] w-full overflow-hidden">
      <div 
        className="relative py-8 sm:py-8 md:py-8"
        style={{
          background: 'linear-gradient(99.49deg, #222D2B 0.47%, #44615B 98.81%)'
        }}
      >
        <div className="max-w-[90rem] mx-auto w-full px-4 sm:px-8 md:px-10 lg:px-16 xl:px-20">
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
                return `<span class="${className}" style="background-color: #F0EDE4;"></span>`;
              },
            }}
            className="swiper-container !pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="w-full flex-shrink-0 px-8 sm:px-12 md:px-16">
                  <div className="max-w-3xl mx-auto text-center">
                    <blockquote className="text-beige text-base sm:text-lg md:text-xl font-light leading-relaxed mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="space-y-0.5 mb-12">
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
                      <p className="text-beige/80 text-xs sm:text-sm">
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
