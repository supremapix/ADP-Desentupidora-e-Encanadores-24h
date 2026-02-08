
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import { BAIRROS, CIDADES_RMC } from '../constants';

const RegionPage: React.FC<{ type: 'bairro' | 'cidade' }> = ({ type }) => {
  const { slug } = useParams<{ slug: string }>();
  const formattedName = slug ? slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : '';

  const isValid = () => {
    const list = type === 'bairro' ? BAIRROS : CIDADES_RMC;
    return list.some(item => item.toLowerCase().replace(/ /g, '-') === slug);
  };

  useEffect(() => {
    if (isValid()) {
      document.title = `Desentupidora em ${formattedName} 24h | Atendimento em 40min`;
      window.scrollTo(0, 0);
    }
  }, [slug, formattedName]);

  if (!isValid()) return <Navigate to="/" />;

  return (
    <main>
      <section className="bg-slate-900 text-white py-24 text-center px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-bold uppercase">Desentupidora {formattedName}</h1>
          <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto italic">Serviços emergenciais de saneamento e desentupimento técnico em {formattedName} e arredores.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Coluna de Conteúdo Principal */}
            <div className="lg:col-span-2 space-y-12 text-gray-700 leading-relaxed text-lg">
              <article>
                <h2 className="text-3xl font-bold text-dark mb-6">Infraestrutura e Desafios Hidráulicos em {formattedName}</h2>
                <p>
                  A região de <strong>{formattedName}</strong> possui uma dinâmica urbana única. Seja por sua história de desenvolvimento industrial (como no caso do CIC) ou por sua alta densidade residencial, os sistemas de esgoto desta área sofrem pressões constantes. A ADP Desentupidora entende que em {formattedName}, a combinação de tubulações de diferentes épocas exige um olhar técnico diversificado.
                </p>
                <p className="mt-4">
                  Nossas equipes estacionadas estrategicamente para atender {formattedName} conhecem as particularidades do solo e da declividade da região. Muitas vezes, o que parece um simples entupimento de pia pode ser um sintoma de um problema maior na rede coletora da rua ou na caixa de inspeção do imóvel, algo comum em áreas de {formattedName} que passaram por reformas estruturais recentes.
                </p>
              </article>

              <article className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                <h3 className="text-2xl font-bold text-primary mb-4">Por que a Urgência em {formattedName} é Prioridade?</h3>
                <p>
                  Diferente de serviços estéticos, um entupimento em {formattedName} é uma ameaça direta ao patrimônio e à saúde. Em casas e condomínios de {formattedName}, o refluxo de esgoto pode causar danos irreparáveis a móveis, pisos de madeira e revestimentos caros. Além disso, o odor exalado é composto por gases tóxicos que podem causar náuseas e mal-estar imediato.
                </p>
                <p className="mt-4">
                  Atendemos em {formattedName} com equipamentos de silenciamento para operações noturnas, respeitando a vizinhança e as leis de zoneamento local. Seja na Rua Principal ou em vilas mais afastadas de {formattedName}, nosso compromisso é a solução definitiva em menos de 1 hora.
                </p>
              </article>

              <article>
                <h2 className="text-2xl font-bold text-dark mb-6">Processos Técnicos: Do Diagnóstico ao Hidrojateamento</h2>
                <p>
                  Ao solicitar nossa visita em {formattedName}, você recebe um diagnóstico completo. Utilizamos tecnologia de <strong>Sondagem Eletrônica</strong> para localizar o ponto exato da obstrução sem precisar quebrar pisos. Em {formattedName}, este método "Não Destrutivo" é o mais solicitado, pois economiza tempo e dinheiro do cliente final.
                </p>
                <ul className="list-disc pl-6 mt-6 space-y-3 font-medium">
                  <li><strong>Desobstrução de Esgoto em {formattedName}:</strong> Remoção de detritos sólidos e lodo orgânico.</li>
                  <li><strong>Limpeza de Fossa em {formattedName}:</strong> Sucção via caminhão vácuo com descarte certificado.</li>
                  <li><strong>Manutenção de Caixa de Gordura:</strong> Preventiva para comércios e restaurantes de {formattedName}.</li>
                  <li><strong>Vídeo Inspeção:</strong> Câmeras de alta definição para conferência pós-serviço.</li>
                </ul>
              </article>

              {/* Bloco de "Autoridade Regional" */}
              <div className="border-t-4 border-primary pt-10">
                <h4 className="text-xl font-bold text-dark mb-4">Curiosidades e Desenvolvimento de {formattedName}</h4>
                <p className="text-sm italic text-gray-500">
                  Sabia que a rede de saneamento de {formattedName} é uma das mais monitoradas pela Sanepar devido ao seu papel no escoamento pluvial da bacia hidrográfica local? Isso reforça a necessidade de manutenções preventivas regulares para evitar que o lodo das caixas de gordura domésticas acabe sobrecarregando os canais coletores da região.
                </p>
              </div>
            </div>

            {/* Sidebar de Conversão */}
            <aside className="space-y-6">
              <div className="bg-red-600 text-white p-8 rounded-3xl shadow-2xl text-center space-y-4">
                <i className="fa fa-ambulance text-4xl animate-bounce"></i>
                <h3 className="text-2xl font-bold">Emergência {formattedName}</h3>
                <p className="text-sm opacity-90">Técnicos a postos em {formattedName}. Chegada rápida garantida!</p>
                <a href="tel:4133451194" className="block bg-white text-red-600 font-black py-4 rounded-xl text-xl hover:bg-gray-100 transition">
                  (41) 3345-1194
                </a>
              </div>

              <div className="bg-gray-100 p-8 rounded-3xl border border-gray-200">
                <h4 className="font-bold text-dark mb-4">Horários em {formattedName}</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex justify-between"><span>Segunda - Sexta:</span> <strong>24 Horas</strong></li>
                  <li className="flex justify-between"><span>Sábados:</span> <strong>24 Horas</strong></li>
                  <li className="flex justify-between"><span>Domingos:</span> <strong>24 Horas</strong></li>
                  <li className="flex justify-between text-red-600 font-bold"><span>Feriados:</span> <strong>Plantão 24h</strong></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
};

export default RegionPage;
