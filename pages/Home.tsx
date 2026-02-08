
import React, { useEffect } from 'react';
import { HeroSection, ContentExpansionSection, ServicesTable, ServiceCards, WhyChooseSection, FAQSection } from '../components/HomeSections';
import ContactForm from '../components/ContactForm';
import VideoSection from '../components/VideoSection';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Desentupidora Curitiba 24h | Atendimento Rápido e Preço Justo";
  }, []);

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ADP Desentupidora Curitiba",
    "image": "https://adpcuritiba.com.br/logo.png",
    "@id": "https://adpcuritiba.com.br",
    "url": "https://adpcuritiba.com.br",
    "telephone": "+55-41-3345-1194",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Luiz Maltaca, 36",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "postalCode": "81265-480",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.5154,
      "longitude": -49.3425
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />
      <HeroSection />
      <ContentExpansionSection />
      <ServicesTable />
      <ServiceCards />
      <VideoSection locationName="Curitiba e Região" />
      <WhyChooseSection />
      <ContactForm />
      <FAQSection />
    </main>
  );
};

export default Home;
