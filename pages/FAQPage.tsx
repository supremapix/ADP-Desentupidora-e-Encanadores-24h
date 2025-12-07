import React, { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm';

const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openSection, setOpenSection] = useState<string | null>('geral');
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Perguntas Frequentes (FAQ) - ADP Desentupidora";
    window.scrollTo(0, 0);
  }, []);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = {
    geral: {
      title: "Dúvidas Gerais e Atendimento",
      questions: [
        { q: "A ADP atende todos os bairros de Curitiba?", a: "Sim! Atendemos todos os 75 bairros de Curitiba, com foco especial e bases operacionais na Cidade Industrial (CIC), Sítio Cercado, Cajuru, Boqueirão, Portão e Santa Felicidade para atendimento rápido." },
        { q: "Vocês atendem Região Metropolitana?", a: "Sim, atendemos toda a RMC, incluindo São José dos Pinhais, Araucária, Pinhais, Colombo, Campo Largo, Fazenda Rio Grande e Almirante Tamandaré." },
        { q: "Qual o horário de funcionamento?", a: "Funcionamos 24 horas por dia, 7 dias por semana, inclusive sábados, domingos e feriados. Temos equipes de plantão noturno prontas para emergências." },
        { q: "Cobram taxa de visita?", a: "Não cobramos taxa de visita para Curitiba e região próxima. O técnico vai até o local, avalia o problema e passa o orçamento sem compromisso." },
        { q: "Quais as formas de pagamento?", a: "Aceitamos dinheiro, PIX, cartões de débito e crédito (com parcelamento, consulte condições) e boleto para empresas cadastradas." },
      ]
    },
    desentupimento: {
      title: "Serviços de Desentupimento",
      questions: [
        { q: "Como é feito o orçamento de desentupimento?", a: "O orçamento exato só pode ser dado no local, pois depende da gravidade do entupimento, do equipamento necessário (máquina rotativa ou hidrojato) e da extensão da tubulação afetada. O técnico avalia na hora e informa o valor antes de começar." },
        { q: "Vocês quebram piso ou parede?", a: "Na grande maioria dos casos (98%), NÃO precisamos quebrar nada. Utilizamos equipamentos modernos que entram pela tubulação existente. Quebras só são necessárias se o cano estiver arriado ou quebrado no subsolo." },
        { q: "Desentupir com máquina rotativa ou hidrojato?", a: "Depende. A máquina rotativa (Roto-Rooter) é ideal para desobstruções de objetos sólidos e raízes em diâmetros menores. O hidrojateamento é indicado para limpeza profunda, remoção de gordura e tubulações maiores ou muito extensas." },
        { q: "Qual a garantia do serviço?", a: "Oferecemos garantia por escrito para todos os serviços de desentupimento. O prazo varia de 30 a 90 dias, conforme o tipo de serviço contratado." },
      ]
    },
    fossa: {
      title: "Limpeza de Fossa e Caixa de Gordura",
      questions: [
        { q: "Como sei que a fossa está cheia?", a: "Sinais comuns incluem: mau cheiro no quintal ou ralos, retorno de esgoto pelo vaso sanitário, escoamento lento da água e grama muito verde ou terra úmida sobre a fossa." },
        { q: "Vocês fornecem certificado de limpeza?", a: "Sim. Para empresas e comércios, emitimos o Certificado de Destinação de Efluentes e Laudo Técnico exigidos pela Sanepar e Vigilância Sanitária." },
        { q: "O caminhão consegue entrar na minha casa?", a: "Temos caminhões de diversos tamanhos, inclusive modelos compactos para locais de difícil acesso ou ruas estreitas. Nossas mangueiras alcançam longas distâncias se necessário." },
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
          <h1 className="font-display text-4xl font-bold mb-4 animate-fade-in-up">Central de Ajuda e Dúvidas</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Encontre respostas rápidas para as perguntas mais comuns sobre nossos serviços de desentupimento e manutenção.
          </p>
          
          {/* Search Box */}
          <div className="max-w-xl mx-auto mt-8 relative">
            <input 
              type="text" 
              placeholder="Digite sua dúvida (ex: preço, visita, fossa)..." 
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
                    <p className="text-gray-600">{item.a}</p>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 py-8">Nenhuma resposta encontrada para "{searchTerm}".</p>
              )}
            </div>
          ) : (
            <div className="space-y-8">
              {Object.entries(faqData).map(([key, section]) => (
                <div key={key} className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm">
                  <h2 className="font-display text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                    {key === 'geral' && <i className="fa fa-info-circle"></i>}
                    {key === 'desentupimento' && <i className="fa fa-wrench"></i>}
                    {key === 'fossa' && <i className="fa fa-truck"></i>}
                    {section.title}
                  </h2>
                  <div className="space-y-3">
                    {section.questions.map((q, idx) => (
                      <div key={idx} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                        <button 
                          onClick={() => toggleQuestion(Number(`${key.length}${idx}`))} // Simple unique ID hack for UI state
                          className="w-full text-left p-4 font-bold text-gray-800 flex justify-between items-center hover:bg-gray-50 transition"
                        >
                          {q.q}
                          <i className={`fa fa-chevron-down transition-transform duration-300 text-primary ${openQuestion === Number(`${key.length}${idx}`) ? 'rotate-180' : ''}`}></i>
                        </button>
                        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openQuestion === Number(`${key.length}${idx}`) ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="p-4 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
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

      <ContactForm />
    </main>
  );
};

export default FAQPage;