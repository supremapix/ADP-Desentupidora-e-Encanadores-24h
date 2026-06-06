
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_PHONE, COMPANY_WHATSAPP } from '../constants';
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
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Início', href: '/', icon: 'fa-home', stagger: 'stagger-1' },
    { label: 'Hidrojateamento', href: '/servicos/hidrojateamento', icon: 'fa-water', stagger: 'stagger-2' },
    { label: 'Limpeza de Fossa', href: '/servicos/limpeza-de-fossa', icon: 'fa-truck', stagger: 'stagger-3' },
    { label: 'Galeria IA PRO', href: '/galeria-ia', icon: 'fa-magic', color: 'text-primary', stagger: 'stagger-4' },
    { label: 'Dúvidas Frequentes', href: '/faq', icon: 'fa-question-circle', stagger: 'stagger-5' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-xl py-2' 
          : 'bg-white py-4 lg:bg-white/95 lg:backdrop-blur-md' 
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Branding */}
        <Link to="/" className="flex items-center gap-3 group relative z-[110]">
          <div className={`transition-all duration-500 ${isScrolled ? 'w-10 h-10' : 'w-14 h-14'} group-hover:scale-105`}>
            <AnimatedLogo />
          </div>
          <div className="flex flex-col">
            <h1 className="font-display font-black text-lg lg:text-2xl text-dark leading-none uppercase tracking-tighter">
              ADP <span className="text-primary">Saneamento</span>
            </h1>
            <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest hidden sm:block">Desentupidora 24 Horas</p>
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
              </div>
            </div>
          </div>
          <Link to="/galeria-ia" className="font-bold text-xs text-primary hover:text-red-700 transition-colors uppercase tracking-widest flex items-center gap-1"><i className="fa fa-magic text-[10px]"></i> Galeria IA</Link>
          <Link to="/faq" className="font-bold text-xs text-gray-700 hover:text-primary transition-colors uppercase tracking-widest">Dúvidas</Link>
          <div className="flex flex-col items-center">
            <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="bg-red-600 text-white px-6 py-2.5 rounded-full font-black text-xs shadow-lg hover:bg-red-700 transition-all flex items-center gap-2 uppercase">
              <i className="fa fa-phone-alt"></i> Ligar
            </a>
            <span className="text-[8px] text-gray-400 mt-1 uppercase font-semibold">Central 24h</span>
          </div>
        </nav>

        {/* Mobile Toggle & Actions */}
        <div className="flex items-center gap-3 lg:hidden relative z-[110]">
          <a href={`https://wa.me/${COMPANY_WHATSAPP}`} className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center shadow-md animate-pulse">
            <i className="fab fa-whatsapp"></i>
          </a>
          <button 
            className="w-11 h-11 flex flex-col items-center justify-center gap-1.5 bg-gray-100 rounded-xl transition-all active:scale-90"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <span className={`w-6 h-0.5 bg-dark transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-dark transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 -translate-x-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-dark transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      <div 
        className={`fixed inset-0 bg-dark/60 backdrop-blur-md z-[90] lg:hidden transition-opacity duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`} 
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
      
      {/* Mobile Drawer - 100% Solid White */}
      <div 
        className={`fixed top-0 right-0 h-full w-[310px] bg-white z-[100] lg:hidden transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) shadow-[-20px_0_60px_rgba(0,0,0,0.15)] ${
          isMobileMenuOpen ? 'translate-x-0 is-open' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/80">
            <div className="w-10 h-10"><AnimatedLogo /></div>
            <span className="font-display font-black text-dark text-xs tracking-widest uppercase">Navegação ADP</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 active:scale-90 transition-transform">
              <i className="fa fa-times"></i>
            </button>
          </div>

          {/* Links Staggered */}
          <nav className="flex-grow p-6 space-y-2 overflow-y-auto bg-white">
            {navLinks.map((link, idx) => (
              <Link 
                key={idx} 
                to={link.href} 
                className={`mobile-menu-item flex items-center gap-4 p-4 rounded-2xl font-bold text-gray-700 hover:bg-primary/5 hover:text-primary transition-all group ${link.stagger} ${link.color || ''}`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${link.color ? 'bg-primary/10' : 'bg-gray-100 group-hover:bg-primary/10'}`}>
                  <i className={`fa ${link.icon}`}></i>
                </div>
                <span className="text-base uppercase tracking-tight">{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* Call to Actions - Fundo Sólido e Alto Contraste */}
          <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-3">
             <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] text-center mb-2">Atendimento Imediato</p>
             <a 
              href={`https://wa.me/${COMPANY_WHATSAPP}`} 
              className="flex items-center justify-center gap-3 p-4 bg-green-500 text-white rounded-2xl font-black shadow-lg shadow-green-500/20 active:scale-95 transition-transform uppercase text-xs tracking-widest w-full"
             >
               <i className="fab fa-whatsapp text-xl"></i> WhatsApp 24h
             </a>
             <a 
              href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} 
              className="flex items-center justify-center gap-3 p-4 bg-red-600 text-white rounded-2xl font-black shadow-lg shadow-red-600/20 active:scale-95 transition-transform uppercase text-xs tracking-widest w-full"
             >
               <i className="fa fa-phone-alt text-lg"></i> {COMPANY_PHONE}
             </a>
             <div className="pt-4 flex justify-center gap-4 opacity-30 grayscale">
               <i className="fab fa-cc-visa text-2xl"></i>
               <i className="fab fa-cc-mastercard text-2xl"></i>
               <i className="fa fa-qrcode text-2xl"></i>
             </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
