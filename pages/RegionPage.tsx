import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import VideoSection from '../components/VideoSection';
import { BAIRROS, CIDADES_RMC } from '../constants';

type PageType = 'bairro' | 'cidade';

interface RegionPageProps {
  type: PageType;
}

const RegionPage: React.FC<RegionPageProps> = ({ type }) => {
  const { slug } = useParams<{ slug: string }>();
  
  // Normalize slug to title case for display
  const formatName = (str: string) => {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const formattedName = slug ? formatName(slug) : '';

  // Validation
  const isValid = () => {
    if (!slug) return false;
    const list = type === 'bairro' ? BAIRROS : CIDADES_RMC;
    // Simple check: check if the slug roughly matches any item in the list (normalized)
    return list.some(item => item.toLowerCase().replace(/ /g, '-') === slug);
  };

  useEffect(() => {
    if (isValid()) {
      document.title = `Desentupidora ${formattedName} - ADP | Atendimento 24h`;
      window.scrollTo(0, 0);
    }
  }, [slug, formattedName, type]);

  if (!isValid()) {
    return <Navigate to="/" />;
  }

  // Generate dynamic articles content with images based on the image sourcing guide
  const articles = [
    { 
      title: `Desentupidora Profissional em ${formattedName}`, 
      imageKeyword: "plumber,professional,uniform",
      content: "Nossa equipe técnica está pronta para atender qualquer demanda residencial ou comercial com rapidez e eficiência."
    },
    { 
      title: `Desentupimento de Esgoto em ${formattedName}`, 
      imageKeyword: "sewer,pipe,cleaning",
      content: "Utilizamos equipamentos modernos para desobstruir redes de esgoto sem a necessidade de quebrar pisos ou paredes."
    },
    { 
      title: `Limpeza de Fossa Séptica 24h`, 
      imageKeyword: "septic,tank,truck,vacuum",
      content: "Caminhões de auto vácuo disponíveis para limpeza e esgotamento de fossas sépticas e negras em toda a região."
    },
    { 
      title: `Hidrojateamento em ${formattedName}`, 
      imageKeyword: "hydro,jetting,water,pressure",
      content: "Alta tecnologia para limpeza de tubulações com jatos de água de alta pressão, removendo toda a sujeira incrustada."
    },
    { 
      title: `Desentupimento de Pia e Ralo`, 
      imageKeyword: "sink,drain,clogged,repair",
      content: "Resolvemos problemas de pias e ralos lentos ou entupidos na hora, devolvendo o fluxo normal da água."
    },
    { 
      title: `Limpeza de Caixa de Gordura`, 
      imageKeyword: "grease,trap,cleaning",
      content: "Evite mau cheiro e entupimentos. Realizamos a limpeza completa de caixas de gordura residenciais e comerciais."
    },
    { 
      title: `Caça Vazamentos em ${formattedName}`, 
      imageKeyword: "leak,detection,device",
      content: "Detectamos vazamentos ocultos com aparelhos eletrônicos de precisão, economizando água e dinheiro."
    },
    { 
      title: `Encanador em ${formattedName}`, 
      imageKeyword: "plumber,fixing,leak,wrench",
      content: "Serviços hidráulicos completos: troca de torneiras, reparos em tubulações e instalações em geral."
    },
    { 
      title: `Atendimento Industrial e Comercial`, 
      imageKeyword: "industrial,factory,plumbing",
      content: "Soluções robustas para indústrias, shoppings e grandes comércios, com contratos de manutenção preventiva."
    },
  ];

  return (
    <main>
      {/* Hero Region */}
      <section className="bg-dark text-white py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
             <img src={`https://loremflickr.com/1920/600/curitiba,city,skyline,${type === 'bairro' ? 'neighborhood' : 'brazil'}`} alt={`Desentupidora em ${formattedName}`} className="w-full h-full object-cover opacity-20" />
             <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
        </div>
        <div className="relative z-10 animate-fade-in-up">
          <div className="inline-block bg-red-600 text-white font-bold text-xs px-3 py-1 rounded-full mb-4 animate-pulse">
            <i className="fa fa-circle text-[8px] mr-2 align-middle"></i> EQUIPE NO BAIRRO
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            🚨 Desentupidora {formattedName} - Atendimento 24h 🚨
          </h1>
          <p className="text-xl text-gray-300">Chegada rápida em <span className="font-bold text-white">40-45 minutos</span> | Orçamento Grátis</p>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg max-w-lg mx-auto mt-6 text-left flex items-center gap-4">
             <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl animate-bounce-slow">
               <i className="fa fa-map-marker-alt"></i>
             </div>
             <div>
               <p className="font-bold text-green-400 text-sm">Status Agora:</p>
               <p className="text-sm">Técnico mais próximo de <strong>{formattedName}</strong> disponível para atendimento imediato.</p>
             </div>
          </div>

          <div className="mt-8">
            <a href="#contato" className="bg-primary hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105 inline-block border-2 border-white/20 hover:border-white">
              Chamar Técnico Agora
            </a>
          </div>
        </div>
      </section>

      {/* Dynamic Articles Content with Images */}
      <section className="pt-16 pb-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {articles.map((article, index) => (
              <article key={index} className="bg-white rounded-xl shadow-md hover:shadow-2xl transition duration-300 border border-gray-100 overflow-hidden group">
                <div className="h-48 overflow-hidden relative">
                   <img 
                    src={`https://loremflickr.com/800/600/${article.imageKeyword}`} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
                   <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                     24H
                   </div>
                </div>
                <div className="p-6">
                  <h2 className="font-display text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{article.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {article.content}
                  </p>
                  <a href="#contato" className="inline-block mt-4 text-primary font-bold text-sm hover:underline">
                    Solicitar Visita <i className="fa fa-angle-right ml-1"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>
          
          <div className="bg-secondary/20 p-8 rounded-2xl border border-secondary/50 mb-12">
             <h2 className="font-display text-2xl font-bold mb-4">Sobre {formattedName}</h2>
             <p className="text-gray-700 leading-relaxed">
               Atuamos fortemente na região de {formattedName} com equipes de prontidão. Conhecemos as particularidades da rede de esgoto local e oferecemos as melhores soluções para os moradores e empresas.
               Se você precisa de uma desentupidora em {formattedName}, conte com a ADP para um serviço limpo, rápido e com garantia.
             </p>
          </div>

          {/* Related Services Internal Linking */}
          <div className="border-t border-gray-100 pt-12">
            <h3 className="font-display text-xl font-bold text-dark mb-6">Serviços Relacionados da ADP</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               <Link to="/servicos/hidrojateamento" className="p-4 bg-gray-50 rounded-lg hover:bg-primary hover:text-white transition text-center text-sm font-bold">
                 Hidrojateamento 24h
               </Link>
               <Link to="/servicos/limpeza-de-fossa" className="p-4 bg-gray-50 rounded-lg hover:bg-primary hover:text-white transition text-center text-sm font-bold">
                 Limpeza de Fossa
               </Link>
               <Link to="/faq" className="p-4 bg-gray-50 rounded-lg hover:bg-primary hover:text-white transition text-center text-sm font-bold">
                 Dúvidas Frequentes
               </Link>
               <Link to="/#servicos" className="p-4 bg-gray-50 rounded-lg hover:bg-primary hover:text-white transition text-center text-sm font-bold">
                 Todos os Serviços
               </Link>
            </div>
          </div>

        </div>
      </section>

      <VideoSection locationName={formattedName} />

      <ContactForm />

    </main>
  );
};

export default RegionPage;