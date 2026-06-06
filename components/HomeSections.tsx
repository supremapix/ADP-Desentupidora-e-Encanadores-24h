
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PremiumImage from './PremiumImage';
import { SERVICES_LIST, COMPANY_PHONE, COMPANY_WHATSAPP, BAIRROS, ADP_IMAGES } from '../constants';

export const HeroSection = () => {
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadVideo(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-slate-950 text-white pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://img.desentopeadp.com.br/hero-adp.webp" 
          alt="Saneamento Profissional" 
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover opacity-25 animate-zoom-slow filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-primary/10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-5 text-center lg:text-left reveal active">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black border border-primary/30 tracking-widest text-primary">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> 
            BASE OPERACIONAL CIC - CURITIBA & RMC
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight uppercase tracking-tighter">
            CHEGA DE <br/>
            <span className="text-primary drop-shadow-[0_0_30px_rgba(57,132,122,0.6)]">PREÇO POR METRO</span>
          </h1>
          <p className="text-base text-gray-300 leading-relaxed max-w-xl font-light">
            Orçamento <strong>fechado e transparente</strong> no local. Tecnologia industrial para resolver seu entupimento seguindo as normas NBR 8160.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-2 justify-center lg:justify-start items-center sm:items-start">
            <div className="flex flex-col items-center lg:items-start w-full sm:w-auto max-w-[280px]">
              <a href={`https://wa.me/${COMPANY_WHATSAPP}`} className="w-full btn-shimmer bg-[#25d366] text-white px-8 py-4 rounded-xl font-black text-lg shadow-[0_20px_40px_rgba(37,211,102,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-3">
                <i className="fab fa-whatsapp text-2xl"></i> WhatsApp
              </a>
              <p className="text-[10px] text-gray-400 mt-1.5 text-center lg:text-left leading-tight">Orçamento rápido e sem taxa de visita.</p>
            </div>
            <div className="flex flex-col items-center lg:items-start w-full sm:w-auto max-w-[280px]">
              <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="w-full bg-white/5 border border-white/10 backdrop-blur-md text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                 <i className="fa fa-phone-alt text-primary"></i> Ligar
              </a>
              <p className="text-[10px] text-gray-400 mt-1.5 text-center lg:text-left leading-tight">Atendimento emergencial imediato 24h.</p>
            </div>
          </div>
        </div>
        
        <div 
          className="lg:col-span-5 hidden lg:flex justify-end relative cursor-pointer"
          onMouseEnter={() => setLoadVideo(true)}
          onClick={() => setLoadVideo(true)}
        >
          <div className="relative bg-slate-900 p-1.5 rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/10 w-full max-w-[340px] aspect-[9/16] overflow-hidden group">
            {!loadVideo ? (
              <div className="relative w-full h-full flex items-center justify-center bg-black">
                <img 
                  src="https://img.youtube.com/vi/12D85Dmnheg/hqdefault.jpg" 
                  alt="ADP Operação Preview" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/95 flex items-center justify-center text-white text-sm group-hover:scale-110 transition-transform duration-300">
                    <i className="fa fa-play ml-0.5"></i>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white/80">Ver Operação</span>
                </div>
              </div>
            ) : (
              <iframe 
                className="w-full h-full object-cover opacity-80"
                src="https://www.youtube.com/embed/12D85Dmnheg?autoplay=1&mute=1&loop=1&playlist=12D85Dmnheg&controls=0&modestbranding=1" 
                title="ADP Operação"
                frameBorder="0"
              ></iframe>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ArsenalSection = () => (
  <section className="py-12 bg-dark relative overflow-hidden">
     <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#9B111E15_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
     <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
           <h2 className="text-white font-display text-3xl font-black uppercase tracking-tight">Arsenal <span className="text-primary">Tecnológico</span></h2>
           <p className="text-gray-500 text-xs mt-2 uppercase tracking-widest">Precisão cirúrgica no desentupimento</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
           {[
             { title: "K-500 Industrial", desc: "Sistema rotativo de 1HP capaz de triturar raízes e detritos em tubos de até 200mm.", icon: "fa-cogs" },
             { title: "Sonda de Nitrogênio", desc: "Localização de obstruções gasosas e pressão controlada para canos frágeis.", icon: "fa-flask" },
             { title: "Câmera Termográfica", desc: "Detecção de infiltrações ocultas por gradiente de temperatura sem quebrar nada.", icon: "fa-camera" }
           ].map((item, i) => (
             <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all">
                <i className={`fa ${item.icon} text-primary text-3xl mb-4`}></i>
                <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
     </div>
  </section>
);

export const TechnicalAccordion = () => {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { 
      q: "Qual norma técnica a ADP segue para saneamento predial?", 
      a: "Seguimos a NBR 8160 da ABNT, que estabelece as exigências técnicas para projeto e execução de sistemas prediais de esgoto sanitário, garantindo higiene, segurança e estanqueidade total da rede." 
    },
    { 
      q: "Por que o hidrojateamento é superior à máquina rotativa?", 
      a: "Enquanto a máquina rotativa tritura obstruções sólidas, o hidrojateamento de alta pressão (2500+ PSI) realiza uma limpeza hidrodinâmica, removendo gordura petrificada e restaurando o diâmetro original do cano." 
    },
    { 
      q: "Como é feito o descarte dos resíduos de fossa?", 
      a: "Todo efluente coletado é transportado via caminhão vácuo hermético e descartado exclusivamente em Estações de Tratamento de Esgoto (ETE) certificadas pela Sanepar, com emissão de manifesto de transporte (MTR)." 
    },
    { 
      q: "Qual a diferença técnica entre fossa séptica e fossa negra?", 
      a: "A fossa séptica realiza o tratamento primário do esgoto via decantação e digestão anaeróbia. A fossa negra é um buraco rústico que contamina o lençol freático. A ADP realiza o esgotamento técnico de ambos os modelos." 
    }
  ];

  return (
    <section className="py-16 bg-white relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-10">
           <h2 className="text-dark font-display text-4xl font-black uppercase tracking-tighter">Manual <span className="text-primary">Técnico ADP</span></h2>
           <p className="text-gray-500 text-sm mt-2">Transparência em engenharia e processos</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left p-6 flex justify-between items-center font-bold text-dark bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <span className="text-sm md:text-base">{faq.q}</span>
                <i className={`fa fa-chevron-down transition-transform ${open === i ? 'rotate-180' : ''}`}></i>
              </button>
              {open === i && (
                <div className="p-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ServiceCards = () => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-3 gap-6">
        {[
          { title: "Hidrojateamento", icon: "fa-water", color: "bg-primary text-white", desc: "Limpeza de alta pressão industrial para condomínios e galpões.", link: "/servicos/hidrojateamento" },
          { title: "Limpeza de Fossa", icon: "fa-truck", color: "bg-dark text-white", desc: "Esgotamento técnico com descarte certificado e laudo ambiental.", link: "/servicos/limpeza-de-fossa" },
          { title: "Vídeo Inspeção", icon: "fa-search", color: "bg-slate-50 text-dark border", desc: "Diagnóstico preciso por micro-câmeras HD sem quebra de piso.", link: "/servicos/video-inspecao" }
        ].map((item, i) => (
          <div key={i} className={`${item.color} p-8 rounded-[3rem] shadow-xl space-y-4 hover:-translate-y-2 transition-all relative overflow-hidden group flex flex-col justify-between`}>
            <div className="space-y-4">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12 group-hover:scale-125 transition-transform"></div>
              <i className={`fa ${item.icon} text-4xl opacity-30`}></i>
              <h3 className="text-xl md:text-2xl font-black font-display uppercase tracking-tight">{item.title}</h3>
              <p className="opacity-70 text-xs md:text-sm leading-relaxed">{item.desc}</p>
            </div>
            <div className="pt-4">
              <Link to={item.link} className="block w-full text-center py-3 rounded-xl font-black text-[10px] uppercase tracking-widest bg-white text-primary hover:bg-primary hover:text-white transition-all">Detalhes</Link>
              <p className="text-[9px] opacity-60 text-center mt-1.5 font-semibold">Consulte laudos e especificações.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ContentExpansionSection = () => (
  <section className="py-12 bg-white relative">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <PremiumImage src="https://img.desentopeadp.com.br/adp-desentope-cwb.webp" alt="Engenharia ADP" className="aspect-video shadow-2xl border-4 border-slate-100 rounded-3xl" />
        <div className="space-y-4">
          <h2 className="text-4xl font-display font-black text-dark tracking-tighter uppercase leading-none">REFERÊNCIA <br/><span className="text-primary">SANEAMENTO</span></h2>
          <p className="text-sm text-gray-600 leading-relaxed font-light">A ADP utiliza protocolos de engenharia para garantir a fluidez total da rede pluvial e sanitária. Atendemos indústrias, comércios e residências com precisão militar no CIC e toda Curitiba.</p>
          <div className="flex gap-4">
             <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex-1">
               <h4 className="text-2xl font-black text-primary">24h</h4>
               <p className="text-[9px] font-black uppercase text-gray-400">Atendimento Emergencial</p>
             </div>
             <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex-1">
               <h4 className="text-2xl font-black text-primary">0%</h4>
               <p className="text-[9px] font-black uppercase text-gray-400">Quebra de Piso</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const PremiumHighlightSection = () => (
  <section className="py-16 bg-slate-900 overflow-hidden relative border-t border-b border-primary/20 bg-dark">
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-dark"></div>
    <div className="container mx-auto px-4 max-w-6xl relative z-10">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6 text-left">
          <div className="badge">Destaque Exclusivo</div>
          <h2 className="text-4xl lg:text-5xl font-display font-black text-white leading-none uppercase tracking-tighter">
            TECNOLOGIA EM <br/>
            <span className="text-primary">ULTRA PERFORMANCE</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
            Nossa equipe técnica conta com a frota mais moderna de Curitiba. Atendemos com caminhões de alta capacidade, hidrojato rotativo e vídeo inspeção completa, garantindo o restabelecimento imediato dos fluxos sanitários sem quebrar pisos ou paredes.
          </p>
          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4">
             <div className="flex gap-4 items-start">
               <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                 <i className="fa fa-shield-alt text-sm"></i>
               </div>
               <div>
                 <p className="text-sm font-bold text-white uppercase tracking-tight">Garantia Blindada ADP</p>
                 <p className="text-xs text-gray-400 mt-1 leading-relaxed">Seu problema resolvido de verdade ou seu dinheiro de volta. Sem pegadinhas, sem letras miúdas com conformidade plena ABNT.</p>
               </div>
             </div>
          </div>
          <div className="flex pt-4">
            <a href={`https://wa.me/${COMPANY_WHATSAPP}`} className="btn-whatsapp w-full sm:w-auto shadow-[0_20px_40px_rgba(37,211,102,0.3)]">
               <i className="fab fa-whatsapp text-lg"></i> SOLICITAR ATENDIMENTO IMEDIATO
            </a>
          </div>
        </div>
        <div className="lg:col-span-6 relative">
          <div className="relative group">
             <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-[#25d366] rounded-[2.5rem] blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
             <img 
               src="https://img.desentopeadp.com.br/adp-desenupiu.webp" 
               alt="Ação profissional ADP" 
               loading="lazy"
               className="relative rounded-[2.5rem] shadow-2xl border-2 border-white/10 w-full object-cover aspect-[4/3] transform hover:scale-[1.01] transition-transform duration-500" 
             />
          </div>
        </div>
      </div>
    </div>
  </section>
);
