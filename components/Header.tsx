
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_PHONE, COMPANY_WHATSAPP, slugify } from '../constants';
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
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-xl py-2' 
          : 'bg-white shadow-md py-2.5 lg:py-4 lg:bg-white/95 lg:backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Branding */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className={`transition-all duration-500 ${isScrolled ? 'h-10' : 'h-14'} w-auto max-w-[180px] flex items-center justify-center group-hover:scale-105`}>
            <AnimatedLogo />
          </div>
          <div className="flex flex-col">
            <h1 className="font-display font-black text-xl lg:text-2xl text-dark leading-none uppercase tracking-tighter">
              ADP <span className="text-primary">Saneamento</span>
            </h1>
            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest hidden sm:block">Desentupidora 24 Horas</p>
          </div>
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className="font-bold text-xs text-gray-700 hover:text-primary transition-colors uppercase tracking-widest">Home</Link>
          <div className="relative group">
            <button className="font-bold text-xs text-gray-700 hover:text-primary transition-colors uppercase tracking-widest flex items-center gap-2">
              Serviços <i className="fa fa-chevron-down text-[10px]"></i>
            </button>
            <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="bg-white shadow-2xl rounded-xl border border-gray-100 py-4 min-w-[220px]">
                <Link to="/servicos/hidrojateamento" className="px-6 py-3 hover:bg-primary/5 text-sm font-bold text-gray-600 block">Hidrojateamento</Link>
                <Link to="/servicos/limpeza-de-fossa" className="px-6 py-3 hover:bg-primary/5 text-sm font-bold text-gray-600 block">Limpeza de Fossa</Link>
                <Link to="/servicos/desentupimento-de-pia" className="px-6 py-3 hover:bg-primary/5 text-sm font-bold text-gray-600 block">Desentupimento de Pia</Link>
                <Link to="/servicos/desentupimento-de-vaso" className="px-6 py-3 hover:bg-primary/5 text-sm font-bold text-gray-600 block">Desentupimento de Vaso</Link>
              </div>
            </div>
          </div>
          <Link to="/faq" className="font-bold text-xs text-gray-700 hover:text-primary transition-colors uppercase tracking-widest">Dúvidas</Link>
          <div className="flex flex-col items-center">
            <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="bg-red-600 text-white px-6 py-2.5 rounded-full font-black text-xs shadow-lg hover:bg-red-700 transition-all flex items-center gap-2 uppercase">
              <i className="fa fa-phone-alt"></i> Ligar
            </a>
            <span className="text-[8px] text-gray-400 mt-1 uppercase font-semibold">Central 24h</span>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <a href={`https://wa.me/${COMPANY_WHATSAPP}`} className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center shadow-md">
            <i className="fab fa-whatsapp"></i>
          </a>
          <button 
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-gray-100 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`w-5 h-0.5 bg-dark transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-dark transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-dark transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 bg-dark/60 backdrop-blur-sm z-[90] lg:hidden transition-opacity ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsMobileMenuOpen(false)}></div>
      
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] z-[100] lg:hidden transition-transform shadow-2xl ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: '#ffffff', opacity: 1 }}
      >
        <div className="p-6 flex flex-col h-full bg-white" style={{ backgroundColor: '#ffffff' }}>
          <div className="flex justify-between items-center mb-8 bg-white" style={{ backgroundColor: '#ffffff' }}>
            <div className="h-10 w-auto flex items-center justify-center bg-white" style={{ backgroundColor: '#ffffff' }}><AnimatedLogo /></div>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 bg-white" style={{ backgroundColor: '#ffffff' }}><i className="fa fa-times text-xl"></i></button>
          </div>
 
          <nav className="flex flex-col gap-5 bg-white" style={{ backgroundColor: '#ffffff' }}>
            <Link to="/" className="text-lg font-black text-dark border-b pb-2">Início</Link>
            
            <div className="space-y-3 bg-white" style={{ backgroundColor: '#ffffff' }}>
              <p className="text-[10px] font-bold text-primary uppercase tracking-widest bg-white">Serviços Mais Pedidos</p>
              <Link to="/servicos/hidrojateamento" className="font-bold text-gray-700 flex items-center gap-3"><i className="fa fa-water text-primary"></i> Hidrojateamento</Link>
              <Link to="/servicos/limpeza-de-fossa" className="font-bold text-gray-700 flex items-center gap-3"><i className="fa fa-truck text-primary"></i> Limpeza de Fossa</Link>
              <Link to="/servicos/desentupimento-de-pia" className="font-bold text-gray-700 flex items-center gap-3"><i className="fa fa-utensils text-primary"></i> Pia de Cozinha</Link>
              <Link to="/servicos/desentupimento-de-vaso" className="font-bold text-gray-700 flex items-center gap-3"><i className="fa fa-toilet text-primary"></i> Vaso Sanitário</Link>
            </div>
 
            <Link to="/faq" className="text-lg font-bold text-gray-700 border-t pt-4 block">Dúvidas Frequentes</Link>
          </nav>
 
          <div className="mt-auto space-y-4 bg-gray-50 border-t border-gray-100 p-4 rounded-2xl" style={{ backgroundColor: '#f9fafb' }}>
             <div className="flex flex-col items-center w-full bg-gray-50" style={{ backgroundColor: '#f9fafb' }}>
               <a href={`https://wa.me/${COMPANY_WHATSAPP}`} className="w-full flex items-center justify-center gap-2 p-3 bg-green-500 text-white rounded-xl font-bold shadow-lg">
                 <i className="fab fa-whatsapp"></i> WhatsApp
               </a>
               <p className="text-[9px] text-gray-400 mt-1 text-center font-medium">Fale com atendentes no Whats.</p>
             </div>
             <div className="flex flex-col items-center w-full bg-gray-50" style={{ backgroundColor: '#f9fafb' }}>
               <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="w-full flex items-center justify-center gap-2 p-3 bg-red-600 text-white rounded-xl font-bold shadow-lg">
                 <i className="fa fa-phone-alt"></i> Ligar
               </a>
               <p className="text-[9px] text-gray-400 mt-1 text-center font-medium">Ligue para nossa central 24h.</p>
             </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
