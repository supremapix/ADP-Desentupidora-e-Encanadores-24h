
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_PHONE, COMPANY_WHATSAPP, ADP_IMAGES, BAIRROS, CIDADES_RMC, slugify } from '../constants';

{/* 1. HERO SECTION (2 COLUNAS, FOTO REAL) */}
export const HeroSection: React.FC = () => {
  return (
    <section className="bg-slate-50 border-b border-slate-200 py-10 lg:py-16">
      <div className="site-container grid lg:grid-cols-12 gap-10 items-center">
        {/* COLUNA 1: Texto & Ações */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 px-3 py-1 rounded-full text-xs font-bold text-red-700 uppercase tracking-wide">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            ATENDIMENTO 24H • CURITIBA E RMC
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight uppercase tracking-tight">
            Desentupidora em Curitiba <br className="hidden sm:block"/>
            <span className="text-red-700">para residências e empresas</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
            Desentupimento de esgoto, pia, ralo e vaso sanitário, hidrojateamento, limpeza de fossa e vídeo inspeção em Curitiba e Região Metropolitana.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={`https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent('Olá! Preciso de atendimento para desentupimento.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm uppercase px-6 py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2.5 min-h-[48px]"
            >
              <i className="fab fa-whatsapp text-lg"></i>
              <span>Chamar no WhatsApp</span>
            </a>

            <a
              href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`}
              className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm uppercase px-6 py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2.5 min-h-[48px]"
            >
              <i className="fa fa-phone-alt text-red-500 text-base"></i>
              <span>Ligar Agora {COMPANY_PHONE}</span>
            </a>
          </div>

          {/* Elementos de Confiança */}
          <div className="pt-2 border-t border-slate-200 text-xs text-slate-500 font-medium space-y-1">
            <p className="flex items-center gap-2 flex-wrap">
              <span className="text-emerald-600 font-bold">✓</span> Atendimento residencial, comercial e condomínios
              <span className="text-slate-300">•</span>
              <span className="text-emerald-600 font-bold">✓</span> Avaliação no local
              <span className="text-slate-300">•</span>
              <span className="text-emerald-600 font-bold">✓</span> Sede própria no CIC
            </p>
          </div>
        </div>

        {/* COLUNA 2: Foto Real ADP */}
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group bg-slate-900">
            <img
              src={ADP_IMAGES.caminhaoCic}
              alt="Caminhão e equipe ADP Desentupidora em Curitiba"
              loading="eager"
              className="w-full h-[320px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 block">Frota e Sede Própria</span>
              <p className="text-xs font-bold text-slate-100">Atendimento especializado no CIC e toda a Região Metropolitana</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

{/* 2. TRUST BAR / FAIXA DE CONFIANÇA */}
export const TrustBar: React.FC = () => {
  return (
    <section className="bg-slate-900 text-slate-200 py-4 border-b border-slate-800">
      <div className="site-container">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-bold uppercase tracking-wider text-slate-300">
          <div className="flex items-center gap-2">
            <i className="fa fa-clock text-red-500"></i>
            <span>Atendimento 24 Horas</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <i className="fa fa-map-marker-alt text-red-500"></i>
            <span>Curitiba e RMC</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa fa-home text-red-500"></i>
            <span>Residencial</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa fa-building text-red-500"></i>
            <span>Comercial</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <i className="fa fa-industry text-red-500"></i>
            <span>Industrial</span>
          </div>
        </div>
      </div>
    </section>
  );
};

{/* 3. SERVIÇOS EM GRID COMPACTO (8 CARDS) */}
export const ServiceGrid: React.FC = () => {
  const services = [
    {
      title: "Desentupimento de Esgoto",
      category: "Desentupimento",
      link: "/servicos/desentupimento-de-esgoto",
      desc: "Desobstrução completa de redes coletoras e caixas de inspeção de esgoto residencial e comercial.",
      img: ADP_IMAGES.cicCard
    },
    {
      title: "Desentupimento de Pia",
      category: "Desentupimento",
      link: "/servicos/desentupimento-de-pia",
      desc: "Limpeza técnica do sifão e tubulação de cozinha afetada por gordura acumulada.",
      img: ADP_IMAGES.sabaraCard
    },
    {
      title: "Desentupimento de Ralo",
      category: "Desentupimento",
      link: "/servicos/desentupimento-de-ralo",
      desc: "Desobstrução de ralos de banheiros, lavanderias e quintais com máquinas rotativas.",
      img: ADP_IMAGES.squadSabara
    },
    {
      title: "Desentupimento de Vaso",
      category: "Desentupimento",
      link: "/servicos/desentupimento-de-vaso",
      desc: "Remoção de obstruções em vasos sanitários sem danificar a peça cerâmica.",
      img: ADP_IMAGES.vaso
    },
    {
      title: "Limpeza de Caixa de Gordura",
      category: "Desentupimento",
      link: "/servicos/limpeza-de-caixa-de-gordura",
      desc: "Esgotamento e higienização de caixas de gordura para evitar transbordamento e odor.",
      img: ADP_IMAGES.cicBase
    },
    {
      title: "Hidrojateamento",
      category: "Saneamento",
      link: "/servicos/hidrojateamento",
      desc: "Limpeza em alta pressão de água para desobstruir tubulações extensas e galerias.",
      img: ADP_IMAGES.caminhaoRed
    },
    {
      title: "Limpeza de Fossa",
      category: "Saneamento",
      link: "/servicos/limpeza-de-fossa",
      desc: "Esgotamento técnico com caminhão auto-vácuo e descarte em estação certificada.",
      img: ADP_IMAGES.caminhaoCic
    },
    {
      title: "Vídeo Inspeção",
      category: "Saneamento",
      link: "/servicos/video-inspecao",
      desc: "Mapeamento interno da tubulação com câmera HD para localizar quebras e bloqueios.",
      img: ADP_IMAGES.atendimentoTriplo
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="site-container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-extrabold text-red-700 uppercase tracking-widest block mb-2">
            Nossas Especialidades
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 uppercase">
            Serviços de desentupimento e saneamento
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Atendimento técnico especializado com avaliação no local para residências, empresas e condomínios.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 hover:shadow-md transition-all flex flex-col group"
            >
              <div className="h-44 overflow-hidden relative bg-slate-900">
                <img
                  src={srv.img}
                  alt={srv.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-slate-900/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {srv.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-extrabold text-base text-slate-900 mb-2 group-hover:text-red-700 transition-colors uppercase">
                    {srv.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <Link
                    to={srv.link}
                    className="text-xs font-extrabold text-red-700 hover:text-red-800 uppercase tracking-wider flex items-center gap-1"
                  >
                    Saiba mais <i className="fa fa-arrow-right text-[10px]"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

{/* 4. BLOCO "QUAL É O PROBLEMA?" / "O QUE ESTÁ ACONTECENDO?" */}
export const ProblemSelector: React.FC = () => {
  const problems = [
    {
      problem: "Água da pia da cozinha não desce",
      link: "/servicos/desentupimento-de-pia",
      icon: "fa-utensils"
    },
    {
      problem: "Vaso sanitário borbulhando ou transbordando",
      link: "/servicos/desentupimento-de-vaso",
      icon: "fa-toilet"
    },
    {
      problem: "Ralo do banheiro voltando água com mau cheiro",
      link: "/servicos/desentupimento-de-ralo",
      icon: "fa-shower"
    },
    {
      problem: "Caixa de esgoto transbordando no quintal",
      link: "/servicos/desentupimento-de-esgoto",
      icon: "fa-border-all"
    },
    {
      problem: "Caixa de gordura cheia ou entupida",
      link: "/servicos/limpeza-de-caixa-de-gordura",
      icon: "fa-box"
    },
    {
      problem: "Fossa cheia precisando de esgotamento",
      link: "/servicos/limpeza-de-fossa",
      icon: "fa-truck"
    },
    {
      problem: "Rede comercial/industrial com fluxo bloqueado",
      link: "/servicos/hidrojateamento",
      icon: "fa-water"
    },
    {
      problem: "Necessidade de encontrar quebra interna na tubulação",
      link: "/servicos/video-inspecao",
      icon: "fa-video"
    }
  ];

  return (
    <section className="py-12 bg-slate-100 border-y border-slate-200">
      <div className="site-container">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-extrabold text-red-700 uppercase tracking-widest block mb-2">
            Identifique o Sintoma
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 uppercase">
            O que está acontecendo?
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Selecione a situação enfrentada para entender como a equipe técnica ADP resolve:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="bg-white p-4 rounded-xl border border-slate-200 hover:border-red-500 hover:shadow-md transition-all flex items-start gap-3 group"
            >
              <div className="w-9 h-9 rounded-lg bg-red-50 text-red-700 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <i className={`fa ${item.icon} text-sm`}></i>
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-slate-800 group-hover:text-red-700 transition-colors leading-snug">
                  {item.problem}
                </p>
                <span className="text-[10px] font-bold text-slate-400 group-hover:text-slate-600 uppercase mt-1 inline-block">
                  Ver Solução →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

{/* 5. BLOCO INSTITUCIONAL SOBRE A ADP */}
export const InstitutionalSection: React.FC = () => {
  return (
    <section id="empresa" className="py-12 lg:py-16 bg-white border-b border-slate-200">
      <div className="site-container grid lg:grid-cols-12 gap-10 items-center">
        {/* Esquerda: Foto Real Sede/Frota */}
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200">
            <img
              src={ADP_IMAGES.cicBase}
              alt="Sede física e caminhão da ADP Desentupidora no CIC Curitiba"
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <div className="p-4 bg-slate-900 text-white text-xs">
              <span className="font-extrabold text-red-400 block uppercase">Sede Própria</span>
              <p className="text-slate-300">Rua Luiz Maltaca, 36 - CIC, Curitiba/PR</p>
            </div>
          </div>
        </div>

        {/* Direita: Texto Institucional Real */}
        <div className="lg:col-span-7 space-y-4 text-left">
          <span className="text-xs font-extrabold text-red-700 uppercase tracking-widest block">
            Sobre a Empresa
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 uppercase leading-tight">
            ADP Desentupidora em Curitiba
          </h2>

          <p className="text-slate-600 text-sm leading-relaxed">
            A <strong>ADP Desentupidora</strong> atua na prestação de serviços de desentupimento, hidrojateamento, limpeza de fossa e desobstrução técnica de redes sanitárias. Com sede própria localizada no bairro Cidade Industrial de Curitiba (CIC), atendemos residências, condomínios, estabelecimentos comerciais e indústrias em toda a Região Metropolitana.
          </p>

          <p className="text-slate-600 text-sm leading-relaxed">
            Nossos serviços contam com frota própria e equipamentos adequados para cada diâmetro de tubulação, desde redes internas residenciais de pia e ralo até grandes tubulações coletoras e galerias.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="font-extrabold text-slate-900 block text-xs uppercase">Estrutura Própria</span>
              <span className="text-[11px] text-slate-500">Sede técnica no CIC</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="font-extrabold text-slate-900 block text-xs uppercase">Atendimento 24h</span>
              <span className="text-[11px] text-slate-500">Plantão para emergências</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg col-span-2 sm:col-span-1">
              <span className="font-extrabold text-slate-900 block text-xs uppercase">Curitiba e RMC</span>
              <span className="text-[11px] text-slate-500">Cobertura regional</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

{/* 6. BLOCO DE EQUIPAMENTOS E TECNOLOGIA */}
export const EquipmentSection: React.FC = () => {
  const equipments = [
    {
      name: "Máquinas Rotativas Elétricas",
      purpose: "Desobstrução mecânica com cabos espirais flexíveis para desentupir pias, ralos, tanques e vasos sem danificar o encanamento.",
      icon: "fa-cogs"
    },
    {
      name: "Equipamento de Hidrojateamento",
      purpose: "Jato de água em alta pressão para raspagem e remoção de gordura impregnada e incrustações em redes de esgoto e tubulações coletoras.",
      icon: "fa-water"
    },
    {
      name: "Caminhão Vácuo Esgotador",
      purpose: "Sucção e esgotamento técnico de resíduos de fossas sépticas, caixas de gordura industriais e poços de recalque com transporte seguro.",
      icon: "fa-truck"
    },
    {
      name: "Câmera de Vídeo Inspeção HD",
      purpose: "Sonda com câmera para inspeção visual interna do encanamento, identificando acúmulos, trincas ou quebras na rede antes de qualquer intervenção.",
      icon: "fa-video"
    }
  ];

  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="site-container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold text-red-700 uppercase tracking-widest block mb-2">
            Estrutura Operacional
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 uppercase">
            Equipamentos para diagnóstico e desobstrução
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Tecnologia aplicada para resolver o entupimento de forma limpa e eficiente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipments.map((eq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-red-100 text-red-700 flex items-center justify-center mb-4">
                  <i className={`fa ${eq.icon} text-lg`}></i>
                </div>
                <h3 className="font-display font-extrabold text-base text-slate-900 uppercase mb-2">
                  {eq.name}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {eq.purpose}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

{/* 7. BLOCO "COMO FUNCIONA O ATENDIMENTO" */}
export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Contato e Solicitação",
      desc: "Você entra em contato via telefone ou WhatsApp informando o local e o problema apresentado."
    },
    {
      step: "02",
      title: "Deslocamento Técnico",
      desc: "A equipe técnica vai até o imóvel em Curitiba ou RMC para verificar a situação da tubulação."
    },
    {
      step: "03",
      title: "Avaliação e Orçamento",
      desc: "O diagnóstico é realizado e o valor é apresentado e explicado antes do início da execução."
    },
    {
      step: "04",
      title: "Execução e Teste",
      desc: "Desobstrução efetuada com o equipamento correto, seguida por teste de escoamento e limpeza da área."
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
      <div className="site-container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold text-red-700 uppercase tracking-widest block mb-2">
            Passo a Passo
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 uppercase">
            Como funciona o atendimento da ADP
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Processo transparente do primeiro chamado até a liberação do fluxo sanitário.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => (
            <div key={idx} className="p-6 bg-slate-50 rounded-xl border border-slate-200 relative">
              <span className="font-display font-black text-3xl text-red-700/20 block mb-2">
                {st.step}
              </span>
              <h3 className="font-display font-extrabold text-base text-slate-900 uppercase mb-2">
                {st.title}
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

{/* 8. BLOCO TIPOS DE CLIENTES / ATENDIMENTO */}
export const ClientTypesSection: React.FC = () => {
  return (
    <section className="py-12 bg-slate-100 border-b border-slate-200">
      <div className="site-container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold text-red-700 uppercase tracking-widest block mb-2">
            Aplicações
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 uppercase">
            Atendimento para diferentes estruturas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-red-100 text-red-700 flex items-center justify-center">
              <i className="fa fa-home text-lg"></i>
            </div>
            <h3 className="font-display font-extrabold text-base text-slate-900 uppercase">Residencial</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Atendimento em casas, sobrados e apartamentos. Soluções para pias, ralos de banheiros, vasos sanitários e caixas de gordura.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-red-100 text-red-700 flex items-center justify-center">
              <i className="fa fa-utensils text-lg"></i>
            </div>
            <h3 className="font-display font-extrabold text-base text-slate-900 uppercase">Comercial</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Restaurantes, lanchonetes, padarias, comércios e escritórios. Manutenção de caixas de gordura e desobstrução rápida sem parar o negócio.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-red-100 text-red-700 flex items-center justify-center">
              <i className="fa fa-building text-lg"></i>
            </div>
            <h3 className="font-display font-extrabold text-base text-slate-900 uppercase">Condomínios e Indústrias</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Limpeza de colunas prediais, redes coletoras de esgoto, caixas de passagem e tubulações industriais via hidrojateamento e sucção vácuo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

{/* 9. BLOCO ÁREAS DE ATENDIMENTO */}
export const AreasServedSection: React.FC = () => {
  const mainBairros = BAIRROS.slice(0, 24);
  const mainCidades = CIDADES_RMC.filter(c => c !== "Curitiba").slice(0, 12);

  return (
    <section id="areas-atendidas" className="py-12 lg:py-16 bg-white border-b border-slate-200">
      <div className="site-container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold text-red-700 uppercase tracking-widest block mb-2">
            Geografia de Atendimento
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 uppercase">
            Atendimento em Curitiba e Região Metropolitana
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Equipes de prontidão para atendimento rápido em todos os bairros e municípios vizinhos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bairros */}
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="font-display font-extrabold text-sm text-slate-900 uppercase mb-4 flex items-center gap-2">
              <i className="fa fa-map-marker-alt text-red-700"></i> Bairros de Curitiba
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-medium text-slate-700">
              {mainBairros.map(b => (
                <Link
                  key={b}
                  to={`/bairro/${slugify(b)}`}
                  className="p-1.5 bg-white rounded border border-slate-200 hover:border-red-500 hover:text-red-700 transition-colors truncate block"
                >
                  {b}
                </Link>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link to="/mapa-do-site" className="text-xs font-bold text-red-700 hover:underline uppercase">
                Ver todos os bairros de Curitiba →
              </Link>
            </div>
          </div>

          {/* Cidades RMC */}
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="font-display font-extrabold text-sm text-slate-900 uppercase mb-4 flex items-center gap-2">
              <i className="fa fa-city text-red-700"></i> Região Metropolitana (RMC)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-medium text-slate-700">
              {mainCidades.map(c => (
                <Link
                  key={c}
                  to={`/cidade/${slugify(c)}`}
                  className="p-1.5 bg-white rounded border border-slate-200 hover:border-red-500 hover:text-red-700 transition-colors truncate block"
                >
                  {c}
                </Link>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link to="/mapa-do-site" className="text-xs font-bold text-red-700 hover:underline uppercase">
                Ver todos os municípios da RMC →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

{/* 10. BLOCO FOTOS REAIS DA ADP */}
export const RealPhotosGallery: React.FC = () => {
  const photos = [
    { img: ADP_IMAGES.caminhaoCic, title: "Caminhão Vácuo e Hidrojato ADP" },
    { img: ADP_IMAGES.squadSabara, title: "Equipe Técnica ADP" },
    { img: ADP_IMAGES.cicBase, title: "Sede Própria no CIC Curitiba" },
    { img: ADP_IMAGES.caminhaoRed, title: "Frota de Saneamento ADP" }
  ];

  return (
    <section className="py-12 bg-slate-100 border-b border-slate-200">
      <div className="site-container">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-extrabold text-red-700 uppercase tracking-widest block mb-2">
            Transparência
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 uppercase">
            Operações e Frota ADP
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Imagens reais de nossa estrutura e atendimento de campo.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {photos.map((ph, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm group">
              <img
                src={ph.img}
                alt={ph.title}
                loading="lazy"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-3 bg-slate-900 text-white text-[11px] font-bold truncate">
                {ph.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

{/* 11. FAQ SECTION */}
export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Como é calculado o orçamento do desentupimento?",
      a: "O orçamento é avaliado no local pela equipe técnica, considerando a complexidade da obstrução, o diâmetro da tubulação e o equipamento necessário. O valor é informado de forma transparente antes da execução do serviço."
    },
    {
      q: "A ADP cobra taxa de visita para avaliação?",
      a: "Não cobramos taxa para realizar a avaliação técnica no local em Curitiba e Região Metropolitana."
    },
    {
      q: "A ADP atende de madrugada e nos finais de semana?",
      a: "Sim. Mantemos plantão de atendimento 24 horas por dia, 7 dias por semana, inclusive em feriados."
    },
    {
      q: "Quais são as formas de pagamento aceitas?",
      a: "Aceitamos cartões de débito, crédito, PIX e dinheiro. Para empresas e condomínios, oferecemos opções de faturamento sob consulta."
    },
    {
      q: "Onde fica a sede física da ADP Desentupidora?",
      a: "Nossa sede própria está situada na Rua Luiz Maltaca, 36, no bairro Cidade Industrial de Curitiba (CIC) - PR."
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
      <div className="site-container max-w-3xl">
        <div className="text-center mb-10">
          <span className="text-xs font-extrabold text-red-700 uppercase tracking-widest block mb-2">
            Tire suas Dúvidas
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 uppercase">
            Perguntas frequentes sobre desentupimento
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-4 flex items-center justify-between font-bold text-sm text-slate-900 hover:bg-slate-100 transition-colors"
              >
                <span>{faq.q}</span>
                <i className={`fa fa-chevron-down text-xs text-slate-400 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}></i>
              </button>
              {openIndex === idx && (
                <div className="p-4 pt-0 text-slate-600 text-xs leading-relaxed border-t border-slate-200/60 bg-white">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

