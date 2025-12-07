import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import VideoSection from '../components/VideoSection';

const ServiceSeptic: React.FC = () => {
  useEffect(() => {
    document.title = "Limpeza de Fossa Séptica 24h - ADP Desentupidora Curitiba";
    window.scrollTo(0, 0);
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Limpeza de Fossa Séptica",
    "provider": {
      "@type": "LocalBusiness",
      "name": "ADP Desentupidora",
      "telephone": "+55-41-3345-1194",
      "image": "https://loremflickr.com/1920/1080/septic,tank,truck,vacuum",
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
      "@type": "City",
      "name": "Curitiba"
    },
    "description": "Serviço de limpeza de fossa séptica, negra e caixas de gordura com caminhão auto vácuo em Curitiba e Região Metropolitana. Atendimento 24 horas."
  };

  const articles = [
    {
      title: "Como Funciona a Limpeza de Fossa?",
      content: "A limpeza de fossa é realizada através de caminhões equipados com potentes bombas de auto vácuo. Este sistema suga todos os resíduos líquidos e pastosos (lodo) armazenados na fossa séptica ou negra, transportando-os para o tanque do caminhão de forma hermética, sem vazamentos ou mau cheiro no local.",
      imageKeyword: "septic,tank,pumping,truck"
    },
    {
      title: "Quando Limpar a Fossa?",
      content: "Recomenda-se a limpeza periódica a cada 6 ou 12 meses, dependendo do volume de uso e tamanho da fossa. Sinais de que a fossa está cheia incluem: mau cheiro no quintal ou ralos, retorno de esgoto pelo vaso sanitário, e o solo ao redor da fossa úmido ou com grama muito verde.",
      imageKeyword: "septic,tank,inspection,yard"
    },
    {
      title: "Limpeza de Caixa de Gordura",
      content: "A caixa de gordura retém óleos e graxas da cozinha para não entupir a rede de esgoto. Quando cheia, ela transborda e causa forte odor. Realizamos a aspiração completa da gordura solidificada e líquida, lavando as paredes da caixa e garantindo o fluxo livre da água da pia.",
      imageKeyword: "grease,trap,cleaning,kitchen"
    },
    {
      title: "Fossa Séptica vs. Fossa Negra",
      content: "Fossas sépticas são estruturas de cimento que tratam o esgoto. Fossas negras são buracos no solo (comuns em áreas rurais ou antigas). A ADP limpa ambos os tipos, mas tomamos cuidados extras com fossas negras para evitar desmoronamentos durante a sucção.",
      imageKeyword: "septic,system,diagram,underground"
    },
    {
      title: "Descarte Ecológico Correto",
      content: "O resíduo da fossa não pode ser jogado em rios ou bueiros. A ADP possui licença ambiental e cadastro na Sanepar. Todo o efluente coletado é transportado para estações de tratamento de esgoto (ETE) certificadas, onde recebem o tratamento adequado antes de retornar à natureza.",
      imageKeyword: "sewage,treatment,plant,eco"
    },
    {
      title: "Caminhões Combinados",
      content: "Nossa frota possui caminhões 'Combinados' que fazem tanto a sucção da fossa quanto o hidrojateamento das tubulações. Isso significa que, se houver um entupimento na linha que leva à fossa, resolvemos tudo na mesma visita, sem custo adicional de deslocamento de outro veículo.",
      imageKeyword: "vacuum,truck,hydro,jetting"
    },
    {
      title: "Atendimento a Condomínios",
      content: "Condomínios residenciais possuem grandes fossas e caixas de passagem que exigem manutenção regular. Oferecemos contratos mensais ou semestrais com preços especiais para síndicos e administradoras, evitando emergências que afetam todos os moradores.",
      imageKeyword: "condominium,building,sewer,maintenance"
    },
    {
      title: "Limpeza Industrial",
      content: "Atendemos indústrias para limpeza de caixas separadoras de água e óleo (CSAO), tanques de decantação e sumidouros. Nossos equipamentos são adequados para resíduos industriais não perigosos, garantindo a continuidade da produção fabril.",
      imageKeyword: "industrial,wastewater,treatment,factory"
    },
    {
      title: "Desentupimento de Sumidouro",
      content: "O sumidouro é para onde vai o líquido tratado da fossa. Com o tempo, o solo impermeabiliza (satura) e a água não desce mais. Realizamos o esgotamento do sumidouro e aplicamos hidrojateamento no fundo para tentar recuperar a permeabilidade do solo.",
      imageKeyword: "drain,field,septic,repair"
    },
    {
      title: "Segurança Sanitária",
      content: "O contato com esgoto traz riscos de doenças. Nossos técnicos utilizam EPIs completos (macacão impermeável, luvas, máscaras, botas) e isolam a área de trabalho. Após o serviço, realizamos a higienização do local para garantir a segurança da sua família.",
      imageKeyword: "plumber,safety,ppe,protection"
    },
    {
      title: "Capacidade dos Caminhões",
      content: "Dispomos de caminhões com diferentes capacidades cúbicas (de 3m³ a 15m³) para atender desde pequenas residências com acesso difícil até grandes indústrias. Nossos veículos são compactos o suficiente para entrar na maioria das garagens residenciais.",
      imageKeyword: "small,vacuum,truck,residential"
    },
    {
      title: "Certificado de Limpeza",
      content: "Para comércios, restaurantes e indústrias, a vigilância sanitária e o meio ambiente exigem comprovante de limpeza. A ADP emite o Certificado de Destinação Final de Efluentes e Laudo Técnico, comprovando que sua empresa está em dia com as obrigações ambientais.",
      imageKeyword: "document,paperwork,certification,compliance"
    },
    {
      title: "Prevenção de Mau Cheiro",
      content: "O retorno de gases pelo ralo é sinal de problemas na ventilação ou fossa cheia. Além da limpeza, verificamos os sifões e tubos de ventilação da sua rede, eliminando o odor desagradável de esgoto dentro de casa.",
      imageKeyword: "bathroom,sink,smell,plumbing"
    },
    {
      title: "Atendimento de Emergência",
      content: "Fossa transbordando é uma emergência sanitária. Mantemos plantão 24 horas, inclusive sábados, domingos e feriados, para realizar o esgotamento imediato e evitar a contaminação do solo e áreas de lazer.",
      imageKeyword: "emergency,plumber,night,service"
    },
    {
      title: "Bacias de Contenção",
      content: "Em postos de gasolina e lavacarros, realizamos a limpeza das caixas de areia e bacias de contenção. A remoção correta da lama contaminada com óleo é essencial para evitar multas ambientais pesadas.",
      imageKeyword: "gas,station,drain,cleaning"
    },
    {
      title: "Equipamentos Modernos",
      content: "Nossas bombas de vácuo são de anel líquido de alta performance, capazes de sugar resíduos a grandes distâncias e profundidades. Isso permite limpar fossas que estão longe da rua ou em subsolos profundos.",
      imageKeyword: "modern,pump,technology,equipment"
    },
    {
      title: "Transparência no Preço",
      content: "O orçamento pode ser feito por metro cúbico retirado ou preço fechado (quando sabemos o tamanho exato da fossa). Explicamos tudo antes de começar, sem surpresas na hora de pagar. Aceitamos cartões.",
      imageKeyword: "credit,card,payment,machine"
    },
    {
      title: "Região de Atendimento",
      content: "Atendemos Curitiba e toda a Região Metropolitana (São José dos Pinhais, Colombo, Pinhais, Araucária, Campo Largo, etc.) com a mesma agilidade e sem cobrança abusiva de taxa de deslocamento.",
      imageKeyword: "map,location,service,area"
    }
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Section */}
      <section className="relative bg-dark text-white pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
             <img src="https://loremflickr.com/1920/1080/septic,tank,truck,service" alt="Limpeza de Fossa Background" className="w-full h-full object-cover opacity-30" />
             <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Limpeza de <span className="text-primary">Fossa Séptica</span> 24h
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up delay-100">
            Caminhões auto vácuo de alta capacidade para esgotamento de fossas, caixas de gordura e resíduos industriais. Descarte 100% ecológico.
          </p>
          <a href="#contato" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full text-lg shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all hover:scale-105 inline-block animate-bounce-slow">
            Pedir Caminhão Agora
          </a>
        </div>
      </section>

      {/* Emergency Alert Box */}
      <section className="bg-yellow-50 border-b-4 border-yellow-500">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
           <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 text-2xl animate-pulse flex-shrink-0">
             <i className="fa fa-exclamation-circle"></i>
           </div>
           <div>
             <h3 className="font-bold text-yellow-800 text-lg">Fossa Transbordando?</h3>
             <p className="text-yellow-700 text-sm">Evite multas e contaminação. Atendemos com urgência em até 45 minutos.</p>
           </div>
           <a href="https://api.whatsapp.com/send?phone=5541985171966" className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700 transition shadow-md whitespace-nowrap">
             <i className="fab fa-whatsapp mr-2"></i> Chamar no WhatsApp
           </a>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-display text-3xl font-bold text-dark mb-6">Soluções Completas em Saneamento</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            A Limpeza de Fossa é essencial para a saúde da sua família e preservação do meio ambiente. 
            A ADP Desentupidora utiliza equipamentos de sucção a vácuo selados, garantindo um serviço limpo, 
            sem cheiro e rápido. Emitimos certificado de descarte para a Sanepar e órgãos ambientais.
          </p>
        </div>
      </section>

      <VideoSection 
        customTitle={<>Equipe Especializada em <span className="text-primary">Limpa Fossa</span></>}
        customDescription={
          <>
            <p>
              Veja como nossa operação é realizada com total segurança e higiene. 
              Nossos caminhões possuem potentes bombas de sucção capazes de remover resíduos sólidos e líquidos em minutos.
            </p>
            <p className="mt-4">
              Atendemos residências, condomínios e grandes indústrias em Curitiba e Região Metropolitana.
            </p>
          </>
        }
      />

      {/* 18 Detailed Sections Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center text-dark mb-16">
            Serviços de Esgotamento e Limpeza
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((item, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full border border-gray-100">
                <div className="h-48 overflow-hidden relative group">
                  <img 
                    src={`https://loremflickr.com/600/400/${item.imageKeyword}`} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="font-display text-xl font-bold text-primary mb-4 border-b-2 border-gray-100 pb-2">
                    {index + 1}. {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow text-justify">
                    {item.content}
                  </p>
                  <a href="#contato" className="text-green-600 font-bold text-sm uppercase tracking-wider hover:text-green-700 flex items-center gap-2 mt-auto self-start group">
                    Solicitar Orçamento <i className="fa fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
};

export default ServiceSeptic;