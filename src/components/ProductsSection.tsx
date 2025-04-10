
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: 'BIOCHAR',
    image: '/lovable-uploads/9acbbd7c-206c-4cf1-b285-fcf27c6ccce4.png',
    description: 'Carbon-rich soil amendment'
  },
  {
    id: 2,
    name: 'BIOCOAL',
    image: '/lovable-uploads/19ad373a-ee93-4503-b837-eb23721e9a45.png',
    description: 'Renewable energy alternative'
  },
  {
    id: 3,
    name: 'WOOD VINEGAR',
    image: '/lovable-uploads/eb273200-007c-45aa-ab93-8e064ce3f221.png',
    description: 'Natural plant protection'
  }
];

const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="section-padding bg-carbon-light px-6 md:px-12">
      <div className="container mx-auto">
        <h2 className="section-title">Our Biocarbons</h2>
        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
          Pioneering next generation carbon solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="bg-carbon border border-gold/20 overflow-hidden card-effect">
              <CardContent className="p-0">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                  />
                  {/* Product name overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-gold">{product.name}</h3>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <p className="text-gray-400">{product.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
