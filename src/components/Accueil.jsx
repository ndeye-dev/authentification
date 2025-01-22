// import React from 'react'
// import Home from '../assets/home.png';
// import { Link } from "react-router-dom";

// export default function Accueil() {
//   return (
//     <div>
//       <div className=''>
//       <h1>Page d'accueil</h1>
//       </div>
//       <div className='flex justify-end'>
//       <button
//             type="submit"
//             className=" py-2 px-2 bg-teal-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
//           >
//             <Link to="/SignUpForm">Deconnecter</Link>
//           </button>
//       </div>
//       <img src={Home} alt="" />
//     </div>
//   )
// }

import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import Categorie from './Categorie';

function Accueil() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ProductList />
      <Categorie />
      <Footer />
    </div>
  );
}

export default Accueil;
