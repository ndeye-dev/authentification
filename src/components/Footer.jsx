import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; 

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p>&copy; 2025 ElectroShop - Tous droits réservés</p>
      <div className="mt-4 flex justify-center">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-3 hover:text-orange-500">
          <FaFacebook className="text-2xl" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-3 hover:text-orange-500">
          <FaInstagram className="text-2xl" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-3 hover:text-orange-500">
          <FaTwitter className="text-2xl" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
