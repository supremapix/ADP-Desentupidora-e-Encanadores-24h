import React, { useState, useEffect } from 'react';
import './Hero.css';
import { COMPANY_WHATSAPP } from '../constants';

// Breakpoint for mobile detection (matches Tailwind's 'md' breakpoint)
const MOBILE_BREAKPOINT = 768;

/**
 * Hero Component with Video/Image Background
 * 
 * Features:
 * - Responsive video/image background with mobile optimization
 * - Automatically disables video on mobile devices for better performance
 * - Customizable title, subtitle, and CTA button
 * - Uses Font Awesome icons (loaded via CDN in index.html)
 * 
 * Note: Default asset paths assume files are in public/assets/ directory.
 * Placeholder assets are currently in src/assets/ for development.
 * For production, move optimized assets to public/assets/ as documented in asset README files.
 */

interface HeroProps {
  /** Title text to display in the hero section */
  title?: string;
  /** Subtitle text to display below the title */
  subtitle?: string;
  /** CTA button text */
  ctaText?: string;
  /** CTA button click handler */
  onCtaClick?: () => void;
  /** Enable video background (defaults to true on desktop, false on mobile) */
  useVideoBackground?: boolean;
  /** Custom poster image path */
  posterImage?: string;
  /** Custom video sources */
  videoSources?: {
    webm?: string;
    mp4?: string;
  };
  /** Additional CSS classes for the hero container */
  className?: string;
  /** Minimum height of the hero section */
  minHeight?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = 'ADP Desentupidora',
  subtitle = 'Serviço de Desentupimento 24 Horas em Curitiba',
  ctaText = 'Solicitar Orçamento',
  onCtaClick,
  useVideoBackground = true,
  posterImage = '/assets/images/plumber/hero-poster.jpg',
  videoSources = {
    webm: '/assets/video/hero.webm',
    mp4: '/assets/video/hero.mp4',
  },
  className = '',
  minHeight = '600px',
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Determine if we should show video
  const shouldShowVideo = useVideoBackground && !isMobile;

  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      // Default behavior: open WhatsApp with security attributes
      const whatsappUrl = `https://wa.me/${COMPANY_WHATSAPP}`;
      const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      if (newWindow) newWindow.opener = null;
    }
  };

  return (
    <section 
      className={`hero-section relative overflow-hidden ${className}`}
      style={{ minHeight }}
    >
      {/* Background Media Layer */}
      <div className="hero-background absolute inset-0 w-full h-full">
        {shouldShowVideo ? (
          <video
            className="hero-video absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={posterImage}
            onLoadedData={() => setIsVideoLoaded(true)}
            aria-hidden="true"
          >
            {videoSources.webm && (
              <source src={videoSources.webm} type="video/webm" />
            )}
            {videoSources.mp4 && (
              <source src={videoSources.mp4} type="video/mp4" />
            )}
            {/* Fallback for browsers that don't support video */}
            <img 
              src={posterImage} 
              alt="Hero background" 
              className="w-full h-full object-cover"
            />
          </video>
        ) : (
          <img
            src={posterImage}
            alt="Hero background"
            className="hero-image absolute inset-0 w-full h-full object-cover"
          />
        )}
        
        {/* Overlay for better text readability */}
        <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      {/* Content Layer */}
      <div className="hero-content relative z-10 h-full flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg animate-fade-in">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="hero-subtitle text-lg md:text-xl lg:text-2xl text-white/90 mb-8 drop-shadow-md animate-fade-in-delay">
              {subtitle}
            </p>
          )}

          {/* CTA Button */}
          {ctaText && (
            <button
              onClick={handleCtaClick}
              className="hero-cta inline-flex items-center gap-2 px-8 py-4 bg-primary hover:brightness-90 text-white font-bold text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-delay-2"
              aria-label={ctaText}
            >
              <i className="fab fa-whatsapp text-2xl"></i>
              {ctaText}
            </button>
          )}
        </div>
      </div>

      {/* Scroll Indicator (optional) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <i className="fas fa-chevron-down text-white text-2xl opacity-70"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;
