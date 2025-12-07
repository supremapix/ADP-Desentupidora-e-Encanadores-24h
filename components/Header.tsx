import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BAIRROS, CIDADES_RMC } from '../constants';
import AnimatedLogo from './AnimatedLogo';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const handleDropdownEnter = (menu: string) => setOpenDropdown(menu);
  const handleDropdownLeave = () => setOpenDropdown(null);

  const navigateTo = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const NavLink = ({ to, label, hasDropdown, dropdownKey }: { to: string, label: string, hasDropdown?: boolean, dropdownKey?: string }) => (
    <div 
      className="relative group h-full flex items-center"
      onMouseEnter={() => hasDropdown && dropdownKey && handleDropdownEnter(dropdownKey)}
      onMouseLeave={() => hasDropdown && handleDropdownLeave()}
    >
      <Link 
        to={to} 
        className="px-3 py-2 font-display font-medium text-base xl:text-lg text-dark hover:text-primary transition-colors flex items-center gap-1 nav-link whitespace-nowrap"
      >
        {label}
        {hasDropdown && <i className="fa fa-chevron-down text-xs mt-1 transition-transform duration-300 group-hover:rotate-180"></i>}
      </Link>
      
      {/* Desktop Dropdown Logic */}
      {hasDropdown && openDropdown === dropdownKey && (
         <div className="absolute top-full left-0 bg-white shadow-xl border-t-4 border-primary min-w-[200px] z-50 animate-fade-in origin-top">
            {dropdownKey === 'bairros' ? (
              <div className="w-[800px] p-6 grid grid-cols-4 gap-2 max-h-[60vh] overflow-y-auto custom-scrollbar">
                 {BAIRROS.map((bairro, idx) => (
                   <button 
                    key={idx} 
                    onClick={() => navigateTo(`/bairro/${bairro.toLowerCase().replace(/ /g, '-')}`)}
                    className="text-left text-sm text-gray-600 hover:text-primary hover:bg-gray-50 p-1 rounded transition-colors"
                   >
                     {bairro}
                   </button>
                 ))}
              </div>
            ) : dropdownKey === 'cidades' ? (
              <div className="w-[600px] p-6 grid grid-cols-3 gap-2">
                 {CIDADES_RMC.map((cidade, idx) => (
                   <button 
                    key={idx} 
                    onClick={() => navigateTo(`/cidade/${cidade.toLowerCase().replace(/ /g, '-')}`)}
                    className="text-left text-sm text-gray-600 hover:text-primary hover:bg-gray-50 p-1 rounded transition-colors"
                   >
                     {cidade}
                   </button>
                 ))}
              </div>
            ) : (
              <div className="flex flex-col py-2">
                 <Link to="/#servicos" className="px-4 py-2 hover:bg-gray-50 text-gray-700 transition-colors border-l-2 border-transparent hover:border-primary">Desentupimentos</Link>
                 <Link to="/servicos/hidrojateamento" className="px-4 py-2 hover:bg-gray-50 text-gray-700 transition-colors border-l-2 border-transparent hover:border-primary">Hidrojateamento</Link>
                 <Link to="/servicos/limpeza-de-fossa" className="px-4 py-2 hover:bg-gray-50 text-gray-700 transition-colors border-l-2 border-transparent hover:border-primary">Limpeza de Fossa</Link>
                 <Link to="/faq" className="px-4 py-2 hover:bg-gray-50 text-gray-700 transition-colors border-l-2 border-transparent hover:border-primary">Perguntas Frequentes (FAQ)</Link>
                 <Link to="/galeria-ia" className="px-4 py-2 hover:bg-gray-50 text-gray-700 transition-colors flex items-center gap-2 border-l-2 border-transparent hover:border-primary"><i className="fa fa-magic text-primary"></i> Galeria IA</Link>
              </div>
            )}
         </div>
      )}
    </div>
  );

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-md sticky top-0 z-50 transition-all duration-300">
      {/* Urgency Top Bar Mobile */}
      <div className="lg:hidden bg-red-600 text-white text-xs font-bold text-center py-1 px-2 animate-pulse">
        <i className="fa fa-exclamation-triangle mr-1"></i> EQUIPES DE PLANTÃO AGORA NO CIC
      </div>

      <div className="container mx-auto px-4 h-28 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group relative z-10">
          <AnimatedLogo />
          {/* Hide text on very small screens or keep as minimal brand reinforcement */}
          <div className="hidden xl:block">
            <h1 className="font-display font-bold text-2xl text-primary leading-none group-hover:text-teal-700 transition-colors">ADP Desentupidora</h1>
            <p className="text-sm text-gray-500 font-sans flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Aberto Agora 24h
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex h-full items-center ml-4">
          <NavLink to="/" label="Home" />
          <NavLink to="/#sobre" label="Empresa" />
          <NavLink to="/#servicos" label="Serviços" hasDropdown dropdownKey="servicos" />
          <NavLink to="#" label="Bairros" hasDropdown dropdownKey="bairros" />
          <NavLink to="#" label="Cidades" hasDropdown dropdownKey="cidades" />
          <NavLink to="/#contato" label="Contato" />
        </nav>

        {/* CTA & Socials */}
        <div className="hidden xl:flex items-center gap-4">
          <div className="flex flex-col items-end mr-2">
            <span className="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full animate-pulse border border-red-100 whitespace-nowrap">
              PLANTÃO 24H ATIVO
            </span>
          </div>
          <div className="flex gap-2">
             <a 
               href="https://wa.me/5541985171966" 
               className="text-green-500 text-2xl transition-all duration-300 hover:scale-110 hover:rotate-6 active:scale-95" 
               title="WhatsApp"
             >
               <i className="fab fa-whatsapp"></i>
             </a>
             <a 
               href="tel:4133451194" 
               className="text-primary text-2xl transition-all duration-300 hover:scale-110 hover:-rotate-6 active:scale-95" 
               title="Ligar"
             >
               <i className="fa fa-phone"></i>
             </a>
          </div>
          <a href="#contato" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl active:scale-95 flex items-center gap-2 btn-shimmer whitespace-nowrap">
            <i className="fa fa-bolt"></i> Emergência
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-3xl text-primary w-10 h-10 flex items-center justify-center relative focus:outline-none ml-auto" 
          onClick={toggleMobileMenu}
        >
          <div className="w-6 h-6 flex flex-col justify-between items-center transition-all duration-300">
            <span className={`h-0.5 w-full bg-primary rounded transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`h-0.5 w-full bg-primary rounded transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-full bg-primary rounded transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto fixed top-28 left-0 w-full z-40 shadow-xl transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
          <div className="flex flex-col p-4 space-y-4">
            <div className="bg-red-50 border border-red-100 p-3 rounded-lg flex items-center gap-3 animate-pulse">
              <div className="bg-red-100 p-2 rounded-full text-red-600">
                <i className="fa fa-clock"></i>
              </div>
              <div>
                <p className="font-bold text-red-700 text-sm">Precisa de urgência?</p>
                <p className="text-xs text-red-600">Chegamos em 40 minutos!</p>
              </div>
            </div>

            <Link to="/" onClick={toggleMobileMenu} className="font-bold text-lg text-gray-700 hover:text-primary transition-colors border-b border-gray-50 pb-2">Home</Link>
            <Link to="/#sobre" onClick={toggleMobileMenu} className="font-bold text-lg text-gray-700 hover:text-primary transition-colors border-b border-gray-50 pb-2">Empresa</Link>
            
            <div className="border-l-4 border-primary pl-4">
              <p className="font-bold text-primary mb-2">Serviços</p>
              <Link to="/#servicos" onClick={toggleMobileMenu} className="block py-1 text-gray-600 hover:text-primary transition-transform hover:translate-x-1">Todos os Serviços</Link>
              <Link to="/servicos/hidrojateamento" onClick={toggleMobileMenu} className="block py-1 text-gray-600 hover:text-primary transition-transform hover:translate-x-1">Hidrojateamento</Link>
              <Link to="/servicos/limpeza-de-fossa" onClick={toggleMobileMenu} className="block py-1 text-gray-600 hover:text-primary transition-transform hover:translate-x-1">Limpeza de Fossa</Link>
              <Link to="/faq" onClick={toggleMobileMenu} className="block py-1 text-gray-600 hover:text-primary transition-transform hover:translate-x-1">FAQ / Dúvidas</Link>
              <Link to="/galeria-ia" onClick={toggleMobileMenu} className="block py-1 text-gray-600 hover:text-primary transition-transform hover:translate-x-1"><i className="fa fa-magic mr-1"></i> Galeria de Imagens IA</Link>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <p className="font-bold text-primary mb-2">Principais Bairros</p>
              {BAIRROS.slice(0, 10).map(b => (
                <button key={b} onClick={() => navigateTo(`/bairro/${b.toLowerCase().replace(/ /g, '-')}`)} className="block py-1 text-gray-600 text-left w-full hover:text-primary transition-transform hover:translate-x-1">
                  {b}
                </button>
              ))}
              <span className="text-xs text-gray-400 italic">...e muitos outros</span>
            </div>

             <div className="border-l-4 border-primary pl-4">
              <p className="font-bold text-primary mb-2">Cidades RMC</p>
              {CIDADES_RMC.slice(0, 5).map(c => (
                <button key={c} onClick={() => navigateTo(`/cidade/${c.toLowerCase().replace(/ /g, '-')}`)} className="block py-1 text-gray-600 text-left w-full hover:text-primary transition-transform hover:translate-x-1">
                  {c}
                </button>
              ))}
            </div>

            <Link to="/#contato" onClick={toggleMobileMenu} className="bg-red-600 text-white text-center py-3 rounded-lg font-bold shadow-md hover:bg-red-700 transition-all btn-shimmer">
              CHAMAR AGORA (24h)
            </Link>
          </div>
        </div>
    </header>
  );
};

export default Header;