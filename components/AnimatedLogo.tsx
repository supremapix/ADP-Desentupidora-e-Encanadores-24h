import React from 'react';

const AnimatedLogo: React.FC = () => {
  return (
    <img 
      src="https://img.desentopeadp.com.br/adp-desentupidora.webp" 
      alt="ADP Desentupidora" 
      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 select-none"
      referrerPolicy="no-referrer"
    />
  );
};

export default AnimatedLogo;
