
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import PremiumImage from '../components/PremiumImage';
import ETACalculator from '../components/ETACalculator';
import PersuasiveCTA from '../components/PersuasiveCTA';
import { SERVICES_DETAILED, COMPANY_SITE } from '../constants';
import VideoSection from '../components/VideoSection';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES_DETAILED.find(s => s.id === id);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} em Curitiba 24h | Manual Técnico ADP`;
      window.scrollTo(0, 0);
    }
  }, [service]);

  if (!service) return <Navigate to="/" />;

  const canonicalUrl = `${COMPANY_SITE}/servicos/${service.id}`;

  const serviceImages: Record<string, string> = {
    'desentupimento-de-vaso': 'https://img.desentopeadp.com.br/desentupir-vaso.webp',
    'desentupimento-de-pia': 'https://img.desentopeadp.com.br/adp-encanamentos.webp',
    'desentupimento-de-ralo': 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2000&auto=format&fit=crop',
    'default': 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2000&auto=format&fit=crop'
  };

  return (
    <main className="bg-white">
      <link rel="canonical" href={canonicalUrl} />
      
      <section className="bg-dark text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img src="https://img.desentopeadp.com.br/hero-adp.webp" className="w-full h-full object-cover filter brightness-50" alt={service.title} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
           <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 shadow-lg shadow-primary/20">
             GUIA TÉCNICO PROFISSIONAL
           </div>
           <h1 className="font-display text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
             {service.title} <span className="text-primary">Especializado</span>
           </h1>
           <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
             Protocolos de engenharia para saneamento em Curitiba. Execução limpa, diagnóstico preciso e <strong>Preço Fechado</strong>.
           </p>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Main Content - Wiki Style */}
            <div className="lg:col-span-8 space-y-16">
              <div className="prose prose-slate max-w-none">
                <h2 className="text-4xl font-display font-black text-dark mb-8">Base de Conhecimento: {service.title}</h2>
                <p className="text-lg leading-relaxed text-gray-600 first-letter:text-6xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                  O serviço de {service.title.toLowerCase()} prestado pela ADP segue rigorosamente as diretrizes da <strong>ABNT NBR 8160</strong> (Sistemas prediais de esgoto sanitário - Projeto e execução). Diferente de soluções amadoras, nosso processo foca na manutenção da integridade estrutural das tubulações de PVC ou barro, utilizando tecnologia de ressonância mecânica e jateamento termohidráulico.
                </p>
                
                <h3 className="text-2xl font-bold text-dark mt-12 mb-6">Especificações de Engenharia</h3>
                <div className="bg-slate-50 border-l-4 border-primary p-8 rounded-r-3xl italic text-gray-600 mb-10">
                  "O entupimento não é apenas uma obstrução física; é um desequilíbrio na dinâmica de fluidez da rede pluvial ou sanitária. A remoção precisa ser cirúrgica para não causar fissuras microscópicas nas juntas de dilatação dos anéis de vedação."
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h4 className="font-black text-primary uppercase text-xs mb-3 tracking-widest">Equipamento</h4>
                    <p className="text-sm font-bold">Sistema K-500 Rotativo</p>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">Cabos de aço carbono flexíveis com ponteiras articuladas para vencer curvas de 90° em tubos de 40mm a 150mm.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h4 className="font-black text-primary uppercase text-xs mb-3 tracking-widest">Metodologia</h4>
                    <p className="text-sm font-bold">Limpeza Hidrodinâmica</p>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">Uso de jatos leque em 2500 PSI para remoção de biofilme gorduroso e detritos petrificados nas paredes do cano.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-dark mb-6">Fatos Rápidos para Referência</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0 mt-1"><i className="fa fa-check text-[10px]"></i></div>
                    <p className="text-sm"><strong>Garantia Legal:</strong> 90 dias conforme CDC (Código de Defesa do Consumidor).</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0 mt-1"><i className="fa fa-check text-[10px]"></i></div>
                    <p className="text-sm"><strong>Compromisso Financeiro:</strong> Não cobramos taxa de visita e <u>não cobramos por metro</u>.</p>
                  </li>
                </ul>
              </div>

              <PremiumImage 
                src={serviceImages[service.id] || serviceImages.default} 
                alt={service.title} 
                className="aspect-video"
              />
            </div>

            {/* Sidebar - Interactive Widgets */}
            <aside className="lg:col-span-4 space-y-10 sticky top-32">
              <ETACalculator />
              
              <div className="bg-primary p-10 rounded-[3rem] text-white shadow-2xl shadow-primary/20 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-125 transition-transform"></div>
                 <h4 className="text-2xl font-bold mb-4">Plantão de Urgência</h4>
                 <p className="text-white/80 text-sm mb-8">Nossas equipes táticas circulam permanentemente por Curitiba e RMC para garantir o menor tempo de resposta.</p>
                 <div className="bg-white/10 p-4 rounded-2xl border border-white/20 text-center mb-6">
                   <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Status Atual</p>
                   <p className="text-lg font-black text-green-400">● DISPONÍVEL AGORA</p>
                 </div>
                 <a href="#contato" className="block bg-white text-primary font-black py-4 rounded-xl text-center hover:scale-105 transition-transform uppercase text-[11px] tracking-widest">Orçamento</a>
                  <p className="text-[10px] text-white/70 mt-2 text-center">Formulário rápido sem compromisso.</p>
              </div>

              <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem]">
                <h4 className="font-bold text-dark mb-4">Preço Sem Surpresas</h4>
                <p className="text-gray-500 text-xs leading-relaxed mb-6">Na ADP, o orçamento é passado no local e é <strong>fechado</strong>. Você não corre o risco de ver o preço dobrar durante a execução porque "o cano era longo". Transparência total.</p>
                <div className="flex items-center gap-3">
                  <i className="fa fa-ban text-red-500"></i>
                  <span className="text-[10px] font-black uppercase text-gray-400">Sem cobrança por metro cúbico</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <PersuasiveCTA />
      <VideoSection locationName={service.title} />
      <ContactForm />
    </main>
  );
};

export default ServiceDetail;
