
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import EnhancedSEO from '../components/EnhancedSEO';
import { COMPANY_PHONE, COMPANY_WHATSAPP, ADP_IMAGES } from '../constants';

const ServiceHydrojetting: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Hidrojateamento de Alta Pressão",
    "name": "Hidrojateamento Curitiba",
    "description": "Serviços de hidrojateamento para limpeza de tubulações de esgoto, galerias e caixas de gordura em Curitiba e Região Metropolitana.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "ADP Desentupidora",
      "telephone": "+55-41-3345-1194"
    }
  };

  return (
    <main className="bg-white">
      <EnhancedSEO
        title="Hidrojateamento em Curitiba | ADP Desentupidora"
        description="Hidrojateamento de alta pressão para tubulações de esgoto, galerias pluviais e colunas em Curitiba e Região Metropolitana. Atendimento 24h."
        path="/servicos/hidrojateamento"
        image={ADP_IMAGES.caminhaoRed}
        structuredData={schemaData}
      />

      {/* Hero Header */}
      <section className="bg-slate-50 border-b border-slate-200 py-10 lg:py-14">
        <div className="site-container">
          <div className="max-w-3xl">
            <nav className="text-xs text-slate-500 mb-4 flex items-center gap-2">
              <Link to="/" className="hover:text-red-700">Início</Link>
              <span>/</span>
              <span className="text-slate-800 font-bold">Hidrojateamento</span>
            </nav>

            <span className="text-xs font-extrabold text-red-700 uppercase tracking-widest block mb-2">
              Saneamento e Limpeza
            </span>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 uppercase leading-tight mb-4">
              Hidrojateamento em Curitiba e RMC
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Limpeza e desobstrução técnica de tubulações de grande extensão, galerias pluviais, redes coletoras de esgoto e caixas de gordura utilizando jato de água em alta pressão.
            </p>

            <div className="flex flex-wrap gap-3 pt-6">
              <a
                href={`https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent('Olá! Gostaria de informações sobre Hidrojateamento.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase px-6 py-3.5 rounded-xl shadow transition-all flex items-center gap-2"
              >
                <i className="fab fa-whatsapp text-base"></i>
                <span>Orçamento via WhatsApp</span>
              </a>

              <a
                href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`}
                className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase px-6 py-3.5 rounded-xl shadow transition-all flex items-center gap-2"
              >
                <i className="fa fa-phone-alt text-red-500 text-sm"></i>
                <span>Ligar {COMPANY_PHONE}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo Técnico */}
      <section className="py-12 lg:py-16">
        <div className="site-container max-w-4xl space-y-8">
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm">
            <img
              src={ADP_IMAGES.caminhaoRed}
              alt="Caminhão e equipamento de hidrojateamento ADP"
              loading="eager"
              className="w-full h-[320px] sm:h-[400px] object-cover"
            />
          </div>

          <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
            <h2 className="font-display font-extrabold text-2xl text-slate-900 uppercase">
              O que é e como funciona o hidrojateamento
            </h2>

            <p>
              O <strong>hidrojateamento</strong> é uma técnica de limpeza hidrodinâmica que utiliza o fluxo de água sob alta pressão para raspagem interna de tubulações. O sistema limpa as paredes da tubulação, removendo acúmulos de gordura petrificada, crostas e incrustações que impedem a vazão normal dos efluentes.
            </p>

            <h3 className="font-display font-extrabold text-lg text-slate-900 uppercase pt-2">
              Principais Aplicações do Hidrojateamento
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span className="font-extrabold text-slate-900 text-xs block uppercase">Redes Coletoras de Esgoto</span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Desobstrução de tubulações de esgoto em condomínios, empresas e vias internas.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span className="font-extrabold text-slate-900 text-xs block uppercase">Caixas de Gordura Comerciais</span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Remoção de gordura em restaurantes, lanchonetes e indústrias alimentícias.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span className="font-extrabold text-slate-900 text-xs block uppercase">Galerias e Calhas Pluviais</span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Limpeza de condutores de águas da chuva em barracões, galpões e condomínios.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span className="font-extrabold text-slate-900 text-xs block uppercase">Colunas e Prumadas Prediais</span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Manutenção preventiva e corretiva em tubulações verticais de edifícios.
                </p>
              </div>
            </div>

            <h3 className="font-display font-extrabold text-lg text-slate-900 uppercase pt-4">
              Atendimento Técnico ADP
            </h3>

            <p>
              Com sede no CIC e atendimento em Curitiba e Região Metropolitana, a ADP envia equipe com equipamento apropriado para realizar a avaliação no local e apresentar o orçamento com clareza.
            </p>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
};

export default ServiceHydrojetting;

