
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import RegionPage from './pages/RegionPage';
import ServiceHydrojetting from './pages/ServiceHydrojetting';
import ServiceSeptic from './pages/ServiceSeptic';
import ServiceDetail from './pages/ServiceDetail';
import FAQPage from './pages/FAQPage';
import ImageGallery from './pages/ImageGallery';
import NotFound from './pages/NotFound';
import LegacyDesentupidora from './pages/LegacyDesentupidora';
import Glossario from './pages/Glossario';
import SitemapPage from './pages/SitemapPage';

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
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-lightGray">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Serviços Específicos */}
            <Route path="/servicos/hidrojateamento" element={<ServiceHydrojetting />} />
            <Route path="/servicos/limpeza-de-fossa" element={<ServiceSeptic />} />
            
            {/* Galeria IA PRO */}
            <Route path="/galeria-ia" element={<ImageGallery />} />
            
            {/* Outros Serviços e SEO Local */}
            <Route path="/servicos/:id" element={<ServiceDetail />} />
            <Route path="/bairro/:slug" element={<RegionPage type="bairro" />} />
            <Route path="/cidade/:slug" element={<RegionPage type="cidade" />} />
            
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/glossario" element={<Glossario />} />
            <Route path="/mapa-do-site" element={<SitemapPage />} />
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
