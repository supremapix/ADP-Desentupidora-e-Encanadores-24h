import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_PHONE, COMPANY_MOBILE, COMPANY_WHATSAPP, BAIRROS, COMPANY_EMAIL, slugify } from '../constants';

export function SupremaCredit() {
  return (
    <div className="adp-credit">
      <p className="adp-credit-badge">
        <span>Desenvolvido com</span>
        <Heart size={14} className="adp-credit-heart" role="img" aria-label="amor" />
        <span>por</span>
        <a id="developer-suprema-link" href="https://supremasite.com.br" target="_blank" rel="noopener noreferrer">
          <span>Suprema Sites Express</span>
          <img src="https://img.supremamidia.com/suprema-img.png" alt="Suprema" width={63} height={18} referrerPolicy="no-referrer" loading="lazy" />
        </a>
      </p>
    </div>
  );
}

const services = [
  ['desentupimento-de-esgoto', 'Desentupimento de esgoto'],
  ['desentupimento-de-pia', 'Desentupimento de pia'],
  ['desentupimento-de-ralo', 'Desentupimento de ralo'],
  ['desentupimento-de-vaso', 'Desentupimento de vaso sanitário'],
  ['limpeza-de-caixa-de-gordura', 'Limpeza de caixa de gordura'],
  ['hidrojateamento', 'Hidrojateamento'],
  ['limpeza-de-fossa', 'Limpeza de fossa'],
  ['video-inspecao', 'Vídeo inspeção de tubulações'],
];

const Footer: React.FC = () => (
  <footer className="adp-footer">
    <div className="adp-footer-inner">
      <div className="adp-footer-topline"><span>ADP / CURITIBA, PR</span><span>SANEAMENTO E LIMPEZA TÉCNICA</span></div>
      <div className="adp-footer-grid">
        <div className="adp-footer-company">
          <Link to="/" className="adp-footer-logo" aria-label="ADP Desentupidora, início">ADP<span>.</span></Link>
          <p>Desentupidora em Curitiba<br />e Região Metropolitana.</p>
          <address>Rua Luiz Maltaca, 36 · CIC<br />Curitiba / PR · CEP 81250-130</address>
        </div>
        <nav aria-label="Serviços no rodapé"><h2>Serviços</h2><ul>{services.map(([slug, label]) => <li key={slug}><Link to={`/servicos/${slug}`}>{label}</Link></li>)}</ul></nav>
        <nav aria-label="Navegação no rodapé"><h2>Explore</h2><ul>
          <li><Link to="/">Início</Link></li><li><a href="/#empresa">A ADP</a></li><li><a href="/#areas-atendidas">Áreas atendidas</a></li><li><Link to="/faq">Perguntas frequentes</Link></li><li><a href="/#contato">Contato</a></li><li><Link to="/mapa-do-site">Mapa do site</Link></li><li><Link to="/glossario">Glossário</Link></li>
        </ul></nav>
        <div className="adp-footer-contact"><h2>Fale com a ADP</h2><span className="adp-footer-label">PLANTÃO 24 HORAS</span><a className="adp-footer-number" href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`}>{COMPANY_PHONE}</a><a href={`https://wa.me/${COMPANY_WHATSAPP}`} target="_blank" rel="noopener noreferrer">WhatsApp: {COMPANY_MOBILE} ↗</a><a className="adp-footer-email" href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a><p>Residências, comércios,<br />condomínios e indústrias.</p></div>
      </div>
      <details className="adp-neighborhoods"><summary>Bairros atendidos em Curitiba <span aria-hidden="true">+</span></summary><div>{BAIRROS.map(b => <Link key={b} to={`/bairro/${slugify(b)}`}>{b}</Link>)}</div></details>
      <div className="adp-footer-bottom"><p>© {new Date().getFullYear()} ADP Desentupidora. Todos os direitos reservados.</p></div>
      <SupremaCredit />
    </div>
  </footer>
);
export default Footer;
