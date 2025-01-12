import React from 'react';
// import Img2 from '../assets/img2.avif'
function HeroSection() {
  return (
    <section className="relative bg-cover bg-center h-[500px] bag" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MjB8fGVsZWN0cmljfGVufDB8fHx8fDE2NzA2ODI2MDE&ixlib=rb-1.2.1&q=80&w=1080)',
    }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white p-10">
        <h1 className="text-5xl font-bold mb-4">Bienvenue chez ElectroShop</h1>
        <p className="text-xl mb-6">Les meilleurs appareils électroménagers à prix imbattables !</p>
        <button className="px-6 py-3 bg-orange-500 text-white text-lg rounded-lg hover:bg-orange-400 transition duration-300">
          Découvrez nos produits
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
