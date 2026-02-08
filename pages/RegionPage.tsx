
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import { BAIRROS, CIDADES_RMC, COMPANY_PHONE, COMPANY_SITE, slugify } from '../constants';
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

  const seoArticles = [
    {
      title: `Desentupidora em ${name}: Atendimento Emergencial 24 Horas`,
      content: `A ADP Desentupidora atua com destaque em ${name}, oferecendo uma infraestrutura completa para resolver qualquer tipo de obstrução hidráulica. Entendemos que um entupimento em ${name} não tem hora para acontecer, por isso mantemos equipes de plantão permanente que circulam pelas principais ruas e avenidas da região. Nossa chegada em ${name} é estimada em no máximo 40 minutos.`
    },
    {
      title: `Limpeza de Fossa em ${name} com Caminhão Vácuo`,
      content: `Para as residências e empresas de ${name} que ainda utilizam sistemas de fossas sépticas, a ADP oferece o serviço de esgotamento técnico. Utilizamos caminhões de auto vácuo de alta performance que realizam a sucção completa dos detritos em ${name}. Todo o resíduo coletado em ${name} é transportado para estações de tratamento licenciadas.`
    },
    {
      title: `Desentupimento de Pia e Ralo em ${name}`,
      content: `Pias de cozinha e ralos de banheiro entupidos são problemas comuns em ${name}. Nossos técnicos em ${name} utilizam sondas flexíveis que navegam por todas as curvas do encanamento, devolvendo o fluxo original da água imediatamente sem quebrar pisos ou azulejos.`
    }
  ];

  return (
    <main className="bg-secondary min-h-screen">
      <link rel="canonical" href={canonicalUrl} />
      
      {/* SEO Hero */}
      <section className="bg-dark text-white pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover" alt={`Serviços em ${name}`} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
             <span className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">
               Atendimento em {name}
             </span>
             <h1 className="font-display text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-none">
               Desentupidora em <br/><span className="text-primary">{name}</span> 24 Horas
             </h1>
             <p className="text-lg text-gray-300 leading-relaxed max-w-xl mb-8">
               Especialistas em desentupimentos técnicos e limpeza de fossas com chegada rápida em qualquer ponto de <strong>{name}</strong>.
             </p>
             <div className="flex flex-wrap gap-4">
                <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="bg-red-600 hover:bg-red-700 text-white font-black px-8 py-4 rounded-xl shadow-xl transition-all flex items-center gap-3 uppercase text-sm">
                  <i className="fa fa-phone-alt"></i> {COMPANY_PHONE}
                </a>
                <a href="#contato" className="bg-white text-dark font-black px-8 py-4 rounded-xl hover:bg-gray-100 transition-all text-sm uppercase">
                  Orçamento Grátis
                </a>
             </div>
          </div>
        </div>
      </section>

      {/* SEO Content Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {seoArticles.map((article, index) => (
              <article key={index} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col h-full">
                <h3 className="font-display text-xl font-bold text-dark mb-4 leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {article.content}
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">ADP {name} - Saneamento Profissional</span>
                </div>
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
