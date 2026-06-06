
import React, { useEffect } from 'react';
import EnhancedSEO from '../components/EnhancedSEO';
import { HeroSection, ContentExpansionSection, PremiumHighlightSection, ServiceCards, TechnicalAccordion, ArsenalSection } from '../components/HomeSections';
import ContactForm from '../components/ContactForm';
import VideoSection from '../components/VideoSection';
import PersuasiveCTA from '../components/PersuasiveCTA';
import ETACalculator from '../components/ETACalculator';

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="overflow-x-hidden bg-white">
      <EnhancedSEO 
        title="ADP Desentupidora Curitiba | R$ 79,90 o metro | 24h"
        description="Desentupidora em Curitiba 24h. Chegada em 30 min, a partir de R$ 79,90 o metro linear. Todos os bairros. Ligue (41) 3345-1194 ou WhatsApp (41) 98517-1966."
        path="/"
      />
      <HeroSection />

      
      {/* Bloco de Ação Imediata - Sem espaços vazios */}
      <section className="py-6 bg-white relative z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto -mt-12 lg:-mt-16">
            <div className="grid md:grid-cols-2 gap-4 items-stretch">
               <ETACalculator />
               <div className="bg-primary p-10 rounded-[2.5rem] text-white flex flex-col justify-center shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-[60px] -mr-16 -mt-16 group-hover:scale-125 transition-transform duration-700"></div>
                 <h3 className="text-3xl font-display font-black mb-3 uppercase leading-none tracking-tighter">Preço Justo <br/>Selo ADP</h3>
                 <p className="text-white/80 text-xs mb-6 leading-relaxed font-light">
                   <strong>FIM DAS SURPRESAS.</strong> Na ADP Curitiba, nós eliminamos a cobrança por metro. O valor é acordado no orçamento e não muda. Visita grátis no local.
                 </p>
                 <div className="flex flex-wrap gap-2">
                   <span className="bg-white/15 px-3 py-1.5 rounded-lg text-[8px] font-black uppercase border border-white/20">Sem Taxa de Visita</span>
                   <span className="bg-white/15 px-3 py-1.5 rounded-lg text-[8px] font-black uppercase border border-white/20">Preço Fechado</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <ContentExpansionSection />
      <PremiumHighlightSection />
      <ArsenalSection />
      <ServiceCards />
      <PersuasiveCTA />
      
      <div className="-mt-8 lg:-mt-12 relative z-10">
        <VideoSection locationName="Curitiba e Região" />
      </div>

      <TechnicalAccordion />
      <ContactForm />
    </main>
  );
};

export default Home;
