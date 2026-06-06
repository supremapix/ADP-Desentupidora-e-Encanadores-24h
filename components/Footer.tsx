
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_PHONE, COMPANY_MOBILE, COMPANY_WHATSAPP, BAIRROS, COMPANY_EMAIL, COMPANY_SITE, CIDADES_RMC, slugify } from '../constants';
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
              width={63}
              height={18}
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
    <footer className="bg-dark text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Branding */}
          <div className="space-y-6">
            <div className="h-16 w-auto flex items-start">
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
              <li><Link to="/mapa-do-site" className="text-secondary font-bold hover:text-primary transition-colors">Mapa do Site</Link></li>
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
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col items-center gap-4 text-[11px] text-gray-400 font-bold uppercase">
          <p className="text-center">
            &copy; {currentYear} ADP Desentupidora Curitiba 24h | Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 text-[10px] text-gray-500 font-bold text-center mt-1">
            <Link to="/mapa-do-site" className="hover:text-primary transition-colors text-sky-400 hover:underline uppercase">Mapa do Site</Link>
            <span className="text-gray-700">|</span>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:underline uppercase">Sitemap XML</a>
            <span className="text-gray-700">|</span>
            <Link to="/glossario" className="hover:text-primary transition-colors hover:underline uppercase">Glossário SEO</Link>
          </div>
          <SupremaCredit />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
