
import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import EnhancedSEO from '../components/EnhancedSEO';
import { SERVICES_DETAILED, COMPANY_PHONE, COMPANY_WHATSAPP, getADPImage } from '../constants';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES_DETAILED.find(s => s.id === id);

  useEffect(() => {
    if (service) {
      window.scrollTo(0, 0);
    }
  }, [service]);

  if (!service) return <Navigate to="/" />;

  const pagePath = `/servicos/${service.id}`;
  const pageTitle = `${service.title} em Curitiba | ADP Desentupidora`;
  const pageDescription = `Serviço especializado de ${service.title.toLowerCase()} em Curitiba e Região Metropolitana. Atendimento residencial, comercial e industrial com equipamentos adequados.`;

  const serviceImage = getADPImage(service.title, service.id);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.desc || pageDescription,
    "serviceType": service.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "ADP Desentupidora",
      "telephone": "+55-41-3345-1194"
    },
    "areaServed": {
      "@type": "City",
      "name": "Curitiba"
    }
  };

  return (
    <main className="bg-white">
      <EnhancedSEO
        title={pageTitle}
        description={pageDescription}
        path={pagePath}
        image={serviceImage}
        structuredData={serviceSchema}
      />

      {/* Hero Header */}
      <section className="bg-slate-50 border-b border-slate-200 py-10 lg:py-14">
        <div className="site-container">
          <div className="max-w-3xl">
            <nav className="text-xs text-slate-500 mb-4 flex items-center gap-2">
              <Link to="/" className="hover:text-red-700">Início</Link>
              <span>/</span>
              <span className="text-slate-800 font-bold">{service.title}</span>
            </nav>

            <span className="text-xs font-extrabold text-red-700 uppercase tracking-widest block mb-2">
              Serviço Especializado
            </span>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 uppercase leading-tight mb-4">
              {service.title} em Curitiba e RMC
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {service.desc} Atendimento técnico residencial, comercial e industrial com equipes e equipamentos apropriados.
            </p>

            <div className="flex flex-wrap gap-3 pt-6">
              <a
                href={`https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para ${service.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase px-6 py-3.5 rounded-xl shadow transition-all flex items-center gap-2"
              >
                <i className="fab fa-whatsapp text-base"></i>
                <span>Solicitar no WhatsApp</span>
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

      {/* Conteúdo Principal + Lateral */}
      <section className="py-12 lg:py-16">
        <div className="site-container">
          <div className="grid lg:grid-cols-12 gap-10 items-start">

            {/* Coluna de Conteúdo Factual */}
            <div className="lg:col-span-8 space-y-8">
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm">
                <img
                  src={serviceImage}
                  alt={service.title}
                  loading="eager"
                  className="w-full h-[320px] sm:h-[400px] object-cover"
                />
              </div>

              <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
                <h2 className="font-display font-extrabold text-2xl text-slate-900 uppercase">
                  Como é realizado o {service.title.toLowerCase()}
                </h2>

                <p>
                  O atendimento para <strong>{service.title.toLowerCase()}</strong> é iniciado com uma verificação prévia da tubulação no local para determinar o ponto exato da obstrução e a extensão do trecho afetado.
                </p>

                <p>
                  Conforme as características da rede — diâmetro do tubo, curva e tipo de resíduo acumulado —, a equipe utiliza o equipamento específico, seja máquina rotativa com cabos espirais flexíveis para remoção mecânica ou equipamento de hidrojateamento para raspagem e desobstrução sob alta pressão de água.
                </p>

                <h3 className="font-display font-extrabold text-lg text-slate-900 uppercase pt-2">
                  Aplicações e Estruturas Atendidas
                </h3>

                <ul className="space-y-2 text-xs font-medium text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span> Residências (casas, sobrados e apartamentos)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span> Estabelecimentos comerciais e restaurantes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span> Condomínios residenciais e empresariais
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span> Indústrias e barracões logísticos
                  </li>
                </ul>

                <h3 className="font-display font-extrabold text-lg text-slate-900 uppercase pt-2">
                  Atendimento em Curitiba e Região
                </h3>

                <p>
                  Atendemos todos os bairros de Curitiba e municípios da Região Metropolitana com equipes prontas para deslocamento técnico. O orçamento é avaliado no local e apresentado com total clareza antes de qualquer serviço ser executado.
                </p>
              </div>
            </div>

            {/* Sidebar de Ação Rápida */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-sm space-y-4">
                <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest block">
                  Central de Atendimento
                </span>
                <h3 className="font-display font-extrabold text-xl text-white uppercase leading-tight">
                  Precisa de atendimento emergencial?
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Entre em contato com nossa equipe técnica para solicitar uma avaliação no seu endereço.
                </p>

                <div className="space-y-2.5 pt-2">
                  <a
                    href={`https://wa.me/${COMPANY_WHATSAPP}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <i className="fab fa-whatsapp text-base"></i>
                    <span>Conversar no WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`}
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs uppercase py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 border border-white/20"
                  >
                    <i className="fa fa-phone-alt text-red-400"></i>
                    <span>Ligar {COMPANY_PHONE}</span>
                  </a>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3 text-xs">
                <span className="font-extrabold text-slate-900 uppercase block">Garantias e Transparência</span>
                <p className="text-slate-600 leading-relaxed">
                  Avaliação no local sem custo de visita. Orçamento explicado diretamente pelo técnico antes da execução.
                </p>
              </div>
            </aside>

          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
};

export default ServiceDetail;

