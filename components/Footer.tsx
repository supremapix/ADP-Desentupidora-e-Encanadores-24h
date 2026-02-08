
import React from 'react';
import { Link } from 'react-router-dom';
// Added missing COMPANY_MOBILE to the import list from constants
import { COMPANY_PHONE, COMPANY_MOBILE, COMPANY_WHATSAPP, BAIRROS, COMPANY_EMAIL, COMPANY_SITE, CIDADES_RMC } from '../constants';
import AnimatedLogo from './AnimatedLogo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Branding */}
          <div className="space-y-6">
            <div className="w-24 h-24">
              <AnimatedLogo />
            </div>
            <h3 className="font-display text-2xl font-bold text-primary">ADP Curitiba</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialistas em saneamento e desentupimentos técnicos 24 horas. 
              Atendimento residencial, comercial e industrial em toda Curitiba e RMC.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-l-4 border-primary pl-3">Navegação</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Página Inicial</Link></li>
              <li><Link to="/#servicos" className="hover:text-primary transition-colors">Nossos Serviços</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">Dúvidas Frequentes</Link></li>
              <li><a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-primary transition-colors">{COMPANY_EMAIL}</a></li>
            </ul>
          </div>

          {/* Col 3: Cidades RMC */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-l-4 border-primary pl-3">Região Metropolitana</h4>
            <div className="grid grid-cols-2 gap-2 text-[10px] text-gray-500 uppercase tracking-tighter">
              {CIDADES_RMC.slice(0, 16).map(c => (
                <Link key={c} to={`/cidade/${c.toLowerCase().replace(/ /g, '-')}`} className="hover:text-white transition-colors">
                  Desentupidora {c}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4: Contato */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-l-4 border-primary pl-3">Emergência 24h</h4>
            <div className="space-y-4">
              <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="flex items-center gap-3 text-white hover:text-primary transition-all">
                <i className="fa fa-phone-alt text-primary"></i>
                <span className="font-black text-xl">{COMPANY_PHONE}</span>
              </a>
              <a href={`https://wa.me/${COMPANY_WHATSAPP}`} className="flex items-center gap-3 text-white hover:text-primary transition-all">
                <i className="fab fa-whatsapp text-green-500"></i>
                {/* Fixed reference to COMPANY_MOBILE by ensuring it is imported */}
                <span className="font-bold text-lg">{COMPANY_MOBILE}</span>
              </a>
              <p className="text-xs text-gray-500 italic">Chegada em até 40 minutos em qualquer ponto de Curitiba.</p>
            </div>
          </div>
        </div>

        {/* Full Sitemap Section (SEO Booster) */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <h5 className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em] mb-6 text-center">Índice de Bairros Atendidos</h5>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-2 text-[9px] text-gray-600 overflow-hidden h-32 hover:h-auto transition-all duration-500 bg-black/20 p-4 rounded-xl">
             {BAIRROS.map(b => (
               <Link key={b} to={`/bairro/${b.toLowerCase().replace(/ /g, '-')}`} className="hover:text-primary truncate">
                 {b}
               </Link>
             ))}
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; {currentYear} ADP Desentupidora | Todos os direitos reservados. <br/>
            Rua Luiz Maltaca, 36 - CIC, Curitiba/PR. <br/>
            URL Canônica: <Link to="/" className="hover:underline">{COMPANY_SITE}</Link>
          </p>
          
          <div className="flex items-center gap-4 text-xs text-gray-500 font-bold uppercase tracking-widest">
            <span>Desenvolvido com</span>
            <div className="relative flex items-center justify-center">
              <i className="fa fa-heart text-red-600 text-3xl animate-[pulse_1s_infinite]"></i>
            </div>
            <span>por</span>
            <a href="https://supremamidia.com.br" target="_blank" rel="noreferrer" className="text-white hover:text-primary transition-colors flex items-center gap-2">
               Suprema Mídia <i className="fa fa-external-link-alt text-[10px]"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
