import React, { useState, useEffect, useRef } from 'react';

// Asset paths
const ASSETS = {
  images: {
    heroPosterJpg: '/src/assets/images/plumber/hero-poster.jpg',
    heroPosterWebp: '/src/assets/images/plumber/hero-poster.webp',
    heroPosterMobileJpg: '/src/assets/images/plumber/hero-poster@mobile.jpg',
    heroPosterMobileWebp: '/src/assets/images/plumber/hero-poster@mobile.webp',
    plumber1Jpg: '/src/assets/images/plumber/plumber-1.jpg',
    plumber1Webp: '/src/assets/images/plumber/plumber-1.webp',
  },
  videos: {
    heroMp4: '/src/assets/video/hero.mp4',
    heroWebm: '/src/assets/video/hero.webm',
  }
};

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  showVideo?: boolean;
  backgroundType?: 'video' | 'image';
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = 'Professional Plumbing Services',
  subtitle = '24/7 Emergency Service Available',
  ctaText = 'Get a Quote',
  ctaLink = '#contact',
  secondaryCtaText = 'Call Now',
  secondaryCtaLink = 'tel:+1234567890',
  showVideo = true,
  backgroundType = 'video',
  className = '',
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle video loading errors
  const handleVideoError = () => {
    setVideoError(true);
    console.warn('Hero video failed to load, falling back to image');
  };

  // Attempt to play video after load
  useEffect(() => {
    if (videoRef.current && showVideo && backgroundType === 'video') {
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn('Video autoplay failed:', error);
          // Video autoplay might be blocked by browser, this is expected
        });
      }
    }
  }, [showVideo, backgroundType]);

  const shouldShowVideo = showVideo && backgroundType === 'video' && !videoError && !isMobile;

  return (
    <section className={`hero-section relative overflow-hidden ${className}`}>
      {/* Background: Video or Image */}
      <div className="hero-background absolute inset-0 w-full h-full">
        {shouldShowVideo ? (
          <video
            ref={videoRef}
            className="hero-video absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={ASSETS.images.heroPosterJpg}
            onError={handleVideoError}
          >
            <source src={ASSETS.videos.heroWebm} type="video/webm" />
            <source src={ASSETS.videos.heroMp4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <picture>
            {/* WebP for modern browsers */}
            <source
              srcSet={isMobile ? ASSETS.images.heroPosterMobileWebp : ASSETS.images.heroPosterWebp}
              type="image/webp"
            />
            {/* Fallback to JPEG */}
            <img
              src={isMobile ? ASSETS.images.heroPosterMobileJpg : ASSETS.images.heroPosterJpg}
              alt="Hero background"
              className="hero-image absolute inset-0 w-full h-full object-cover"
            />
          </picture>
        )}
        
        {/* Overlay for better text readability */}
        <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="hero-content relative z-10 container mx-auto px-4 py-20 md:py-32 min-h-[500px] md:min-h-[600px] flex items-center">
        <div className="max-w-3xl">
          {/* Title */}
          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            {title}
          </h1>
          
          {/* Subtitle */}
          {subtitle && (
            <p className="hero-subtitle text-xl md:text-2xl text-white/90 mb-8 md:mb-10 font-light">
              {subtitle}
            </p>
          )}
          
          {/* CTA Buttons */}
          <div className="hero-cta-group flex flex-col sm:flex-row gap-4">
            {ctaText && (
              <a
                href={ctaLink}
                className="hero-cta-primary inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                {ctaText}
              </a>
            )}
            
            {secondaryCtaText && (
              <a
                href={secondaryCtaLink}
                className="hero-cta-secondary inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300"
              >
                {secondaryCtaText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
