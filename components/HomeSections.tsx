
import React from 'react';
import { SERVICES_LIST } from '../constants';

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
          <a href="https://wa.me/5541985171966" className="bg-[#25d366] text-white px-10 py-5 rounded-xl font-black text-lg shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3">
            <i className="fab fa-whatsapp text-3xl"></i> WHATSAPP URGENTE
          </a>
          <a href="tel:4133451194" className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3">
            <i className="fa fa-phone-alt"></i> (41) 3345-1194
          </a>
        </div>
      </div>
      
      {/* Video Content Placeholder or UI Element */}
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
        
        {/* Artigo 1 */}
        <article className="space-y-6">
          <h2 className="text-3xl font-display font-bold text-dark border-l-8 border-primary pl-6">O Papel Vital das Desentupidoras na Saúde Pública de Curitiba</h2>
          <p>
            A infraestrutura de saneamento de uma metrópole como Curitiba é um sistema complexo que exige manutenção constante. As desentupidoras profissionais, como a <strong>ADP Desentupidora</strong>, não apenas resolvem problemas domésticos de pias e ralos, mas atuam como uma barreira sanitária essencial. Entupimentos em redes de esgoto podem causar refluxos de coliformes fecais, contaminação do solo e proliferação de vetores de doenças como a leptospirose e o cólera.
          </p>
          <p>
            Em bairros de alto crescimento como o CIC (Cidade Industrial de Curitiba), a carga sobre o sistema pluvial e de esgoto é imensa. Nossa atuação técnica garante que obstruções causadas por gordura solidificada, raízes de árvores e descarte inadequado de resíduos sólidos sejam removidas de forma segura, seguindo as normas da <strong>Sanepar</strong> e da <strong>Vigilância Sanitária</strong>.
          </p>
        </article>

        {/* Artigo 2 */}
        <article className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-inner space-y-6">
          <h2 className="text-3xl font-display font-bold text-primary">Tecnologia Hidráulica: Do Roto-Rooter ao Hidrojateamento de 25.000 PSI</h2>
          <p>
            O desentupimento evoluiu de simples cabos de aço para sistemas computorizados. A ADP investe nos dois pilares da tecnologia hidráulica moderna:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-dark mb-2">1. Sistema Rotativo K-500:</h4>
              <p className="text-sm">Ideal para desobstruções mecânicas em ramais residenciais. Através de sondas flexíveis, trituramos obstruções sólidas como panos, raízes e plásticos sem danificar as paredes do PVC ou da tubulação de cerâmica antiga.</p>
            </div>
            <div>
              <h4 className="font-bold text-dark mb-2">2. Hidrojateamento de Alta Performance:</h4>
              <p className="text-sm">O uso de pressão de água concentrada permite a "higienização" completa da tubulação. Diferente da máquina rotativa que apenas perfura a obstrução, o hidrojato lava o cano, removendo 100% da gordura incrustada nas paredes internas.</p>
            </div>
          </div>
        </article>

        {/* Artigo 3 */}
        <article className="space-y-6">
          <h2 className="text-3xl font-display font-bold text-dark border-l-8 border-red-600 pl-6">Normas Ambientais e o Descarte Ecológico</h2>
          <p>
            Um dos grandes diferenciais da ADP Desentupidora Curitiba é o nosso compromisso com o descarte ecológico. Muitos prestadores informais despejam resíduos de fossas sépticas em bueiros pluviais, o que é crime ambiental. Nós operamos com <strong>Caminhões Auto Vácuo</strong> selados e entregamos o efluente coletado exclusivamente em Estações de Tratamento de Esgoto (ETEs) certificadas.
          </p>
          <p>
            Para empresas e indústrias, emitimos o <strong>Certificado de Destinação Final de Resíduos</strong>, documento essencial para auditorias ambientais e conformidade com o <strong>IBAMA</strong> e <strong>IAP</strong>. A manutenção de caixas de gordura, por exemplo, não é apenas estética; é uma exigência legal para evitar o entupimento da rede pública coletora, que geraria multas pesadíssimas para o estabelecimento comercial.
          </p>
        </article>

        {/* Artigo 4 - Saneamento e Bairros */}
        <article className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-display font-bold text-dark">Estratégia de Cobertura Geográfica: Atendimento em 40 Minutos</h2>
            <p>
              Como conseguimos chegar tão rápido em bairros como Campo Comprido, Batel, Santa Felicidade ou no CIC? A ADP mantém equipes volantes operando 24h. Cada caminhão funciona como uma base móvel completa. 
            </p>
            <p>
              Entendemos que o trânsito de Curitiba pode ser um desafio, especialmente em horários de pico nos eixos estruturais. Por isso, nosso sistema de logística mapeia as ocorrências e desloca o técnico mais próximo, garantindo que a urgência sanitária não se transforme em um desastre patrimonial.
            </p>
          </div>
          <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
            <ul className="space-y-3 font-bold text-primary">
              <li className="flex items-center gap-2"><i className="fa fa-map-marker-alt"></i> CIC & Pinheirinho</li>
              <li className="flex items-center gap-2"><i className="fa fa-map-marker-alt"></i> Batel & Água Verde</li>
              <li className="flex items-center gap-2"><i className="fa fa-map-marker-alt"></i> Santa Felicidade & Mercês</li>
              <li className="flex items-center gap-2"><i className="fa fa-map-marker-alt"></i> Boqueirão & Sítio Cercado</li>
              <li className="flex items-center gap-2"><i className="fa fa-map-marker-alt"></i> Centro & Centro Cívico</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
);

// ServicesTable fix: Define and export the missing ServicesTable component
export const ServicesTable = () => (
  <section id="servicos" className="py-20 bg-slate-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl font-bold text-dark mb-4 uppercase tracking-tight">O que resolvemos para você</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Atendimento técnico especializado com equipamentos de última geração para qualquer tipo de obstrução.</p>
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

// ServiceCards fix: Define and export the missing ServiceCards component
export const ServiceCards = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="bg-primary text-white p-10 rounded-3xl shadow-xl space-y-4">
          <i className="fa fa-water text-4xl"></i>
          <h3 className="text-2xl font-bold">Hidrojateamento</h3>
          <p className="opacity-90">Limpeza profunda com alta pressão para redes de esgoto e galerias pluviais.</p>
          <a href="/servicos/hidrojateamento" className="inline-block bg-white text-primary px-6 py-2 rounded-full font-bold text-sm">Saiba Mais</a>
        </div>
        <div className="bg-dark text-white p-10 rounded-3xl shadow-xl space-y-4">
          <i className="fa fa-truck text-4xl"></i>
          <h3 className="text-2xl font-bold">Limpeza de Fossa</h3>
          <p className="opacity-90">Esgotamento técnico de fossas sépticas e negras com caminhão vácuo.</p>
          <a href="/servicos/limpeza-de-fossa" className="inline-block bg-primary text-white px-6 py-2 rounded-full font-bold text-sm">Saiba Mais</a>
        </div>
        <div className="bg-slate-100 p-10 rounded-3xl shadow-md space-y-4">
          <i className="fa fa-search text-4xl text-primary"></i>
          <h3 className="text-2xl font-bold text-dark">Vídeo Inspeção</h3>
          <p className="text-gray-600">Diagnóstico preciso por câmeras para localizar problemas sem quebrar nada.</p>
          <a href="#contato" className="inline-block bg-primary text-white px-6 py-2 rounded-full font-bold text-sm">Solicitar</a>
        </div>
      </div>
    </div>
  </section>
);

// WhyChooseSection fix: Define and export the missing WhyChooseSection component
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

// FAQSection fix: Define and export the missing FAQSection component
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
        <div className="space-y-2 border-t pt-4">
          <h4 className="font-bold text-primary">Atendem condomínios?</h4>
          <p className="text-gray-600 text-sm">Sim! Temos preços e condições especiais para contratos de manutenção em condomínios.</p>
        </div>
        <div className="pt-6 border-t flex justify-center">
          <a href="/faq" className="text-primary font-bold hover:underline">Ver todas as perguntas <i className="fa fa-arrow-right ml-1"></i></a>
        </div>
      </div>
    </div>
  </section>
);
