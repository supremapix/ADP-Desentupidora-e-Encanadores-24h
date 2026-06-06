import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_PHONE, COMPANY_WHATSAPP } from '../constants';
import AnimatedLogo from './AnimatedLogo';
import { Heart } from 'lucide-react';

export function SupremaCredit() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-4 border-t border-slate-800/50 flex justify-center items-center">
      <div className="bg-slate-950/70 border border-slate-800/80 rounded-full px-6 py-2.5 shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]">
        <p className="text-slate-200 hover:text-white transition-colors duration-200 text-sm sm:text-base font-bold flex flex-wrap items-center justify-center gap-2">
          <span className="opacity-90">Desenvolvido com</span> 
          
          {/* Coração pulsante com efeito de sombra */}
          <Heart 
            size={14} 
            className="text-red-500 animate-[pulse_1.5s_infinite] shrink-0 filter drop-shadow-[0_0_3px_rgba(239,68,68,0.7)]" 
          /> 
          
          <span className="opacity-90">por</span>
          
          {/* Link para o site da Suprema */}
          <a 
            id="developer-suprema-link"
            href="https://supremasite.com.br" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-yellow-400 hover:text-yellow-300 transition-all font-black inline-flex items-center gap-2 cursor-pointer border-b border-dashed border-yellow-400/50 hover:border-yellow-300"
          >
            Suprema Sites Express
            
            {/* Logotipo oficial com efeito de iluminação */}
            <img 
              src="https://img.supremamidia.com/suprema-img.png" 
              alt="Suprema" 
              className="h-[18px] w-auto inline select-none shrink-0 filter drop-shadow-[0_0_2px_rgba(250,204,21,0.5)] transition-transform duration-300 hover:scale-110" 
              referrerPolicy="no-referrer"
            />
          </a>
        </p>
      </div>
    </div>
  );
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

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
                    <i className="fab fa-whatsapp transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[10deg] text-green-500"></i> WhatsApp <span className="text-[10px] bg-green-600 text-white px-1 rounded animate-pulse ml-1">Online</span>
                  </a>
                </li>
                <li>
                  <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="hover:text-primary transition-all duration-300 flex items-center justify-center md:justify-start gap-2 group">
                    <i className="fa fa-phone transition-transform duration-300 group-hover:animate-pulse"></i> {COMPANY_PHONE} <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse ml-1 inline-block"></span>
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-primary transition-all duration-300 flex items-center justify-center md:justify-start gap-2 group">
                    <i className="fa fa-envelope transition-transform group-hover:scale-110"></i> Contato
                  </a>
                </li>
                <li>
                  <Link to="/glossario" className="hover:text-primary transition-all duration-300 flex items-center justify-center md:justify-start gap-2 group">
                    <i className="fa fa-book transition-transform group-hover:scale-110 text-primary"></i> Glossário SEO
                  </Link>
                </li>
                <li>
                  <a href="/sitemap.xml" target="_blank" className="hover:text-primary transition-all duration-300 flex items-center justify-center md:justify-start gap-2 group text-xs text-gray-400">
                    <i className="fa fa-sitemap"></i> Mapa do Site (Sitemap)
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
        <div className="border-t border-gray-700 pt-8 text-center space-y-4">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} ADP Desentupidora Curitiba 24h | Todos os direitos reservados.
          </p>
          <SupremaCredit />
        </div>
      </div>
    </footer>
  );
};

export default Footer;