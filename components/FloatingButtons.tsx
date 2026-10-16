import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp, AtSign, BriefcaseBusiness, Check, Copy, Globe, MessageCircle, Phone, Pin, Share2, X } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_SITE, COMPANY_WHATSAPP } from '../constants';
import './FloatingActions.css';

type SharePage = { title: string; url: string; image: string; message: string };
const intent = (endpoint: string, params: Record<string, string>) => `${endpoint}?${new URLSearchParams(params).toString()}`;

// Read at interaction time: Helmet may update the title after a route renders.
const readPage = (): SharePage => {
  const title = document.title.trim() || 'ADP Desentupidora';
  const url = `${COMPANY_SITE.replace(/\/$/, '')}${window.location.pathname}`;
  return { title, url, image: `${COMPANY_SITE.replace(/\/$/, '')}/og-adp.jpg`, message: `Estou indicando o melhor ADP Desentupidora: ${title} (${url})` };
};

const FloatingActions: React.FC = () => {
  const location = useLocation();
  const [page, setPage] = useState<SharePage | null>(null);
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [copied, setCopied] = useState(false);
  const [copying, setCopying] = useState(false);
  const shareRoot = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);
  const copyVersion = useRef(0);

  useEffect(() => {
    copyVersion.current += 1;
    setOpen(false);
    setFeedback('');
    setCopying(false);
  }, [location.key]);

  useEffect(() => {
    const update = () => setShowTop(window.scrollY > 300);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    if (!open) return;
    firstLink.current?.focus();
    const outside = (event: PointerEvent) => {
      if (!shareRoot.current?.contains(event.target as Node)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('keydown', escape);
    };
  }, [open]);

  const toggleShare = () => {
    if (!open) {
      setPage(readPage());
      setFeedback('');
      setCopied(false);
    }
    setOpen(!open);
  };

  const copyMessage = async () => {
    const current = readPage();
    setPage(current);
    setCopying(true);
    setCopied(false);
    setFeedback('');
    const version = ++copyVersion.current;
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(current.message);
      if (copyVersion.current !== version) return;
      setCopied(true);
      setFeedback('Mensagem copiada! Cole onde preferir.');
    } catch {
      if (copyVersion.current !== version) return;
      setFeedback('Não foi possível copiar. Selecione a mensagem abaixo e copie manualmente.');
    } finally {
      if (copyVersion.current === version) setCopying(false);
    }
  };

  const links = page ? [
    { name: 'WhatsApp', icon: MessageCircle, href: intent('https://wa.me/', { text: page.message }) },
    { name: 'Facebook', icon: Globe, href: intent('https://www.facebook.com/sharer/sharer.php', { u: page.url }) },
    { name: 'X / Twitter', icon: X, href: intent('https://twitter.com/intent/tweet', { text: page.title, url: page.url }) },
    { name: 'Pinterest', icon: Pin, href: intent('https://www.pinterest.com/pin/create/button/', { url: page.url, media: page.image, description: page.title }) },
    { name: 'LinkedIn', icon: BriefcaseBusiness, href: intent('https://www.linkedin.com/sharing/share-offsite/', { url: page.url }) },
    { name: 'Threads', icon: AtSign, href: intent('https://www.threads.com/intent/post', { text: `${page.title}\n${page.url}` }) },
  ] : [];
  const whatsapp = intent(`https://wa.me/${COMPANY_WHATSAPP}`, { text: 'Olá! Vim pelo site e preciso de atendimento para desentupimento.' });

  return <>
    <div className="adp-floating-share" ref={shareRoot} onBlur={(event) => {
      if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false);
    }}>
      {open && page && <section id="adp-share-panel" className="adp-share-panel" aria-label="Compartilhar esta página">
        <div className="adp-share-heading"><div><span>INDIQUE A ADP</span><h2>Compartilhar página</h2></div><button type="button" className="adp-share-close" aria-label="Fechar opções de compartilhamento" onClick={() => { setOpen(false); toggle.current?.focus(); }}><X size={18} aria-hidden="true" /></button></div>
        <p className="adp-share-description">Escolha onde compartilhar. Abre em uma nova aba.</p>
        <div className="adp-share-links">{links.map(({ name, icon: Icon, href }, index) => <a ref={index === 0 ? firstLink : undefined} key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Compartilhar no ${name} (nova aba)`}><Icon size={18} aria-hidden="true" /><span>{name}</span></a>)}</div>
        <button className="adp-share-copy" type="button" disabled={copying} onClick={copyMessage}>{copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}{copying ? 'Copiando…' : 'Copiar mensagem'}</button>
        <p className="adp-share-feedback" role="status" aria-live="polite">{feedback}</p>
        {feedback && !copied && !copying && <textarea className="adp-share-manual" aria-label="Mensagem para copiar manualmente" value={page.message} readOnly onFocus={event => event.currentTarget.select()} />}
      </section>}
      <button type="button" ref={toggle} className="adp-floating-button adp-share-toggle" aria-label={open ? 'Fechar compartilhamento' : 'Compartilhar esta página'} aria-expanded={open} aria-controls="adp-share-panel" onClick={toggleShare}>{open ? <X size={22} aria-hidden="true" /> : <Share2 size={22} aria-hidden="true" />}<span>Compartilhar</span></button>
    </div>
    <nav className="adp-floating-contact" aria-label="Atendimento rápido e navegação">
      {showTop && <button type="button" className="adp-floating-button adp-back-top" aria-label="Voltar ao topo da página" title="Voltar ao topo" onClick={() => {
        window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
        document.getElementById('main-content')?.focus({ preventScroll: true });
      }}><ArrowUp size={21} aria-hidden="true" /></button>}
      <a className="adp-floating-button adp-call-button" href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} aria-label={`Ligar para ADP: ${COMPANY_PHONE}`} title={`Ligar: ${COMPANY_PHONE}`}><Phone size={21} aria-hidden="true" /><span>Ligar agora</span></a>
      <a className="adp-floating-button adp-whatsapp-button" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Falar com a ADP pelo WhatsApp, plantão 24 horas (nova aba)"><MessageCircle size={24} aria-hidden="true" /><span>WhatsApp<small>Plantão 24h</small></span></a>
    </nav>
  </>;
};

export default FloatingActions;
