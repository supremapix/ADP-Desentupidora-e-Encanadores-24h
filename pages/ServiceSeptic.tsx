import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import EnhancedSEO from '../components/EnhancedSEO';
import { COMPANY_PHONE, COMPANY_WHATSAPP, ADP_IMAGES } from '../constants';

const ServiceSeptic: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Limpeza de Fossa Séptica e Caixa de Gordura",
    "name": "Limpeza de Fossa Curitiba",
    "description": "Esgotamento e limpeza técnica de fossas sépticas e caixas de gordura com caminhão auto-vácuo em Curitiba e Região Metropolitana.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "ADP Desentupidora",
      "telephone": "+55-41-3345-1194"
    }
  };

  return (
    <main className="bg-white">
      <EnhancedSEO
        title="Limpeza de Fossa em Curitiba | ADP Desentupidora"
        description="Limpeza e esgotamento de fossa séptica, negra e caixas de gordura com caminhão auto-vácuo em Curitiba e RMC. Atendimento técnico 24h."
        path="/servicos/limpeza-de-fossa"
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
              <span className="text-slate-800 font-bold">Limpeza de Fossa</span>
            </nav>

            <span className="text-xs font-extrabold text-red-700 uppercase tracking-widest block mb-2">
              Serviço de Esgotamento
            </span>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 uppercase leading-tight mb-4">
              Limpeza de Fossa e Caixa de Gordura em Curitiba
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Esgotamento e remoção de efluentes sanitários com caminhão de sucção a vácuo para residências, condomínios, comércios e indústrias em Curitiba e Região Metropolitana.
            </p>

            <div className="flex flex-wrap gap-3 pt-6">
              <a
                href={`https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent('Olá! Gostaria de um orçamento para limpeza de fossa.')}`}
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
              alt="Caminhão de sucção a vácuo ADP"
              loading="eager"
              className="w-full h-[320px] sm:h-[400px] object-cover"
            />
          </div>

          <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
            <h2 className="font-display font-extrabold text-2xl text-slate-900 uppercase">
              Como é realizada a limpeza de fossa
            </h2>

            <p>
              O serviço de esgotamento de fossa séptica ou negra é executado com veículo equipado com bomba de sucção a vácuo de alto desempenho. O efluente acumulado é aspirado para o tanque hermético do caminhão e transportado para destinação em estações de tratamento.
            </p>

            <h3 className="font-display font-extrabold text-lg text-slate-900 uppercase pt-2">
              Locais e Estruturas Atendidas
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span className="font-extrabold text-slate-900 text-xs block uppercase">Fossas Sépticas e Negras</span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Esgotamento completo de lodo e efluentes líquidos acumulados no sistema de esgoto local.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span className="font-extrabold text-slate-900 text-xs block uppercase">Caixas de Gordura e Passagem</span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Raspagem e sucção de óleos, gorduras e sedimentos sólidos retidos nas caixas.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span className="font-extrabold text-slate-900 text-xs block uppercase">Sumidouros e Poços</span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Esgotamento e limpeza de reservatórios subterrâneos em residências e empresas.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span className="font-extrabold text-slate-900 text-xs block uppercase">Condomínios e Indústrias</span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Atendimento programado ou emergencial para grandes volumes de efluentes sanitários.
                </p>
              </div>
            </div>

            <h3 className="font-display font-extrabold text-lg text-slate-900 uppercase pt-4">
              Atendimento Técnico e Orçamento
            </h3>

            <p>
              Com sede no CIC em Curitiba, a ADP desloca caminhões adaptados conforme o volume e o acesso do local. O orçamento é avaliado e explicado diretamente ao cliente antes da execução do serviço.
            </p>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
};

export default ServiceSeptic;
