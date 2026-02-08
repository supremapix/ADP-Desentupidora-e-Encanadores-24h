
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BAIRROS, CIDADES_RMC } from '../constants';
import AnimatedLogo from './AnimatedLogo';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navigateTo = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-[100]">
      {/* Top Urgency Bar */}
      <div className="bg-primary text-white py-1 px-4 text-[10px] sm:text-xs font-bold text-center tracking-widest flex items-center justify-center gap-2 uppercase">
        <i className="fa fa-bolt animate-pulse"></i> Plantão 24h Curitiba e RMC: Chegada em 40min <i className="fa fa-bolt animate-pulse"></i>
      </div>

      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-14 h-14">
            <AnimatedLogo />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-display font-bold text-xl text-primary leading-none uppercase tracking-tighter">ADP Desentupidora</h1>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Excelência em Saneamento</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link to="/" className="font-bold text-gray-700 hover:text-primary transition-colors uppercase text-sm">Home</Link>
          <div className="relative group" onMouseEnter={() => setOpenDropdown('servicos')} onMouseLeave={() => setOpenDropdown(null)}>
            <button className="font-bold text-gray-700 hover:text-primary transition-colors uppercase text-sm flex items-center gap-1">
              Serviços <i className="fa fa-chevron-down text-[10px]"></i>
            </button>
            {openDropdown === 'servicos' && (
              <div className="absolute top-full left-0 bg-white shadow-xl border-t-2 border-primary py-2 min-w-[220px] animate-fade-in">
                <Link to="/#servicos" className="block px-4 py-2 text-sm hover:bg-gray-50 text-gray-700">Todos os Serviços</Link>
                <Link to="/servicos/hidrojateamento" className="block px-4 py-2 text-sm hover:bg-gray-50 text-gray-700">Hidrojateamento</Link>
                <Link to="/servicos/limpeza-de-fossa" className="block px-4 py-2 text-sm hover:bg-gray-50 text-gray-700">Limpeza de Fossa</Link>
                <Link to="/faq" className="block px-4 py-2 text-sm hover:bg-gray-50 text-gray-700">FAQ / Dúvidas</Link>
              </div>
            )}
          </div>
          <Link to="/#contato" className="font-bold text-gray-700 hover:text-primary transition-colors uppercase text-sm">Contato</Link>
          <a href="tel:4133451194" className="bg-red-600 text-white px-5 py-2 rounded-full font-bold text-sm shadow-md hover:bg-red-700 transition flex items-center gap-2">
            <i className="fa fa-phone-alt"></i> (41) 3345-1194
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-primary text-2xl p-2 focus:outline-none" onClick={toggleMobileMenu}>
          <i className={isMobileMenuOpen ? 'fa fa-times' : 'fa fa-bars'}></i>
        </button>
      </div>

      {/* Simplified Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-20 bg-white z-[90] transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-6 gap-6 h-full overflow-y-auto">
          <Link to="/" onClick={toggleMobileMenu} className="text-xl font-bold border-b pb-4">Home</Link>
          
          <div className="space-y-4">
            <p className="font-bold text-primary uppercase text-xs tracking-widest">Serviços</p>
            <Link to="/servicos/hidrojateamento" onClick={toggleMobileMenu} className="block text-lg font-medium text-gray-700">Hidrojateamento</Link>
            <Link to="/servicos/limpeza-de-fossa" onClick={toggleMobileMenu} className="block text-lg font-medium text-gray-700">Limpeza de Fossa</Link>
            <Link to="/#servicos" onClick={toggleMobileMenu} className="block text-lg font-medium text-gray-700">Outros Desentupimentos</Link>
          </div>

          <div className="space-y-4 pt-4">
             <p className="font-bold text-primary uppercase text-xs tracking-widest">Contatos Rápidos</p>
             <a href="tel:4133451194" className="flex items-center gap-4 p-4 bg-red-50 text-red-700 rounded-xl font-bold">
               <i className="fa fa-phone-alt text-2xl"></i>
               <span>(41) 3345-1194</span>
             </a>
             <a href="https://wa.me/5541985171966" className="flex items-center gap-4 p-4 bg-green-50 text-green-700 rounded-xl font-bold">
               <i className="fab fa-whatsapp text-2xl"></i>
               <span>Chamar WhatsApp</span>
             </a>
          </div>

          <div className="mt-auto pb-10">
            <p className="text-center text-xs text-gray-400">Atendimento 24h em toda Curitiba e RMC</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
