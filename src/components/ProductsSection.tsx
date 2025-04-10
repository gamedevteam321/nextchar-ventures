
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: 'BIOCHAR',
    image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
    description: 'Carbon-rich soil amendment'
  },
  {
    id: 2,
    name: 'BIOCOAL',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
    description: 'Renewable energy alternative'
  },
  {
    id: 3,
    name: 'WOOD VINEGAR',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
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
                <div className="h-64 overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gold mb-2">{product.name}</h3>
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
