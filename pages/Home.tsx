
import React, { useEffect } from 'react';
import EnhancedSEO from '../components/EnhancedSEO';
import {
  HeroSection,
  TrustBar,
  ServiceGrid,
  ProblemSelector,
  InstitutionalSection,
  EquipmentSection,
  ProcessSection,
  ClientTypesSection,
  AreasServedSection,
  RealPhotosGallery,
  FAQSection
} from '../components/HomeSections';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white">
      <EnhancedSEO
        title="ADP Desentupidora Curitiba | Atendimento 24h em Curitiba e RMC"
        description="Desentupidora em Curitiba com sede no CIC. Desentupimento de esgoto, pia, ralo, vaso sanitário, hidrojateamento, limpeza de fossa e vídeo inspeção. Atendimento 24h."
        path="/"
      />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Grid de Serviços */}
      <ServiceGrid />

      {/* 4. Qual é o problema? */}
      <ProblemSelector />

      {/* 5. Institucional ADP */}
      <InstitutionalSection />

      {/* 6. Equipamentos e Tecnologia */}
      <EquipmentSection />

      {/* 7. Como Funciona o Atendimento */}
      <ProcessSection />

      {/* 8. Tipos de Clientes e Estruturas */}
      <ClientTypesSection />

      {/* 9. Áreas Atendidas */}
      <AreasServedSection />

      {/* 10. Fotos Reais da Operação */}
      <RealPhotosGallery />

      {/* 11. FAQ */}
      <FAQSection />

      {/* 12. Formularío de Contato */}
      <ContactForm />
    </main>
  );
};

export default Home;

