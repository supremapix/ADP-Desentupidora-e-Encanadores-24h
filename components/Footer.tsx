
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
    <footer className="bg-slate-900 text-slate-100 pt-16 pb-8 border-t border-slate-800">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* COLUNA 1: ADP Desentupidora & Endereço Real */}
          <div className="space-y-4">
            <div className="h-12 w-auto flex items-center">
              <AnimatedLogo />
            </div>
            <div>
              <h3 className="font-display text-lg font-extrabold text-white uppercase tracking-tight">ADP Desentupidora</h3>
              <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                ADP Saneamento e Limpeza Técnica. Atendimento especializado 24 horas com sede própria no CIC em Curitiba.
              </p>
            </div>
            
            <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
              <p className="flex items-start gap-2">
                <i className="fa fa-map-marker-alt text-red-500 mt-0.5 shrink-0"></i>
                <span>Rua Luiz Maltaca, 36 - CIC, Curitiba/PR - CEP 81250-130</span>
              </p>
              <p className="flex items-center gap-2">
                <i className="fa fa-phone-alt text-slate-400 shrink-0"></i>
                <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="hover:text-white transition-colors">{COMPANY_PHONE}</a>
              </p>
              <p className="flex items-center gap-2">
                <i className="fab fa-whatsapp text-emerald-500 shrink-0"></i>
                <a href={`https://wa.me/${COMPANY_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{COMPANY_MOBILE}</a>
              </p>
              <p className="flex items-center gap-2">
                <i className="fa fa-envelope text-slate-400 shrink-0"></i>
                <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-white transition-colors">{COMPANY_EMAIL}</a>
              </p>
            </div>
          </div>

          {/* COLUNA 2: Principais Serviços */}
          <div>
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-red-500 mb-4 pb-2 border-b border-slate-800">
              Principais Serviços
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link to="/servicos/desentupimento-de-esgoto" className="hover:text-white transition-colors">Desentupimento de Esgoto</Link></li>
              <li><Link to="/servicos/desentupimento-de-pia" className="hover:text-white transition-colors">Desentupimento de Pia</Link></li>
              <li><Link to="/servicos/desentupimento-de-ralo" className="hover:text-white transition-colors">Desentupimento de Ralo</Link></li>
              <li><Link to="/servicos/desentupimento-de-vaso" className="hover:text-white transition-colors">Desentupimento de Vaso Sanitário</Link></li>
              <li><Link to="/servicos/limpeza-de-caixa-de-gordura" className="hover:text-white transition-colors">Limpeza de Caixa de Gordura</Link></li>
              <li><Link to="/servicos/hidrojateamento" className="hover:text-white transition-colors">Hidrojateamento Técnico</Link></li>
              <li><Link to="/servicos/limpeza-de-fossa" className="hover:text-white transition-colors">Limpeza de Fossa Séptica</Link></li>
              <li><Link to="/servicos/video-inspecao" className="hover:text-white transition-colors">Vídeo Inspeção de Tubulações</Link></li>
            </ul>
          </div>

          {/* COLUNA 3: Navegação */}
          <div>
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-white mb-4 pb-2 border-b border-slate-800">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><a href="/#empresa" className="hover:text-white transition-colors">Empresa</a></li>
              <li><a href="/#areas-atendidas" className="hover:text-white transition-colors">Áreas Atendidas</a></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ / Dúvidas</Link></li>
              <li><a href="/#contato" className="hover:text-white transition-colors">Contato</a></li>
              <li><Link to="/mapa-do-site" className="hover:text-white transition-colors">Mapa do Site</Link></li>
              <li><Link to="/glossario" className="hover:text-white transition-colors">Glossário SEO</Link></li>
            </ul>
          </div>

          {/* COLUNA 4: Atendimento */}
          <div>
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-emerald-400 mb-4 pb-2 border-b border-slate-800">
              Plantão e Cobertura
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Atendimento 24 horas em Curitiba e Região Metropolitana. Equipes técnicas equipadas para residências, comércios, condomínios e indústrias.
            </p>
            <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700/60 text-xs text-slate-300 space-y-1">
              <span className="font-extrabold text-white block uppercase tracking-wide">Base Principal:</span>
              <p>CIC (Cidade Industrial de Curitiba) - Atendimento rápido para toda a RMC.</p>
            </div>
          </div>
        </div>

        {/* Links de Bairros (Sitemap discreto e sanfonado) */}
        <div className="border-t border-slate-800 pt-6 mt-6">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-3">Atendimento em Bairros de Curitiba</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-3 gap-y-1 text-[10px] text-slate-400">
             {BAIRROS.map(b => (
               <Link key={b} to={`/bairro/${slugify(b)}`} className="hover:text-white truncate transition-colors">
                 {b}
               </Link>
             ))}
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col items-center gap-4 text-xs text-slate-400">
          <p className="text-center font-medium">
            &copy; {currentYear} ADP Desentupidora Curitiba - Sede própria no CIC • Todos os direitos reservados.
          </p>
          <SupremaCredit />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
