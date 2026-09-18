
import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import EnhancedSEO from '../components/EnhancedSEO';
import { BAIRROS, CIDADES_RMC, COMPANY_PHONE, COMPANY_WHATSAPP, COMPANY_SITE, slugify, getADPImage } from '../constants';

const RegionPage: React.FC<{ type: 'bairro' | 'cidade' }> = ({ type }) => {
  const { slug } = useParams<{ slug: string }>();

  const list = type === 'bairro' ? BAIRROS : CIDADES_RMC;
  const originalItem = list.find(item => slugify(item) === slug);
  const name = originalItem || '';

  useEffect(() => {
    if (originalItem) {
      window.scrollTo(0, 0);
    }
  }, [slug, name, originalItem]);

  if (!originalItem) return <Navigate to="/" />;

  const pagePath = `/${type}/${slug}`;
  const pageTitle = `Desentupidora em ${name} | ADP Desentupidora`;
  const pageDescription = `Serviços de desentupimento de esgoto, pia, ralo, vaso sanitário, hidrojateamento e limpeza de fossa em ${name}. Atendimento técnico 24h pela ADP.`;

  const localImage = getADPImage(name);

  const localStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${COMPANY_SITE}${pagePath}#localbusiness`,
    "name": `ADP Desentupidora - ${name}`,
    "url": `${COMPANY_SITE}${pagePath}`,
    "telephone": COMPANY_PHONE,
    "image": localImage,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": type === 'bairro' ? "Curitiba" : name,
      "addressRegion": "PR",
      "addressCountry": "BR"
    },
    "description": `Serviços de desentupimento e saneamento em ${name}. Atendimento residencial, comercial e industrial.`,
    "areaServed": {
      "@type": type === 'bairro' ? "Neighborhood" : "City",
      "name": name
    }
  };

  return (
    <main className="bg-white">
      <EnhancedSEO
        title={pageTitle}
        description={pageDescription}
        path={pagePath}
        type="business"
        image={localImage}
        structuredData={localStructuredData}
      />

      {/* Hero Header */}
      <section className="bg-slate-50 border-b border-slate-200 py-10 lg:py-14">
        <div className="site-container">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <nav className="text-xs text-slate-500 flex items-center gap-2">
                <Link to="/" className="hover:text-red-700">Início</Link>
                <span>/</span>
                <span className="text-slate-800 font-bold">{type === 'bairro' ? 'Bairro' : 'Cidade'}: {name}</span>
              </nav>

              <span className="text-xs font-extrabold text-red-700 uppercase tracking-widest block">
                Atendimento Regional
              </span>

              <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 uppercase leading-tight">
                Desentupidora em {name}
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Atendimento técnico especializado em <strong>{name}</strong> para desentupimento de esgoto, pia, ralo, vaso sanitário, limpeza de caixa de gordura, hidrojateamento e limpeza de fossa.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(`Olá! Preciso de atendimento para desentupimento em ${name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase px-6 py-3.5 rounded-xl shadow transition-all flex items-center gap-2"
                >
                  <i className="fab fa-whatsapp text-base"></i>
                  <span>WhatsApp {name}</span>
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

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm">
                <img
                  src={localImage}
                  alt={`Atendimento ADP em ${name}`}
                  className="w-full h-[280px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo Informativo Local */}
      <section className="py-12 lg:py-16">
        <div className="site-container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
              <h2 className="font-display font-extrabold text-2xl text-slate-900 uppercase">
                Serviços prestados pela ADP em {name}
              </h2>

              <p>
                A equipe técnica da <strong>ADP Desentupidora</strong> atende em <strong>{name}</strong> com veículos e equipamentos preparados para atender chamados em residências, condomínios e estabelecimentos comerciais.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <h3 className="font-display font-extrabold text-slate-900 uppercase text-xs">
                    Desentupimento Residencial
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Desobstrução de pias de cozinha, ralos de banheiros, tanques e vasos sanitários em casas e apartamentos em {name}.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <h3 className="font-display font-extrabold text-slate-900 uppercase text-xs">
                    Desentupimento de Esgoto e Caixas
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Limpeza técnica de caixas de gordura, caixas de passagem e redes coletoras de esgoto.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <h3 className="font-display font-extrabold text-slate-900 uppercase text-xs">
                    Hidrojateamento em Alta Pressão
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Raspagem e desobstrução de tubulações extensas em comércios, condomínios e indústrias.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <h3 className="font-display font-extrabold text-slate-900 uppercase text-xs">
                    Limpeza de Fossa Séptica
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Esgotamento técnico com caminhão auto-vácuo e descarte em estação certificada.
                  </p>
                </div>
              </div>

              <h2 className="font-display font-extrabold text-xl text-slate-900 uppercase pt-6">
                Como solicitar atendimento em {name}
              </h2>

              <p>
                Para solicitar atendimento em {name}, entre em contato via telefone ou WhatsApp. Nossa central agendará a visita do técnico para realização do orçamento diretamente no local.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
};

export default RegionPage;

