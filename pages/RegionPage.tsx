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
    return list.some(item => item.toLowerCase().replace(/ /g, '-') === slug);
  };

  // SEO & Content Logic
  useEffect(() => {
    if (isValid()) {
      // 1. Title Tag Optimization (Under 60 chars preference, but descriptive for local)
      const title = `Desentupidora ${formattedName} 24h | Chegada 40min | ADP`;
      document.title = title;

      // 2. Meta Description Optimization (Under 160 chars, conversion focused)
      const description = `Precisa de Desentupidora em ${formattedName}? Atendimento 24h no bairro ${formattedName} para esgoto, pias e fossas. Chegamos em 40min. Orçamento Grátis!`;
      
      // Update Meta Description dynamically
      let metaDesc = document.querySelector("meta[name='description']");
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);

      window.scrollTo(0, 0);
    }
  }, [slug, formattedName, type]);

  if (!isValid()) {
    return <Navigate to="/" />;
  }

  // Schema.org Data - Highly Specific to the Neighborhood
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Desentupidora e Encanador 24h",
    "provider": {
      "@type": "LocalBusiness",
      "name": "ADP Desentupidora",
      "telephone": "+55-41-3345-1194",
      "image": "https://adpcuritiba.com.br/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Luiz Maltaca, 36",
        "addressLocality": "Curitiba",
        "addressRegion": "PR",
        "postalCode": "81265-480",
        "addressCountry": "BR"
      },
      "priceRange": "$$"
    },
    "areaServed": {
      "@type": "Place",
      "name": formattedName,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": type === 'cidade' ? formattedName : "Curitiba",
        "addressRegion": "PR",
        "addressCountry": "BR"
      }
    },
    "description": `Serviço de desentupimento emergencial 24h no bairro ${formattedName}. Atendemos residências e comércios com caminhão de hidrojateamento e técnicos especializados.`,
    "url": `https://adpcuritiba.com.br/${type}/${slug}`
  };

  // Dynamic Content Generator (>200 words)
  const neighborhoodContent = (
    <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
      <p>
        Moradores e comerciantes de <strong>{formattedName}</strong> agora contam com uma base de atendimento estratégico da ADP Desentupidora. 
        Compreendemos que problemas hidráulicos, como o retorno de esgoto ou pias entupidas, exigem uma resposta imediata. 
        Por isso, posicionamos nossas equipes móveis para garantir um tempo de chegada recorde na região de {formattedName}, 
        frequentemente abaixo de 40 minutos.
      </p>
      <p>
        A região de <strong>{formattedName}</strong> possui características específicas de infraestrutura e saneamento que nossa equipe conhece bem. 
        Seja em residências térreas, sobrados ou nos condomínios verticais comuns no bairro, utilizamos a tecnologia adequada para cada situação. 
        Nossos caminhões de hidrojateamento compactos conseguem acessar ruas estreitas ou garagens de prédios com facilidade, 
        trazendo a solução pesada de desentupimento industrial para o conforto do seu lar sem causar transtornos no trânsito local.
      </p>
      <p>
        Além do desentupimento de emergência, oferecemos aos moradores de {formattedName} serviços completos de <strong>Limpa Fossa</strong> e manutenção preventiva. 
        Sabemos que muitas propriedades na região ainda utilizam sistemas de fossas sépticas ou possuem caixas de gordura que nunca foram limpas adequadamente. 
        A falta de manutenção nessas estruturas é a causa número um de mau cheiro e infiltrações no bairro. Nossa equipe realiza a sucção, 
        limpeza e o descarte ecológico correto dos resíduos, emitindo certificado de garantia para sua total segurança.
      </p>
      <p>
        Não entregue a segurança da sua casa a amadores. A ADP é referência em {formattedName} por oferecer <strong>preço justo</strong>, 
        orçamento sem compromisso no local e garantia estendida. Se você está enfrentando problemas de fluxo de água, odores desagradáveis 
        ou precisa de um encanador experiente na região, chame quem entende do assunto e respeita o seu patrimônio.
      </p>
    </div>
  );

  const articles = [
    { 
      title: `Desentupidora Profissional em ${formattedName}`, 
      icon: "fa-user-tie",
      content: `Nossa equipe técnica está pronta para atender qualquer demanda residencial ou comercial em ${formattedName} com rapidez e eficiência, 24 horas por dia.`
    },
    { 
      title: `Desentupimento de Esgoto em ${formattedName}`, 
      icon: "fa-toilet",
      content: "Utilizamos equipamentos modernos e sondas elétricas para desobstruir redes de esgoto sem a necessidade de quebrar pisos ou paredes do seu imóvel."
    },
    { 
      title: `Limpeza de Fossa Séptica 24h`, 
      icon: "fa-truck-loading",
      content: "Caminhões de auto vácuo disponíveis na região para limpeza e esgotamento de fossas sépticas e negras com descarte ecológico certificado."
    },
    { 
      title: `Hidrojateamento em ${formattedName}`, 
      icon: "fa-water",
      content: "Alta tecnologia para limpeza de tubulações com jatos de água de alta pressão, removendo gordura e detritos incrustados definitivamente."
    },
    { 
      title: `Desentupimento de Pia e Ralo`, 
      icon: "fa-sink",
      content: "Pia da cozinha ou ralo do banheiro entupido? Resolvemos na hora com equipamentos que protegem a tubulação e garantem a higiene do local."
    },
    { 
      title: `Caça Vazamentos em ${formattedName}`, 
      icon: "fa-search-location",
      content: "Conta de água alta? Detectamos vazamentos ocultos em paredes e pisos com aparelhos eletrônicos de precisão (Geofone)."
    },
  ];

  return (
    <main>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Region */}
      <section className="bg-dark text-white py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-gray-800">
             <i className="fa fa-map-marked-alt text-[20rem] text-white/5 animate-pulse-slow"></i>
             <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
        </div>
        <div className="relative z-10 animate-fade-in-up">
          <div className="inline-block bg-red-600 text-white font-bold text-xs px-3 py-1 rounded-full mb-4 animate-pulse">
            <i className="fa fa-map-marker-alt text-[10px] mr-2 align-middle"></i> ATENDIMENTO NO BAIRRO
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
            🚨 Desentupidora {formattedName} <br className="md:hidden" /> Atendimento 24h
          </h1>
          <p className="text-xl text-gray-300">Chegada rápida em <span className="font-bold text-white">40-45 minutos</span> | Orçamento Grátis</p>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg max-w-lg mx-auto mt-6 text-left flex items-center gap-4 hover:bg-white/15 transition-colors">
             <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl animate-bounce-slow flex-shrink-0">
               <i className="fa fa-truck"></i>
             </div>
             <div>
               <p className="font-bold text-green-400 text-sm uppercase tracking-wide">Plantão Ativo:</p>
               <p className="text-sm">Técnico da ADP próximo a <strong>{formattedName}</strong> disponível para visita imediata sem taxa.</p>
             </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:4133451194" className="bg-primary hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105 border-2 border-white/20 hover:border-white flex items-center justify-center gap-2">
              <i className="fa fa-phone"></i> Ligar Agora
            </a>
            <a href="https://api.whatsapp.com/send?phone=5541985171966" className="bg-[#25d366] hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105 flex items-center justify-center gap-2">
              <i className="fab fa-whatsapp"></i> Chamar no Whats
            </a>
          </div>
        </div>
      </section>

      {/* SEO Content Section (+200 words) */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
             <div className="lg:w-2/3">
                <h2 className="font-display text-3xl font-bold text-dark mb-6 border-l-4 border-primary pl-4">
                  Desentupidora Especializada em {formattedName}
                </h2>
                {neighborhoodContent}
                
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
                    <i className="fa fa-check-circle text-green-500 text-xl"></i>
                    <span className="font-bold text-gray-700">Chegada em 40min no local</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
                    <i className="fa fa-check-circle text-green-500 text-xl"></i>
                    <span className="font-bold text-gray-700">Visita e Orçamento Grátis</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
                    <i className="fa fa-check-circle text-green-500 text-xl"></i>
                    <span className="font-bold text-gray-700">Garantia por escrito</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
                    <i className="fa fa-check-circle text-green-500 text-xl"></i>
                    <span className="font-bold text-gray-700">Equipamento industrial</span>
                  </div>
                </div>
             </div>
             
             {/* Sidebar / CTA Box */}
             <div className="lg:w-1/3 bg-gray-50 p-6 rounded-2xl border border-gray-200 sticky top-24">
                <h3 className="font-bold text-xl mb-4 text-center">Precisa de Ajuda em {formattedName}?</h3>
                <p className="text-center text-sm text-gray-500 mb-6">Nossos técnicos estão na região. Preencha abaixo para retorno rápido.</p>
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const nome = (form.elements.namedItem('nome') as HTMLInputElement).value;
                  const tel = (form.elements.namedItem('telefone') as HTMLInputElement).value;
                  window.open(`https://api.whatsapp.com/send?phone=5541985171966&text=Olá,%20sou%20de%20${formattedName},%20meu%20nome%20é%20${nome}.%20Telefone:%20${tel}.%20Preciso%20de%20um%20orçamento.`);
                }}>
                  <input type="text" name="nome" placeholder="Seu Nome" className="w-full p-3 rounded border border-gray-300 focus:border-primary outline-none" required />
                  <input type="tel" name="telefone" placeholder="Seu Telefone" className="w-full p-3 rounded border border-gray-300 focus:border-primary outline-none" required />
                  <button type="submit" className="w-full bg-red-600 text-white font-bold py-3 rounded shadow hover:bg-red-700 transition">
                    Pedir Ligação Agora
                  </button>
                </form>
             </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-display text-3xl font-bold mb-12">Nossos Serviços em {formattedName}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {articles.map((article, index) => (
              <article key={index} className="bg-white rounded-xl shadow-md hover:shadow-2xl transition duration-300 border border-gray-100 overflow-hidden group">
                <div className="h-40 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                   <i className={`fa ${article.icon} text-7xl text-primary/30 group-hover:text-primary/80 group-hover:scale-125 transition-all duration-500`}></i>
                   <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-50"></div>
                   <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                     24H
                   </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {article.content}
                  </p>
                  <a href="#contato" className="inline-flex items-center text-primary font-bold text-sm hover:underline">
                    Orçamento em {formattedName} <i className="fa fa-angle-right ml-1"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <VideoSection locationName={formattedName} />

      <ContactForm />

    </main>
  );
};

export default RegionPage;