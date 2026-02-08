
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import { BAIRROS, CIDADES_RMC, COMPANY_PHONE, COMPANY_SITE } from '../constants';
import VideoSection from '../components/VideoSection';

const RegionPage: React.FC<{ type: 'bairro' | 'cidade' }> = ({ type }) => {
  const { slug } = useParams<{ slug: string }>();
  const name = slug ? slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : '';
  
  const isValid = () => {
    const list = type === 'bairro' ? BAIRROS : CIDADES_RMC;
    return list.some(item => item.toLowerCase().replace(/ /g, '-') === slug);
  };

  useEffect(() => {
    if (isValid()) {
      document.title = `Desentupidora em ${name} 24h | Atendimento Emergencial em ${name}`;
      window.scrollTo(0, 0);
    }
  }, [slug, name]);

  if (!isValid()) return <Navigate to="/" />;

  const canonicalUrl = `${COMPANY_SITE}/${type}/${slug}`;

  // Gerador de 18 Seções de Conteúdo SEO
  const seoArticles = [
    { title: `Atendimento 24 Horas em ${name}`, content: `A ADP Desentupidora compreende que emergências hidráulicas não têm hora para acontecer em ${name}. Por isso, mantemos equipes de plantão permanente prontas para deslocamento imediato. Seja um vazamento de esgoto durante a madrugada ou uma pia entupida em pleno almoço de domingo, nossa base logística garante que um técnico qualificado chegue à sua residência ou empresa em ${name} em menos de 40 minutos. Nossa frota é equipada com GPS para localizar o profissional mais próximo da sua rua em ${name}, reduzindo o tempo de espera e minimizando danos ao seu patrimônio.` },
    { title: `Desentupimento de Esgoto em ${name}`, content: `O sistema de esgoto em ${name} pode sofrer obstruções severas devido ao acúmulo de detritos ao longo dos anos. Utilizamos máquinas rotativas K-500 que trituram qualquer bloqueio sem a necessidade de quebrar o piso. Em ${name}, este serviço é um dos mais solicitados para evitar refluxos sanitários que causam mau cheiro e riscos à saúde. Nossos processos são limpos e silenciosos, ideais para a densidade urbana de ${name}.` },
    { title: `Hidrojateamento de Alta Pressão em ${name}`, content: `Para redes industriais e comerciais em ${name}, o hidrojateamento é a solução definitiva. Através de jatos de água que atingem até 25.000 PSI, conseguimos remover crostas de gordura petrificada e raízes que invadem a tubulação em ${name}. É a técnica mais segura e ecológica, pois utiliza apenas água, preservando a integridade dos canos de PVC ou ferro fundido comuns em ${name}.` },
    { title: `Limpeza de Fossa Séptica em ${name}`, content: `Muitas áreas de ${name} ainda utilizam sistemas de fossas. A ADP realiza o esgotamento completo com caminhões de auto vácuo de alta capacidade. Garantimos o descarte correto do efluente coletado em ${name} em estações de tratamento licenciadas pela Sanepar, emitindo o certificado de destinação final para sua tranquilidade e conformidade com a legislação ambiental vigente em ${name}.` },
    { title: `Especialista em Pias e Ralos em ${name}`, content: `Pias de cozinha entupidas por gordura são problemas comuns em residências de ${name}. Nosso serviço remove 100% da obstrução no ramal da pia, garantindo que o fluxo de água volte ao normal imediatamente. Em ${name}, também atendemos ralos de box e quintal, removendo cabelos e sujeiras que causam poças de água indesejadas e proliferação de insetos.` },
    { title: `Vídeo Inspeção Computorizada em ${name}`, content: `Não quebre o seu piso em ${name} sem antes falar conosco. Nossa tecnologia de vídeo inspeção utiliza câmeras de alta definição para navegar por dentro dos canos em ${name}, identificando trincas, selas rompidas ou objetos estranhos. É o diagnóstico preciso que economiza milhares de reais em obras desnecessárias para os moradores de ${name}.` },
    { title: `Desentupimento Industrial em ${name}`, content: `Atendemos o setor fabril e logístico de ${name} com soluções de grande porte. Limpeza de caixas separadoras de óleo, desobstrução de redes pluviais e manutenção preventiva de pátios industriais em ${name}. Nossa equipe é treinada em normas NR-33 e NR-35 para operar com segurança em ambientes críticos de ${name}.` },
    { title: `Contratos para Condomínios em ${name}`, content: `Síndicos em ${name} confiam na ADP para a manutenção preventiva de prumadas e colunas de prédios. Oferecemos pacotes de limpeza semestral que evitam o refluxo de esgoto nos apartamentos do térreo, um problema crônico em muitos edifícios de ${name}. Atendimento prioritário e preços diferenciados para condomínios em ${name}.` },
    { title: `Desentupimento de Vaso Sanitário em ${name}`, content: `Um vaso entupido em ${name} é um transtorno imediato. Nossos técnicos utilizam sondas manuais e elétricas que removem o bloqueio sem riscar a louça ou danificar a vedação. Em ${name}, resolvemos este problema de forma higiênica e rápida, deixando o ambiente pronto para uso em minutos.` },
    { title: `Limpeza de Caixas de Gordura em ${name}`, content: `Restaurantes e lanchonetes em ${name} precisam manter suas caixas de gordura limpas para evitar multas da vigilância sanitária. Realizamos a aspiração da gordura sólida e a lavagem técnica do compartimento em ${name}, garantindo o funcionamento perfeito da cozinha e eliminando o odor desagradável em ${name}.` },
    { title: `Infraestrutura de Saneamento em ${name}`, content: `Conhecemos profundamente o mapeamento hidráulico de ${name}. Entendemos como as variações de declividade e o tipo de solo em ${name} afetam a velocidade de escoamento. Esse conhecimento local nos permite aplicar a técnica de desentupimento mais eficiente para cada situação específica encontrada em ${name}.` },
    { title: `Soluções para o Comércio de ${name}`, content: `Lojas e centros comerciais em ${name} não podem parar por problemas de banheiro ou cozinha. Oferecemos atendimento discreto e eficiente em ${name}, garantindo que seus clientes e funcionários tenham conforto. Disponibilidade total para serviços fora do horário comercial em ${name}.` },
    { title: `Manutenção Preventiva em ${name}`, content: `A melhor forma de economizar em ${name} é prevenindo. Nosso plano de manutenção para residências em ${name} inclui a revisão de sifões, ralos e caixas de inspeção. Pequenos ajustes hoje evitam grandes desastres amanhã na sua casa em ${name}.` },
    { title: `Caça Vazamentos em ${name}`, content: `Além de desentupir, localizamos vazamentos ocultos em ${name} usando geofones de ultrassom. Se sua conta de água subiu sem explicação em ${name}, nós encontramos o furo sem quebrar toda a calçada. Precisão tecnológica a serviço de ${name}.` },
    { title: `Equipe Técnica Certificada em ${name}`, content: `Nossos profissionais que atendem em ${name} passam por treinamentos constantes. Uniformizados, identificados e equipados com os melhores EPIs, garantem um serviço profissional e seguro para sua família em ${name}. Respeito e transparência em cada visita em ${name}.` },
    { title: `Preço Justo e Orçamento Grátis em ${name}`, content: `Em ${name}, não cobramos taxa de visita. O orçamento é feito no local, de forma transparente, explicando cada etapa do processo necessário em ${name}. Facilitamos o pagamento em até 12x no cartão de crédito, pois sabemos que emergências em ${name} não avisam o bolso.` },
    { title: `Garantia de 90 Dias em ${name}`, content: `Sua tranquilidade em ${name} é nossa prioridade. Todos os serviços de desentupimento realizados em ${name} acompanham certificado de garantia por escrito. Se o problema persistir pelo mesmo motivo, retornamos sem custos adicionais à sua propriedade em ${name}.` },
    { title: `Compromisso Ambiental em ${name}`, content: `A ADP é uma empresa consciente em ${name}. Todo resíduo coletado em nossas operações em ${name} é destinado a locais de tratamento oficiais. Preservar os rios e o solo de ${name} faz parte da nossa missão como prestadores de serviços essenciais de saneamento.` }
  ];

  return (
    <main className="bg-secondary min-h-screen">
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Dynamic SEO Hero */}
      <section className="bg-dark text-white pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover" alt={name} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
             <span className="bg-primary/20 text-primary border border-primary/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
               Atendimento em {name} e Região
             </span>
             <h1 className="font-display text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-none">
               Desentupidora em <br/><span className="text-primary">{name}</span> 24 Horas
             </h1>
             <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mb-10">
               Especialistas em desentupimentos técnicos, hidrojateamento e limpeza de fossas com chegada em 40 minutos em qualquer ponto de <strong>{name}</strong>.
             </p>
             <div className="flex flex-wrap gap-4">
                <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="bg-red-600 hover:bg-red-700 text-white font-black px-8 py-4 rounded-xl shadow-2xl transition-all flex items-center gap-3">
                  <i className="fa fa-phone-alt animate-bounce"></i> {COMPANY_PHONE}
                </a>
                <a href="#contato" className="bg-white text-dark font-black px-8 py-4 rounded-xl hover:bg-gray-100 transition-all">
                  ORÇAMENTO GRÁTIS EM {name.toUpperCase()}
                </a>
             </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-display font-bold text-dark mb-6 border-l-8 border-primary pl-6 uppercase tracking-tighter">
                Saneamento Profissional para {name}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A ADP Desentupidora é referência em {name} por oferecer soluções que unem tecnologia industrial e agilidade residencial. 
                Nossos técnicos são moradores da região de Curitiba, o que nos permite conhecer cada atalho para chegar rápido ao seu endereço em {name}. 
                Trabalhamos com equipamentos de última geração que eliminam obstruções em pias, vasos, ralos e esgotos sem a necessidade de quebrar pisos ou paredes em {name}.
              </p>
            </div>
            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 text-center">
               <p className="text-primary font-black text-5xl mb-2">40min</p>
               <p className="text-dark font-bold uppercase tracking-widest text-sm">Tempo Médio de Chegada em {name}</p>
            </div>
          </div>
        </div>
      </section>

      <VideoSection locationName={name} />

      {/* 18 SEO Article Sections */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-dark mb-4 uppercase tracking-tighter">
              Guia de Serviços em {name}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoArticles.map((article, index) => (
              <article key={index} className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 group flex flex-col h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary font-black text-xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {index + 1}
                </div>
                <h3 className="font-display text-xl font-bold text-dark mb-4 leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow text-justify">
                  {article.content}
                </p>
                <div className="pt-4 border-t border-gray-50">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">ADP {name} - Especialistas</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />

      {/* Location-specific Map Placeholder / Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-dark text-white rounded-[3rem] p-12 lg:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 uppercase tracking-tighter">
                Atendemos {name} de Ponta a Ponta
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                Nossas bases móveis circulam por todas as vilas e regiões de {name}. Se você está no centro ou nos limites de {name}, a ADP é sua melhor escolha.
              </p>
              <div className="inline-flex gap-8 text-sm font-bold uppercase tracking-widest text-primary/80">
                <span>Residências</span>
                <span>Indústrias</span>
                <span>Condomínios</span>
                <span>Comércios</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RegionPage;
