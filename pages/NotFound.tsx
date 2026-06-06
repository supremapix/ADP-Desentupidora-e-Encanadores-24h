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
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div className="flex flex-col items-center w-full sm:w-auto">
            <Link 
              to="/" 
              className="w-full sm:w-auto bg-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <i className="fa fa-home"></i> Home
            </Link>
            <p className="text-[10px] text-gray-400 mt-1.5 leading-tight">Retorne para a página inicial.</p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-auto">
            <a 
              href="https://api.whatsapp.com/send?phone=5541985171966" 
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
            <p className="text-[10px] text-gray-400 mt-1.5 leading-tight">Fale diretamente com nossa equipe.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;