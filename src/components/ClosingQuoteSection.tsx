import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './QuoteSlider.css';

const quotes = [
  {
    id: 1,
    text: "Global soils are collapsing—overworked, depleted, and contaminated\n\nBiochar is the most effective known solution to restore them & biomass waste has no better use than becoming biochar\n\n\"Nothing else comes close\"",
    author: "— Arjun Dhawan, Co-Founder, Nexchar"
  },
  {
    id: 2,
    text: "Global soils are collapsing—overworked, depleted, and contaminated\n\nBiochar is the most effective known solution to restore them & biomass waste has no better use than becoming biochar\n\n\"Nothing else comes close\"",
    author: "-Paramjeet Singh Sehra, Co-Founder, Nexchar"
  }
];

export default function ClosingQuoteSection() {
  return (
    <section className="relative w-full bg-[#111111] py-20 md:py-32">
      <div className="max-w-[90rem] mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full"
        >
          {quotes.map((quote) => (
            <SwiperSlide key={quote.id}>
              <div className="flex flex-col items-center justify-center min-h-[30rem] px-4 md:px-20 py-16 bg-gradient-to-r from-[#A4966E] to-[#F0EDE4] rounded-2xl mx-4 md:mx-16 lg:mx-24">
                <div className="text-center max-w-4xl">
                  {quote.text.split('\n\n').map((paragraph, index) => (
                    <p 
                      key={index} 
                      className={`mb-8 ${
                        index === 0 
                          ? 'text-2xl md:text-3xl lg:text-4xl font-bold' 
                          : index === 2 
                            ? 'text-xl md:text-2xl lg:text-3xl italic' 
                            : 'text-xl md:text-2xl lg:text-3xl'
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                  <p className="text-lg md:text-xl mt-8 font-medium">{quote.author}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
} 