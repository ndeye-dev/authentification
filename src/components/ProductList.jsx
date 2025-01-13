import React from 'react';
import ProductCard from './ProductCard';
import Image1 from '../assets/image2.webp';
import Image3 from '../assets/image3.jpg';
import Image2 from '../assets/image22.webp'


const products = [
  { id: 1, name: 'Lave Linge Sumsung', price: 499, image: [Image1] },
  { id: 2, name: 'Réfrigérateur LG', price: 799, image: [Image2] },
  { id: 3, name: 'Four à micro-ondes ', price: 129, image: [Image3] },
];

function ProductList() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Nos produits populaires</h2>
      <div className="flex justify-center gap-8 flex-wrap">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
