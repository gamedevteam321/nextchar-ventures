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
    mainTitle: "Our focus from the start has been to design purpose-driven technology that works within the realities of where it's needed most—in rural villages across the developing world",
    description: "Our solutions are practical , portable and predictable - producing the highest quality Biochar with the Lowest Skills and complexity",
    quote: "",
    author: "-Paramjeet Singh Sehra, Co-Founder, Nexchar"
  }
];

export default function ClosingSection() {
  return (
    <section id="about" className="py-8 sm:py-12 md:py-[25px]  bg-carbon-dark w-full overflow-x-hidden">
      <div className="max-w-[90rem] mx-auto w-full px-4 sm:px-10 md:px-16 lg:px-20 xl:px-40">
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
              <div className="flex flex-col justify-center h-[24rem] sm:h-[28rem] md:h-[32rem] py-8 md:py-12 rounded-xl md:rounded-2xl w-full" style={{ background: '#78540C' }}>
                <div className="max-w-4xl mx-auto w-full px-4 md:px-8">
                  <div className="text-left space-y-3 md:space-y-8 w-full">
                    <h2 className="font-medium text-xl md:text-2xl lg:text-3xl text-[#D4D4D4]">
                      {quote.mainTitle}
                    </h2>
                    <p className="font-medium text-xl md:text-2xl lg:text-3xl text-[#D4D4D4]/90">
                      {quote.description}
                    </p>
                    <p className="font-medium text-xl md:text-2xl lg:text-3xl italic text-[#D4D4D4]">
                      {quote.quote}
                    </p>
                  </div>
                  <p className="font-normal text-lg md:text-xl lg:text-2xl text-[#D4D4D4]/80 text-right mt-4 md:mt-8">
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
