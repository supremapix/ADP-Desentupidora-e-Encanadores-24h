import React from 'react';

interface AnimatedLogoProps {
  width?: number;
  height?: number;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ width = 100, height = 100 }) => {
  return (
    <img 
      src="https://img.desentopeadp.com.br/adp-desentupidora.webp" 
      alt="ADP Desentupidora" 
      width={width}
      height={height}
      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 select-none"
      referrerPolicy="no-referrer"
    />
  );
};

export default AnimatedLogo;
