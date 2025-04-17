import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './QuoteSlider.css';

const quotes = [
  {
    id: 1,
    text: `"From degraded to regenerated — biochar is the bridge to fertile, living soil"`
  },
  {
    id: 2,
    text: `"Today's soil is tired, depleted, and carbon-starved — biochar is our way of bringing it back to life"`
  },
  {
    id: 3,
    text: `"The world needs to remove 10 billion tonnes of CO2  Every year to avoid 'irreversible climate change"`
  },
  {
    id: 4,
    text: `"Biochar in the Tropics can achieve at least 20% of this."`
  }
  
];

export default function QuoteSliderSection() {
  return (
    <section className="relative w-full py-12 md:py-0 overflow-x-hidden px-4 sm:px-10 md:px-16 lg:px-20 xl:px-40 bg-green-dark">
      <div className="relative max-w-[90rem] mx-auto rounded-2xl md:rounded-3xl overflow-hidden w-full">
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
              <div className="flex flex-col items-center justify-center min-h-[15rem] md:min-h-[20rem] py-4 md:py-8 px-4 md:px-8 w-full">
                <p 
                  className="quote-text text-center text-base sm:text-lg md:text-xl lg:text-2xl font-medium max-w-4xl mb-4 md:mb-8 w-full"
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
    </section>
  );
} 