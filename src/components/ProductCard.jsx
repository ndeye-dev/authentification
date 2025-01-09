import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 text-center w-64">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-xl font-bold text-orange-500 mb-4">${product.price}</p>
      <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-400 transition duration-300">
        Ajouter au panier
      </button>
    </div>
  );
}

export default ProductCard;
