
import React from 'react';
import AnimatedLogo from './AnimatedLogo';

interface PremiumImageProps {
  src: string;
  alt: string;
  className?: string;
}

const PremiumImage: React.FC<PremiumImageProps> = ({ src, alt, className = "" }) => {
  return (
    <div className={`relative overflow-hidden group rounded-[2rem] shadow-2xl bg-dark ${className}`}>
      {/* Imagem Base com Animação de Zoom */}
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      
      {/* Overlay de Cor Primária (Transparência) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 via-primary/20 to-transparent mix-blend-multiply opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
      
      {/* Brilho Premium de Varredura */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"></div>

      {/* Marca d'água de Identidade */}
      <div className="absolute bottom-6 right-6 h-12 w-auto opacity-30 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 grayscale brightness-200">
        <AnimatedLogo />
      </div>

      {/* Borda Interna Sutil */}
      <div className="absolute inset-4 border border-white/10 rounded-[1.5rem] pointer-events-none group-hover:inset-2 transition-all duration-500"></div>
    </div>
  );
};

export default PremiumImage;
