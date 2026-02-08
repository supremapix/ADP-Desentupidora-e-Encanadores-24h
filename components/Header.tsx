
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { COMPANY_PHONE, COMPANY_WHATSAPP } from '../constants';
import AnimatedLogo from './AnimatedLogo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-white shadow-xl py-2' : 'bg-white/90 backdrop-blur-md py-4'}`}>
      {/* Top Utility Bar (Desktop Only) */}
      <div className="hidden lg:block border-b border-gray-100 pb-2 mb-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-[11px] font-bold text-gray-500 uppercase tracking-widest">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><i className="fa fa-map-marker-alt text-primary"></i> Atendimento em Curitiba e RMC</span>
            <span className="flex items-center gap-2 text-red-600 animate-pulse"><i className="fa fa-bolt"></i> Plantão Emergencial 24 Horas</span>
          </div>
          <div className="flex gap-4">
            <a href={`https://wa.me/${COMPANY_WHATSAPP}`} className="hover:text-primary transition-colors">WhatsApp: (41) 98517-1966</a>
            <a href="mailto:contato@adpcuritiba.com.br" className="hover:text-primary transition-colors">contato@adpcuritiba.com.br</a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Branding */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="w-16 h-16 md:w-20 md:h-20 transition-transform duration-500 group-hover:scale-105">
            <AnimatedLogo />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-display font-black text-2xl text-dark leading-none uppercase tracking-tighter group-hover:text-primary transition-colors">
              ADP <span className="text-primary group-hover:text-dark transition-colors">Curitiba</span>
            </h1>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">Excelência em Desentupimento</p>
          </div>
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className="font-bold text-sm text-gray-700 hover:text-primary transition-colors uppercase tracking-widest">Início</Link>
          <div className="relative group">
            <button className="font-bold text-sm text-gray-700 hover:text-primary transition-colors uppercase tracking-widest flex items-center gap-1">
              Serviços <i className="fa fa-chevron-down text-[10px] transition-transform group-hover:rotate-180"></i>
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-white shadow-2xl rounded-2xl border border-gray-100 py-4 min-w-[280px] grid gap-1">
                <Link to="/servicos/hidrojateamento" className="px-6 py-3 hover:bg-gray-50 text-sm font-bold text-gray-600 flex items-center gap-3">
                  <i className="fa fa-water text-primary"></i> Hidrojateamento
                </Link>
                <Link to="/servicos/limpeza-de-fossa" className="px-6 py-3 hover:bg-gray-50 text-sm font-bold text-gray-600 flex items-center gap-3">
                  <i className="fa fa-truck text-primary"></i> Limpeza de Fossa
                </Link>
                <Link to="/#servicos" className="px-6 py-3 hover:bg-gray-50 text-sm font-bold text-gray-600 flex items-center gap-3 border-t">
                  <i className="fa fa-list text-gray-400"></i> Ver Todos os Serviços
                </Link>
              </div>
            </div>
          </div>
          <Link to="/faq" className="font-bold text-sm text-gray-700 hover:text-primary transition-colors uppercase tracking-widest">Dúvidas</Link>
          <a href="tel:4133451194" className="bg-red-600 text-white px-6 py-3 rounded-full font-black text-xs shadow-lg hover:bg-red-700 hover:scale-105 transition-all flex items-center gap-2 uppercase tracking-tighter">
            <i className="fa fa-phone-alt animate-bounce"></i> (41) 3345-1194
          </a>
        </nav>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 lg:hidden">
          <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg">
            <i className="fa fa-phone"></i>
          </a>
          <button 
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir Menu"
          >
            <span className={`w-6 h-0.5 bg-dark transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-dark transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-dark transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-dark/60 backdrop-blur-sm z-[90] lg:hidden transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsMobileMenuOpen(false)}></div>
      
      {/* Mobile Menu Content */}
      <div className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-white z-[100] lg:hidden transition-transform duration-500 shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-12">
            <div className="w-16 h-16"><AnimatedLogo /></div>
            <button className="text-dark text-2xl" onClick={() => setIsMobileMenuOpen(false)}><i className="fa fa-times"></i></button>
          </div>

          <nav className="flex flex-col gap-6 mb-12">
            <Link to="/" className="text-xl font-black text-dark border-b pb-2">Início</Link>
            <Link to="/servicos/hidrojateamento" className="text-lg font-bold text-gray-600">Hidrojateamento</Link>
            <Link to="/servicos/limpeza-de-fossa" className="text-lg font-bold text-gray-600">Limpeza de Fossa</Link>
            <Link to="/#servicos" className="text-lg font-bold text-gray-600">Outros Serviços</Link>
            <Link to="/faq" className="text-lg font-bold text-gray-600 border-b pb-2">Dúvidas Frequentes</Link>
          </nav>

          <div className="mt-auto space-y-4">
            <a href={`https://wa.me/${COMPANY_WHATSAPP}`} className="flex items-center gap-4 p-4 bg-green-50 text-green-700 rounded-2xl font-bold">
              <i className="fab fa-whatsapp text-2xl"></i>
              <span>WhatsApp 24h</span>
            </a>
            <a href="tel:4133451194" className="flex items-center gap-4 p-4 bg-red-50 text-red-700 rounded-2xl font-bold">
              <i className="fa fa-phone-alt text-2xl"></i>
              <span>Ligar Agora</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
