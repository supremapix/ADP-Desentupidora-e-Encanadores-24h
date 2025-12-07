import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_PHONE, COMPANY_WHATSAPP } from '../constants';
import AnimatedLogo from './AnimatedLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
           {/* Links */}
           <div className="text-center md:text-left">
              <h3 className="font-display text-xl font-bold mb-4 text-primary">Navegação</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="hover:text-primary transition-all duration-300 flex items-center justify-center md:justify-start gap-2 group">
                    <i className="fa fa-home transition-transform group-hover:scale-110"></i> Home
                  </Link>
                </li>
                <li>
                  <a href={`https://api.whatsapp.com/send?phone=${COMPANY_WHATSAPP}`} className="hover:text-primary transition-all duration-300 flex items-center justify-center md:justify-start gap-2 group">
                    <i className="fab fa-whatsapp transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 text-green-500"></i> WhatsApp
                  </a>
                </li>
                <li>
                  <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="hover:text-primary transition-all duration-300 flex items-center justify-center md:justify-start gap-2 group">
                    <i className="fa fa-phone transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"></i> {COMPANY_PHONE}
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-primary transition-all duration-300 flex items-center justify-center md:justify-start gap-2 group">
                    <i className="fa fa-envelope transition-transform group-hover:scale-110"></i> Contato
                  </a>
                </li>
              </ul>
           </div>

           {/* Info */}
           <div className="col-span-1 lg:col-span-2">
             <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-4">
               <div className="flex-shrink-0">
                 <AnimatedLogo />
               </div>
               <div>
                 <h3 className="font-display text-xl font-bold mb-2 text-primary text-center md:text-left">ADP Curitiba - Desentupidora e Encanadores</h3>
                 <p className="text-gray-300 text-sm leading-relaxed text-center md:text-left">
                   Desentupidora 24h em Curitiba e região: Especializada em limpeza de fossas, desobstrução de esgoto, vasos sanitários, caixa de gordura, pias, tanques, ralos, mictórios, colunas e plumadas. Realizamos hidrojateamento, limpeza de caixas de passagem e caixa negra. Atendimento emergencial 24 horas! <strong>Aceitamos cartões de crédito e débito.</strong>
                 </p>
               </div>
             </div>
             
             <p className="text-gray-300 text-sm leading-relaxed text-center md:text-left">
               Com mais de 25 anos de experiência, oferecemos soluções rápidas e eficientes para desentupimentos e serviços de manutenção. Atendemos com excelência em Curitiba e região metropolitana.
             </p>
           </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="flex items-center justify-center gap-1 text-sm text-gray-400">
            Desenvolvido 
            <span className="text-red-500 text-xl animate-pulse cursor-pointer hover:scale-125 transition-transform">❤️</span> 
            por 
            <a href="https://supremasite.com.br" target="_blank" rel="noreferrer" className="text-primary font-bold hover:underline hover:text-teal-400 transition-colors">
              Suprema Sites Express
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;