
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import PremiumImage from '../components/PremiumImage';
import { BAIRROS, CIDADES_RMC, COMPANY_PHONE, COMPANY_SITE, slugify, getADPImage, ADP_IMAGES } from '../constants';
import VideoSection from '../components/VideoSection';

const RegionPage: React.FC<{ type: 'bairro' | 'cidade' }> = ({ type }) => {
  const { slug } = useParams<{ slug: string }>();
  
  const list = type === 'bairro' ? BAIRROS : CIDADES_RMC;
  const originalItem = list.find(item => slugify(item) === slug);
  const name = originalItem || '';

  useEffect(() => {
    if (originalItem) {
      document.title = `Desentupidora em ${name} 24h | Atendimento Emergencial em ${name}`;
      window.scrollTo(0, 0);
    }
  }, [slug, name, originalItem]);

  if (!originalItem) return <Navigate to="/" />;

  const canonicalUrl = `${COMPANY_SITE}/${type}/${slug}`;

  return (
    <main className="bg-lightGray min-h-screen">
      <link rel="canonical" href={canonicalUrl} />
      
      {/* SEO Hero Premium */}
      <section className="bg-dark text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img src="https://img.desentopeadp.com.br/hero-adp.webp" fetchPriority="high" className="w-full h-full object-cover filter brightness-50" alt={`Serviços em ${name}`} />
        </div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-3/5 text-center lg:text-left">
             <span className="bg-primary/20 backdrop-blur-md text-primary border border-primary/30 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 inline-block">
               Saneamento Profissional em {name}
             </span>
             <h1 className="font-display text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
               Desentupidora <br/><span className="text-primary">{name}</span> 24h
             </h1>
             <p className="text-xl text-gray-300 leading-relaxed max-w-xl mb-10 font-light">
               Equipes táticas prontas para resolver qualquer obstrução hidráulica em <strong>{name}</strong> com equipamentos de última geração.
             </p>
             <div className="flex flex-wrap gap-6 justify-center lg:justify-start items-center lg:items-start text-center lg:text-left">
                <div className="flex flex-col items-center lg:items-start w-full sm:w-auto">
                  <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-black px-10 py-5 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 uppercase text-sm">
                    <i className="fa fa-phone-alt"></i> Ligar
                  </a>
                  <p className="text-[10px] text-gray-300 mt-1.5 leading-tight">Ligar para nossa central em {name}.</p>
                </div>
                <div className="flex flex-col items-center lg:items-start w-full sm:w-auto">
                  <a href="#contato" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 text-white font-black px-10 py-5 rounded-2xl hover:bg-white/20 transition-all text-sm uppercase flex items-center justify-center gap-2">
                    <i className="fa fa-clipboard-list"></i> Orçamento
                  </a>
                  <p className="text-[10px] text-gray-300 mt-1.5 leading-tight">Preencher formulário para Curitiba e RMC.</p>
                </div>
             </div>
          </div>
          <div className="hidden lg:block lg:w-2/5">
             <PremiumImage 
               src={getADPImage(name)} 
               alt={`Encanador em ${name}`} 
               className="aspect-square rotate-3 border-4 border-slate-800 shadow-2xl rounded-2xl"
             />
          </div>
        </div>
      </section>

      {/* SEO Content Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                title: `Emergência 24h em ${name}`, 
                content: `A ADP mantém unidades móveis circulando permanentemente por ${name}. Isso nos permite garantir uma chegada extremamente rápida para casos críticos de transbordamento de esgoto e fossas.`
              },
              { 
                title: `Tecnologia para ${name}`, 
                content: `Nossos técnicos em ${name} utilizam equipamentos rotativos e hidrojateamento de alta pressão que limpam a tubulação sem a necessidade de quebrar pisos ou paredes.`
              },
              { 
                title: `Garantia de 90 Dias`, 
                content: `Todo serviço executado pela ADP em ${name} acompanha certificado de garantia e laudo técnico, oferecendo total segurança jurídica e técnica para residências e empresas.`
              }
            ].map((article, index) => (
              <article key={index} className="group p-8 rounded-[3rem] bg-gray-50 border border-gray-100 hover:bg-primary hover:text-white transition-all duration-500 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-white group-hover:text-primary transition-colors">
                  <i className="fa fa-check"></i>
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 leading-tight">{article.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed mb-6">{article.content}</p>
                <span className="text-[10px] font-black uppercase tracking-widest group-hover:opacity-60 transition-opacity">ADP Saneamento {name}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <VideoSection locationName={name} />
      <ContactForm />
    </main>
  );
};

export default RegionPage;
