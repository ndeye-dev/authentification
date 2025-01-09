import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className="flex justify-between items-center p-5 bg-gray-900 text-white">
      <div className="text-2xl font-bold">ElectroShop</div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-orange-500">Accueil</a></li>
          <li><a href="#" className="hover:text-orange-500">Produits</a></li>
          <li><a href="#" className="hover:text-orange-500">Promotions</a></li>
          <li><a href="#" className="hover:text-orange-500">Contact</a></li>
        </ul>
      </nav>
      <button
             type="submit"
             className=" py-2 px-2 bg-orange-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
           >
             <Link to="/LoginForm">Deconnecter</Link>
        </button>
    </header>
  );
}

export default Header;
