import React, { useState, useEffect } from 'react';

interface HeroProps {
  /**
   * Title text for the hero section
   */
  title?: string;
  /**
   * Subtitle text
   */
  subtitle?: string;
  /**
   * Description text
   */
  description?: string;
  /**
   * Show video background (true) or image background (false)
   */
  useVideoBackground?: boolean;
  /**
   * Path to video file (MP4)
   */
  videoSrcMp4?: string;
  /**
   * Path to video file (WebM)
   */
  videoSrcWebm?: string;
  /**
   * Path to poster/fallback image for desktop
   */
  posterSrc?: string;
  /**
   * Path to poster/fallback image for mobile
   */
  posterMobileSrc?: string;
  /**
   * Call-to-action button text
   */
  ctaText?: string;
  /**
   * Call-to-action button link
   */
  ctaLink?: string;
  /**
   * Secondary CTA button text
   */
  secondaryCtaText?: string;
  /**
   * Secondary CTA button link
   */
  secondaryCtaLink?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Hero component with video/image background support
 * Optimized for both desktop and mobile devices
 */
const Hero: React.FC<HeroProps> = ({
  title = '🚨 Atendimento de Urgências CIC Desentupidora ADP Curitiba 🚨',
  subtitle = 'Chegada média: 40 a 45 minutos',
  description = 'Atendendo Cidade Industrial de Curitiba (CIC), Fazendinha, Campo Comprido, Orleans, São Braz, Mossunguê (Ecoville) e Santa Felicidade.',
  useVideoBackground = false,
  videoSrcMp4 = '/assets/video/hero.mp4',
  videoSrcWebm = '/assets/video/hero.webm',
  posterSrc = '/assets/images/plumber/hero-poster.jpg',
  posterMobileSrc = '/assets/images/plumber/hero-poster@mobile.jpg',
  ctaText = 'Chamar Agora',
  ctaLink = '#contato',
  secondaryCtaText = 'WhatsApp (Online)',
  secondaryCtaLink = 'https://api.whatsapp.com/send?phone=5541985171966',
  className = ''
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Detect if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  // Determine which poster to use based on device
  const currentPoster = isMobile ? posterMobileSrc : posterSrc;

  return (
    <section className={`hero-section relative bg-dark text-white pt-24 pb-32 overflow-hidden ${className}`}>
      {/* Background Layer - Video or Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {useVideoBackground && !isMobile ? (
          // Video background for desktop
          <>
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={currentPoster}
              onLoadedData={handleVideoLoad}
              className={`w-full h-full object-cover transition-opacity duration-1000 ${
                isVideoLoaded ? 'opacity-30' : 'opacity-0'
              }`}
              aria-hidden="true"
            >
              <source src={videoSrcWebm} type="video/webm" />
              <source src={videoSrcMp4} type="video/mp4" />
              {/* Fallback image if video not supported */}
              <img 
                src={currentPoster} 
                alt="Hero background" 
                className="w-full h-full object-cover"
              />
            </video>
            {/* Show poster while video loads */}
            {!isVideoLoaded && (
              <picture>
                <source srcSet={`${posterSrc.replace('.jpg', '.webp')}`} type="image/webp" />
                <img 
                  src={posterSrc} 
                  alt="Hero background" 
                  className="w-full h-full object-cover opacity-30"
                />
              </picture>
            )}
          </>
        ) : (
          // Image background (mobile or when video disabled)
          <picture>
            <source 
              srcSet={`${posterMobileSrc.replace('.jpg', '.webp')}`} 
              type="image/webp" 
              media="(max-width: 767px)"
            />
            <source 
              srcSet={posterMobileSrc} 
              type="image/jpeg" 
              media="(max-width: 767px)"
            />
            <source 
              srcSet={`${posterSrc.replace('.jpg', '.webp')}`} 
              type="image/webp"
            />
            <img 
              src={posterSrc} 
              alt="Hero background" 
              className="w-full h-full object-cover opacity-30 transform scale-100 animate-[pulse_20s_ease-in-out_infinite] lg:animate-none lg:hover:scale-110 lg:transition-transform lg:duration-[20s]"
              loading="eager"
            />
          </picture>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 to-dark"></div>
      </div>

      {/* Status Bar */}
      <div className="absolute top-0 left-0 w-full bg-red-600/90 text-white py-2 z-20 overflow-hidden shadow-lg">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2 animate-pulse">
          <i className="fa fa-circle text-xs text-green-300" aria-hidden="true"></i>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
            Status Agora: Equipes disponíveis no CIC, Fazendinha e Campo Comprido
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 mt-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Badge */}
          <div 
            className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-widest mb-2 animate-fade-in-up" 
            style={{ animationDelay: '0.1s' }}
          >
            <i className="fa fa-bolt mr-1 text-yellow-300" aria-hidden="true"></i> Chegamos Rápido
          </div>

          {/* Title */}
          <h1 
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up" 
            style={{ animationDelay: '0.2s' }}
          >
            {title.split('Urgências CIC').map((part, index) => 
              index === 0 ? (
                <React.Fragment key={index}>{part}Urgências <span className="text-primary">CIC</span></React.Fragment>
              ) : (
                <React.Fragment key={index}>{part}</React.Fragment>
              )
            )}
          </h1>

          {/* Subtitle */}
          <h2 
            className="text-xl sm:text-2xl text-gray-300 font-light animate-fade-in-up" 
            style={{ animationDelay: '0.3s' }}
          >
            {subtitle.split(':').length > 1 ? (
              <>
                {subtitle.split(':')[0]}:{' '}
                <span className="text-white font-bold bg-red-600 px-2 rounded shadow-lg shadow-red-600/50 animate-pulse">
                  {subtitle.split(':')[1]}
                </span>
              </>
            ) : (
              subtitle
            )}
          </h2>

          {/* Description */}
          <p 
            className="text-gray-300 text-base sm:text-lg animate-fade-in-up" 
            style={{ animationDelay: '0.4s' }}
          >
            {description}
          </p>

          {/* Features List */}
          <ul 
            className="space-y-2 animate-fade-in-up" 
            style={{ animationDelay: '0.5s' }}
          >
            {[
              'Tempo médio de chegada: 40 a 45 minutos',
              'Atendimento 24 horas, 7 dias por semana',
              'Profissionais licenciados e experientes',
              'Garantia em todos os serviços prestados'
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 group">
                <i 
                  className="fa fa-check-circle text-green-500 transition-transform duration-300 group-hover:scale-125" 
                  aria-hidden="true"
                ></i>
                <span className="text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div 
            className="pt-4 flex flex-col sm:flex-row gap-4 animate-fade-in-up" 
            style={{ animationDelay: '0.6s' }}
          >
            <a 
              href={ctaLink}
              className="hero-cta-primary bg-red-600 hover:bg-red-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all hover:scale-105 inline-block hover:shadow-[0_0_30px_rgba(220,38,38,0.8)] text-center btn-shimmer relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 animate-[pulse_2s_infinite]"></span>
              <i className="fa fa-phone mr-2 animate-bounce" aria-hidden="true"></i>
              {ctaText}
            </a>
            <a 
              href={secondaryCtaLink}
              className="hero-cta-secondary bg-[#25d366] hover:bg-green-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg transition-all hover:scale-105 inline-block text-center border-2 border-transparent hover:border-white"
            >
              <i className="fab fa-whatsapp mr-2" aria-hidden="true"></i>
              {secondaryCtaText}
            </a>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .btn-shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s;
        }

        .btn-shimmer:hover::before {
          left: 100%;
        }

        @media (max-width: 640px) {
          .hero-section {
            padding-top: 5rem;
            padding-bottom: 8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
