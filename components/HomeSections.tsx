
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_LIST, COMPANY_PHONE, COMPANY_WHATSAPP } from '../constants';

export const HeroSection = () => (
  <section className="relative bg-slate-900 text-white pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2670&auto=format&fit=crop" 
        alt="Manutenção Hidráulica Profissional" 
        className="absolute inset-0 w-full h-full object-cover opacity-10 animate-zoom-slow"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent"></div>
    </div>

    <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold border border-white/20">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span> PLANTÃO EM CURITIBA
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold leading-tight uppercase tracking-tighter">
          Desentupidora <br/>
          <span className="text-primary">Especialista 24h</span>
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed max-w-xl font-light">
          Líder em desentupimentos industriais e residenciais. Tecnologia de ponta, 
          técnicos licenciados e <strong>garantia de 90 dias</strong> por escrito. 
          Resolva agora o problema de esgoto, pias ou fossas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
          <a href={`https://wa.me/${COMPANY_WHATSAPP}`} className="bg-[#25d366] text-white px-10 py-5 rounded-xl font-black text-lg shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3">
            <i className="fab fa-whatsapp text-3xl"></i> WHATSAPP URGENTE
          </a>
          <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3">
            <i className="fa fa-phone-alt"></i> {COMPANY_PHONE}
          </a>
        </div>
      </div>
      
      <div className="hidden lg:flex justify-end relative">
        <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="relative bg-slate-800 p-2 rounded-[3rem] shadow-2xl border-4 border-slate-700 w-full max-w-[360px] aspect-[9/16] overflow-hidden">
           <iframe 
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/12D85Dmnheg?autoplay=1&mute=1&loop=1&playlist=12D85Dmnheg" 
            title="ADP em ação"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

export const ContentExpansionSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="prose prose-slate max-w-none space-y-12 text-gray-700 leading-relaxed">
        <article className="space-y-6">
          <h2 className="text-3xl font-display font-bold text-dark border-l-8 border-primary pl-6">O Papel Vital das Desentupidoras na Saúde Pública de Curitiba</h2>
          <p>
            A infraestrutura de saneamento de uma metrópole como Curitiba é um sistema complexo que exige manutenção constante. As desentupidoras profissionais, como a <strong>ADP Desentupidora</strong>, não apenas resolvem problemas domésticos de pias e ralos, mas atuam como uma barreira sanitária essencial.
          </p>
        </article>

        <article className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-inner space-y-6">
          <h2 className="text-3xl font-display font-bold text-primary">Tecnologia Hidráulica de Ponta</h2>
          <p>
            O desentupimento evoluiu. A ADP investe em sistemas rotativos e hidrojateamento de alta performance para garantir a limpeza total das tubulações.
          </p>
        </article>
      </div>
    </div>
  </section>
);

export const ServicesTable = () => (
  <section id="servicos" className="py-20 bg-slate-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl font-bold text-dark mb-4 uppercase tracking-tight">O que resolvemos para você</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Atendimento técnico especializado com equipamentos de última geração.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES_LIST.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
              <i className="fa fa-check"></i>
            </div>
            <span className="font-bold text-gray-700">{service}</span>
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
        <div className="bg-primary text-white p-10 rounded-3xl shadow-xl space-y-4">
          <i className="fa fa-water text-4xl"></i>
          <h3 className="text-2xl font-bold">Hidrojateamento</h3>
          <p className="opacity-90">Limpeza profunda com alta pressão para redes de esgoto e galerias pluviais.</p>
          <Link to="/servicos/hidrojateamento" className="inline-block bg-white text-primary px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">Saiba Mais</Link>
        </div>
        <div className="bg-dark text-white p-10 rounded-3xl shadow-xl space-y-4">
          <i className="fa fa-truck text-4xl"></i>
          <h3 className="text-2xl font-bold">Limpeza de Fossa</h3>
          <p className="opacity-90">Esgotamento técnico de fossas sépticas e negras com caminhão vácuo.</p>
          <Link to="/servicos/limpeza-de-fossa" className="inline-block bg-primary text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-teal-700 transition-colors">Saiba Mais</Link>
        </div>
        <div className="bg-slate-100 p-10 rounded-3xl shadow-md space-y-4">
          <i className="fa fa-search text-4xl text-primary"></i>
          <h3 className="text-2xl font-bold text-dark">Vídeo Inspeção</h3>
          <p className="text-gray-600">Diagnóstico preciso por câmeras para localizar problemas sem quebrar nada.</p>
          <a href="#contato" className="inline-block bg-primary text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-teal-700 transition-colors">Solicitar</a>
        </div>
      </div>
    </div>
  </section>
);

export const WhyChooseSection = () => (
  <section className="py-20 bg-dark text-white overflow-hidden relative">
    <div className="container mx-auto px-4 relative z-10">
      <h2 className="text-center font-display text-3xl md:text-5xl font-bold mb-16">Por que escolher a ADP?</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: 'fa-clock', title: 'Atendimento 24h', desc: 'Plantão ininterrupto em Curitiba e RMC.' },
          { icon: 'fa-bolt', title: 'Chegada Rápida', desc: 'Técnicos em bases móveis para chegar em 40min.' },
          { icon: 'fa-shield-alt', title: '90 Dias de Garantia', desc: 'Sua satisfação e tranquilidade asseguradas.' },
          { icon: 'fa-hand-holding-usd', title: 'Preço Justo', desc: 'Facilitamos o pagamento em até 12x no cartão.' }
        ].map((item, i) => (
          <div key={i} className="text-center space-y-4 group">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary transition-colors">
              <i className={`fa ${item.icon} text-3xl text-primary group-hover:text-white`}></i>
            </div>
            <h4 className="text-xl font-bold">{item.title}</h4>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const FAQSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 max-w-4xl text-center">
      <h2 className="font-display text-3xl font-bold mb-8">Dúvidas Frequentes</h2>
      <p className="text-gray-600 mb-12 italic">"Qual o valor do desentupimento? Cobram visita? Como funciona?"</p>
      <div className="bg-white rounded-3xl shadow-lg p-10 space-y-6 text-left border border-gray-100">
        <div className="space-y-2">
          <h4 className="font-bold text-primary">Cobram taxa de visita?</h4>
          <p className="text-gray-600 text-sm">Não cobramos taxa de visita em Curitiba. O orçamento é feito no local sem compromisso.</p>
        </div>
        <div className="pt-6 border-t flex justify-center">
          <Link to="/faq" className="text-primary font-bold hover:underline">Ver todas as perguntas <i className="fa fa-arrow-right ml-1"></i></Link>
        </div>
      </div>
    </div>
  </section>
);
