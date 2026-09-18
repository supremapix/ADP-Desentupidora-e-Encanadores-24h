
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_PHONE, COMPANY_WHATSAPP } from '../constants';
import AnimatedLogo from './AnimatedLogo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header className={`sticky top-0 left-0 w-full z-50 bg-white border-b border-slate-200 transition-all ${isScrolled ? 'shadow-sm py-2' : 'py-3'}`}>
      <div className="site-container flex items-center justify-between">
        {/* ESQUERDA: Logo ADP */}
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-auto flex items-center justify-center">
            <AnimatedLogo />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-xl lg:text-2xl text-slate-900 leading-none tracking-tight">
              ADP <span className="text-red-700">DESENTUPIDORA</span>
            </span>
            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider hidden sm:block">
              Saneamento e Limpeza Técnica
            </span>
          </div>
        </Link>

        {/* CENTRO: Menu Desktop */}
        <nav className="hidden lg:flex items-center gap-7">
          <Link to="/" className="font-semibold text-xs text-slate-700 hover:text-red-700 uppercase tracking-wider transition-colors">
            Início
          </Link>

          {/* Dropdown Serviços 2 Colunas */}
          <div className="relative group">
            <button className="font-semibold text-xs text-slate-700 hover:text-red-700 uppercase tracking-wider transition-colors flex items-center gap-1.5 py-2">
              Serviços <i className="fa fa-chevron-down text-[10px] text-slate-400 group-hover:text-red-700 transition-transform group-hover:rotate-180"></i>
            </button>
            
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white shadow-xl rounded-xl border border-slate-200 p-6 min-w-[500px] grid grid-cols-2 gap-6">
                {/* Coluna 1: DESENTUPIMENTO */}
                <div>
                  <span className="text-[11px] font-extrabold text-red-700 uppercase tracking-widest block mb-3 pb-1 border-b border-slate-100">
                    Desentupimento
                  </span>
                  <div className="space-y-1">
                    <Link to="/servicos/desentupimento-de-pia" className="block px-2 py-1.5 text-xs font-medium text-slate-700 hover:text-red-700 hover:bg-slate-50 rounded-lg transition-colors">
                      Pia
                    </Link>
                    <Link to="/servicos/desentupimento-de-ralo" className="block px-2 py-1.5 text-xs font-medium text-slate-700 hover:text-red-700 hover:bg-slate-50 rounded-lg transition-colors">
                      Ralo
                    </Link>
                    <Link to="/servicos/desentupimento-de-vaso" className="block px-2 py-1.5 text-xs font-medium text-slate-700 hover:text-red-700 hover:bg-slate-50 rounded-lg transition-colors">
                      Vaso Sanitário
                    </Link>
                    <Link to="/servicos/desentupimento-de-esgoto" className="block px-2 py-1.5 text-xs font-medium text-slate-700 hover:text-red-700 hover:bg-slate-50 rounded-lg transition-colors">
                      Esgoto
                    </Link>
                    <Link to="/servicos/limpeza-de-caixa-de-gordura" className="block px-2 py-1.5 text-xs font-medium text-slate-700 hover:text-red-700 hover:bg-slate-50 rounded-lg transition-colors">
                      Caixa de Gordura
                    </Link>
                  </div>
                </div>

                {/* Coluna 2: SANEAMENTO */}
                <div>
                  <span className="text-[11px] font-extrabold text-slate-900 uppercase tracking-widest block mb-3 pb-1 border-b border-slate-100">
                    Saneamento
                  </span>
                  <div className="space-y-1">
                    <Link to="/servicos/hidrojateamento" className="block px-2 py-1.5 text-xs font-medium text-slate-700 hover:text-red-700 hover:bg-slate-50 rounded-lg transition-colors">
                      Hidrojateamento
                    </Link>
                    <Link to="/servicos/limpeza-de-fossa" className="block px-2 py-1.5 text-xs font-medium text-slate-700 hover:text-red-700 hover:bg-slate-50 rounded-lg transition-colors">
                      Limpeza de Fossa
                    </Link>
                    <Link to="/servicos/video-inspecao" className="block px-2 py-1.5 text-xs font-medium text-slate-700 hover:text-red-700 hover:bg-slate-50 rounded-lg transition-colors">
                      Vídeo Inspeção
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="/#empresa" className="font-semibold text-xs text-slate-700 hover:text-red-700 uppercase tracking-wider transition-colors">
            Empresa
          </a>
          <a href="/#areas-atendidas" className="font-semibold text-xs text-slate-700 hover:text-red-700 uppercase tracking-wider transition-colors">
            Áreas Atendidas
          </a>
          <Link to="/faq" className="font-semibold text-xs text-slate-700 hover:text-red-700 uppercase tracking-wider transition-colors">
            FAQ
          </Link>
          <a href="/#contato" className="font-semibold text-xs text-slate-700 hover:text-red-700 uppercase tracking-wider transition-colors">
            Contato
          </a>
        </nav>

        {/* DIREITA: Telefone + WhatsApp (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="flex flex-col text-right group">
            <span className="text-[10px] text-slate-400 uppercase font-medium">Plantão 24h</span>
            <span className="text-xs font-extrabold text-slate-800 group-hover:text-red-700 transition-colors">
              <i className="fa fa-phone-alt text-red-700 mr-1.5 text-[10px]"></i>{COMPANY_PHONE}
            </span>
          </a>
          <a
            href={`https://wa.me/${COMPANY_WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase px-4 py-2.5 rounded-lg transition-all flex items-center gap-2 shadow-sm"
          >
            <i className="fab fa-whatsapp text-sm"></i> WhatsApp
          </a>
        </div>

        {/* MOBILE CONTROLS: Telefone + Hambúrguer */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`}
            className="min-h-[48px] min-w-[48px] flex items-center justify-center text-red-700 font-bold text-sm bg-slate-50 rounded-lg border border-slate-200"
            aria-label="Ligar para Central 24h"
          >
            <i className="fa fa-phone-alt"></i>
          </a>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="min-h-[48px] min-w-[48px] flex items-center justify-center text-slate-800 bg-slate-100 rounded-lg border border-slate-200"
            aria-label="Abrir Menu"
          >
            <i className={`fa ${isMobileMenuOpen ? 'fa-times text-lg' : 'fa-bars text-lg'}`}></i>
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY & DRAWER */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/60 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[290px] bg-white z-50 lg:hidden transition-transform duration-300 shadow-2xl flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <span className="font-display font-extrabold text-base text-slate-900 uppercase">Menu ADP</span>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="min-h-[48px] min-w-[48px] flex items-center justify-center text-slate-500 hover:text-slate-900"
          >
            <i className="fa fa-times text-lg"></i>
          </button>
        </div>

        <nav className="p-4 flex-1 overflow-y-auto space-y-2">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="min-h-[48px] flex items-center font-bold text-sm text-slate-800 border-b border-slate-100 px-2"
          >
            Início
          </Link>

          {/* Accordion Serviços Mobile */}
          <div className="border-b border-slate-100 pb-2">
            <button
              type="button"
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="min-h-[48px] w-full flex items-center justify-between font-bold text-sm text-slate-800 px-2"
            >
              <span>Serviços</span>
              <i className={`fa fa-chevron-down text-xs transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}></i>
            </button>

            {isMobileServicesOpen && (
              <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-lg text-xs">
                <p className="font-extrabold text-[10px] uppercase text-red-700 tracking-wider pt-1">Desentupimento</p>
                <Link to="/servicos/desentupimento-de-pia" onClick={() => setIsMobileMenuOpen(false)} className="min-h-[40px] flex items-center font-medium text-slate-700">Pia</Link>
                <Link to="/servicos/desentupimento-de-ralo" onClick={() => setIsMobileMenuOpen(false)} className="min-h-[40px] flex items-center font-medium text-slate-700">Ralo</Link>
                <Link to="/servicos/desentupimento-de-vaso" onClick={() => setIsMobileMenuOpen(false)} className="min-h-[40px] flex items-center font-medium text-slate-700">Vaso Sanitário</Link>
                <Link to="/servicos/desentupimento-de-esgoto" onClick={() => setIsMobileMenuOpen(false)} className="min-h-[40px] flex items-center font-medium text-slate-700">Esgoto</Link>
                <Link to="/servicos/limpeza-de-caixa-de-gordura" onClick={() => setIsMobileMenuOpen(false)} className="min-h-[40px] flex items-center font-medium text-slate-700">Caixa de Gordura</Link>
                
                <p className="font-extrabold text-[10px] uppercase text-slate-900 tracking-wider pt-2 border-t border-slate-200">Saneamento</p>
                <Link to="/servicos/hidrojateamento" onClick={() => setIsMobileMenuOpen(false)} className="min-h-[40px] flex items-center font-medium text-slate-700">Hidrojateamento</Link>
                <Link to="/servicos/limpeza-de-fossa" onClick={() => setIsMobileMenuOpen(false)} className="min-h-[40px] flex items-center font-medium text-slate-700">Limpeza de Fossa</Link>
                <Link to="/servicos/video-inspecao" onClick={() => setIsMobileMenuOpen(false)} className="min-h-[40px] flex items-center font-medium text-slate-700">Vídeo Inspeção</Link>
              </div>
            )}
          </div>

          <a
            href="/#empresa"
            onClick={() => setIsMobileMenuOpen(false)}
            className="min-h-[48px] flex items-center font-bold text-sm text-slate-800 border-b border-slate-100 px-2"
          >
            Empresa
          </a>
          <a
            href="/#areas-atendidas"
            onClick={() => setIsMobileMenuOpen(false)}
            className="min-h-[48px] flex items-center font-bold text-sm text-slate-800 border-b border-slate-100 px-2"
          >
            Áreas Atendidas
          </a>
          <Link
            to="/faq"
            onClick={() => setIsMobileMenuOpen(false)}
            className="min-h-[48px] flex items-center font-bold text-sm text-slate-800 border-b border-slate-100 px-2"
          >
            FAQ
          </Link>
          <a
            href="/#contato"
            onClick={() => setIsMobileMenuOpen(false)}
            className="min-h-[48px] flex items-center font-bold text-sm text-slate-800 border-b border-slate-100 px-2"
          >
            Contato
          </a>
        </nav>

        <div className="p-4 border-t border-slate-200 space-y-2 bg-slate-50">
          <a
            href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`}
            className="min-h-[48px] w-full flex items-center justify-center gap-2 bg-slate-900 text-white font-bold text-xs uppercase rounded-lg"
          >
            <i className="fa fa-phone-alt"></i> Ligar {COMPANY_PHONE}
          </a>
          <a
            href={`https://wa.me/${COMPANY_WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] w-full flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold text-xs uppercase rounded-lg"
          >
            <i className="fab fa-whatsapp text-sm"></i> Chamar WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

