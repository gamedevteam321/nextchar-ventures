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
        <div className="px-4 sm:px-10 md:px-16 lg:px-20 xl:px-20 mx-auto w-full">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 text-center leading-relaxed">
          We are a carbon project developer leveraging proprietary modular pyrolysis technology to transform diverse biomass waste streams into sustainable and high quality Biochar and Biocoal. Our decentralized approach is designed for scalable deployment across hyperlocal sites and tackles critical waste management issues while revitalizing soils, preventing deforestation and sequestering Carbon.
          </p>
        </div>
      </div>
    </section>
  );
}
