import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Phone, MapPin } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_WHATSAPP, COMPANY_ADDRESS, SERVICES_DETAILED, BAIRROS, CIDADES_RMC, slugify } from '../constants';

export const HeroSection = () => (
  <section className="adp-hero">
    <div className="site-container adp-hero-grid">
      <div className="adp-hero-copy">
        <p className="adp-eyebrow"><span className="adp-status-dot" /> Curitiba e Região Metropolitana</p>
        <h1>Entupiu?<br /><span>Chame a ADP.</span></h1>
        <p className="adp-hero-description">Desentupidora em Curitiba. Da pia de casa à rede da sua empresa, atendimento técnico para colocar tudo em ordem.</p>
        <div className="adp-actions">
          <a className="adp-button" href={`https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent('Olá! Preciso de atendimento para desentupimento.')}`} target="_blank" rel="noopener noreferrer">Pedir atendimento <ArrowUpRight size={20} /></a>
          <a className="adp-phone-link" href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`}><Phone size={17} /> {COMPANY_PHONE}</a>
        </div>
        <p className="adp-hero-note">Desentupimento · Hidrojateamento · Limpeza de fossa</p>
      </div>
      <div className="adp-hero-visual">
        <img src="/images/instalacao-hidraulica-adp.webp" alt="Detalhe de tubulação e válvulas em uma instalação hidráulica" width="875" height="1167" fetchPriority="high" />
        <div className="adp-duty"><span>Plantão</span><strong>24<span>h</span></strong><span>Todos os dias</span></div>
        <div className="adp-image-label"><span>ADP / Saneamento e limpeza técnica</span><ArrowUpRight size={18} /></div>
      </div>
    </div>
    <div className="site-container adp-hero-bottom"><span>De Curitiba. Para Curitiba e região.</span><a href="#servicos">Encontre o serviço de que precisa <ArrowRight size={16} /></a></div>
  </section>
);

export const ServiceGrid = () => (
  <section id="servicos" className="adp-section adp-services">
    <div className="site-container">
      <div className="adp-section-heading"><div><p className="adp-eyebrow">01 / O que a gente resolve</p><h2>O problema muda.<br />O cuidado, não.</h2></div><p>Serviços para casas, comércios, condomínios e indústrias. Escolha abaixo e veja como podemos ajudar.</p></div>
      <div className="adp-service-list">{SERVICES_DETAILED.map((service, i) => <Link className="adp-service-row" key={service.id} to={`/servicos/${service.id}`}><span className="adp-index">{String(i + 1).padStart(2, '0')}</span><h3>{service.title}</h3><p>{service.desc}</p><ArrowUpRight size={24} aria-hidden="true" /></Link>)}</div>
    </div>
  </section>
);

export const InstitutionalSection = () => (
  <section id="empresa" className="adp-section adp-company"><div className="site-container adp-company-grid">
    <div><p className="adp-eyebrow">02 / Aqui em Curitiba</p><h2>Tem endereço.<br />Tem quem atenda.</h2><p className="adp-company-intro">A ADP tem sede no CIC e atende Curitiba e Região Metropolitana. Uma conversa direta para entender o problema e orientar o próximo passo.</p><address><MapPin size={19} />{COMPANY_ADDRESS}</address></div>
    <div className="adp-process"><p className="adp-eyebrow">Do primeiro contato ao serviço</p>{[
      ['Conte o que aconteceu', 'Informe o bairro e o que está entupido. Se puder, envie uma foto pelo WhatsApp.'],
      ['Entenda o orçamento', 'A equipe avalia a situação no local e informa o valor antes da execução.'],
      ['Autorize o atendimento', 'Com o orçamento aprovado, o serviço é realizado com o equipamento adequado.']
    ].map(([title, text], i) => <div className="adp-process-step" key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
  </div></section>
);

export const AreasServedSection = () => (
  <section id="areas-atendidas" className="adp-section"><div className="site-container adp-areas-grid">
    <div><p className="adp-eyebrow">03 / Perto de você</p><h2>Curitiba.<br />E além.</h2><p>Atendimento nos bairros da capital e nos municípios da Região Metropolitana.</p><Link className="adp-text-link" to="/mapa-do-site">Ver todas as regiões <ArrowUpRight size={18} /></Link></div>
    <div className="adp-region-lists"><div><h3>Em Curitiba</h3><div>{['Cidade Industrial de Curitiba', 'Batel', 'Água Verde', 'Portão', 'Boqueirão', 'Santa Felicidade', 'Pinheirinho', 'Tatuquara', 'Centro'].filter(b => BAIRROS.includes(b)).map(b => <Link key={b} to={`/bairro/${slugify(b)}`}>{b}<ArrowUpRight size={14} /></Link>)}</div></div><div><h3>Na Região Metropolitana</h3><div>{['São José dos Pinhais', 'Araucária', 'Colombo', 'Pinhais', 'Campo Largo', 'Fazenda Rio Grande'].filter(c => CIDADES_RMC.includes(c)).map(c => <Link key={c} to={`/cidade/${slugify(c)}`}>{c}<ArrowUpRight size={14} /></Link>)}</div></div></div>
  </div></section>
);

export const FAQSection = () => (
  <section className="adp-section adp-faq"><div className="site-container adp-faq-grid"><div><p className="adp-eyebrow">04 / Sem complicar</p><h2>Antes de chamar,<br />vale saber.</h2><Link className="adp-text-link" to="/faq">Todas as perguntas <ArrowUpRight size={18} /></Link></div><div>{[
    ['Como é feito o orçamento do desentupimento na ADP?', 'A equipe realiza uma avaliação técnica no local e informa o orçamento antes da execução do serviço, sem custos de visita.'],
    ['A ADP Desentupidora atende 24 horas?', 'Sim. O atendimento funciona 24 horas, incluindo finais de semana e feriados. Ligue para a central ou fale pelo WhatsApp.'],
    ['Quais regiões a ADP atende?', 'Atendemos os bairros de Curitiba e municípios da Região Metropolitana. Informe sua localização ao falar com a central.'],
    ['Onde fica a sede da ADP Desentupidora?', 'Na Rua Luiz Maltaca, 36, no CIC (Cidade Industrial de Curitiba), Paraná.']
  ].map(([q, a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></div></section>
);
