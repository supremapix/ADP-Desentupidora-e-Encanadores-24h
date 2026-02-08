
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
    <main className="overflow-x-hidden">
      <HeroSection />
      
      {/* Widget Interativo Integrado */}
      <section className="py-12 bg-white relative z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto -mt-20 lg:-mt-24">
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
               <ETACalculator />
               <div className="bg-primary p-12 rounded-[2.5rem] text-white flex flex-col justify-center shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-125 transition-transform"></div>
                 <h3 className="text-3xl font-display font-black mb-4 uppercase leading-none tracking-tighter">Transparência <br/>Total ADP</h3>
                 <p className="text-white/80 text-sm mb-8 leading-relaxed font-light">
                   <strong>NÃO COBRAMOS POR METRO CÚBICO.</strong> Na ADP Curitiba, o preço é passado antes de começar o serviço e não muda no final. Segurança para seu bolso.
                 </p>
                 <div className="flex flex-wrap gap-3">
                   <div className="bg-white/10 px-4 py-2 rounded-xl text-[9px] font-black uppercase border border-white/20">Visita Grátis</div>
                   <div className="bg-white/10 px-4 py-2 rounded-xl text-[9px] font-black uppercase border border-white/20">Laudo Técnico</div>
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
