import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './QuoteSlider.css';

const quotes = [
  {
    id: 1,
    text: `"33% of Global Farmland Soils are moderately degraded, with 12 Million HA lost every year"`
  },
  {
    id: 2,
    text: `"Biochar is the simplest, cheapest and most practicable way to bring life back  to soil"`
  },
  {
    id: 3,
    text: `"The world needs to remove 10 billion tonnes of CO2  Every year to avoid ‘irreversible climate change’  and Biochar can do almost 2 Billion tons annually"`
  }
];

export default function QuoteSliderSection() {
  return (
    <section className="w-full py-12 px-4 sm:px-8 md:px-[150px]">
      <div className="max-w-[90rem] mx-auto">
        <div className="rounded-[32px] bg-gradient-to-r from-[#222D2B] to-[#44615B] overflow-hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
              renderBullet: function (index, className) {
                return index === 0 
                  ? `<span class="${className}" style="width: 24px; height: 4px; border-radius: 2px; background-color: #00A92D;"></span>`
                  : `<span class="${className}" style="width: 24px; height: 4px; border-radius: 2px; background-color: #F0EDE4;"></span>`;
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full !pb-12"
          >
            {quotes.map((quote) => (
              <SwiperSlide key={quote.id}>
                <div className="flex flex-col items-center justify-center min-h-[180px] py-8 px-8 md:px-16">
                  <p 
                    className="text-center text-xl sm:text-2xl md:text-3xl font-medium max-w-4xl"
                    style={{
                      background: 'linear-gradient(90deg, #F0EDE4 0%, #A4966E 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {quote.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
} 