
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: 'BIOCHAR',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1000&q=80'
  }, 
  {
    id: 2,
    name: 'BIOCOAL',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80'
  }, 
  {
    id: 3,
    name: 'WOOD VINEGAR',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80'
  }
];

const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="section-padding bg-carbon-dark px-6 md:px-12 py-16">
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
                      e.currentTarget.src = 'https://placehold.co/600x400/333333/FFFFFF?text=Biocarbon';
                    }}
                  />
                  <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  </div>
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
