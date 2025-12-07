import React, { useEffect, useRef, useState } from 'react';
import './hero.css';

// Asset paths - using public folder for static assets
const heroMp4 = '/assets/video/hero.mp4.placeholder';
const heroWebm = '/assets/video/hero.webm.placeholder';
const heroPoster = '/assets/images/plumber/hero-poster.svg';
const heroPosterMobile = '/assets/images/plumber/hero-poster@mobile.svg';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = 'ADP Desentupidora',
  subtitle = 'Serviços Profissionais de Desentupimento 24h',
  ctaText = 'Entre em Contato',
  ctaLink = '#contato',
  className = ''
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Attempt to play the video
    const playVideo = async () => {
      try {
        // Set video properties for mobile support
        video.muted = true;
        video.playsInline = true;
        
        // Try to play the video
        await video.play();
        setIsPlaying(true);
        setShowPlayButton(false);
      } catch (error) {
        // Autoplay was blocked - show play button
        console.log('Autoplay blocked, showing play button:', error);
        setShowPlayButton(true);
        setIsPlaying(false);
      }
    };

    // Wait for video to be ready
    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener('loadeddata', playVideo);
    }

    // Handle video errors
    const handleError = () => {
      console.error('Video failed to load');
      setVideoError(true);
      setShowPlayButton(false);
    };

    video.addEventListener('error', handleError);

    // Cleanup
    return () => {
      video.removeEventListener('loadeddata', playVideo);
      video.removeEventListener('error', handleError);
    };
  }, []);

  // Handle manual play button click
  const handlePlayClick = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      video.muted = true; // Ensure muted for autoplay policies
      await video.play();
      setIsPlaying(true);
      setShowPlayButton(false);
    } catch (error) {
      console.error('Failed to play video on user interaction:', error);
    }
  };

  // Determine which poster to use based on screen size
  const [poster, setPoster] = useState(heroPoster);

  useEffect(() => {
    const updatePoster = () => {
      if (window.innerWidth < 768) {
        setPoster(heroPosterMobile);
      } else {
        setPoster(heroPoster);
      }
    };

    updatePoster();
    window.addEventListener('resize', updatePoster);

    return () => {
      window.removeEventListener('resize', updatePoster);
    };
  }, []);

  return (
    <section className={`hero-section ${className}`}>
      <div className="hero-video-container">
        {/* Video Background */}
        <video
          ref={videoRef}
          className="hero-video"
          poster={poster}
          muted
          loop
          playsInline
          webkit-playsinline="true"
          preload="metadata"
          aria-label="Hero background video"
        >
          <source src={heroWebm} type="video/webm" />
          <source src={heroMp4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for darkening video */}
        <div className="hero-overlay"></div>

        {/* Play Button Overlay (shown when autoplay is blocked) */}
        {showPlayButton && !isPlaying && (
          <div className="hero-play-overlay">
            <button
              className="hero-play-button"
              onClick={handlePlayClick}
              aria-label="Play video"
            >
              <svg
                className="hero-play-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        )}

        {/* Error Fallback - show poster as static background */}
        {videoError && (
          <div 
            className="hero-fallback-image"
            style={{ backgroundImage: `url(${poster})` }}
            role="img"
            aria-label="Hero background"
          />
        )}
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <div className="hero-cta">
            <a href={ctaLink} className="hero-cta-button">
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
