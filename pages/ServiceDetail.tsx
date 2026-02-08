
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import PremiumImage from '../components/PremiumImage';
import { SERVICES_DETAILED, COMPANY_SITE } from '../constants';
import VideoSection from '../components/VideoSection';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES_DETAILED.find(s => s.id === id);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} em Curitiba 24h | ADP Desentupidora`;
      window.scrollTo(0, 0);
    }
  }, [service]);

  if (!service) return <Navigate to="/" />;

  const canonicalUrl = `${COMPANY_SITE}/servicos/${service.id}`;

  // Mapeamento de imagens reais para evitar ferramentas genéricas
  const serviceImages: Record<string, string> = {
    'desentupimento-de-vaso': 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2000&auto=format&fit=crop',
    'desentupimento-de-pia': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop',
    'desentupimento-de-ralo': 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2000&auto=format&fit=crop',
    'default': 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2000&auto=format&fit=crop'
  };

  const currentImage = serviceImages[service.id] || serviceImages.default;

  return (
    <main className="bg-white">
      <link rel="canonical" href={canonicalUrl} />
      
      <section className="bg-dark text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
           <div className="inline-block bg-primary/20 backdrop-blur-md border border-primary/30 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 animate-fade-in">
             Serviço Especializado ADP
           </div>
           <h1 className="font-display text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-none">
             {service.title}
           </h1>
           <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
             Atendimento técnico industrial de alta performance disponível agora em Curitiba.
           </p>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
            <div className="reveal">
              <h2 className="text-4xl font-display font-bold text-dark mb-8 leading-tight">
                Excelência Técnica em <br/><span className="text-primary">{service.title}</span>
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p className="font-medium text-dark/80">{service.desc}</p>
                <p>A ADP utiliza equipamentos de última geração, como sondas eletrotécnicas e câmeras de inspeção, para garantir que o serviço seja feito de forma limpa, rápida e definitiva. Nossos técnicos são treinados para identificar falhas estruturais, evitando custos futuros com quebras desnecessárias.</p>
                
                <div className="pt-6 grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                    <i className="fa fa-shield-alt text-primary"></i>
                    <span className="text-xs font-bold uppercase">Garantia Certificada</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                    <i className="fa fa-user-hard-hat text-primary"></i>
                    <span className="text-xs font-bold uppercase">Técnicos NR-33</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="reveal">
              <PremiumImage 
                src={currentImage} 
                alt={`Serviço de ${service.title}`} 
                className="aspect-[4/5] lg:aspect-square"
              />
            </div>
          </div>

          {/* Destaques Técnicos */}
          <div className="bg-dark p-12 lg:p-20 rounded-[4rem] text-white relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
             <h3 className="text-3xl font-display font-bold mb-12 text-center">Padrão de Qualidade ADP</h3>
             <div className="grid md:grid-cols-3 gap-12">
               {[
                 { title: "Rapidez", desc: "Equipes em bases móveis para atendimento em até 40min.", icon: "fa-bolt" },
                 { title: "Higiene", desc: "Ambiente protegido e limpo após a execução do serviço.", icon: "fa-soap" },
                 { title: "Confiança", desc: "Relatório técnico e nota fiscal em todos os chamados.", icon: "fa-file-invoice" }
               ].map((item, i) => (
                 <div key={i} className="text-center space-y-4">
                   <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center text-3xl mx-auto shadow-lg shadow-primary/20"><i className={`fa ${item.icon}`}></i></div>
                   <h4 className="font-bold text-xl">{item.title}</h4>
                   <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      <VideoSection locationName={service.title} />
      <ContactForm />
    </main>
  );
};

export default ServiceDetail;
