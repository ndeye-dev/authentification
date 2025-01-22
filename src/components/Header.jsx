import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-5 bg-gray-900 text-white">
      <div className="text-2xl font-bold">ElectroShop</div>
      
      {/* Bouton Hamburger pour mobile */}
      <button
        className="lg:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? 'X' : '☰'}
      </button>

      {/* Menu de navigation */}
      <nav className={`lg:flex ${menuOpen ? 'block' : 'hidden'} absolute lg:static top-0 left-0 right-0 bg-gray-900 lg:bg-transparent lg:flex-row p-5 lg:p-0`}>
        <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
          <li><a href="#" className="hover:text-orange-500">Accueil</a></li>
          <li><a href="#" className="hover:text-orange-500">Produits</a></li>
          <li><a href="#" className="hover:text-orange-500">Promotions</a></li>
          <li><a href="#" className="hover:text-orange-500">Contact</a></li>
        </ul>
      </nav>

      <button
        type="submit"
        className="py-2 px-2 bg-orange-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        <Link to="/LoginForm">Déconnecter</Link>
      </button>
    </header>
  );
}

export default Header;
