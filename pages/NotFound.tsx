import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = "Página Não Encontrada | ADP Desentupidora";
  }, []);

  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4 py-20">
      <div className="text-center max-w-lg">
        <div className="text-9xl font-bold text-gray-200 mb-4 font-display animate-pulse">404</div>
        <h1 className="text-3xl md:text-4xl font-bold text-dark mb-6">Página não encontrada</h1>
        <p className="text-gray-600 mb-8 text-lg">
          Desculpe, a página que você está procurando não existe ou foi movida. 
          Se você precisa de atendimento urgente, use os botões abaixo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="bg-primary hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:-translate-y-1"
          >
            <i className="fa fa-home mr-2"></i> Voltar para Home
          </Link>
          <a 
            href="https://api.whatsapp.com/send?phone=5541985171966" 
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:-translate-y-1"
          >
            <i className="fab fa-whatsapp mr-2"></i> Chamar no WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFound;