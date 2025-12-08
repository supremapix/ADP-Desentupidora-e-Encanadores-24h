import React, { useState } from 'react';
import { SERVICES_LIST } from '../constants';
import { Link } from 'react-router-dom';

export const HeroSection = () => (
  <section className="relative bg-slate-900 text-white pt-28 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
    
    {/* 1. Dynamic Background: Professional Plumbing Texture */}
    <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
      <img 
        src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2670&auto=format&fit=crop" 
        alt="Tubulações e Encanamento Profissional" 
        className="absolute inset-0 w-full h-full object-cover opacity-20 animate-zoom-slow mix-blend-overlay"
      />
      {/* Heavy Gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/70"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 animate-pulse-slow"></div>
    </div>

    {/* 2. Top Urgency Bar */}
    <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-red-700 to-red-600 text-white py-2 z-20 shadow-lg">
       <div className="container mx-auto px-4 flex items-center justify-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase animate-fade-in">
          <i className="fa fa-ambulance animate-pulse text-yellow-300"></i>
          <span>Plantão 24h: Chegada em 40 minutos confirmada</span>
       </div>
    </div>

    <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
      
      {/* Left Column: Copy & CTAs (7 cols) */}
      <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
        
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full pl-1 pr-4 py-1 text-sm font-medium text-gray-200 animate-fade-in-up">
          <span className="bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">ONLINE</span>
          <span>Atendimento imediato em Curitiba</span>
        </div>

        {/* Headlines */}
        <div className="space-y-4">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Desentupidora <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-300">Profissional 24h</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Soluções definitivas para esgoto, pias e fossas. Técnicos licenciados, equipamentos modernos e <strong>garantia de serviço limpo</strong> sem quebra-quebra.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-y-2 gap-x-4 text-sm font-medium text-gray-300 max-w-md mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-2"><i className="fa fa-check text-green-500"></i> Chegada em 40 min</div>
          <div className="flex items-center gap-2"><i className="fa fa-check text-green-500"></i> Orçamento Grátis</div>
          <div className="flex items-center gap-2"><i className="fa fa-check text-green-500"></i> Preço Justo</div>
          <div className="flex items-center gap-2"><i className="fa fa-check text-green-500"></i> Garantia Total</div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a 
            href="https://api.whatsapp.com/send?phone=5541985171966" 
            className="relative group bg-[#25d366] hover:bg-green-500 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <i className="fab fa-whatsapp text-3xl"></i>
            <div className="text-left leading-none">
              <span className="block text-[10px] font-medium uppercase tracking-wider opacity-80 mb-1">Resposta Rápida</span>
              Chamar no WhatsApp
            </div>
          </a>
          
          <a 
            href="tel:4133451194" 
            className="group bg-transparent border-2 border-white/20 hover:border-red-500 hover:bg-red-600/20 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all flex items-center justify-center gap-3 backdrop-blur-sm"
          >
            <i className="fa fa-phone-alt text-xl group-hover:text-red-500 transition-colors"></i>
            <span>(41) 3345-1194</span>
          </a>
        </div>

      </div>
      
      {/* Right Column: Video & Visuals (5 cols) */}
      <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <div className="relative w-full max-w-[340px]">
             
             {/* Decorative Ring */}
             <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-teal-600 rounded-[2.5rem] opacity-30 blur-lg animate-pulse"></div>

             {/* Phone Container Look */}
             <div className="relative rounded-[2rem] bg-black border-8 border-slate-800 shadow-2xl overflow-hidden aspect-[9/16] z-10">
               {/* Header of "Phone" */}
               <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-black/80 to-transparent z-20 pointer-events-none flex items-center justify-center">
                  <div className="w-16 h-4 bg-black/50 rounded-b-xl backdrop-blur-sm"></div>
               </div>

               <iframe 
                 className="absolute inset-0 w-full h-full object-cover"
                 src="https://www.youtube.com/embed/12D85Dmnheg?playlist=12D85Dmnheg&autoplay=1&loop=1&controls=1&mute=0&rel=0&modestbranding=1&playsinline=1" 
                 title="Desentupidora ADP em Ação" 
                 frameBorder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                 allowFullScreen
                 style={{ pointerEvents: 'auto' }}
               ></iframe>

               {/* Overlay Badge */}
               <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg flex items-center gap-3 z-20 animate-fade-in-up delay-700">
                 <div className="bg-primary/20 p-2 rounded-full text-primary">
                   <i className="fa fa-check-circle text-xl"></i>
                 </div>
                 <div>
                   <p className="text-dark font-bold text-xs leading-tight">Serviço Gravado</p>
                   <p className="text-gray-500 text-[10px]">Transparência Total</p>
                 </div>
               </div>
             </div>

             {/* Floating Elements behind */}
             <div className="absolute top-10 -right-10 bg-red-600 text-white p-4 rounded-xl shadow-xl z-20 animate-bounce-slow hidden sm:block">
                <i className="fa fa-bolt text-2xl mb-1 block text-center text-yellow-300"></i>
                <span className="font-bold text-sm">Chegamos<br/>Rápido!</span>
             </div>
        </div>
      </div>

    </div>
  </section>
);

export const AboutSection = () => (
  <section id="sobre" className="py-20 bg-white reveal">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
       {/* Animated Icon Placeholder for About Image */}
       <div className="group overflow-hidden rounded-lg shadow-2xl relative cursor-pointer bg-gray-100 flex items-center justify-center h-[400px]">
         <div className="absolute inset-0 flex items-center justify-center">
            <i className="fa fa-users-gear text-9xl text-gray-300 group-hover:text-primary transition-colors duration-500 animate-bounce-slow transform group-hover:scale-110"></i>
         </div>
         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <div className="text-center w-full text-white">
               <i className="fa fa-id-card text-primary text-4xl mb-2"></i>
               <p className="font-bold">Profissionais Certificados</p>
            </div>
         </div>
         <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded shadow text-dark font-bold text-sm z-20 transform translate-y-0 group-hover:-translate-y-2 transition-transform border-l-4 border-primary">
           <i className="fa fa-users text-primary mr-2"></i> Equipes Prontas
         </div>
       </div>

       <div className="space-y-6">
         <h2 className="font-display text-3xl font-bold text-dark border-l-4 border-primary pl-4">Desentupidora CIC - Serviço Emergencial 24h</h2>
         <p className="text-gray-600 leading-relaxed">
           Com mais de 15 anos de experiência no mercado, a ADP Desentupidora se consolidou como referência em Curitiba e Região Metropolitana. Nossa equipe é formada por profissionais altamente qualificados, prontos para resolver qualquer problema de entupimento com agilidade e eficiência.
         </p>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {[
              "Desentupimento de pias e ralos",
              "Desentupimento de caixas de gordura",
              "Limpeza de fossas sépticas",
              "Hidrojateamento de alta pressão",
              "Desobstrução de tubulações",
              "Serviço de caça-vazamentos"
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-medium text-gray-700 group hover:text-primary transition-colors">
                <i className="fa fa-check text-primary transition-transform duration-300 group-hover:scale-125"></i> {s}
              </div>
            ))}
         </div>
         <a href="https://api.whatsapp.com/send?phone=5541985171966" className="inline-block bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition mt-6 transform hover:-translate-y-1 btn-shimmer relative">
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full animate-pulse">Oferta</span>
           <i className="fab fa-whatsapp mr-2 animate-bounce-slow"></i> Preços a Partir de R$ 50!
         </a>
       </div>
    </div>
  </section>
);

export const ServicesTable = () => (
  <section id="servicos" className="py-20 bg-secondary/30 reveal">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-dark">Soluções Rápidas e Eficientes</h2>
        <p className="text-gray-600 mt-2">Para Entupimentos CIC Curitiba - <span className="text-red-600 font-bold bg-red-100 px-2 py-0.5 rounded animate-pulse">Atendimento Prioritário</span></p>
      </div>

      <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto border border-gray-100 transform hover:shadow-2xl transition-shadow duration-300">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-4 font-display font-bold text-lg">Serviço Disponível</th>
                <th className="p-4 font-display font-bold text-lg text-center bg-teal-800">Status</th>
              </tr>
            </thead>
            <tbody>
              {SERVICES_LIST.map((service, index) => (
                <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100 transition-colors`}>
                  <td className="p-4 border-b border-gray-100 flex items-center gap-2">
                    <i className="fa fa-wrench text-primary opacity-70"></i> {service}
                  </td>
                  <td className="p-4 border-b border-gray-100 text-center text-red-600 font-bold text-sm uppercase tracking-wide">
                    <span className="bg-red-100 px-2 py-1 rounded flex items-center justify-center gap-1">
                      <i className="fa fa-clock text-xs"></i> 24h / Imediato
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
);

export const ServiceCards = () => (
  <section className="py-20 bg-white reveal">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl font-bold text-center text-dark mb-10">Serviços de Urgência</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Desentupidora", icon: "fa-toilet", link: "/servicos/hidrojateamento" },
          { title: "Encanadores", icon: "fa-wrench", link: "/#contato" },
          { title: "Limpa Fossa", icon: "fa-truck", link: "/servicos/limpeza-de-fossa" }, 
          { title: "Instalações em Geral", icon: "fa-tools", link: "/#contato" }
        ].map((card, i) => (
          <Link to={card.link} key={i} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer hover:shadow-[0_20px_50px_rgba(220,38,38,0.2)] transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-red-600 block bg-gray-50">
            
            {/* Animated Icon Container (Replaces Image) */}
            <div className="w-full h-80 flex items-center justify-center bg-gray-100 group-hover:bg-gray-200 transition-colors relative overflow-hidden">
               <i className={`fa ${card.icon} text-9xl text-gray-300 group-hover:text-red-100 transition-all duration-700 transform group-hover:scale-125 opacity-50`}></i>
               <div className="absolute inset-0 flex items-center justify-center">
                  <i className={`fa ${card.icon} text-7xl text-gray-400 group-hover:text-red-500 transition-colors duration-300 drop-shadow-md z-10 group-hover:animate-bounce-slow`}></i>
               </div>
            </div>
            
            {/* Urgent Badge */}
            <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded shadow-lg animate-pulse z-10 flex items-center gap-1 border border-white/20">
              <i className="fa fa-bolt text-yellow-300"></i> EMERGÊNCIA 24H
            </div>

            {/* "Saindo Agora" Flashing Badge */}
             <div className="absolute top-4 right-4 bg-yellow-400 text-dark text-[10px] font-black px-2 py-1 rounded shadow-lg z-10 flex items-center gap-1 animate-pulse border border-black/10">
              <i className="fa fa-truck"></i> SAINDO AGORA
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-6 pointer-events-none">
              <h3 className="text-white font-display text-2xl font-bold mb-2 group-hover:text-red-400 transition-colors translate-y-0 group-hover:translate-y-[-5px] duration-300 drop-shadow-md">{card.title}</h3>
              
              <div className="flex flex-col gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100">
                <span className="text-white/90 text-xs font-bold bg-black/50 px-2 py-1 rounded w-fit"><i className="fa fa-clock text-red-500 mr-1"></i> Chegamos em 40min</span>
                <span className="bg-red-600 text-white font-bold px-4 py-3 rounded-lg text-center shadow-lg uppercase text-sm flex items-center justify-center gap-2">
                   <i className="fa fa-phone-alt animate-bounce"></i> Chamar Agora
                </span>
              </div>
            </div>
            
            {/* Active Status Strip */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 group-hover:h-2 transition-all"></div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export const WhyChooseSection = () => (
  <section className="py-20 bg-secondary reveal">
    <div className="container mx-auto px-4">
       <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-red-100 border border-red-300 text-red-700 px-6 py-2 rounded-full mb-4 animate-pulse shadow-md">
            <i className="fa fa-siren-on mr-2"></i> <strong>ALERTA:</strong> Equipes de plantão prontas para sair agora!
          </div>
          <h2 className="font-display text-3xl font-bold text-dark mb-6">🕐 Atendimento 24h no CIC e Chegada Rápida</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Sabemos que um entupimento <strong className="text-red-600 text-xl bg-red-50 px-1 rounded">não pode esperar</strong>. Por isso, a ADP Desentupidora mantém equipes de plantão estratégico em Curitiba, garantindo um tempo de resposta recorde entre 40 a 45 minutos.
          </p>
       </div>

       <div className="grid lg:grid-cols-3 gap-8 items-center">
         {/* Left Col */}
         <div className="space-y-8 text-right">
            <div className="flex flex-col items-end group">
               <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl mb-2 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 border-4 border-white">
                 <i className="fa fa-clock"></i>
               </div>
               <h3 className="font-bold text-xl group-hover:text-primary transition-colors">Atendimento Imediato</h3>
               <p className="text-gray-600 font-medium">Chegamos em <span className="text-red-600 font-bold bg-red-50 px-1">minutos</span>.</p>
            </div>
            <div className="flex flex-col items-end group">
               <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl mb-2 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 border-4 border-white">
                 <i className="fa fa-tint"></i>
               </div>
               <h3 className="font-bold text-xl group-hover:text-primary transition-colors">Desentupidora</h3>
               <p className="text-gray-600">Equipamentos modernos.</p>
            </div>
         </div>

         {/* Center Icon (Replaces Image) */}
         <div className="flex justify-center relative">
            <div className="absolute top-0 right-0 bg-red-600 text-white font-bold w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.6)] z-10 animate-pulse text-center text-xs p-2 border-4 border-white">
              <i className="fa fa-bolt text-yellow-300 text-lg mb-1"></i>
              <span className="text-xl block leading-none">24h</span> Plantão
            </div>
            <div className="w-[350px] h-[350px] rounded-full border-8 border-white shadow-2xl overflow-hidden flex items-center justify-center transform hover:scale-105 transition-transform duration-500 group relative bg-gray-100">
               <i className="fa fa-shield-heart text-9xl text-primary animate-pulse-slow"></i>
               <i className="fa fa-check text-green-400 text-6xl absolute bottom-20 right-20 bg-white rounded-full p-2 border-4 border-primary z-20"></i>
            </div>
         </div>

         {/* Right Col */}
         <div className="space-y-8">
            <div className="flex flex-col items-start group">
               <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl mb-2 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 border-4 border-white">
                 <i className="fa fa-tools"></i>
               </div>
               <h3 className="font-bold text-xl group-hover:text-primary transition-colors">Instalações</h3>
               <p className="text-gray-600">Instalação completa.</p>
            </div>
            <div className="flex flex-col items-start group">
               <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl mb-2 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 border-4 border-white">
                 <i className="fa fa-fire-alt"></i>
               </div>
               <h3 className="font-bold text-xl group-hover:text-primary transition-colors">Água Quente</h3>
               <p className="text-gray-600">Especialistas em aquecimento.</p>
            </div>
         </div>
       </div>
    </div>
  </section>
);

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Redirecionamento e prévia
  const faqs = [
    { title: "Cidade Industrial em Curitiba e como a ADP Desentope atua na região", content: "A Cidade Industrial de Curitiba (CIC) é o maior bairro da cidade, abrigando diversas indústrias e residências. A ADP possui bases estratégicas dentro do CIC para garantir o atendimento mais rápido possível." },
    { title: "Carlos Encontrou a ADP na Primeira Página do Google no Tatuquara", content: "Carlos, morador do Tatuquara, tinha um problema sério de retorno de esgoto. Após buscar no Google, encontrou a ADP. Em 35 minutos nossa equipe chegou ao local." },
    { title: "Atendimento Rápido no Campo Comprido – Menos de 40 Minutos!", content: "\"Fiquei impressionada com a rapidez. Liguei desesperada pois a pia estava transbordando. A equipe chegou muito rápido no Campo Comprido e resolveu tudo com muita limpeza.\"" },
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 bg-white reveal">
       <div className="container mx-auto px-4 max-w-4xl">
         <h2 className="font-display text-2xl md:text-3xl font-bold text-center text-dark mb-6">
            Dúvidas Rápidas
         </h2>
         <p className="text-center text-gray-500 mb-8">Veja algumas dúvidas comuns ou acesse nossa <a href="/faq" className="text-primary font-bold underline">Central de Ajuda Completa</a>.</p>
         
         <div className="space-y-4">
           {filteredFaqs.map((faq, i) => (
               <div key={i} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                 <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 font-bold text-dark flex justify-between items-center transition duration-200"
                 >
                   <span>{faq.title}</span>
                   <i className={`fa fa-chevron-down text-primary transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}></i>
                 </button>
                 <div className={`transition-all duration-300 overflow-hidden ${openIndex === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                   <div className="p-6 bg-white text-gray-700 leading-relaxed border-t border-gray-100">
                     {faq.content}
                   </div>
                 </div>
               </div>
             ))}
         </div>
         <div className="text-center mt-8">
            <Link to="/faq" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-teal-700 transition">
              Ver Todas as Perguntas
            </Link>
         </div>
       </div>
    </section>
  );
};