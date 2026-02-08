
import React, { useEffect } from 'react';
import { HeroSection, ContentExpansionSection, ServicesTable, ServiceCards, WhyChooseSection, FAQSection } from '../components/HomeSections';
import ContactForm from '../components/ContactForm';
import VideoSection from '../components/VideoSection';
import PersuasiveCTA from '../components/PersuasiveCTA';
import ETACalculator from '../components/ETACalculator';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "ADP Saneamento | Desentupidora Curitiba 24h - Preço Fechado";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="overflow-x-hidden bg-white">
      <HeroSection />
      
      {/* Widget Interativo e Selo de Confiança */}
      <section className="py-8 bg-white relative z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto -mt-16 lg:-mt-20">
            <div className="grid md:grid-cols-2 gap-4 items-stretch">
               <ETACalculator />
               <div className="bg-primary p-10 lg:p-12 rounded-[2.5rem] text-white flex flex-col justify-center shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:scale-125 transition-transform duration-700"></div>
                 <div className="relative z-10">
                   <h3 className="text-3xl lg:text-4xl font-display font-black mb-4 uppercase leading-none tracking-tighter">Selo Preço <br/>Justo ADP</h3>
                   <p className="text-white/80 text-sm mb-8 leading-relaxed font-light">
                     <strong>TRANSFORMAÇÃO NO MERCADO.</strong> Diferente de outras empresas, na ADP nós eliminamos a cobrança por metro. O valor é acordado antes da execução e não muda. 
                   </p>
                   <div className="flex flex-wrap gap-2">
                     <span className="bg-white/15 px-4 py-2 rounded-xl text-[9px] font-black uppercase border border-white/20">Sem Taxa de Visita</span>
                     <span className="bg-white/15 px-4 py-2 rounded-xl text-[9px] font-black uppercase border border-white/20">Laudo Técnico HD</span>
                     <span className="bg-white/15 px-4 py-2 rounded-xl text-[9px] font-black uppercase border border-white/20">Preço Fechado</span>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <ContentExpansionSection />
      <ServicesTable />
      <ServiceCards />
      <PersuasiveCTA />
      
      {/* Redução de espaçamento entre Vídeo e Próxima Seção */}
      <div className="-mt-12 lg:-mt-16">
        <VideoSection locationName="Curitiba e Região" />
      </div>
      
      <WhyChooseSection />
      <ContactForm />
      <FAQSection />
    </main>
  );
};

export default Home;
