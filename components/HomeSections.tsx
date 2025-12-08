import React, { useState } from 'react';
import { SERVICES_LIST } from '../constants';
import { Link } from 'react-router-dom';

export const HeroSection = () => (
  <section className="relative bg-slate-900 text-white pt-28 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
    
    {/* 1. Background Image with Professional Context */}
    <div className="absolute inset-0 z-0">
      {/* Suggestion: Replace this URL with a real photo of your truck or team for maximum trust */}
      <img 
        src="https://file-service.aistudio.google.com/download/GS-y5K7J4T8P9X2M1L" 
        alt="Equipe profissional de desentupimento com equipamentos modernos" 
        className="w-full h-full object-cover opacity-30 animate-zoom-slow"
      />
      {/* High Contrast Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60"></div>
    </div>

    {/* 2. Live Status Bar - Urgency Trigger */}
    <div className="absolute top-0 left-0 w-full bg-red-600/95 backdrop-blur-sm text-white py-2 z-20 shadow-md border-b border-white/10">
       <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm font-bold tracking-wide">
          <div className="flex items-center gap-2 animate-pulse">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span>PLANTÃO AGORA:</span>
          </div>
          <span className="opacity-90">Equipes prontas no CIC, Santa Felicidade e Centro Cívico.</span>
       </div>
    </div>

    <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Column: Copy & CTAs */}
      <div className="space-y-8 text-center lg:text-left">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary-light animate-fade-in-up">
          <i className="fa fa-clock text-green-400"></i>
          <span>Chegada média: 40 minutos</span>
        </div>

        {/* Main Headline - SEO Optimized */}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight shadow-black drop-shadow-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Desentupidora <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-400">24 Horas</span> em Curitiba
        </h1>

        {/* Subheadline - Pain Points & Solution */}
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Resolvemos entupimentos de esgoto, pias e fossas com rapidez, sem quebrar pisos e com preço justo. Atendimento emergencial no CIC e Região Metropolitana.
        </p>

        {/* Value Props - Checkmarks */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm sm:text-base font-medium text-gray-200 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1 rounded-lg border border-white/5">
            <i className="fa fa-check-circle text-green-500"></i> Orçamento Grátis
          </div>
          <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1 rounded-lg border border-white/5">
            <i className="fa fa-check-circle text-green-500"></i> Garantia Total
          </div>
          <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1 rounded-lg border border-white/5">
            <i className="fa fa-check-circle text-green-500"></i> Visita sem Taxa
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a 
            href="https://api.whatsapp.com/send?phone=5541985171966" 
            className="group bg-[#25d366] hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-green-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
          >
            <i className="fab fa-whatsapp text-2xl group-hover:rotate-12 transition-transform"></i>
            <div className="text-left leading-tight">
              <span className="block text-xs font-normal opacity-90">Atendimento Rápido</span>
              Chamar no WhatsApp
            </div>
          </a>
          
          <a 
            href="tel:4133451194" 
            className="group bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-red-600/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 border border-red-500"
          >
            <div className="bg-white/20 rounded-full p-2 group-hover:animate-shake">
               <i className="fa fa-phone text-xl"></i>
            </div>
            <div className="text-left leading-tight">
              <span className="block text-xs font-normal opacity-90">Emergência 24h</span>
              (41) 3345-1194
            </div>
          </a>
        </div>

        {/* Social Proof / Trust Badge */}
        <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 opacity-80 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
           <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-slate-900"></div>
              <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-slate-900"></div>
              <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-slate-900"></div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold border-2 border-slate-900">+1k</div>
           </div>
           <div className="text-sm">
             <div className="flex text-yellow-400 text-xs mb-0.5">
               <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
             </div>
             <p>Clientes satisfeitos em Curitiba</p>
           </div>
        </div>

      </div>
      
      {/* Right Column: Visual/Video Evidence */}
      <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <div className="relative w-[300px] sm:w-[360px] mx-auto lg:mx-0">
             {/* Decorative Blobs */}
             <div className="absolute top-10 -left-10 w-24 h-24 bg-primary/30 rounded-full blur-xl animate-pulse"></div>
             <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-red-600/20 rounded-full blur-xl animate-pulse delay-700"></div>

             {/* Video Container */}
             <div className="relative aspect-[9/16] rounded-2xl shadow-2xl border-4 border-slate-800 bg-black overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500 group">
               {/* Click barrier removed for controls interaction */}
               
               <iframe 
                 className="absolute inset-0 w-full h-full object-cover"
                 src="https://www.youtube.com/embed/12D85Dmnheg?autoplay=0&loop=1&playlist=12D85Dmnheg&playsinline=1&controls=1&rel=0&mute=0" 
                 title="Desentupidora ADP em Ação" 
                 frameBorder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                 allowFullScreen
                 style={{ pointerEvents: 'auto' }}
               ></iframe>
             </div>

             {/* Floating Badge - Right Side */}
             <div className="absolute -bottom-6 -right-6 bg-white text-slate-900 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow max-w-[200px] z-20">
               <div className="bg-green-100 p-2 rounded-full text-green-600">
                 <i className="fa fa-shield-alt text-xl"></i>
               </div>
               <div>
                 <p className="font-bold text-sm leading-tight">Empresa Licenciada</p>
                 <p className="text-xs text-gray-500">Sanepar e Meio Ambiente</p>
               </div>
             </div>
        </div>
      </div>

    </div>
  </section>
);

export const AboutSection = () => (
  <section id="sobre" className="py-20 bg-white reveal">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
       <div className="group overflow-hidden rounded-lg shadow-2xl relative cursor-pointer bg-gray-50 flex items-center justify-center h-[400px]">
         <img 
           src="https://file-service.aistudio.google.com/download/GS-z2L8X1V7T9P3K4M5N"
           alt="Técnico da ADP sorrindo e fazendo sinal de positivo"
           className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
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
         <p className="text-gray-600 leading-relaxed">
           Utilizamos equipamentos de última geração, incluindo caminhões de hidrojateamento e sistemas de vídeo inspeção, garantindo que o serviço seja feito de forma limpa, rápida e, principalmente, duradoura. Não importa a hora ou o dia, estamos sempre prontos para atender você com o respeito e a qualidade que merece.
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
          { title: "Desentupidora", image: "https://file-service.aistudio.google.com/download/GS-hK6R9X8Z5V3N2M1L", link: "/servicos/hidrojateamento" },
          { title: "Encanadores", image: "https://file-service.aistudio.google.com/download/GS-p8O3W6L2Q5R9T1N4", link: "/#contato" },
          { title: "Limpa Fossa", image: "https://file-service.aistudio.google.com/download/GS-r2J9M5N3B8V6X1C4", link: "/servicos/limpeza-de-fossa" }, 
          { title: "Instalações em Geral", image: "https://file-service.aistudio.google.com/download/GS-w7T4P1L9M3N2B5V8", link: "/#contato" }
        ].map((card, i) => (
          <Link to={card.link} key={i} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer hover:shadow-[0_20px_50px_rgba(220,38,38,0.2)] transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-red-600 block bg-gray-50">
            <div className="w-full h-80 flex items-center justify-center bg-gray-200 group-hover:opacity-90 transition-opacity">
               <img 
                 src={card.image} 
                 alt={card.title} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
               />
            </div>
            
            {/* Urgent Badge */}
            <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded shadow-lg animate-pulse z-10 flex items-center gap-1 border border-white/20">
              <i className="fa fa-bolt text-yellow-300"></i> EMERGÊNCIA 24H
            </div>

            {/* "Saindo Agora" Flashing Badge */}
             <div className="absolute top-4 right-4 bg-yellow-400 text-dark text-[10px] font-black px-2 py-1 rounded shadow-lg z-10 flex items-center gap-1 animate-pulse border border-black/10">
              <i className="fa fa-truck"></i> SAINDO AGORA
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white font-display text-2xl font-bold mb-2 group-hover:text-red-400 transition-colors translate-y-0 group-hover:translate-y-[-5px] duration-300 drop-shadow-md">{card.title}</h3>
              
              <div className="flex flex-col gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100">
                <span className="text-white/90 text-xs font-bold bg-black/50 px-2 py-1 rounded w-fit"><i className="fa fa-clock text-red-500 mr-1"></i> Chegamos em 40min</span>
                <span className="bg-red-600 text-white font-bold px-4 py-3 rounded-lg text-center shadow-lg hover:bg-red-700 transition-colors uppercase text-sm flex items-center justify-center gap-2">
                   <i className="fa fa-phone-alt animate-bounce"></i> Chamar Agora <i className="fa fa-bolt text-yellow-300 animate-pulse"></i>
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
            Sabemos que um entupimento <strong className="text-red-600 text-xl bg-red-50 px-1 rounded">não pode esperar</strong> e pode causar grandes danos ao seu imóvel. Por isso, a ADP Desentupidora mantém equipes de plantão estratégico em Curitiba, garantindo um tempo de resposta recorde entre 40 a 45 minutos. Nossos profissionais são treinados para resolver o problema na hora.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="flex flex-col items-center">
              <span className="inline-flex items-center gap-2 bg-white border-2 border-red-600 text-red-600 font-bold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-transform">
                 <i className="fa fa-exclamation-circle text-xl animate-bounce"></i> Emergência Resolvida em Minutos
              </span>
              <span className="text-xs text-gray-500 mt-2 font-bold animate-pulse">Atendimento Prioritário Ativado</span>
            </div>
          </div>
       </div>

       <div className="grid lg:grid-cols-3 gap-8 items-center">
         {/* Left Col */}
         <div className="space-y-8 text-right">
            <div className="flex flex-col items-end group">
               <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl mb-2 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 border-4 border-white">
                 <i className="fa fa-clock"></i>
               </div>
               <h3 className="font-bold text-xl group-hover:text-primary transition-colors">Atendimento Imediato</h3>
               <p className="text-gray-600 font-medium">Chegamos em <span className="text-red-600 font-bold bg-red-50 px-1">minutos</span> para resolver sua emergência.</p>
            </div>
            <div className="flex flex-col items-end group">
               <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl mb-2 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 border-4 border-white">
                 <i className="fa fa-tint"></i>
               </div>
               <h3 className="font-bold text-xl group-hover:text-primary transition-colors">Desentupidora</h3>
               <p className="text-gray-600">Equipamentos modernos para qualquer obstrução.</p>
            </div>
            <div className="flex flex-col items-end group">
               <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl mb-2 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 border-4 border-white">
                 <i className="fa fa-wrench"></i>
               </div>
               <h3 className="font-bold text-xl group-hover:text-primary transition-colors">Encanadores</h3>
               <p className="text-gray-600">Reparos hidráulicos completos e eficientes.</p>
            </div>
         </div>

         {/* Center Icon */}
         <div className="flex justify-center relative">
            <div className="absolute top-0 right-0 bg-red-600 text-white font-bold w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.6)] z-10 animate-pulse text-center text-xs p-2 border-4 border-white">
              <i className="fa fa-bolt text-yellow-300 text-lg mb-1"></i>
              <span className="text-xl block leading-none">24h</span> Plantão
            </div>
            <div className="w-[350px] h-[350px] rounded-full border-8 border-white shadow-2xl overflow-hidden flex items-center justify-center transform hover:scale-105 transition-transform duration-500 group relative">
               <img 
                 src="https://file-service.aistudio.google.com/download/GS-q3N7B5V9X2M1L4K8" 
                 alt="Caminhão da ADP pronto para atendimento" 
                 className="w-full h-full object-cover"
               />
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
               <p className="text-gray-600">Instalação de louças, metais e tubulações.</p>
            </div>
            <div className="flex flex-col items-start group">
               <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl mb-2 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 border-4 border-white">
                 <i className="fa fa-cogs"></i>
               </div>
               <h3 className="font-bold text-xl group-hover:text-primary transition-colors">Consertos</h3>
               <p className="text-gray-600">Manutenção geral residencial e comercial.</p>
            </div>
            <div className="flex flex-col items-start group">
               <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl mb-2 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 border-4 border-white">
                 <i className="fa fa-fire-alt"></i>
               </div>
               <h3 className="font-bold text-xl group-hover:text-primary transition-colors">Água Quente/Fria</h3>
               <p className="text-gray-600">Especialistas em sistemas de aquecimento.</p>
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