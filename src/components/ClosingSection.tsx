import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './QuoteSlider.css';

const quotes = [
  {
    id: 1,
    mainTitle: "Global soils are collapsing—overworked, depleted, and contaminated",
    description: "Biochar is the most effective known solution to restore them & biomass waste has no better use than becoming biochar",
    quote: "\"Nothing else comes close\"",
    author: "— Arjun Dhawan, Co-Founder, Nexchar"
  },
  {
    id: 2,
    mainTitle: "Global soils are collapsing—overworked, depleted, and contaminated",
    description: "Biochar is the most effective known solution to restore them & biomass waste has no better use than becoming biochar",
    quote: "\"Nothing else comes close\"",
    author: "-Paramjeet Singh Sehra, Co-Founder, Nexchar"
  }
];

export default function ClosingSection() {
  return (
    <section id="about" className="section-padding bg-carbon-dark px-6 md:px-12">
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
              <div className="flex flex-col justify-center min-h-[20rem] px-4 md:px-20 py-12 bg-gradient-to-r from-[#F0EDE4] to-[#A4966E] rounded-2xl mx-4 md:mx-16 lg:mx-24">
                <div className="max-w-4xl mx-auto w-full">
                  <div className="text-left">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111111] mb-8">
                      {quote.mainTitle}
                    </h2>
                    <p className="text-xl md:text-2xl lg:text-3xl text-[#111111]/90 mb-8">
                      {quote.description}
                    </p>
                    <p className="text-xl md:text-2xl lg:text-3xl italic text-[#111111] mb-8">
                      {quote.quote}
                    </p>
                  </div>
                  <p className="text-lg md:text-xl text-[#111111]/80 text-right">
                    {quote.author}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
