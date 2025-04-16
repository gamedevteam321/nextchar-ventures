import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { getImagePath } from "@/lib/utils";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: 'BIOCHAR',
    image: getImagePath('/Biochar.png'),
    link: '/biochar'
  }, 
  {
    id: 2,
    name: 'BIOCOAL',
    image: getImagePath('/BioCoal.png'),
    link: '#'
  }, 
  {
    id: 3,
    name: 'WOOD VINEGAR',
    image: getImagePath('/Wood Vinegar.png'),
    link: '#'
  }
];

const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="bg-beige w-full overflow-hidden">
      <div className="container mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-12">
        <div className="text-left max-w-3xl mb-2 md:mb-12 w-full pl-2 sm:pl-6 md:pl-12 lg:pl-16 xl:pl-24">
          <h2 
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-1 md:mb-1 font-montserrat leading-[100%] tracking-[0%] capitalize"
            style={{
              background: 'linear-gradient(90deg, #886808 32.21%, #C5A133 76.44%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Our Biocarbons
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-dark/80 mb-8 md:mb-16">
            Pioneering next generation carbon solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 lg:gap-8 w-full max-w-[1200px] mx-auto px-1 sm:px-0">
          {products.map(product => (
            <Link key={product.id} to={product.link} className="w-full block">
              <Card className="bg-beige border border-green-dark/20 overflow-hidden card-effect rounded-xl hover:border-green-dark/40 transition-all duration-300 w-full h-full">
                <CardContent className="p-0 h-full w-full">
                  <div className="relative w-full pb-[60%] sm:pb-[100%]">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-500 hover:scale-102 sm:hover:scale-110" 
                      onError={(e) => {
                        console.error(`Failed to load image: ${product.image}`);
                        e.currentTarget.src = 'https://placehold.co/600x400/F0EDE4/222D2B?text=Biocarbon';
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* The product name is already overlaid on the images, so we don't need to display it here */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
