import React, { useEffect } from 'react';
import { HeroSection, AboutSection, ServicesTable, ServiceCards, WhyChooseSection, FAQSection } from '../components/HomeSections';
import ContactForm from '../components/ContactForm';
import VideoSection from '../components/VideoSection';
import PlumberGallery from '../components/PlumberGallery';
import { COMPANY_PHONE } from '../constants';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Desentupidora CIC - ADP Curitiba | Atendimento 24h";
  }, []);

  return (
    <main>
      <HeroSection />
      
      {/* Quick Contacts Bar */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur rounded p-4 text-white text-center">
            <p className="font-bold text-lg"><i className="fa fa-phone mr-2"></i> {COMPANY_PHONE}</p>
            <p className="text-xs">Soluções completas</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded p-4 text-white text-center">
            <p className="font-bold text-lg"><i className="fab fa-whatsapp mr-2"></i> (41) 98517-1966</p>
            <p className="text-xs">Preços justos</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded p-4 text-white text-center">
             <p className="font-bold text-lg"><i className="fa fa-map-marker-alt mr-2"></i> CIC, Curitiba</p>
             <p className="text-xs">Rua Luiz Maltaca, 36</p>
          </div>
           <div className="bg-white/10 backdrop-blur rounded p-4 text-white text-center">
             <p className="font-bold text-lg"><i className="fa fa-tools mr-2"></i> Equipamentos</p>
             <p className="text-xs">Modernos e eletrônicos</p>
          </div>
        </div>
      </section>

      <AboutSection />
      <ServicesTable />
      <ServiceCards />
      
      {/* Plumber Gallery with Optimized Images */}
      <PlumberGallery />
      
      {/* Video Section Moved Here */}
      <VideoSection locationName="Curitiba e Região" />

      <WhyChooseSection />
      <ContactForm />
      <FAQSection />

      {/* Map */}
      <section className="h-[450px] w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.523558706346!2d-49.3446886!3d-25.5154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce30000000001%3A0x0!2sRua+Luiz+Maltaca%2C+36+-+Cidade+Industrial+De+Curitiba!5e0!3m2!1spt-BR!2sbr!4v1" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          title="Google Maps"
        ></iframe>
      </section>
    </main>
  );
};

export default Home;