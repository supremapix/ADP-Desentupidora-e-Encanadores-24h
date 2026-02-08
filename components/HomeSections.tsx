
import React from 'react';
import { Link } from 'react-router-dom';
import PremiumImage from './PremiumImage';
import { SERVICES_LIST, COMPANY_PHONE, COMPANY_WHATSAPP } from '../constants';

export const HeroSection = () => (
  <section className="relative bg-slate-950 text-white pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-white/5">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2670&auto=format&fit=crop" 
        alt="Saneamento Profissional" 
        className="absolute inset-0 w-full h-full object-cover opacity-15 animate-zoom-slow"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-primary/5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
    </div>

    <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7 space-y-8 text-center lg:text-left reveal active">
        <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-black border border-primary/20 tracking-widest text-primary shadow-xl">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> 
          BASE OPERACIONAL CIC - ATENDIMENTO EM 40MIN
        </div>
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.9] uppercase tracking-tighter">
          DESENTUPIDORA <br/>
          <span className="text-primary drop-shadow-[0_0_20px_rgba(57,132,122,0.4)]">PREÇO FECHADO</span>
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed max-w-xl font-light">
          Chega de orçamentos por metro que dobram de valor. Na ADP, você recebe um <strong>preço fixo e transparente</strong>. Tecnologia industrial para sua residência ou empresa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
          <a href={`https://wa.me/${COMPANY_WHATSAPP}`} className="bg-[#25d366] text-white px-10 py-5 rounded-2xl font-black text-lg shadow-[0_15px_30px_rgba(37,211,102,0.3)] hover:scale-105 transition-all flex items-center justify-center gap-3 group">
            <i className="fab fa-whatsapp text-2xl"></i> WHATSAPP URGENTE
          </a>
          <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="bg-white/5 border border-white/10 backdrop-blur-md text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3">
             {COMPANY_PHONE}
          </a>
        </div>
        <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-[10px] font-black text-gray-500 uppercase tracking-widest border-t border-white/5">
           <span className="flex items-center gap-2"><i className="fa fa-ban text-primary"></i> SEM TAXA DE VISITA</span>
           <span className="flex items-center gap-2"><i className="fa fa-credit-card text-primary"></i> 12X NO CARTÃO</span>
        </div>
      </div>
      
      <div className="lg:col-span-5 hidden lg:flex justify-end relative reveal active">
        <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="relative bg-slate-900 p-2 rounded-[3.5rem] shadow-2xl border-2 border-white/5 w-full max-w-[380px] aspect-[9/16] overflow-hidden group">
           <iframe 
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            src="https://www.youtube.com/embed/12D85Dmnheg?autoplay=1&mute=1&loop=1&playlist=12D85Dmnheg&controls=0" 
            title="ADP em ação"
            frameBorder="0"
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  </section>
);

export const ContentExpansionSection = () => (
  <section className="py-20 bg-white relative">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <PremiumImage 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop" 
            alt="Infraestrutura de Saneamento" 
            className="aspect-square shadow-2xl"
          />
        </div>
        <div className="space-y-8 reveal">
          <div className="w-16 h-1 bg-primary"></div>
          <h2 className="text-4xl lg:text-5xl font-display font-black text-dark tracking-tighter uppercase">
            Saneamento <br/><span className="text-primary text-3xl block mt-2">Referência em Curitiba</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            A ADP Saneamento não é apenas uma desentupidora. Somos especialistas em engenharia hidráulica preventiva e corretiva. Atendemos o <strong>setor industrial, comercial e residencial</strong> com rigor técnico.
          </p>
          <div className="grid grid-cols-2 gap-6">
             <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
               <h4 className="text-4xl font-black text-primary mb-1">25+</h4>
               <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Anos de Experiência</p>
             </div>
             <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
               <h4 className="text-4xl font-black text-primary mb-1">100%</h4>
               <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Garantia por Escrito</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const ServicesTable = () => (
  <section id="servicos" className="py-20 bg-slate-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 reveal">
        <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] bg-primary/5 px-4 py-2 rounded-full">Soluções Completas</span>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark mt-6 uppercase tracking-tighter">O que resolvemos <span className="text-primary">hoje?</span></h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {SERVICES_LIST.map((service, index) => (
          <div key={index} className="reveal bg-white p-5 rounded-2xl border border-slate-200 flex items-center gap-4 hover:border-primary hover:shadow-xl transition-all group cursor-pointer">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <i className="fa fa-check text-sm"></i>
            </div>
            <span className="font-bold text-xs uppercase tracking-tight text-gray-700">{service}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ServiceCards = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-3 gap-8">
        {[
          { 
            title: "Hidrojateamento", 
            icon: "fa-water", 
            color: "bg-primary", 
            desc: "Limpeza de alta pressão para galerias industriais.",
            link: "/servicos/hidrojateamento"
          },
          { 
            title: "Limpeza de Fossa", 
            icon: "fa-truck", 
            color: "bg-dark", 
            desc: "Esgotamento técnico com descarte certificado.",
            link: "/servicos/limpeza-de-fossa"
          },
          { 
            title: "Vídeo Inspeção", 
            icon: "fa-search", 
            color: "bg-slate-100 text-dark", 
            desc: "Diagnóstico por micro-câmeras HD.",
            link: "/servicos/video-inspecao"
          }
        ].map((item, i) => (
          <div key={i} className="reveal h-full">
            <div className={`${item.color} p-10 rounded-[3rem] shadow-xl space-y-5 flex flex-col h-full hover:-translate-y-2 transition-transform duration-500`}>
              <i className={`fa ${item.icon} text-5xl opacity-30`}></i>
              <h3 className="text-3xl font-bold font-display uppercase tracking-tight">{item.title}</h3>
              <p className="opacity-70 leading-relaxed flex-grow text-sm">{item.desc}</p>
              <Link to={item.link} className={`block w-full text-center py-4 rounded-2xl font-black text-xs uppercase tracking-widest ${item.color.includes('slate') ? 'bg-dark text-white' : 'bg-white text-primary'} hover:scale-105 transition-all`}>
                Saber Mais
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const WhyChooseSection = () => (
  <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-20 reveal">
        <h2 className="font-display text-4xl lg:text-6xl font-black mb-6 uppercase tracking-tighter">O Padrão <span className="text-primary">ADP Qualidade</span></h2>
        <p className="text-gray-500 max-w-xl mx-auto font-light">Compromisso com a higiene e a eficiência máxima em cada chamado.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: 'fa-clock', title: 'Plantão 24h', desc: 'Atendimento ininterrupto em Curitiba e RMC.' },
          { icon: 'fa-bolt', title: 'Base Móvel', desc: 'Sempre há um técnico ADP perto de você.' },
          { icon: 'fa-shield-alt', title: '90 Dias Real', desc: 'Garantia assegurada por laudo técnico.' },
          { icon: 'fa-tags', title: 'Preço Justo', desc: 'Não cobramos por metro cúbico. Preço fixo.' }
        ].map((item, i) => (
          <div key={i} className="reveal text-center group bg-white/5 p-8 rounded-[2.5rem] border border-white/5 hover:bg-white/10 transition-all">
            <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all">
              <i className={`fa ${item.icon} text-3xl text-primary`}></i>
            </div>
            <h4 className="text-xl font-bold mb-3">{item.title}</h4>
            <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const FAQSection = () => (
  <section className="py-20 bg-slate-50">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="bg-white rounded-[3.5rem] shadow-2xl p-10 lg:p-16 text-center border border-slate-100 relative group overflow-hidden reveal">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
        <h2 className="font-display text-4xl font-bold mb-6 text-dark uppercase tracking-tighter">Ficou com <span className="text-primary">Dúvida?</span></h2>
        <p className="text-gray-500 text-lg mb-10 font-light italic">"Cobram visita? Como funciona a garantia?"</p>
        <Link to="/faq" className="inline-flex items-center gap-3 bg-dark text-white px-10 py-5 rounded-2xl font-black text-sm hover:bg-primary transition-all uppercase tracking-widest">
          Ver Respostas Técnicas <i className="fa fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  </section>
);
