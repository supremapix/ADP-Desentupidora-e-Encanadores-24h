
import React, { useEffect, useState } from 'react';
import { COMPANY_PHONE, COMPANY_WHATSAPP, COMPANY_EMAIL } from '../constants';

const FloatingButtons: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Principal: WhatsApp */}
      <div className="fixed bottom-[100px] right-4 z-[9999]">
        <a 
          href={`https://api.whatsapp.com/send?phone=${COMPANY_WHATSAPP}&text=Olá%20preciso%20de%20atendimento%20urgente%20vim%20pelo%20site%20➡️`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative block group"
        >
          <div className="absolute -inset-2 bg-green-500/30 rounded-full blur animate-pulse"></div>
          <div className="relative bg-[#25d366] text-white w-[65px] h-[65px] rounded-full flex items-center justify-center shadow-2xl border-2 border-white transform transition-transform group-hover:scale-110">
            <i className="fab fa-whatsapp text-4xl"></i>
          </div>
        </a>
      </div>

      {/* Secundário: Ligar */}
      <div className="fixed bottom-[185px] right-5 z-[9999]">
        <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="block group">
          <div className="bg-red-600 hover:bg-red-700 w-[55px] h-[55px] rounded-full flex items-center justify-center shadow-xl border-2 border-white transform transition-transform group-hover:scale-110">
             <i className="fa fa-phone text-white text-2xl animate-bounce"></i>
          </div>
        </a>
      </div>

      {/* Terciário: Email */}
      <div className="fixed bottom-[260px] right-5 z-[9999]">
        <a href={`mailto:${COMPANY_EMAIL}`} className="block group">
          <div className="bg-dark hover:bg-gray-800 w-[55px] h-[55px] rounded-full flex items-center justify-center shadow-xl border-2 border-white transform transition-transform group-hover:scale-110">
             <i className="fa fa-envelope text-white text-2xl"></i>
          </div>
        </a>
      </div>

      {/* Voltar ao Topo */}
      {showScroll && (
        <div className="fixed bottom-5 right-5 z-[9999]">
          <button 
            onClick={scrollToTop} 
            className="bg-primary hover:bg-teal-700 w-[50px] h-[50px] rounded-full shadow-lg text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-2"
          >
            <i className="fa fa-arrow-up text-xl"></i>
          </button>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;
