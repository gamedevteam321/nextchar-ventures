export default function FooterCTA() {
  return (
    <section className="w-full py-12 md:py-20 overflow-x-hidden" style={{ background: '#F0EDE4' }}>
      <div className="max-w-[90rem] mx-auto w-full">
        <div className="text-center mb-8 md:mb-12 w-full px-4 sm:px-10 md:px-16 lg:px-20 xl:px-40">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8" 
              style={{ 
                background: 'linear-gradient(90deg, #886808 32.21%, #C5A133 76.44%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
            THE TIME IS NOW
          </h2>
        </div>
        <div className="max-w-4xl mx-auto w-full">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 text-center leading-relaxed">
            We are a carbon project developer leveraging proprietary modular pyrolysis technology to convert agricultural and forestry waste into biochar, addressing waste management challenges while creating a product with substantial agricultural benefits and carbon removal potential.
          </p>
        </div>
      </div>
    </section>
  );
}
