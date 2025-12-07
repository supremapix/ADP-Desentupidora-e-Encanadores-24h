import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import VideoSection from '../components/VideoSection';

const ServiceHydrojetting: React.FC = () => {
  useEffect(() => {
    document.title = "Hidrojateamento de Alta Pressão - ADP Desentupidora Curitiba";
    window.scrollTo(0, 0);
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Hidrojateamento de Alta Pressão",
    "name": "Serviço de Hidrojateamento e Desobstrução",
    "description": "Serviço profissional de hidrojateamento de alta pressão (até 25.000 PSI) para desobstrução de tubulações de esgoto, limpeza de caixas de gordura, galerias pluviais e tanques industriais. Atendimento 24 horas.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "ADP Desentupidora",
      "telephone": "+55-41-3345-1194",
      "image": "https://loremflickr.com/1920/1080/hydro,jetting,equipment,action",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Luiz Maltaca, 36",
        "addressLocality": "Curitiba",
        "addressRegion": "PR",
        "postalCode": "81265-480",
        "addressCountry": "BR"
      },
      "priceRange": "$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Curitiba"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Região Metropolitana de Curitiba"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Hidrojateamento",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Limpeza de Rede de Esgoto"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Limpeza de Caixa de Gordura"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desentupimento Industrial"
          }
        }
      ]
    },
    "url": "https://adpcuritiba.com.br/servicos/hidrojateamento"
  };

  const articles = [
    {
      title: "O que é Hidrojateamento?",
      content: "O hidrojateamento é uma tecnologia avançada que utiliza água pressurizada para desobstruir e limpar tubulações. Diferente de métodos mecânicos que apenas perfuram o bloqueio, o hidrojateamento lava as paredes internas do cano, removendo gordura, incrustações e detritos, restaurando o fluxo original e prevenindo novos entupimentos por mais tempo.",
      imageKeyword: "hydro,jet,nozzle,cleaning,pipe"
    },
    {
      title: "Como funciona a Alta Pressão?",
      content: "Utilizamos caminhões equipados com bombas de alta potência capazes de gerar pressão de até 25.000 PSI (libras por polegada quadrada). A água é liberada através de mangueiras com bicos especiais que impulsionam o jato para frente, cortando raízes, gordura solidificada e outros materiais resistentes, garantindo uma limpeza profunda e eficiente.",
      imageKeyword: "high,pressure,water,cleaning,pipes"
    },
    {
      title: "Benefícios para Tubulações",
      content: "O principal benefício é a preservação da integridade dos canos. Ao contrário de cabos de aço que podem arranhar ou danificar tubulações antigas (especialmente de cerâmica ou PVC ressecado), a água age de maneira uniforme. Além disso, a limpeza é completa, não deixando resíduos que possam servir de base para novos bloqueios imediatos.",
      imageKeyword: "drain,cleaning,before,after,comparison"
    },
    {
      title: "Hidrojateamento em Redes de Esgoto",
      content: "Redes de esgoto sofrem com acúmulo de detritos pesados ao longo dos anos. O hidrojateamento é a solução ideal para redes coletoras de condomínios e ruas, pois consegue empurrar grandes volumes de detritos para as caixas de inspeção, onde podem ser removidos. É a solução definitiva para evitar retornos de esgoto indesejados.",
      imageKeyword: "industrial,pipe,cleaning,equipment"
    },
    {
      title: "Limpeza de Caixas de Gordura",
      content: "Caixas de gordura são o pesadelo de muitas cozinhas industriais e residenciais. A gordura solidifica como pedra. O hidrojateamento quebra esses blocos sólidos, transformando-os em pequenas partículas que fluem ou são aspiradas pelo nosso caminhão limpa-fossa, deixando a caixa de gordura praticamente nova.",
      imageKeyword: "grease,trap,cleaning,commercial,kitchen"
    },
    {
      title: "Hidrojateamento em Colunas de Prédios",
      content: "Em edifícios verticais, as colunas de esgoto e gordura entopem frequentemente devido ao uso intenso. Realizamos a limpeza vertical (prumadas) utilizando bicos rotativos que descem pela tubulação, limpando andar por andar, garantindo que o fluxo de todos os apartamentos seja restabelecido sem risco de transbordamento nos andares baixos.",
      imageKeyword: "apartment,building,plumbing,system"
    },
    {
      title: "Aplicações Industriais",
      content: "Indústrias requerem limpezas técnicas em trocadores de calor, caldeiras, tanques e reatores. O hidrojateamento industrial remove incrustações químicas e minerais sem o uso de produtos abrasivos ou químicos perigosos, sendo uma opção ecologicamente correta e extremamente segura para o ambiente fabril.",
      imageKeyword: "industrial,factory,drain,cleaning"
    },
    {
      title: "Diferença: Hidrojato vs. Máquina Rotativa",
      content: "A máquina rotativa (Roto-Rooter) utiliza cabos de aço e é excelente para obstruções pontuais e objetos sólidos (como panos ou brinquedos). O hidrojato, por sua vez, é superior para limpeza geral, remoção de gordura, areia e terra. Frequentemente, a ADP utiliza ambas as técnicas em conjunto para um resultado perfeito.",
      imageKeyword: "drain,cleaning,tools,comparison"
    },
    {
      title: "Limpeza de Fachadas e Pisos",
      content: "Além de tubulações, nossos equipamentos podem ser configurados para lavagem de superfícies. Removemos pichações, musgo, bolor e sujeira incrustada de fachadas de prédios, calçadas, pátios industriais e estacionamentos, devolvendo o aspecto de novo às superfícies com o poder da água.",
      imageKeyword: "pressure,washing,floor,cleaning"
    },
    {
      title: "Manutenção Preventiva",
      content: "Não espere entupir! Condomínios e empresas inteligentes contratam o hidrojateamento preventivo anualmente ou semestralmente. Isso evita emergências, mau cheiro e paradas não programadas, além de representar uma economia significativa a longo prazo comparado aos custos de reparos emergenciais.",
      imageKeyword: "preventive,maintenance,plumbing,schedule"
    },
    {
      title: "Equipamentos de Ponta",
      content: "A ADP investe constantemente em tecnologia. Nossos caminhões combinados possuem tanques de água limpa e tanques de vácuo para sucção simultânea. Utilizamos bicos de diversas geometrias (bico torpedo, bico rotativo, bico de arraste) para cada situação específica encontrada em campo.",
      imageKeyword: "hydro,jetting,machine,equipment,modern"
    },
    {
      title: "Segurança no Processo",
      content: "Lidar com alta pressão exige responsabilidade. Nossos operadores são treinados (NR-33 e NR-35) e utilizam todos os EPIs necessários (botas, luvas, óculos, capacetes). A segurança da sua propriedade e da nossa equipe é prioridade absoluta em cada operação de hidrojateamento realizada.",
      imageKeyword: "plumber,safety,equipment,ppe"
    },
    {
      title: "Galerias Pluviais",
      content: "Galerias de água da chuva frequentemente entopem com terra, folhas e lixo da rua, causando alagamentos. O hidrojateamento é a única técnica capaz de arrastar toneladas de areia e sedimentos para fora das galerias, desassoreando o sistema e permitindo o livre fluxo da água pluvial.",
      imageKeyword: "storm,drain,cleaning,maintenance"
    },
    {
      title: "Remoção de Raízes",
      content: "Raízes de árvores buscam a umidade dentro dos canos e causam bloqueios severos. O hidrojateamento com bicos cortadores de raízes fatia a vegetação intrusiva sem a necessidade de escavar e trocar o tubo, sendo uma solução cirúrgica e muito menos destrutiva para o seu jardim ou calçada.",
      imageKeyword: "tree,roots,sewer,pipe,damage"
    },
    {
      title: "Economia Gerada",
      content: "Embora o custo inicial possa parecer maior que uma visita simples de encanador, a durabilidade do serviço de hidrojateamento compensa. Uma tubulação hidrojateada pode ficar anos sem apresentar problemas, enquanto métodos paliativos exigem visitas constantes. É o melhor custo-benefício do mercado.",
      imageKeyword: "money,savings,affordable,pricing"
    },
    {
      title: "Tanques e Reservatórios",
      content: "Limpamos tanques de armazenamento de água potável, combustível ou produtos químicos. O jato de água remove o biofilme e sedimentos do fundo e paredes, garantindo a qualidade do produto armazenado e atendendo às normas sanitárias e ambientais vigentes.",
      imageKeyword: "water,tank,industrial,cleaning"
    },
    {
      title: "Por que Escolher a ADP?",
      content: "Somos pioneiros em Curitiba no uso desta tecnologia. Nossa frota é própria e moderna. Oferecemos garantia por escrito, atendimento 24 horas e facilitamos o pagamento. Não somos apenas desentupidores, somos técnicos especializados em saneamento e manutenção hidráulica de alta performance.",
      imageKeyword: "professional,plumber,team,portrait"
    },
    {
      title: "Sustentabilidade",
      content: "O hidrojateamento utiliza apenas água potável, sem aditivos químicos nocivos ao lençol freático. É a forma mais ecológica de limpar esgoto. Além disso, nossos caminhões realizam a sucção dos resíduos para descarte correto em estações de tratamento, fechando o ciclo ambiental com responsabilidade.",
      imageKeyword: "eco,friendly,water,recycling"
    }
  ];

  return (
    <main>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Section */}
      <section className="relative bg-dark text-white pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
             <img src="https://loremflickr.com/1920/1080/hydro,jetting,equipment,action" alt="Hidrojateamento Background" className="w-full h-full object-cover opacity-30" />
             <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Hidrojateamento de <span className="text-primary">Alta Pressão</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up delay-100">
            A tecnologia mais avançada para limpeza e desobstrução de tubulações, esgotos e superfícies. Potência, eficiência e durabilidade.
          </p>
          <a href="#contato" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full text-lg shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all hover:scale-105 inline-block animate-bounce-slow">
            Solicitar Orçamento Urgente
          </a>
        </div>
      </section>

      {/* Emergency Alert Box */}
      <section className="bg-red-50 border-b-4 border-red-500">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
           <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-2xl animate-pulse flex-shrink-0">
             <i className="fa fa-exclamation-triangle"></i>
           </div>
           <div>
             <h3 className="font-bold text-red-800 text-lg">Entupimento Grave?</h3>
             <p className="text-red-700 text-sm">Não tente resolver sozinho. O uso de produtos químicos ou arames pode perfurar a tubulação. Chame nosso plantão.</p>
           </div>
           <a href="tel:4133451194" className="bg-red-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 transition shadow-md whitespace-nowrap">
             <i className="fa fa-phone mr-2"></i> Ligar Agora
           </a>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-display text-3xl font-bold text-dark mb-6">Limpeza Profunda para Resultados Duradouros</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            O hidrojateamento não apenas desentope; ele restaura a capacidade original da sua tubulação. 
            Utilizando jatos de água em altíssima velocidade, removemos toda a gordura, areia, detritos e incrustações 
            que se acumularam ao longo de anos. É a solução definitiva para residências, condomínios, comércios e indústrias 
            que buscam resolver o problema pela raiz.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection 
        customTitle={<>Veja o Poder do <span className="text-primary">Hidrojateamento</span></>}
        customDescription={
          <>
            <p>
              Assista ao vídeo e veja nossos caminhões de hidrojateamento em ação. 
              A força da água pressurizada é capaz de cortar raízes e remover obstruções severas em segundos.
            </p>
            <p className="mt-4">
              A <strong>ADP Desentupidora</strong> possui a frota mais moderna de Curitiba para este serviço.
            </p>
          </>
        }
      />

      {/* 18 Detailed Sections Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center text-dark mb-16">
            Tudo Sobre Nossos Serviços de Hidrojateamento
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
                  <a href="#contato" className="text-red-600 font-bold text-sm uppercase tracking-wider hover:text-red-700 flex items-center gap-2 mt-auto self-start group">
                    Solicitar Urgência <i className="fa fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-center md:text-left">
            <h2 className="font-display text-3xl font-bold">Precisa de Hidrojateamento Urgente?</h2>
            <p className="opacity-90 mt-1">Nossa equipe está pronta para atender Curitiba e Região 24 horas.</p>
          </div>
          <div className="flex gap-4">
             <a href="tel:4133451194" className="bg-white text-primary font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition">
               <i className="fa fa-phone mr-2"></i> Ligar Agora
             </a>
             <a href="https://api.whatsapp.com/send?phone=5541985171966" className="bg-[#25d366] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-600 transition border-2 border-white">
               <i className="fab fa-whatsapp mr-2"></i> WhatsApp
             </a>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
};

export default ServiceHydrojetting;