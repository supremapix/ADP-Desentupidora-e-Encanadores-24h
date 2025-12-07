import React, { useEffect, useState } from 'react';
import { COMPANY_PHONE, COMPANY_WHATSAPP } from '../constants';

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
      {/* WhatsApp Button */}
      <div className="fixed bottom-[100px] right-5 z-[9999] group">
        <a 
          href={`https://api.whatsapp.com/send?phone=${COMPANY_WHATSAPP}&text=Olá%20preciso%20de%20atendimento%20urgente%20vim%20pelo%20site%20➡️`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block transition-transform hover:scale-110"
        >
          <div className="relative bg-[#25d366] text-white w-[65px] h-[65px] rounded-full flex items-center justify-center shadow-lg border-2 border-white animate-bounce-slow">
            <i className="fab fa-whatsapp text-4xl"></i>
            {/* Online Badge */}
            <div className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-full border border-white animate-pulse">
              ONLINE
            </div>
          </div>
        </a>
        {/* Hover Tooltip */}
        <div className="absolute right-[75px] top-4 bg-white text-dark text-xs font-bold py-1 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
          Respondemos em 1 min
        </div>
      </div>

      {/* Call Button */}
      <div className="fixed bottom-[180px] right-5 z-[9999]">
        <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="block transition-transform hover:scale-110">
          <div className="bg-primary hover:bg-teal-700 w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
             <i className="fa fa-phone text-white text-2xl"></i>
          </div>
        </a>
      </div>

      {/* Scroll To Top */}
      {showScroll && (
        <div className="fixed bottom-5 right-5 z-[9999]">
          <button 
            onClick={scrollToTop} 
            className="bg-gray-700 hover:bg-gray-900 w-[50px] h-[50px] rounded-full shadow-lg text-white flex items-center justify-center transition-all duration-300"
          >
            <i className="fa fa-arrow-up text-xl"></i>
          </button>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;