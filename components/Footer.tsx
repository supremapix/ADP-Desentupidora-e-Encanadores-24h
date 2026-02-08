
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_PHONE, COMPANY_MOBILE, COMPANY_WHATSAPP, BAIRROS, COMPANY_EMAIL, COMPANY_SITE, CIDADES_RMC, slugify } from '../constants';
import AnimatedLogo from './AnimatedLogo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Branding */}
          <div className="space-y-6">
            <div className="w-20 h-20">
              <AnimatedLogo />
            </div>
            <h3 className="font-display text-2xl font-bold text-primary uppercase">ADP Saneamento</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Especialistas em saneamento e desentupimentos técnicos 24 horas. 
              Atendimento residencial, comercial e industrial em toda Curitiba e RMC.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-primary">Navegação</h4>
            <ul className="space-y-3 text-gray-400 text-sm font-medium">
              <li><Link to="/" className="hover:text-primary transition-colors">Página Inicial</Link></li>
              <li><Link to="/servicos/hidrojateamento" className="hover:text-primary transition-colors">Hidrojateamento</Link></li>
              <li><Link to="/servicos/limpeza-de-fossa" className="hover:text-primary transition-colors">Limpeza de Fossa</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">Dúvidas Frequentes</Link></li>
            </ul>
          </div>

          {/* Col 3: Cidades RMC */}
          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-primary">Região Metropolitana</h4>
            <div className="grid grid-cols-2 gap-2 text-[10px] text-gray-500 uppercase font-bold">
              {CIDADES_RMC.slice(0, 14).map(c => (
                <Link key={c} to={`/cidade/${slugify(c)}`} className="hover:text-white transition-colors">
                  {c}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4: Contato */}
          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-primary">Emergência 24h</h4>
            <div className="space-y-4">
              <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="flex items-center gap-3 text-white hover:text-primary transition-all">
                <i className="fa fa-phone-alt text-primary"></i>
                <span className="font-black text-xl">{COMPANY_PHONE}</span>
              </a>
              <a href={`https://wa.me/${COMPANY_WHATSAPP}`} className="flex items-center gap-3 text-white hover:text-primary transition-all">
                <i className="fab fa-whatsapp text-green-500"></i>
                <span className="font-bold text-lg">{COMPANY_MOBILE}</span>
              </a>
              <p className="text-[10px] text-gray-500 italic uppercase">Plantão no CIC e toda Curitiba.</p>
            </div>
          </div>
        </div>

        {/* Sitemap Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <h5 className="text-[9px] font-bold text-gray-600 uppercase tracking-widest mb-4">Áreas de Atendimento (Bairros)</h5>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-x-4 gap-y-1 text-[9px] text-gray-600">
             {BAIRROS.map(b => (
               <Link key={b} to={`/bairro/${slugify(b)}`} className="hover:text-primary truncate">
                 {b}
               </Link>
             ))}
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 font-bold uppercase">
          <p>
            &copy; {currentYear} ADP Desentupidora | Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span>Desenvolvido por</span>
            <a href="https://supremamidia.com.br" target="_blank" rel="noreferrer" className="text-white hover:text-primary transition-colors">
               Suprema Mídia
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
