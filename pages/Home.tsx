
import React, { useEffect } from 'react';
import { HeroSection, ContentExpansionSection, ServicesTable, ServiceCards, WhyChooseSection, FAQSection } from '../components/HomeSections';
import ContactForm from '../components/ContactForm';
import VideoSection from '../components/VideoSection';
import PersuasiveCTA from '../components/PersuasiveCTA';
import ETACalculator from '../components/ETACalculator';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "ADP Saneamento | Desentupidora Curitiba 24h - Preço Fechado";
  }, []);

  return (
    <main>
      <HeroSection />
      
      {/* Widget Flutuante Interativo na Home */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto -mt-32 relative z-20">
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
               <ETACalculator />
               <div className="bg-primary p-10 rounded-[2.5rem] text-white flex flex-col justify-center shadow-2xl">
                 <h3 className="text-3xl font-display font-black mb-4 uppercase leading-none">Preço <br/>Sem Surpresas</h3>
                 <p className="text-white/80 text-sm mb-6 leading-relaxed">
                   <strong>PARE DE SER ENGANADO.</strong> Na ADP Curitiba, nós não cobramos por metro de cabo ou metro cúbico. Você recebe o preço final antes da execução.
                 </p>
                 <div className="flex items-center gap-4">
                   <div className="bg-white/10 px-4 py-2 rounded-xl text-[10px] font-black uppercase border border-white/20">Sem Taxa de Visita</div>
                   <div className="bg-white/10 px-4 py-2 rounded-xl text-[10px] font-black uppercase border border-white/20">Até 12x no Cartão</div>
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
      <VideoSection locationName="Curitiba e Região" />
      <WhyChooseSection />
      <ContactForm />
      <FAQSection />
    </main>
  );
};

export default Home;
