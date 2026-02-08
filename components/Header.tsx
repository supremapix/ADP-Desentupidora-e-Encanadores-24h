
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_PHONE, COMPANY_WHATSAPP, COMPANY_EMAIL } from '../constants';
import AnimatedLogo from './AnimatedLogo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-2xl py-2' 
          : 'bg-white/95 lg:bg-white/90 backdrop-blur-md py-4'
      }`}
    >
      {/* Top Utility Bar (Desktop Only) */}
      <div className={`hidden lg:block border-b border-gray-100 transition-all duration-500 overflow-hidden ${isScrolled ? 'max-h-0 opacity-0 mb-0 pb-0' : 'max-h-12 opacity-100 pb-2 mb-2'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-widest">
          <div className="flex gap-8">
            <span className="flex items-center gap-2">
              <i className="fa fa-map-marker-alt text-primary"></i> Atendimento 24h Curitiba e RMC
            </span>
            <span className="flex items-center gap-2 text-red-600 animate-pulse">
              <i className="fa fa-shield-alt"></i> Equipes Certificadas Sanepar
            </span>
          </div>
          <div className="flex gap-6 items-center">
            <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-primary transition-colors flex items-center gap-2 lowercase font-sans">
              <i className="fa fa-envelope text-primary"></i> {COMPANY_EMAIL}
            </a>
            <span className="text-gray-200">|</span>
            <a href={`https://wa.me/${COMPANY_WHATSAPP}`} className="hover:text-primary transition-colors flex items-center gap-2">
              <i className="fab fa-whatsapp text-green-500"></i> (41) 98517-1966
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Branding */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className={`transition-all duration-500 ${isScrolled ? 'w-14 h-14' : 'w-16 h-16 md:w-20 md:h-20'} group-hover:scale-110`}>
            <AnimatedLogo />
          </div>
          <div className="flex flex-col">
            <h1 className="font-display font-black text-2xl lg:text-3xl text-dark leading-none uppercase tracking-tighter">
              ADP <span className="text-primary">Curitiba</span>
            </h1>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] hidden sm:block">Desentupidora Profissional</p>
          </div>
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-10">
          <Link to="/" className="font-bold text-xs text-gray-700 hover:text-primary transition-colors uppercase tracking-widest">Home</Link>
          <div className="relative group">
            <button className="font-bold text-xs text-gray-700 hover:text-primary transition-colors uppercase tracking-widest flex items-center gap-2">
              Serviços <i className="fa fa-chevron-down text-[10px] transition-transform group-hover:rotate-180"></i>
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-white shadow-[0_15px_50px_rgba(0,0,0,0.15)] rounded-2xl border border-gray-100 py-6 min-w-[300px] overflow-hidden">
                <Link to="/servicos/hidrojateamento" className="px-8 py-4 hover:bg-primary/5 text-sm font-bold text-gray-600 flex items-center gap-4 transition-all group/item">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all"><i className="fa fa-water"></i></div>
                  Hidrojateamento
                </Link>
                <Link to="/servicos/limpeza-de-fossa" className="px-8 py-4 hover:bg-primary/5 text-sm font-bold text-gray-600 flex items-center gap-4 transition-all group/item">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all"><i className="fa fa-truck"></i></div>
                  Limpeza de Fossa
                </Link>
                <div className="mx-8 my-2 border-t border-gray-100"></div>
                <Link to="/#servicos" className="px-8 py-4 hover:bg-gray-50 text-xs font-bold text-gray-400 uppercase tracking-widest">Outros Desentupimentos</Link>
              </div>
            </div>
          </div>
          <Link to="/faq" className="font-bold text-xs text-gray-700 hover:text-primary transition-colors uppercase tracking-widest">Dúvidas</Link>
          <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="bg-red-600 text-white px-8 py-4 rounded-full font-black text-xs shadow-xl hover:bg-red-700 hover:scale-105 transition-all flex items-center gap-3 uppercase tracking-tighter">
            <i className="fa fa-phone-alt animate-bounce"></i> (41) 3345-1194
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="w-11 h-11 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-all">
            <i className="fa fa-phone-alt"></i>
          </a>
          <button 
            className="w-11 h-11 flex flex-col items-center justify-center gap-1.5 focus:outline-none bg-gray-50 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-dark transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-dark transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-dark transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 bg-dark/60 backdrop-blur-sm z-[90] lg:hidden transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsMobileMenuOpen(false)}></div>
      
      <div className={`fixed top-0 right-0 h-full w-full max-w-[320px] bg-white z-[100] lg:hidden transition-transform duration-500 ease-out shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 flex flex-col h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-10">
            <div className="w-16 h-16"><AnimatedLogo /></div>
            <button className="w-10 h-10 bg-gray-100 rounded-full text-dark" onClick={() => setIsMobileMenuOpen(false)}>
              <i className="fa fa-times"></i>
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-xl">
            <Link to="/" className="font-black text-dark border-b border-gray-100 pb-4">Home</Link>
            <p className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mt-4">Nossos Serviços</p>
            <Link to="/servicos/hidrojateamento" className="font-bold text-gray-600 flex items-center gap-4"><i className="fa fa-water text-primary w-6"></i> Hidrojateamento</Link>
            <Link to="/servicos/limpeza-de-fossa" className="font-bold text-gray-600 flex items-center gap-4"><i className="fa fa-truck text-primary w-6"></i> Limpeza de Fossa</Link>
            <Link to="/faq" className="font-bold text-gray-600 flex items-center gap-4"><i className="fa fa-question-circle text-primary w-6"></i> Dúvidas (FAQ)</Link>
          </nav>

          <div className="mt-auto pt-10 space-y-4">
             <a href={`https://wa.me/${COMPANY_WHATSAPP}`} className="flex items-center gap-4 p-5 bg-green-500 text-white rounded-2xl shadow-lg font-bold">
               <i className="fab fa-whatsapp text-2xl"></i> WhatsApp 24h
             </a>
             <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="flex items-center gap-4 p-5 bg-red-600 text-white rounded-2xl shadow-lg font-bold">
               <i className="fa fa-phone-alt text-xl"></i> (41) 3345-1194
             </a>
             <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest">{COMPANY_EMAIL}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
