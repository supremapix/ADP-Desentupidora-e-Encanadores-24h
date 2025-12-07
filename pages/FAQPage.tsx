import React, { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm';

const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openSection, setOpenSection] = useState<string | null>('geral');
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Perguntas Frequentes (FAQ) - Guia Completo ADP Desentupidora";
    window.scrollTo(0, 0);
  }, []);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  // Expanded FAQ Data with ~300 words per answer and new questions
  const faqData = {
    geral: {
      title: "Dúvidas Gerais e Atendimento",
      questions: [
        { 
          q: "A ADP atende todos os bairros de Curitiba e a Região Metropolitana?", 
          a: "Sim, a ADP Desentupidora cobre 100% da área de Curitiba e Região Metropolitana. Nossa estrutura logística é dividida em bases operacionais estratégicas (Norte, Sul, Leste e Oeste) para garantir que, independentemente de onde você esteja – seja no centro de Curitiba, na Cidade Industrial (CIC), em Santa Felicidade ou em cidades vizinhas como São José dos Pinhais, Araucária, Pinhais, Colombo e Campo Largo – tenhamos uma equipe pronta para chegar até você em aproximadamente 40 minutos. Diferente de empresas menores que atendem apenas localmente, nossa frota circula constantemente pela cidade. Isso significa que, muitas vezes, quando você liga, já temos um técnico finalizando um serviço no seu bairro, o que reduz drasticamente o tempo de espera. Além disso, conhecemos as particularidades das tubulações de cada região, desde as redes mais antigas do Centro Histórico até os sistemas de saneamento mais modernos dos novos condomínios do Ecoville." 
        },
        { 
          q: "Vocês atendem emergências de madrugada e finais de semana?", 
          a: "Absolutamente. Sabemos que entupimentos não escolhem hora para acontecer e que um vaso sanitário transbordando às 2 da manhã de um domingo é uma situação desesperadora. Por isso, a ADP Desentupidora opera em regime de plantão real 24 horas por dia, 7 dias por semana, incluindo feriados nacionais e finais de semana. Não é apenas um atendimento telefônico; temos técnicos de sobreaviso e caminhões equipados prontos para sair da base a qualquer momento. Se você tiver uma emergência sanitária, como retorno de esgoto dentro de casa, alagamento por chuva ou pia da cozinha totalmente travada durante um jantar, pode ligar sem medo. Nossa taxa de resposta para emergências noturnas é uma das mais rápidas de Curitiba. Chegamos, resolvemos o problema de forma silenciosa e limpa (respeitando as regras de condomínios quando possível) e devolvemos a tranquilidade ao seu lar imediatamente." 
        },
        { 
          q: "Como é feito o orçamento? Cobram taxa de visita?", 
          a: "A transparência é um dos pilares da ADP. Não cobramos taxa de visita para Curitiba e a maior parte da região metropolitana. O processo funciona assim: você entra em contato, nós deslocamos uma equipe técnica até o seu endereço sem custo. O técnico avalia a situação in loco, identifica a causa do entupimento, a complexidade do acesso e o equipamento necessário (máquina rotativa K-50, K-500 ou hidrojateamento). Com base nisso, ele lhe passa o orçamento exato e fechado antes de iniciar qualquer trabalho. Você tem total liberdade para aprovar ou não. Acreditamos que cobrar orçamento por telefone é desonesto, pois cada entupimento é único. Um 'entupimento de pia' pode ser apenas uma sujeira no sifão (resolvido em 5 minutos) ou uma obstrução sólida na coluna do prédio (que exige horas de trabalho). Avaliando pessoalmente, garantimos o preço justo pelo serviço real necessário, sem surpresas na hora de pagar." 
        },
        { 
          q: "Quais as formas de pagamento aceitas?", 
          a: "Buscamos facilitar ao máximo a sua vida em um momento de urgência. Aceitamos pagamentos em dinheiro, PIX (com desconto especial), cartões de débito e crédito de todas as bandeiras. Para serviços de maior valor, como limpezas de fossa grandes ou hidrojateamento extenso, oferecemos parcelamento no cartão de crédito. Para empresas, condomínios e indústrias, trabalhamos com faturamento via boleto bancário (sujeito a análise de cadastro), permitindo que você organize seu fluxo de caixa. Emitimos Nota Fiscal para todos os serviços prestados, o que é essencial para prestação de contas de síndicos e administradores de empresas." 
        }
      ]
    },
    desentupimento: {
      title: "Técnicas e Soluções de Desentupimento",
      questions: [
        { 
          q: "Usar soda cáustica ou 'Diabo Verde' ajuda a desentupir?", 
          a: "Como profissionais, recomendamos fortemente: NÃO USE soda cáustica ou produtos químicos agressivos como primeira opção, e tenha muito cuidado se decidir usá-los. Embora possam dissolver pequenas obstruções orgânicas (como restos de comida ou cabelo), eles frequentemente agravam o problema. A soda cáustica, ao entrar em contato com a gordura fria dentro do cano, pode sofrer uma reação química chamada saponificação, transformando-se em um bloco de sabão duro e petrificado. Isso transforma um entupimento simples (que uma máquina removeria facilmente) em uma obstrução sólida que, às vezes, exige a troca da tubulação. Além disso, esses produtos são altamente corrosivos e podem derreter colas de conexões de PVC, causar vazamentos nas juntas e, o pior de tudo, oferecem risco grave de queimaduras químicas para você e para o encanador que for realizar o serviço depois. Se a água não está descendo, o bloqueio é físico. A melhor solução é a remoção mecânica, que é segura para seus canos e para sua saúde." 
        },
        { 
          q: "Qual a diferença entre Máquina Rotativa e Hidrojateamento?", 
          a: "Esta é uma dúvida muito comum. A Máquina Rotativa (frequentemente chamada de Roto-Rooter) utiliza cabos de aço flexíveis que giram em alta velocidade dentro da tubulação. Na ponta desses cabos, acoplamos ponteiras específicas (lâminas, espirais, serras) para triturar ou resgatar o objeto que está causando a obstrução. É a técnica ideal para entupimentos causados por objetos sólidos (brinquedos, panos, absorventes), raízes de árvores ou para tubulações de diâmetro menor, como pias e ralos internos. Já o Hidrojateamento utiliza a força da água. Um caminhão equipado com bombas de alta pressão lança um jato de água (até 25.000 PSI) que lava as paredes internas do cano. Ele não apenas desentope, mas faxina a tubulação, removendo placas de gordura, areia, terra e incrustações antigas. O hidrojateamento é recomendado para redes de esgoto principais, caixas de gordura, galerias pluviais e situações onde a tubulação precisa ser restaurada ao seu diâmetro original. Nossos técnicos avaliarão qual o melhor método para o seu caso específico." 
        },
        { 
          q: "Vocês precisam quebrar pisos ou paredes para desentupir?", 
          a: "Na ADP Desentupidora, seguimos a filosofia de 'Método Não Destrutivo'. Graças à tecnologia moderna, em 98% dos casos, NÃO precisamos quebrar absolutamente nada. Nossos equipamentos (máquinas rotativas e sondas de hidrojato) são projetados para entrar na tubulação através das aberturas já existentes, como ralos, caixas de inspeção, vasos sanitários (que removemos e recolocamos com cuidado) ou pias. As sondas flexíveis fazem as curvas do encanamento e chegam até o ponto da obstrução, esteja ele a 2 ou 50 metros de distância. A necessidade de quebra só ocorre em situações extremas e estruturais, como quando a própria tubulação cedeu, arriou ou quebrou no subsolo devido à movimentação de terra ou raízes muito agressivas. Nesses casos raros, utilizamos equipamentos de vídeo inspeção (câmeras) para localizar o ponto exato do problema, permitindo uma quebra cirúrgica apenas onde é necessário o reparo, evitando obras desnecessárias em sua casa." 
        },
        { 
          q: "Meu vaso sanitário está borbulhando. O que isso significa?", 
          a: "O borbulhamento no vaso sanitário (ou em ralos) é um sinal clássico de que a linha de esgoto está parcialmente obstruída ou que a ventilação do sistema está bloqueada. Pense no sistema de esgoto como uma garrafa virada de cabeça para baixo: para o líquido sair, o ar precisa entrar. Se a saída principal do esgoto para a rua ou fossa está quase entupida, o ar preso na tubulação não tem para onde ir quando você dá descarga ou usa o chuveiro, e acaba voltando pelo ponto mais fácil: o selo hídrico do vaso sanitário, criando as bolhas. Isso é um aviso prévio importante. Se você ignorar as bolhas, é quase certo que um entupimento total e retorno de esgoto acontecerão em breve. Recomendamos chamar um técnico assim que notar esse sintoma. Uma limpeza preventiva da linha principal geralmente resolve o problema de forma rápida e muito mais barata do que lidar com um transbordamento de esgoto dentro do banheiro." 
        },
        { 
          q: "Raízes de árvores podem entupir o esgoto? Como resolver?", 
          a: "Sim, raízes são uma das causas mais frequentes e difíceis de entupimentos, especialmente em casas com jardins ou calçadas arborizadas. As raízes buscam umidade e nutrientes. Se houver a mínima fissura ou junta mal vedada na tubulação de esgoto, as raízes penetram, crescem lá dentro e formam uma 'cabeleira' densa que bloqueia totalmente o fluxo e pode até quebrar o cano. Produtos químicos dificilmente resolvem isso. A solução eficaz é o uso de máquinas rotativas com ponteiras cortadoras de raízes (lâminas afiadas que giram e cortam a vegetação por dentro do cano) ou hidrojateamento com bicos cortadores. Em casos recorrentes, após a desobstrução, pode ser necessário reparar o ponto de entrada da raiz para evitar que ela cresça novamente. A ADP possui equipamentos específicos de alta potência projetados justamente para cortar raízes sem destruir a tubulação." 
        },
        { 
          q: "Tentar desentupir com arame ou cabide funciona?", 
          a: "O famoso truque do cabide de arame é um clássico do 'faça você mesmo', mas traz riscos. Se o entupimento for muito superficial (ex: cabelo logo na saída do ralo), pode funcionar. Porém, se a obstrução estiver mais funda, o arame pode empurrar a sujeira ainda mais para longe, compactando-a e tornando o entupimento pior. O maior risco, contudo, é perfurar o cano. Tubulações de PVC ou corrugadas (sifonadas) são frágeis a objetos pontiagudos metálicos. Um furo no sifão ou no cano dentro da parede causará vazamentos silenciosos que podem danificar móveis e estruturas. Além disso, o arame pode riscar a louça sanitária, estragando a estética do seu banheiro para sempre. O custo de um serviço profissional é muito menor do que o custo de trocar um vaso sanitário riscado ou quebrar uma parede para consertar um cano furado por arame." 
        },
        { 
          q: "Existe garantia para o serviço de desentupimento?", 
          a: "Sim, todos os serviços realizados pela ADP Desentupidora possuem garantia legal. O prazo de garantia varia de acordo com o tipo de serviço executado e é especificado no orçamento/ordem de serviço. Geralmente, oferecemos 90 dias de garantia técnica. Isso significa que, se o local voltar a entupir pelo mesmo motivo ou falha na execução dentro desse prazo, retornaremos gratuitamente para refazer o serviço. Vale ressaltar que a garantia cobre a desobstrução realizada; ela não cobre novos entupimentos causados por mau uso posterior (como jogar fraldas ou objetos no vaso após a nossa saída) ou problemas estruturais da tubulação (como canos quebrados ou afundados) que foram alertados pelo técnico. Prezamos pela honestidade: se o problema for estrutural, avisaremos que o desentupimento é uma medida paliativa e que o reparo definitivo exige obra." 
        }
      ]
    },
    fossa: {
      title: "Limpa Fossa e Manutenção",
      questions: [
        { 
          q: "Com que frequência devo limpar minha fossa séptica?", 
          a: "A frequência ideal varia conforme o tamanho da fossa e o número de pessoas na residência, mas a recomendação geral é realizar a limpeza a cada 6 a 12 meses. Esperar a fossa transbordar para limpar é um erro que pode custar caro, pois o lodo acumulado no fundo pode passar para o sumidouro (a parte que drena o líquido para o solo). Se o lodo impermeabilizar o sumidouro, ele para de funcionar, e você terá que construir um novo, o que é uma obra cara. Sinais de que está na hora de limpar incluem: escoamento lento em toda a casa, grama muito verde ou úmida sobre a área da fossa e odores desagradáveis no quintal. Manter uma rotina de limpeza preventiva protege seu sistema de saneamento, evita contaminação do solo e garante que você nunca passe pelo transtorno de ter esgoto voltando para dentro de casa." 
        },
        { 
          q: "O que é feito com o resíduo retirado da fossa?", 
          a: "A responsabilidade ambiental é coisa séria para a ADP. O material retirado de fossas sépticas e caixas de gordura é altamente poluente e biológico. Jamais deve ser descartado em rios, bueiros ou terrenos baldios (o que é crime ambiental inafiançável). Nossos caminhões transportam todo o efluente coletado para Estações de Tratamento de Esgoto (ETEs) credenciadas pela Sanepar e órgãos ambientais. Lá, o resíduo passa por processos físicos e químicos para ser tratado adequadamente antes de voltar à natureza. Nós emitimos o Certificado de Destinação de Efluentes para todos os clientes comerciais e industriais, e também para residenciais que solicitem, garantindo que você está contratando uma empresa legalizada e ecologicamente correta." 
        },
        { 
          q: "Como é feita a limpeza de caixas de gordura de restaurantes?", 
          a: "Para restaurantes e cozinhas industriais, a limpeza da caixa de gordura é uma exigência sanitária rigorosa. A gordura nesses ambientes acumula muito rápido e forma blocos duros como pedra. A limpeza manual muitas vezes é ineficiente e demorada. A ADP utiliza caminhões de hidrojateamento e sucção. Primeiro, sugamos a parte líquida e pastosa. Se houver gordura petrificada, utilizamos o hidrojato para quebrar os blocos e limpar as paredes da caixa até o concreto original. Isso elimina o mau cheiro e previne entupimentos nos ramais da cozinha. Oferecemos contratos de manutenção programada (mensal ou quinzenal) para que o restaurante nunca precise parar suas atividades por problemas de esgoto, mantendo o estabelecimento sempre em conformidade com a Vigilância Sanitária." 
        }
      ]
    },
    dicas: {
      title: "Dicas de Especialista e Prevenção",
      questions: [
        { 
          q: "O que posso fazer para evitar entupimentos na pia da cozinha?", 
          a: "A pia da cozinha é a campeã de entupimentos devido à gordura e restos de alimentos. A prevenção é simples mas exige disciplina: 1) Nunca jogue óleo de fritura na pia. Guarde em garrafas PET e entregue para reciclagem. O óleo esfria, solidifica e gruda nas paredes do cano como colesterol nas veias. 2) Use sempre ralinhos de proteção (peneirinhas) para segurar restos de arroz, feijão e outros sólidos. Jogue esses restos no lixo orgânico, não no cano. 3) Antes de lavar louças muito engorduradas, passe um papel toalha para remover o excesso de gordura e jogue no lixo. 4) Uma vez por semana, jogue uma chaleira de água fervente (com detergente) no ralo; isso ajuda a derreter a gordura recente antes que ela endureça. Se mesmo com esses cuidados a água começar a descer devagar, chame a ADP para uma limpeza preventiva da caixa de gordura e ramais." 
        },
        { 
          q: "Sinto mau cheiro no banheiro, mas não vejo entupimento. O que é?", 
          a: "Mau cheiro no banheiro geralmente indica falha na vedação dos gases do esgoto. O 'segurança' contra o mau cheiro é o sifão (aquela curva no cano embaixo da pia) e o selo hídrico do vaso sanitário, que devem sempre conter água parada para bloquear a passagem dos gases. Verifique: 1) Se o sifão da pia está fazendo o formato de 'U' corretamente. Se estiver esticado, o cheiro passa. 2) Se o anel de vedação entre o vaso sanitário e o chão está desgastado (muito comum em instalações antigas). 3) Se os ralos do chão possuem o sistema de 'fecho hídrico' ou tampas rotativas fechadas. 4) Se o tubo de ventilação do esgoto (que sai pelo telhado) não está obstruído por ninhos de passarinho. Nossos encanadores podem fazer um teste de fumaça ou inspeção para localizar a origem exata do odor e corrigir a vedação." 
        },
        { 
          q: "Água da chuva pode ir para a rede de esgoto?", 
          a: "Não! Este é um erro gravíssimo e ilegal. A rede de esgoto foi dimensionada apenas para receber o volume de água das descargas, pias e chuveiros. Se você liga as calhas do telhado ou ralos do quintal na rede de esgoto, quando chove forte, o volume de água é muito superior à capacidade da tubulação. O resultado? O esgoto transborda para dentro da sua casa (pelo ralo do banheiro) ou estoura as tampas dos bueiros na rua. A água da chuva deve ir para a galeria pluvial (rede de drenagem) ou para a rua (sarjeta). Se você suspeita que sua casa tem essa ligação irregular (ligação cruzada), nossos técnicos podem identificar e corrigir, separando as tubulações e evitando multas e alagamentos." 
        },
        { 
          q: "O que NUNCA devo jogar no vaso sanitário?", 
          a: "O vaso sanitário não é lixeira. Ele foi projetado para receber apenas dejetos humanos e papel higiênico (e mesmo o papel, em muitas tubulações brasileiras antigas, é melhor evitar). Itens que causam desastres: 1) Lenços umedecidos: Eles não se desfazem na água como papel, eles criam redes que prendem tudo. 2) Fio dental: Cria emaranhados que cortam e travam rotores de bombas. 3) Preservativos e absorventes: Inchame e bloqueiam o fluxo. 4) Cabelo retirado da escova. 5) Areia de gato (mesmo as 'biodegradáveis' viram argila pesada). Educar a família para usar a lixeira do banheiro é a forma mais barata e eficiente de evitar visitas de emergência da desentupidora." 
        },
        { 
          q: "Como saber se tenho um vazamento oculto (infiltração)?", 
          a: "Vazamentos ocultos são traiçoeiros pois podem danificar a estrutura da casa e aumentar muito a conta de água antes de serem vistos. Sinais de alerta: 1) Conta de água aumentou repentinamente sem mudança de hábito. 2) Manchas de mofo, bolhas na pintura ou rodapés soltando, especialmente em paredes que passam tubulação. 3) O 'teste do hidrômetro': feche todas as torneiras, não use o vaso e observe o relógio de água. Se ele continuar girando, há vazamento na rede pressurizada. 4) Som de água correndo nas paredes à noite quando tudo está silêncio. A ADP possui equipamentos de Caça Vazamentos (geofone eletrônico) que escutam o vazamento dentro da parede ou sob o piso, permitindo localizar o ponto exato para quebrar apenas um azulejo, e não a parede inteira." 
        },
        { 
          q: "Por que as calhas e condutores entopem?", 
          a: "Calhas e condutores verticais entopem principalmente devido ao acúmulo de folhas, galhos, poeira e ninhos de pássaros, especialmente se houver árvores próximas ao telhado. Quando a calha entope, a água da chuva transborda, podendo infiltrar pelo telhado, estragar forros de gesso e manchar paredes. Em casos graves, o peso da água parada pode até derrubar a calha. Recomendamos a limpeza de calhas duas vezes ao ano: antes da temporada de chuvas de verão e no final do outono (quando as folhas caem). Para condutores verticais entupidos, onde a limpeza manual não alcança, utilizamos hidrojateamento para lavar o tubo de cima a baixo, garantindo o escoamento total da água pluvial." 
        },
        { 
          q: "Moro em apartamento no térreo. Tenho mais risco de entupimento?", 
          a: "Infelizmente, sim. Apartamentos no térreo ou primeiro andar são o 'ponto baixo' da coluna de esgoto do prédio. Se houver um entupimento na tubulação principal do edifício ou na saída para a rua, todo o esgoto gerado pelos andares de cima (que continua descendo pela gravidade) não tem para onde ir e acaba retornando pelos ralos e vasos sanitários do apartamento mais baixo. É o chamado 'refluxo'. Para prevenir esse desastre, é vital que o condomínio mantenha a limpeza das caixas de esgoto e gordura em dia (hidrojateamento preventivo). Se você mora no térreo e ouvir borbulhas ou sentir cheiro forte, avise o síndico imediatamente, pois pode ser o prenúncio de um refluxo da coluna central." 
        }
      ]
    }
  };

  // Flatten questions for search
  const allQuestions = Object.entries(faqData).flatMap(([catKey, category]) => 
    category.questions.map((q, idx) => ({ ...q, category: category.title, globalIndex: `${catKey}-${idx}` }))
  );

  const filteredQuestions = searchTerm 
    ? allQuestions.filter(item => 
        item.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.a.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : null;

  return (
    <main>
      <section className="bg-dark text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl font-bold mb-4 animate-fade-in-up">Central de Ajuda e Dúvidas Técnicas</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Guia completo com dicas de especialista, soluções para problemas comuns e tudo sobre nossos serviços.
          </p>
          
          {/* Search Box */}
          <div className="max-w-xl mx-auto mt-8 relative">
            <input 
              type="text" 
              placeholder="Digite sua dúvida (ex: soda cáustica, raiz, cheiro)..." 
              className="w-full p-4 rounded-full text-gray-800 focus:ring-4 focus:ring-primary/50 outline-none shadow-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-primary">
              <i className="fa fa-search text-xl"></i>
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white min-h-[50vh]">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {searchTerm ? (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-6">Resultados da busca:</h2>
              {filteredQuestions && filteredQuestions.length > 0 ? (
                filteredQuestions.map((item) => (
                  <div key={item.globalIndex} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">{item.category}</span>
                    <h3 className="font-bold text-lg text-dark mb-2">{item.q}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{item.a}</p>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 py-8">Nenhuma resposta encontrada para "{searchTerm}". Tente termos mais gerais.</p>
              )}
            </div>
          ) : (
            <div className="space-y-12">
              {Object.entries(faqData).map(([key, section]) => (
                <div key={key} className="bg-gray-50 rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-8 flex items-center gap-3 border-b border-gray-200 pb-4">
                    {key === 'geral' && <i className="fa fa-info-circle"></i>}
                    {key === 'desentupimento' && <i className="fa fa-wrench"></i>}
                    {key === 'fossa' && <i className="fa fa-truck"></i>}
                    {key === 'dicas' && <i className="fa fa-lightbulb text-yellow-500"></i>}
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.questions.map((q, idx) => (
                      <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                        <button 
                          onClick={() => toggleQuestion(Number(`${key.length}${idx}`))} // Unique ID hack
                          className="w-full text-left p-5 md:p-6 font-bold text-gray-800 flex justify-between items-center hover:bg-gray-50 transition"
                        >
                          <span className="text-lg">{q.q}</span>
                          <i className={`fa fa-chevron-down transition-transform duration-300 text-primary flex-shrink-0 ml-4 ${openQuestion === Number(`${key.length}${idx}`) ? 'rotate-180' : ''}`}></i>
                        </button>
                        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openQuestion === Number(`${key.length}${idx}`) ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="p-6 pt-2 text-gray-600 leading-relaxed text-justify border-t border-gray-50 bg-white">
                            {q.a}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-primary py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ainda tem dúvidas?</h2>
          <p className="mb-8 text-lg opacity-90">Nossa equipe de atendimento técnico está pronta para explicar tudo pelo WhatsApp.</p>
          <a href="https://api.whatsapp.com/send?phone=5541985171966" className="bg-white text-primary font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1 inline-flex items-center gap-2">
            <i className="fab fa-whatsapp text-2xl"></i> Falar com Especialista
          </a>
        </div>
      </section>

      <ContactForm />
    </main>
  );
};

export default FAQPage;