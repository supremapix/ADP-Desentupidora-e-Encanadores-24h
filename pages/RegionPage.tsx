
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

  // Gerador de Conteúdo SEO de Alta Densidade (18 Artigos)
  const seoArticles = [
    {
      title: `Desentupidora em ${name}: Atendimento Emergencial 24 Horas`,
      content: `A ADP Desentupidora atua com destaque em ${name}, oferecendo uma infraestrutura completa para resolver qualquer tipo de obstrução hidráulica. Entendemos que um entupimento em ${name} não tem hora para acontecer, por isso mantemos equipes de plantão permanente que circulam pelas principais ruas e avenidas da região. Nossa chegada em ${name} é estimada em no máximo 40 minutos, garantindo que o transtorno seja resolvido com agilidade e perícia técnica profissional.`
    },
    {
      title: `Limpeza de Fossa em ${name} com Caminhão Vácuo`,
      content: `Para as residências e empresas de ${name} que ainda utilizam sistemas de fossas sépticas ou negras, a ADP oferece o serviço de esgotamento técnico. Utilizamos caminhões de auto vácuo de alta performance que realizam a sucção completa dos detritos em ${name}. Todo o resíduo coletado em ${name} é transportado para estações de tratamento licenciadas, respeitando integralmente as normas ambientais da Sanepar e do IAP.`
    },
    {
      title: `Desentupimento de Pia e Ralo em ${name}`,
      content: `Pias de cozinha e ralos de banheiro entupidos são problemas comuns em ${name}. O acúmulo de gordura petrificada e restos de alimentos exige equipamentos rotativos que trituram a sujeira sem danificar a tubulação de PVC ou ferro comum nas edificações de ${name}. Nossos técnicos em ${name} utilizam sondas flexíveis que navegam por todas as curvas do encanamento, devolvendo o fluxo original da água imediatamente.`
    },
    {
      title: `Hidrojateamento de Alta Pressão em ${name}`,
      content: `Em situações de obstruções severas em redes de esgoto ou galerias pluviais de ${name}, o hidrojateamento é a solução definitiva. Através de jatos de água que atingem pressões de até 25.000 PSI, conseguimos "lavar" internamente os canos em ${name}, removendo raízes, cimento de restos de obra e crostas de gordura que máquinas comuns não conseguem retirar. É a tecnologia industrial a serviço de ${name}.`
    },
    {
      title: `Desentupimento de Vaso Sanitário em ${name}`,
      content: `Um vaso sanitário entupido em ${name} é uma das emergências mais desconfortáveis. A ADP resolve o problema em ${name} de forma higiênica, utilizando métodos que não exigem a quebra da louça ou do piso. Em ${name}, aplicamos tecnologia de vácuo ou molas especiais que desobstruem o sifão do vaso em minutos, deixando o ambiente pronto para uso e devidamente higienizado.`
    },
    {
      title: `Vídeo Inspeção Computorizada em ${name}`,
      content: `Para diagnósticos precisos em ${name}, utilizamos câmeras de alta definição que percorrem o interior das tubulações. Se você tem um problema recorrente em ${name} e não sabe a causa, nossa vídeo inspeção localiza trincas, selas rompidas ou objetos estranhos com precisão milimétrica. Em ${name}, isso evita "quebra-quebra" desnecessário, economizando tempo e dinheiro na reforma hidráulica.`
    },
    {
      title: `Manutenção Preventiva para Condomínios em ${name}`,
      content: `Síndicos de ${name} contam com a ADP para planos de manutenção semestral de colunas e prumadas. Em prédios de ${name}, o entupimento no térreo é um risco constante. Nossa limpeza preventiva evita que o esgoto retorne nos apartamentos, garantindo a paz e a segurança sanitária de todos os moradores de ${name}. Atendimento prioritário para condomínios cadastrados.`
    },
    {
      title: `Desentupimento Industrial e Comercial em ${name}`,
      content: `Indústrias localizadas em ${name} exigem rapidez para não paralisar a produção. Limpamos caixas de gordura de grande porte, separadores de água e óleo e redes de efluentes industriais em ${name}. Nossa equipe em ${name} é treinada em normas de segurança (NR-33 e NR-35) para operar em ambientes confinados e alturas com total responsabilidade.`
    },
    {
      title: `Localização de Vazamentos (Caça Vazamentos) em ${name}`,
      content: `Sua conta de água subiu inexplicavelmente em ${name}? Localizamos vazamentos ocultos usando geofones de ultrassom. Identificamos o ponto exato do furo na tubulação de água limpa em ${name}, realizando o reparo pontual. Mais uma solução da ADP para evitar o desperdício de água e o prejuízo financeiro para os moradores de ${name}.`
    },
    {
      title: `Limpeza de Caixas de Gordura em Restaurantes de ${name}`,
      content: `O setor gastronômico de ${name} precisa estar em dia com a Vigilância Sanitária. Realizamos a limpeza técnica e a raspagem de paredes de caixas de gordura em restaurantes e lanchonetes de ${name}. Evite mau cheiro e a proliferação de insetos com a manutenção regular da ADP em sua cozinha comercial em ${name}.`
    },
    {
      title: `Atendimento em Vilas e Conjuntos de ${name}`,
      content: `Nossa cobertura em ${name} é total, alcançando todas as vilas, conjuntos habitacionais e loteamentos da região. Não importa se você está em uma área central de ${name} ou nos limites do bairro, a ADP garante o mesmo padrão de qualidade e o preço justo que nos tornou referência em saneamento básico em ${name}.`
    },
    {
      title: `Soluções para Redes Pluviais em ${name}`,
      content: `As chuvas fortes em Curitiba podem sobrecarregar as calhas e condutores de ${name}. Realizamos a limpeza de calhas e a desobstrução de redes de águas pluviais em ${name}, evitando alagamentos em garagens e infiltrações nos telhados. Manter o escoamento livre é vital para a preservação do seu patrimônio em ${name}.`
    },
    {
      title: `Equipamentos de Última Geração em ${name}`,
      content: `Investimos constantemente na renovação da nossa frota que atende ${name}. Dispomos de máquinas K-50, K-500 e caminhões combinados (vácuo e jato) de última geração. Para o cliente de ${name}, isso significa um serviço mais rápido, silencioso e com garantia total de desobstrução sem danos às estruturas existentes.`
    },
    {
      title: `Técnicos Certificados e Uniformizados em ${name}`,
      content: `Segurança é prioridade quando recebemos um profissional em nossa casa em ${name}. Nossos técnicos são rigorosamente selecionados, treinados e trabalham sempre uniformizados e identificados. Ao chamar a ADP para atender em ${name}, você tem a certeza de um atendimento ético, respeitoso e altamente profissional.`
    },
    {
      title: `Preço Justo e Orçamento Grátis em ${name}`,
      content: `Diferente de empresas que cobram taxas abusivas de visita, na ADP o orçamento em ${name} é totalmente gratuito. O técnico avalia o local, explica a solução necessária e passa o valor fechado antes de iniciar. Facilitamos o pagamento em até 12x no cartão de crédito para todos os moradores de ${name}.`
    },
    {
      title: `Compromisso com o Meio Ambiente em ${name}`,
      content: `A ADP é uma empresa com consciência ecológica ativa em ${name}. Todo resíduo coletado em fossas ou caixas de gordura em ${name} recebe o manifesto de transporte de resíduos (MTR), comprovando o descarte em locais autorizados. Preservar os rios e o solo de ${name} faz parte da nossa missão diária.`
    },
    {
      title: `Garantia por Escrito em todos os Serviços em ${name}`,
      content: `Sua tranquilidade é nossa meta. Todos os desentupimentos realizados em ${name} acompanham um certificado de garantia por escrito. Se o problema persistir pelo mesmo motivo, retornamos a ${name} sem custos adicionais. É o compromisso da ADP com a sua satisfação total em ${name}.`
    },
    {
      title: `Como Solicitar a ADP em ${name}`,
      content: `É muito simples ter o melhor serviço de desentupidora em ${name}. Basta clicar nos botões de ligação ou WhatsApp deste site. Nossa central 24h em Curitiba identificará a equipe mais próxima de ${name} e despachará o socorro imediato. ADP Desentupidora: a solução definitiva para saneamento em ${name}.`
    }
  ];

  return (
    <main className="bg-secondary min-h-screen">
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Dynamic SEO Hero */}
      <section className="bg-dark text-white pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover" alt={`Serviços em ${name}`} />
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

      {/* SEO Content Grid (18 Articles) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-dark mb-4 uppercase tracking-tighter">
              Guia Completo de Serviços em {name}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoArticles.map((article, index) => (
              <article key={index} className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary font-black text-xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {index + 1}
                </div>
                <h3 className="font-display text-xl font-bold text-dark mb-4 leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow text-justify">
                  {article.content}
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">ADP {name} - Especialistas em Saneamento</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <VideoSection locationName={name} />
      <ContactForm />

      {/* Local Authority Badge */}
      <section className="py-20 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 uppercase tracking-tighter">
             Líder em Desentupimentos em {name}
           </h2>
           <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
             Combinamos 25 anos de experiência com tecnologia de ponta para garantir que {name} tenha o melhor serviço de desentupidora da capital.
           </p>
           <div className="flex justify-center gap-8">
              <div className="flex flex-col items-center">
                 <i className="fa fa-shield-alt text-primary text-4xl mb-2"></i>
                 <span className="text-xs font-bold uppercase">Garantia Total</span>
              </div>
              <div className="flex flex-col items-center">
                 <i className="fa fa-truck-moving text-primary text-4xl mb-2"></i>
                 <span className="text-xs font-bold uppercase">Equipes no local</span>
              </div>
              <div className="flex flex-col items-center">
                 <i className="fa fa-user-check text-primary text-4xl mb-2"></i>
                 <span className="text-xs font-bold uppercase">Técnicos Certificados</span>
              </div>
           </div>
        </div>
      </section>
    </main>
  );
};

export default RegionPage;
