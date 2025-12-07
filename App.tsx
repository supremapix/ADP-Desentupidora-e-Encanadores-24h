import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import RegionPage from './pages/RegionPage';
import ServiceHydrojetting from './pages/ServiceHydrojetting';
import ImageGallery from './pages/ImageGallery';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  // Intersection Observer for Scroll Animations
  useEffect(() => {
    const handleScrollReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Only animate once
          }
        });
      }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px'
      });

      reveals.forEach((reveal) => {
        observer.observe(reveal);
      });

      return () => {
        reveals.forEach((reveal) => observer.unobserve(reveal));
      };
    };

    // Need a small timeout to ensure DOM elements are mounted, especially on route changes
    const timeoutId = setTimeout(handleScrollReveal, 100);
    
    // Also re-run when location changes
    return () => clearTimeout(timeoutId);
  }, []); // Run once on mount, logic handles dynamic elements via re-observation if needed, but simple layout works fine here.

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-gray-800">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Dynamic Routes for Bairros and Cities */}
            <Route path="/bairro/:slug" element={<RegionPage type="bairro" />} />
            <Route path="/cidade/:slug" element={<RegionPage type="cidade" />} />
            
            {/* Service Pages */}
            <Route path="/servicos/hidrojateamento" element={<ServiceHydrojetting />} />
            
            {/* AI Gallery */}
            <Route path="/galeria-ia" element={<ImageGallery />} />
          </Routes>
        </div>
        <Footer />
        <FloatingButtons />
      </div>
    </HashRouter>
  );
};

export default App;