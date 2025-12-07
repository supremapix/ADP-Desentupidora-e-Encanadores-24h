import React from 'react';

/**
 * PlumberGallery Component
 * 
 * Displays a responsive gallery of plumber-themed images with optimized loading.
 * Uses picture elements with srcset for responsive images and WebP format support.
 * 
 * Dependencies:
 * - Font Awesome 6.4.0+ (loaded globally in index.html)
 * - Tailwind CSS for styling
 */

interface PlumberImage {
  id: string;
  title: string;
  description: string;
  basePath: string;
}

const PLUMBER_IMAGES: PlumberImage[] = [
  {
    id: 'plumber-1',
    title: 'Encanador 24h',
    description: 'Atendimento profissional 24 horas por dia',
    basePath: '/assets/images/plumber/plumber-1'
  },
  {
    id: 'plumber-2',
    title: 'Serviço Profissional',
    description: 'Equipe qualificada e experiente',
    basePath: '/assets/images/plumber/plumber-2'
  },
  {
    id: 'drain-1',
    title: 'Desentupimento de Ralos',
    description: 'Desobstrução rápida e eficiente',
    basePath: '/assets/images/plumber/drain-1'
  },
  {
    id: 'sink-1',
    title: 'Pias e Instalações',
    description: 'Instalação e manutenção de pias',
    basePath: '/assets/images/plumber/sink-1'
  }
];

interface PlumberGalleryProps {
  showTitle?: boolean;
  showDescription?: boolean;
  gridCols?: 2 | 3 | 4;
}

const PlumberGallery: React.FC<PlumberGalleryProps> = ({ 
  showTitle = true, 
  showDescription = true,
  gridCols = 4 
}) => {
  const gridClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  }[gridCols];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
              Nossos Serviços de Encanamento e Desentupimento
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Especialistas em soluções hidráulicas com atendimento 24h em Curitiba e região
            </p>
          </div>
        )}
        
        <div className={`grid ${gridClass} gap-6`}>
          {PLUMBER_IMAGES.map((image) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <picture>
                {/* WebP sources for better performance */}
                <source
                  srcSet={`${image.basePath}@mobile.webp 800w, ${image.basePath}.webp 1920w`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  type="image/webp"
                />
                {/* JPEG fallback */}
                <source
                  srcSet={`${image.basePath}@mobile.jpg 800w, ${image.basePath}.jpg 1920w`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  type="image/jpeg"
                />
                <img
                  src={`${image.basePath}.jpg`}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </picture>
              
              {showDescription && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white font-display text-xl font-bold mb-2 transform translate-y-0 group-hover:translate-y-[-5px] transition-transform duration-300">
                    {image.title}
                  </h3>
                  <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {image.description}
                  </p>
                </div>
              )}
              
              {/* Active indicator */}
              <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 border border-white/20">
                <i className="fa fa-circle text-[8px] animate-pulse"></i> Disponível
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlumberGallery;
