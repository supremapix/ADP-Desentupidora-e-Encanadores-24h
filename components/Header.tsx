import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_PHONE } from '../constants';
import './SiteChrome.css';

const services = [
  ['desentupimento-de-pia', 'Pias e cozinhas'],
  ['desentupimento-de-ralo', 'Ralos'],
  ['desentupimento-de-vaso', 'Vasos sanitários'],
  ['desentupimento-de-esgoto', 'Redes de esgoto'],
  ['limpeza-de-caixa-de-gordura', 'Caixas de gordura'],
  ['hidrojateamento', 'Hidrojateamento'],
  ['limpeza-de-fossa', 'Limpeza de fossa'],
  ['video-inspecao', 'Vídeo inspeção'],
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const servicesRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const close = () => { setMenuOpen(false); setServicesOpen(false); };

  useEffect(close, [location.pathname, location.hash]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (servicesOpen) { setServicesOpen(false); servicesRef.current?.focus(); }
      else if (menuOpen) { setMenuOpen(false); menuRef.current?.focus(); }
    };
    const onPointer = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) close();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [menuOpen, servicesOpen]);

  return (
    <header className="adp-header" ref={headerRef}>
      <a className="adp-skip-link" href="#main-content">Pular para o conteúdo</a>
      <div className="adp-header-inner">
        <Link to="/" className="adp-wordmark" aria-label="ADP Desentupidora, início" onClick={close}>
          <span className="adp-wordmark-letters">ADP<span aria-hidden="true">.</span></span>
          <span className="adp-wordmark-description">DESENTUPIDORA<br /><span>CURITIBA E REGIÃO</span></span>
        </Link>
        <button ref={menuRef} type="button" className="adp-menu-toggle" aria-expanded={menuOpen} aria-controls="adp-primary-nav" onClick={() => { setMenuOpen(!menuOpen); setServicesOpen(false); }}>
          {menuOpen ? 'Fechar' : 'Menu'} <span aria-hidden="true">{menuOpen ? '×' : '+'}</span>
        </button>
        <nav id="adp-primary-nav" aria-label="Navegação principal" className={`adp-nav${menuOpen ? ' adp-nav-open' : ''}`}>
          <Link to="/" onClick={close}>Início</Link>
          <div className="adp-services-nav">
            <button ref={servicesRef} type="button" aria-expanded={servicesOpen} aria-controls="adp-services-menu" onClick={() => setServicesOpen(!servicesOpen)}>Serviços <span aria-hidden="true">{servicesOpen ? '−' : '+'}</span></button>
            {servicesOpen && <div id="adp-services-menu" className="adp-services-menu">
              <p>DESENTUPIMENTO & SANEAMENTO</p>
              {services.map(([slug, label]) => <Link key={slug} to={`/servicos/${slug}`} onClick={close}>{label}<span aria-hidden="true">↗</span></Link>)}
            </div>}
          </div>
          <a href="/#empresa" onClick={close}>A ADP</a>
          <a href="/#areas-atendidas" onClick={close}>Onde atendemos</a>
          <Link to="/faq" onClick={close}>Dúvidas</Link>
          <a href="/#contato" onClick={close}>Contato</a>
        </nav>
        <a className="adp-header-phone" href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`}><span>PLANTÃO 24 HORAS</span><strong>{COMPANY_PHONE}</strong></a>
      </div>
    </header>
  );
};
export default Header;
