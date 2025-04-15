import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './QuoteSlider.css';

const quotes = [
  {
    id: 1,
    text: `"We believe in the power of innovation and technology to transform industries and create lasting value for our partners and portfolio companies."`
  },
  {
    id: 2,
    text: `"Our mission is to identify and support visionary entrepreneurs who are building the future of technology and business."`
  },
  {
    id: 3,
    text: `"Through strategic investments and hands-on guidance, we help turn groundbreaking ideas into market-leading companies."`
  },
  {
    id: 4,
    text: `"We're committed to fostering sustainable growth and creating positive impact in the technology ecosystem."`
  }
];

export default function QuoteSliderSection() {
  return (
    <section className="relative w-full px-[200px] py-20 md:py-32">
      <div 
        className="relative max-w-[90rem] mx-auto rounded-3xl"
        style={{ background: 'linear-gradient(90deg, #A4966E 0%, #F0EDE4 100%)' }}
      >
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
              <div className="flex flex-col items-center justify-center min-h-[20rem] py-16">
                <p className="quote-text text-center text-lg md:text-2xl lg:text-3xl font-medium max-w-4xl mb-16">
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