import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BAIRROS, CIDADES_RMC, SERVICES_DETAILED, slugify } from '../constants';

const SitemapPage: React.FC = () => {
  useEffect(() => {
    document.title = "Mapa do Site | ADP Desentupidora Curitiba - Lista Completa de Páginas";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-slate-900 text-white min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 border-b border-slate-800 pb-8 text-center md:text-left">
          <div className="inline-block bg-primary/20 text-primary font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <i className="fa fa-sitemap mr-2"></i> Navegação Interna
          </div>
          <h1 className="text-4xl font-display font-black tracking-tight mb-4">
            Mapa do Site completíssimo
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Abaixo estão listadas todas as seções, serviços técnicos de desentupimento e páginas de atendimento regional de toda Curitiba e Região Metropolitana de Curitiba (RMC).
          </p>
        </header>

        {/* 1. Institutional / Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold uppercase tracking-wide text-primary mb-6 flex items-center gap-2 border-b border-slate-800 pb-2">
            <i className="fa fa-info-circle text-sm text-yellow-500"></i> Páginas Principais & Institucionais
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/" className="bg-slate-800/50 hover:bg-slate-800 p-4 rounded-xl border border-slate-800 transition-all flex flex-col gap-1">
              <span className="font-bold text-sm text-white">Página Inicial</span>
              <span className="text-[11px] text-gray-400">Página de entrada com todos os serviços e diferenciais da ADP.</span>
            </Link>
            <Link to="/faq" className="bg-slate-800/50 hover:bg-slate-800 p-4 rounded-xl border border-slate-800 transition-all flex flex-col gap-1">
              <span className="font-bold text-sm text-white">Dúvidas Frequentes (FAQ)</span>
              <span className="text-[11px] text-gray-400">Respostas detalhadas sobre preços, coberturas e faturamento hidráulico.</span>
            </Link>
            <Link to="/galeria-ia" className="bg-slate-800/50 hover:bg-slate-800 p-4 rounded-xl border border-slate-800 transition-all flex flex-col gap-1">
              <span className="font-bold text-sm text-yellow-400 flex items-center gap-1">
                <i className="fa fa-magic"></i> Galeria IA PRO
              </span>
              <span className="text-[11px] text-gray-400">Demostração profissional de maquinários e simulações realistas e interativas.</span>
            </Link>
            <Link to="/glossario" className="bg-slate-800/50 hover:bg-slate-800 p-4 rounded-xl border border-slate-800 transition-all flex flex-col gap-1">
              <span className="font-bold text-sm text-primary">Glossário SEO (500+ Termos)</span>
              <span className="text-[11px] text-gray-400">Dicionário técnico com termos de engenharia sanitária e hidráulica.</span>
            </Link>
          </div>
        </section>

        {/* 2. Detailed Services */}
        <section className="mb-12 container mx-auto">
          <h2 className="text-2xl font-display font-bold uppercase tracking-wide text-primary mb-6 flex items-center gap-2 border-b border-slate-800 pb-2">
            <i className="fa fa-tools text-sm text-yellow-500"></i> Nossos Serviços Especializados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES_DETAILED.map(service => (
              <Link 
                key={service.id} 
                to={`/servicos/${service.id}`} 
                className="bg-slate-800/30 hover:bg-slate-800/70 p-4 rounded-xl border border-slate-800/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <h3 className="font-bold text-sm text-slate-100 group-hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {service.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 mt-2 line-clamp-2">{service.desc}</p>
                </div>
                <span className="text-[10px] text-primary uppercase font-bold tracking-widest mt-4 inline-flex items-center gap-1 hover:underline">
                  Ver detalhes <i className="fa fa-arrow-right text-[8px] transition-transform group-hover:translate-x-1"></i>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* 3. Cities RMC */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold uppercase tracking-wide text-primary mb-6 flex items-center gap-2 border-b border-slate-800 pb-2">
            <i className="fa fa-map-marked-alt text-sm text-yellow-500"></i> Áreas de Atendimento na Região Metropolitana
          </h2>
          <p className="text-[12px] text-gray-400 mb-4 font-semibold uppercase">
            Selecione a cidade abaixo para obter serviços rápidos com faturamento local e rápida deslocação:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 text-xs">
            {CIDADES_RMC.map(cidade => (
              <Link 
                key={cidade} 
                to={`/cidade/${slugify(cidade)}`} 
                className="bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800 text-slate-300 p-2.5 rounded-lg transition-colors truncate"
              >
                <i className="fa fa-map-marker-alt text-[10px] text-red-500 mr-2"></i>
                {cidade}
              </Link>
            ))}
          </div>
        </section>

        {/* 4. Complete Neighborhoods */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold uppercase tracking-wide text-primary mb-6 flex items-center gap-2 border-b border-slate-800 pb-2">
            <i className="fa fa-map text-sm text-yellow-500"></i> Todos os Bairros de Curitiba Atendidos
          </h2>
          <p className="text-[12px] text-gray-400 mb-4 font-semibold uppercase">
            Equipes distribuídas estrategicamente para chegar em até 40 minutos nas seguintes localidades:
          </p>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-1.5 text-[10px]">
            {BAIRROS.sort((a, b) => a.localeCompare(b)).map(bairro => (
              <Link 
                key={bairro} 
                to={`/bairro/${slugify(bairro)}`} 
                className="bg-slate-950 p-2 border border-slate-900 hover:border-slate-800 hover:text-white text-gray-400 transition-all rounded"
              >
                ● {bairro}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default SitemapPage;
