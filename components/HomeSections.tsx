
import React from 'react';
import { Link } from 'react-router-dom';
import PremiumImage from './PremiumImage';
import { SERVICES_LIST, COMPANY_PHONE, COMPANY_WHATSAPP } from '../constants';

export const HeroSection = () => (
  <section className="relative bg-slate-950 text-white pt-24 pb-20 lg:pt-36 lg:pb-36 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2670&auto=format&fit=crop" 
        alt="Manutenção Hidráulica Profissional" 
        className="absolute inset-0 w-full h-full object-cover opacity-20 animate-zoom-slow"
      />
      {/* Overlay Premium de Cor e Degradê */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-primary/10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
    </div>

    <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-10 text-center lg:text-left reveal">
        <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl px-6 py-2 rounded-full text-xs font-black border border-white/10 tracking-widest shadow-2xl">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> 
          PLANTÃO 24H EM CURITIBA E RMC
        </div>
        <h1 className="font-display text-5xl sm:text-8xl font-black leading-none uppercase tracking-tighter">
          DESENTUPIDORA <br/>
          <span className="text-primary drop-shadow-[0_0_15px_rgba(57,132,122,0.5)]">PROFISSIONAL</span>
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-xl font-light">
          Líder em desentupimentos industriais de alta performance. Tecnologia de ponta, 
          técnicos licenciados e <strong>garantia total</strong> por escrito. 
          Resolva agora problemas de esgoto, pias ou fossas.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center lg:justify-start">
          <a href={`https://wa.me/${COMPANY_WHATSAPP}`} className="bg-[#25d366] text-white px-12 py-6 rounded-[2rem] font-black text-xl shadow-[0_20px_40px_rgba(37,211,102,0.3)] hover:scale-105 transition-all flex items-center justify-center gap-4 group">
            <i className="fab fa-whatsapp text-3xl group-hover:rotate-12 transition-transform"></i> WHATSAPP URGENTE
          </a>
          <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="bg-white/5 border border-white/10 backdrop-blur-md text-white px-12 py-6 rounded-[2rem] font-bold text-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3">
            <i className="fa fa-phone-alt opacity-50"></i> {COMPANY_PHONE}
          </a>
        </div>
      </div>
      
      <div className="hidden lg:flex justify-end relative reveal">
        <div className="absolute -inset-20 bg-primary/20 rounded-full blur-[150px] animate-pulse-slow"></div>
        <div className="relative bg-slate-900 p-3 rounded-[4rem] shadow-2xl border-4 border-slate-800/50 w-full max-w-[420px] aspect-[9/16] overflow-hidden group">
           <iframe 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            src="https://www.youtube.com/embed/12D85Dmnheg?autoplay=1&mute=1&loop=1&playlist=12D85Dmnheg&controls=0" 
            title="ADP em ação"
            frameBorder="0"
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute bottom-10 left-10 right-10">
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10">
               <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Vídeo Institucional</p>
               <h4 className="font-bold text-lg">ADP EM AÇÃO 24H</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const ContentExpansionSection = () => (
  <section className="py-24 bg-white relative">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="reveal">
          <PremiumImage 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop" 
            alt="Técnico da ADP realizando manutenção" 
            className="aspect-square"
          />
        </div>
        <div className="space-y-10 text-gray-700 leading-relaxed reveal">
          <article className="space-y-6">
            <div className="w-12 h-1 bg-primary mb-6"></div>
            <h2 className="text-4xl font-display font-bold text-dark tracking-tight">Referência em Saneamento <br/><span className="text-primary">Curitibano</span></h2>
            <p className="text-lg">
              A infraestrutura de uma metrópole como Curitiba exige manutenção constante. As desentupidoras profissionais, como a <strong>ADP Saneamento</strong>, atuam como uma barreira sanitária essencial para a saúde pública.
            </p>
          </article>

          <div className="grid grid-cols-2 gap-8 pt-6">
             <div>
               <h4 className="text-3xl font-black text-primary mb-1">25+</h4>
               <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Anos de Mercado</p>
             </div>
             <div>
               <h4 className="text-3xl font-black text-primary mb-1">100%</h4>
               <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Garantia Técnica</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const ServicesTable = () => (
  <section id="servicos" className="py-24 bg-slate-50 relative overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-20 reveal">
        <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">Catálogo de Soluções</span>
        <h2 className="font-display text-5xl font-bold text-dark mt-4 uppercase tracking-tighter">O que resolvemos <span className="text-primary">hoje?</span></h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_LIST.map((service, index) => (
          <div key={index} className="reveal bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex items-center gap-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <i className="fa fa-check text-xl"></i>
            </div>
            <span className="font-bold text-lg text-gray-700">{service}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ServiceCards = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="reveal">
          <div className="bg-primary text-white p-12 rounded-[3.5rem] shadow-2xl space-y-6 relative overflow-hidden group h-full flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform"></div>
            <i className="fa fa-water text-5xl opacity-50"></i>
            <h3 className="text-3xl font-bold">Hidrojateamento</h3>
            <p className="opacity-80 leading-relaxed flex-grow">Limpeza profunda com alta pressão para redes de esgoto e galerias pluviais industriais.</p>
            <Link to="/servicos/hidrojateamento" className="inline-block bg-white text-primary px-10 py-4 rounded-2xl font-black text-sm hover:scale-105 transition-all text-center">SAIBA MAIS</Link>
          </div>
        </div>
        
        <div className="reveal" style={{ animationDelay: '0.2s' }}>
          <div className="bg-dark text-white p-12 rounded-[3.5rem] shadow-2xl space-y-6 relative overflow-hidden group h-full flex flex-col">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform"></div>
            <i className="fa fa-truck text-5xl opacity-50"></i>
            <h3 className="text-3xl font-bold">Limpeza de Fossa</h3>
            <p className="opacity-80 leading-relaxed flex-grow">Esgotamento técnico de fossas sépticas e caixas de gordura com caminhão vácuo certificado.</p>
            <Link to="/servicos/limpeza-de-fossa" className="inline-block bg-primary text-white px-10 py-4 rounded-2xl font-black text-sm hover:scale-105 transition-all text-center">SAIBA MAIS</Link>
          </div>
        </div>

        <div className="reveal" style={{ animationDelay: '0.4s' }}>
          <div className="bg-slate-100 p-12 rounded-[3.5rem] shadow-md space-y-6 relative overflow-hidden group h-full flex flex-col border border-gray-200">
            <i className="fa fa-search text-5xl text-primary opacity-30"></i>
            <h3 className="text-3xl font-bold text-dark">Vídeo Inspeção</h3>
            <p className="text-gray-600 leading-relaxed flex-grow">Diagnóstico preciso por micro-câmeras para localizar problemas sem quebrar nada.</p>
            <a href="#contato" className="inline-block bg-dark text-white px-10 py-4 rounded-2xl font-black text-sm hover:scale-105 transition-all text-center">SOLICITAR AGORA</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const WhyChooseSection = () => (
  <section className="py-32 bg-slate-950 text-white overflow-hidden relative">
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-24 reveal">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Por que somos <span className="text-primary">diferentes?</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Excelência técnica e compromisso ambiental em cada atendimento.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {[
          { icon: 'fa-clock', title: 'Atendimento 24h', desc: 'Plantão ininterrupto em Curitiba e RMC.' },
          { icon: 'fa-bolt', title: 'Chegada Rápida', desc: 'Técnicos em bases móveis para chegar em 40min.' },
          { icon: 'fa-shield-alt', title: '90 Dias de Garantia', desc: 'Sua satisfação assegurada por laudo técnico.' },
          { icon: 'fa-hand-holding-usd', title: 'Preço Justo', desc: 'Parcelamento em até 12x no cartão de crédito.' }
        ].map((item, i) => (
          <div key={i} className="reveal text-center space-y-6 group">
            <div className="w-24 h-24 bg-white/5 rounded-[2.5rem] flex items-center justify-center mx-auto border border-white/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
              <i className={`fa ${item.icon} text-4xl text-primary group-hover:text-white transition-colors`}></i>
            </div>
            <h4 className="text-2xl font-bold">{item.title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed px-4">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const FAQSection = () => (
  <section className="py-24 bg-slate-50">
    <div className="container mx-auto px-4 max-w-4xl text-center">
      <div className="reveal mb-16">
        <h2 className="font-display text-4xl font-bold mb-6">Dúvidas Frequentes</h2>
        <p className="text-gray-600 italic">"Qual o valor do desentupimento? Cobram visita? Como funciona?"</p>
      </div>
      <div className="reveal bg-white rounded-[3rem] shadow-2xl p-12 text-left border border-slate-100 relative group overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
        <div className="space-y-6 relative z-10">
          <div className="space-y-4">
            <h4 className="font-bold text-2xl text-primary flex items-center gap-3">
              <i className="fa fa-question-circle opacity-30"></i> Cobram taxa de visita?
            </h4>
            <p className="text-gray-600 text-lg leading-relaxed">Não cobramos taxa de visita em Curitiba. Nossos técnicos realizam o diagnóstico no local e passam o orçamento sem compromisso.</p>
          </div>
          <div className="pt-10 border-t border-gray-100 flex justify-center">
            <Link to="/faq" className="bg-dark text-white px-10 py-4 rounded-2xl font-black text-sm hover:bg-primary transition-all flex items-center gap-3">
              VER TODAS AS PERGUNTAS <i className="fa fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);
