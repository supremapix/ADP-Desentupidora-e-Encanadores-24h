import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';
import { HeroSection, ServiceGrid, InstitutionalSection, AreasServedSection, FAQSection } from '../components/HomeSections';
import ContactForm from '../components/ContactForm';

const Home = () => <main className="adp-home">
  <EnhancedSEO title="ADP Desentupidora Curitiba | Atendimento 24h em Curitiba e RMC" description="Desentupidora em Curitiba com sede no CIC. Desentupimento de esgoto, pia, ralo, vaso sanitário, hidrojateamento, limpeza de fossa e vídeo inspeção. Atendimento 24h." path="/" />
  <HeroSection /><ServiceGrid /><InstitutionalSection /><AreasServedSection /><FAQSection /><ContactForm />
</main>;
export default Home;
