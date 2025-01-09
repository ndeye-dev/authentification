import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Lave-linge Samsung', price: 499, image: '/images/lave-linge.jpg' },
  { id: 2, name: 'Réfrigérateur LG', price: 799, image: '/images/refrigerateur.jpg' },
  { id: 3, name: 'Four à micro-ondes Panasonic', price: 129, image: '/images/micro-ondes.jpg' },
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
