
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import RegionPage from './pages/RegionPage';
import ServiceHydrojetting from './pages/ServiceHydrojetting';
import ServiceSeptic from './pages/ServiceSeptic';
import FAQPage from './pages/FAQPage';
import NotFound from './pages/NotFound';
import LegacyDesentupidora from './pages/LegacyDesentupidora';

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
  useEffect(() => {
    const handleScrollReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      reveals.forEach((reveal) => observer.observe(reveal));
    };
    const timeoutId = setTimeout(handleScrollReveal, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-secondary">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bairro/:slug" element={<RegionPage type="bairro" />} />
            <Route path="/cidade/:slug" element={<RegionPage type="cidade" />} />
            <Route path="/servicos/hidrojateamento" element={<ServiceHydrojetting />} />
            <Route path="/servicos/limpeza-de-fossa" element={<ServiceSeptic />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/desentupidora.html" element={<LegacyDesentupidora />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
        <FloatingButtons />
      </div>
    </BrowserRouter>
  );
};

export default App;
