
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: 'BIOCHAR',
    image: '/lovable-uploads/f372d015-695b-4f0d-bd25-a7cbf2a7286b.png'
  }, 
  {
    id: 2,
    name: 'BIOCOAL',
    image: '/lovable-uploads/f8367d4d-176c-4c0f-b2cb-a8eb3883a8ba.png'
  }, 
  {
    id: 3,
    name: 'WOOD VINEGAR',
    image: '/lovable-uploads/da065e7f-742b-4b7d-9a90-dadc376c350a.png'
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
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* The product name is already overlaid on the images, so we don't need to display it here */}
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
