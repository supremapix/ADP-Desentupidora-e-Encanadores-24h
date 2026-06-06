
import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import VideoSection from '../components/VideoSection';
import EnhancedSEO from '../components/EnhancedSEO';

const ServiceHydrojetting: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Hidrojateamento de Alta Pressão",
    "name": "Serviço de Hidrojateamento Curitiba",
    "description": "Limpeza técnica profunda, desobstrução de encanamentos comerciais, industriais e de redes coletoras de esgoto com hidrojateamento de alta pressão.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "ADP Desentupidora",
      "telephone": "+55-41-3345-1194"
    }
  };

  return (
    <main>
      <EnhancedSEO 
        title="Hidrojateamento Curitiba 24h | Desentupimento de Alta Pressão"
        description="Equipamentos industriais táticos de hidrojateamento para redes de esgoto, galerias pluviais e colunas prediais. Atendimento 24h em Curitiba e Região."
        path="/servicos/hidrojateamento"
        structuredData={schemaData}
      />
      <section className="bg-primary text-white py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold">Hidrojateamento Profissional</h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto opacity-90">A solução mais potente do mercado para desobstrução técnica e limpeza de galerias industriais e residenciais.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-3xl font-bold text-dark border-b-4 border-primary pb-4">A Ciência por Trás da Alta Pressão</h2>
            <p>
              O hidrojateamento não é apenas "jogar água no cano". É um processo de engenharia que utiliza a energia cinética de jatos de água pressurizada. Nossos equipamentos operam com pressões que variam de 5.000 a 25.000 PSI (Pound-force per square inch). Para se ter uma ideia, uma mangueira de jardim comum opera a cerca de 40 PSI. 
            </p>
            <p>
              Essa força colossal, quando canalizada através de bicos de aço inoxidável com furos calculados a laser, é capaz de cortar raízes de árvores, pulverizar concreto acumulado (resto de obra) e dissolver placas de gordura petrificada que nenhuma máquina rotativa conseguiria remover.
            </p>

            <div className="bg-slate-900 text-white p-10 rounded-3xl my-12 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <i className="fa fa-tachometer-alt text-4xl text-primary mb-4"></i>
                <h4 className="font-bold">25.000 PSI</h4>
                <p className="text-xs opacity-70">Pressão máxima para serviços industriais pesados.</p>
              </div>
              <div className="text-center">
                <i className="fa fa-truck-monster text-4xl text-primary mb-4"></i>
                <h4 className="font-bold">Caminhão Combinado</h4>
                <p className="text-xs opacity-70">Tanques de água e vácuo integrados.</p>
              </div>
              <div className="text-center">
                <i className="fa fa-leaf text-4xl text-primary mb-4"></i>
                <h4 className="font-bold">100% Ecológico</h4>
                <p className="text-xs opacity-70">Sem uso de químicos abrasivos.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-dark mt-12">Aplicações Típicas do Hidrojateamento em Curitiba</h3>
            <p>
              Curitiba, sendo uma cidade com grande parque industrial e muitos condomínios de alto padrão, exige serviços de hidrojateamento em diversas frentes:
            </p>
            <ul className="space-y-4 mt-6">
              <li><strong>Redes de Esgoto Condominiais:</strong> Limpeza das prumadas (colunas verticais) para evitar transbordamentos nos apartamentos do térreo.</li>
              <li><strong>Galerias Pluviais Industriais:</strong> Manutenção de calhas e condutores de grande diâmetro em galpões industriais no CIC.</li>
              <li><strong>Caixas de Gordura de Restaurantes:</strong> Limpeza profunda que remove o biofilme bacteriano, eliminando o mau cheiro definitivamente.</li>
              <li><strong>Desobstrução de Tubos Resto de Obra:</strong> Remoção de cimento e argamassa que caíram acidentalmente na rede durante a construção.</li>
            </ul>

            <h3 className="text-2xl font-bold text-dark mt-12">Vantagens: Por que investir no Hidrojato?</h3>
            <p>
              Muitos clientes optam pela máquina rotativa pelo preço inicial mais baixo. No entanto, o hidrojateamento é um investimento em <strong>manutenção duradoura</strong>. Enquanto a mola da máquina apenas abre um caminho no meio da gordura, o hidrojato deixa o cano "como novo". Isso estende o prazo da próxima manutenção em até 3 vezes, gerando uma economia real a longo prazo.
            </p>
            <p>
              Além disso, o hidrojateamento é o método mais seguro para a integridade física das tubulações. Como utiliza apenas água, não há o atrito metálico das molas que pode, em canos de barro ou PVC ressecado, causar rachaduras e infiltrações futuras.
            </p>
          </div>
        </div>
      </section>

      <VideoSection locationName="Hidrojateamento" />
      <ContactForm />
    </main>
  );
};

export default ServiceHydrojetting;
