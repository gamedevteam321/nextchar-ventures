
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const products = [{
  id: 1,
  name: 'BIOCHAR',
  image: '/lovable-uploads/9acbbd7c-206c-4cf1-b285-fcf27c6ccce4.png'
}, {
  id: 2,
  name: 'BIOCOAL',
  image: '/lovable-uploads/19ad373a-ee93-4503-b837-eb23721e9a45.png'
}, {
  id: 3,
  name: 'WOOD VINEGAR',
  image: '/lovable-uploads/eb273200-007c-45aa-ab93-8e064ce3f221.png'
}];

const ProductsSection: React.FC = () => {
  return <section id="products" className="section-padding bg-carbon-dark px-6 md:px-12 py-16">
      <div className="container mx-auto">
        <div className="text-left max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Biocarbons</h2>
          <p className="text-gray-400">
            Pioneering next generation carbon solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map(product => (
            <Card key={product.id} className="bg-carbon border border-gold/20 overflow-hidden card-effect rounded-xl">
              <CardContent className="p-0">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110" 
                    onError={(e) => {
                      console.error(`Failed to load image: ${product.image}`);
                      e.currentTarget.src = 'https://placehold.co/600x400/000000/FFFFFF?text=Image+Not+Found';
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <h3 className="text-white text-xl font-bold">{product.name}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>;
};

export default ProductsSection;
