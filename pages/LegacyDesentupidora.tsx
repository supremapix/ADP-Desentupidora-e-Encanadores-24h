import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import { COMPANY_PHONE, COMPANY_WHATSAPP } from '../constants';

const LegacyDesentupidora: React.FC = () => {
  useEffect(() => {
    document.title = "ADP Desentupidora Curitiba - Site Atualizado | Atendimento 24h";
  }, []);

  return (
    <main className="bg-gray-50">
      {/* Alert Banner */}
      <div className="bg-yellow-100 border-b border-yellow-200 text-yellow-800 px-4 py-3 text-center">
        <p className="font-bold flex items-center justify-center gap-2">
          <i className="fa fa-info-circle"></i> Atenção: Você acessou um link antigo. Nosso site foi atualizado para melhor atendê-lo!
        </p>
      </div>

      {/* Hero Section Simplificada */}
      <section className="bg-dark text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 z-0"></div>
        <div className="relative z-10 container mx-auto max-w-4xl">
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Buscando Desentupidora em Curitiba?
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            A ADP modernizou sua estrutura. Continuamos oferecendo o melhor atendimento 24h com chegada em 40 minutos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://api.whatsapp.com/send?phone=${COMPANY_WHATSAPP}`} className="bg-[#25d366] hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
              <i className="fab fa-whatsapp text-xl"></i> Chamar no WhatsApp
            </a>
            <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
              <i className="fa fa-phone text-xl"></i> Ligar (41) 3345-1194
            </a>
          </div>
        </div>
      </section>

      {/* Serviços Rápidos Grid */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-center font-display text-2xl font-bold text-dark mb-10">Qual serviço você procura?</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Card 1 */}
          <Link to="/servicos/hidrojateamento" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 text-center group">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl group-hover:scale-110 transition-transform">
              <i className="fa fa-water"></i>
            </div>
            <h3 className="font-bold text-xl mb-2 group-hover:text-primary">Hidrojateamento</h3>
            <p className="text-gray-600 text-sm mb-4">Limpeza de alta pressão para esgotos e tubulações.</p>
            <span className="text-primary font-bold text-sm underline">Ver Detalhes</span>
          </Link>

          {/* Card 2 */}
          <Link to="/servicos/limpeza-de-fossa" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 text-center group">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl group-hover:scale-110 transition-transform">
              <i className="fa fa-truck"></i>
            </div>
            <h3 className="font-bold text-xl mb-2 group-hover:text-primary">Limpeza de Fossa</h3>
            <p className="text-gray-600 text-sm mb-4">Caminhões auto vácuo para fossas e caixas de gordura.</p>
            <span className="text-primary font-bold text-sm underline">Ver Detalhes</span>
          </Link>

          {/* Card 3 */}
          <Link to="/" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 text-center group">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl group-hover:scale-110 transition-transform">
              <i className="fa fa-home"></i>
            </div>
            <h3 className="font-bold text-xl mb-2 group-hover:text-primary">Página Inicial</h3>
            <p className="text-gray-600 text-sm mb-4">Conheça toda nossa estrutura e áreas de atendimento.</p>
            <span className="text-primary font-bold text-sm underline">Ir para Home</span>
          </Link>
        </div>
      </section>

      {/* Formulário Compacto */}
      <ContactForm />
    </main>
  );
};

export default LegacyDesentupidora;
