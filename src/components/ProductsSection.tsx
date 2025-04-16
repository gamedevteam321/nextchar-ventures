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
    <section id="products" className="section-padding bg-carbon-dark w-full overflow-x-hidden">
      <div className="container mx-auto w-full px-4 sm:px-6 md:px-8">
        <div className="text-left max-w-3xl mb-8 md:mb-12 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Our Biocarbons</h2>
          <p className="text-gray-400 text-base md:text-lg">
            Pioneering next generation carbon solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 w-full">
          {products.map(product => (
            <Link key={product.id} to={product.link} className="w-full">
              <Card className="bg-carbon border border-gold/20 overflow-hidden card-effect rounded-xl aspect-square hover:border-gold/40 transition-all duration-300 w-full">
                <CardContent className="p-0 h-full w-full">
                  <div className="h-full overflow-hidden relative w-full">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-110" 
                      onError={(e) => {
                        console.error(`Failed to load image: ${product.image}`);
                        e.currentTarget.src = 'https://placehold.co/600x400/333333/FFFFFF?text=Biocarbon';
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
