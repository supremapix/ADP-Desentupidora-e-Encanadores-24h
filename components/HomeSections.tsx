
import React from 'react';
import { Link } from 'react-router-dom';
import PremiumImage from './PremiumImage';
import { SERVICES_LIST, COMPANY_PHONE, COMPANY_WHATSAPP } from '../constants';

export const HeroSection = () => (
  <section className="relative bg-slate-950 text-white pt-32 pb-12 lg:pt-40 lg:pb-20 overflow-hidden border-b border-white/5">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2670&auto=format&fit=crop" 
        alt="Saneamento Profissional" 
        className="absolute inset-0 w-full h-full object-cover opacity-20 animate-zoom-slow"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-primary/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-40"></div>
    </div>

    <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-7 space-y-6 text-center lg:text-left reveal active">
        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black border border-primary/30 tracking-widest text-primary shadow-2xl">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> 
          BASE OPERACIONAL CIC - CURITIBA & RMC
        </div>
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.85] uppercase tracking-tighter">
          CHEGA DE <br/>
          <span className="text-primary drop-shadow-[0_0_30px_rgba(57,132,122,0.6)]">PREÇO POR METRO</span>
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed max-w-xl font-light">
          Orçamento <strong>fechado e transparente</strong> no local. Tecnologia industrial para resolver seu entupimento sem surpresas na nota fiscal.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
          <a href={`https://wa.me/${COMPANY_WHATSAPP}`} className="btn-shimmer bg-[#25d366] text-white px-10 py-5 rounded-2xl font-black text-lg shadow-[0_20px_40px_rgba(37,211,102,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-3 group">
            <i className="fab fa-whatsapp text-2xl"></i> WHATSAPP URGENTE
          </a>
          <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="bg-white/5 border border-white/10 backdrop-blur-md text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3">
             <i className="fa fa-phone-alt text-primary"></i> {COMPANY_PHONE}
          </a>
        </div>
        <div className="flex items-center justify-center lg:justify-start gap-8 pt-6 text-[9px] font-black text-gray-500 uppercase tracking-[0.2em] border-t border-white/10">
           <span className="flex items-center gap-2"><i className="fa fa-ban text-primary"></i> VISITA GRÁTIS</span>
           <span className="flex items-center gap-2"><i className="fa fa-check-circle text-primary"></i> GARANTIA 90 DIAS</span>
           <span className="flex items-center gap-2"><i className="fa fa-credit-card text-primary"></i> ATÉ 12X</span>
        </div>
      </div>
      
      <div className="lg:col-span-5 hidden lg:flex justify-end relative reveal active">
        <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="relative bg-slate-900 p-1.5 rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/10 w-full max-w-[360px] aspect-[9/16] overflow-hidden group">
           <iframe 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            src="https://www.youtube.com/embed/12D85Dmnheg?autoplay=1&mute=1&loop=1&playlist=12D85Dmnheg&controls=0&showinfo=0&modestbranding=1" 
            title="ADP em ação"
            frameBorder="0"
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute bottom-8 left-0 right-0 text-center">
             <p className="text-[10px] font-black text-white/50 uppercase tracking-widest">Vídeo Real da Operação</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const ContentExpansionSection = () => (
  <section className="py-16 bg-white relative overflow-hidden">
    {/* Textura de fundo para remover sensação de vazio */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
    
    <div className="container mx-auto px-4 max-w-6xl relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal order-2 lg:order-1">
          <PremiumImage 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop" 
            alt="Infraestrutura de Saneamento" 
            className="aspect-square lg:aspect-video shadow-2xl"
          />
        </div>
        <div className="space-y-6 reveal order-1 lg:order-2">
          <div className="w-12 h-1.5 bg-primary rounded-full"></div>
          <h2 className="text-4xl lg:text-5xl font-display font-black text-dark tracking-tighter uppercase leading-none">
            ENGENHARIA <br/><span className="text-primary">DE SANEAMENTO</span>
          </h2>
          <p className="text-base text-gray-600 leading-relaxed font-light">
            A ADP transcende o conceito comum de desentupidora. Aplicamos protocolos técnicos e equipamentos de ponta para garantir a fluidez total da sua rede, seja em residências, condomínios ou grandes plantas industriais no CIC.
          </p>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-slate-50 p-5 rounded-3xl border border-slate-100 group hover:border-primary/30 transition-colors">
               <h4 className="text-3xl font-black text-primary mb-1">24h</h4>
               <p className="text-[9px] font-black uppercase tracking-widest text-gray-400">Plantão Ininterrupto</p>
             </div>
             <div className="bg-slate-50 p-5 rounded-3xl border border-slate-100 group hover:border-primary/30 transition-colors">
               <h4 className="text-3xl font-black text-primary mb-1">Preço</h4>
               <p className="text-[9px] font-black uppercase tracking-widest text-gray-400">Fechado e Garantido</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const ServicesTable = () => (
  <section id="servicos" className="py-16 bg-slate-50 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#39847a15_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-12 reveal">
        <span className="text-primary font-black uppercase tracking-[0.4em] text-[9px] bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">Checklist de Soluções</span>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark mt-4 uppercase tracking-tighter">O que resolvemos <span className="text-primary">agora</span></h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {SERVICES_LIST.map((service, index) => (
          <div key={index} className="reveal bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-3 hover:border-primary hover:shadow-lg transition-all group cursor-pointer">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
              <i className="fa fa-check text-xs"></i>
            </div>
            <span className="font-bold text-[11px] uppercase tracking-tight text-gray-700 leading-tight">{service}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ServiceCards = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-3 gap-6">
        {[
          { 
            title: "Hidrojateamento", 
            icon: "fa-water", 
            color: "bg-primary text-white", 
            desc: "Limpeza de alta pressão (25.000 PSI) para desobstrução profunda e restauração de diâmetro interno.",
            link: "/servicos/hidrojateamento"
          },
          { 
            title: "Limpeza de Fossa", 
            icon: "fa-truck", 
            color: "bg-dark text-white", 
            desc: "Esgotamento técnico com caminhão vácuo e descarte em estação certificada Sanepar.",
            link: "/servicos/limpeza-de-fossa"
          },
          { 
            title: "Vídeo Inspeção", 
            icon: "fa-search", 
            color: "bg-slate-50 text-dark border border-slate-100", 
            desc: "Diagnóstico preciso por micro-câmeras HD. Localize o problema sem quebrar nada.",
            link: "/servicos/video-inspecao"
          }
        ].map((item, i) => (
          <div key={i} className="reveal h-full">
            <div className={`${item.color} p-10 rounded-[3.5rem] shadow-xl space-y-5 flex flex-col h-full hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>
              <i className={`fa ${item.icon} text-5xl opacity-20`}></i>
              <h3 className="text-3xl font-black font-display uppercase tracking-tight leading-none">{item.title}</h3>
              <p className="opacity-70 leading-relaxed flex-grow text-sm font-light">{item.desc}</p>
              <Link to={item.link} className={`block w-full text-center py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all ${item.color.includes('slate') ? 'bg-dark text-white' : 'bg-white text-primary'} hover:scale-105 shadow-lg`}>
                Ver Manual Técnico
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const WhyChooseSection = () => (
  <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10"></div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16 reveal">
        <h2 className="font-display text-4xl lg:text-6xl font-black mb-4 uppercase tracking-tighter">PADRÃO <span className="text-primary">QUALIDADE ADP</span></h2>
        <p className="text-gray-500 max-w-xl mx-auto font-light text-sm uppercase tracking-widest">Compromisso com o Saneamento de Curitiba</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: 'fa-clock', title: 'Plantão 24h', desc: 'Sábado, domingo e feriados. Emergência imediata.' },
          { icon: 'fa-bolt', title: 'Chegada em 40min', desc: 'Unidades móveis posicionadas em bairros estratégicos.' },
          { icon: 'fa-shield-alt', title: 'Certificação', desc: 'Garantia real de 90 dias por escrito.' },
          { icon: 'fa-tags', title: 'Preço Justo', desc: 'Transparência: Não cobramos por metro cúbico.' }
        ].map((item, i) => (
          <div key={i} className="reveal text-center group bg-white/5 p-8 rounded-[2.5rem] border border-white/5 hover:bg-white/10 transition-all">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all border border-primary/20">
              <i className={`fa ${item.icon} text-2xl text-primary`}></i>
            </div>
            <h4 className="text-lg font-bold mb-2 uppercase tracking-tight">{item.title}</h4>
            <p className="text-gray-500 text-[11px] leading-relaxed font-light">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const FAQSection = () => (
  <section className="py-16 bg-white relative">
    <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')]"></div>
    <div className="container mx-auto px-4 max-w-4xl relative z-10">
      <div className="bg-dark rounded-[3.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.15)] p-12 lg:p-16 text-center border border-white/5 relative group overflow-hidden reveal text-white">
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full -mr-24 -mt-24 blur-3xl"></div>
        <h2 className="font-display text-4xl lg:text-5xl font-black mb-4 uppercase tracking-tighter">DÚVIDAS <span className="text-primary">TÉCNICAS?</span></h2>
        <p className="text-gray-400 text-lg mb-10 font-light italic">"Quanto custa? Cobram visita? Como funciona a garantia?"</p>
        <Link to="/faq" className="inline-flex items-center gap-4 bg-primary text-white px-12 py-5 rounded-2xl font-black text-xs hover:scale-105 transition-all uppercase tracking-widest shadow-xl shadow-primary/20">
          Acessar Guia Completo <i className="fa fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  </section>
);
