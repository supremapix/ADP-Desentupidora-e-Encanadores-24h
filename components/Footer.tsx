
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_PHONE, COMPANY_WHATSAPP, BAIRROS, COMPANY_EMAIL, COMPANY_SITE, CIDADES_RMC } from '../constants';
import AnimatedLogo from './AnimatedLogo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-24 pb-12 overflow-hidden relative border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Col */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20"><AnimatedLogo /></div>
              <div>
                <h3 className="font-display font-black text-2xl uppercase tracking-tighter">ADP <span className="text-primary">Curitiba</span></h3>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Saneamento Técnico</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Liderança em desentupimentos técnicos e saneamento em Curitiba. 
              Tecnologia industrial aplicada para resolver emergências residenciais com precisão.
            </p>
            <div className="flex gap-4">
              {['facebook-f', 'instagram', 'linkedin-in', 'google'].map(icon => (
                <a key={icon} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all">
                  <i className={`fab fa-${icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Links Col */}
          <div className="space-y-8">
            <h4 className="text-lg font-bold border-l-4 border-primary pl-4 uppercase tracking-tighter">Serviços</h4>
            <ul className="space-y-3">
              <li><Link to="/servicos/hidrojateamento" className="text-sm text-gray-500 hover:text-primary transition-all flex items-center gap-2">Hidrojateamento</Link></li>
              <li><Link to="/servicos/limpeza-de-fossa" className="text-sm text-gray-500 hover:text-primary transition-all flex items-center gap-2">Limpeza de Fossa</Link></li>
              <li><Link to="/faq" className="text-sm text-gray-500 hover:text-primary transition-all flex items-center gap-2">Dúvidas Frequentes</Link></li>
              <li><Link to="/" className="text-sm text-gray-500 hover:text-primary transition-all flex items-center gap-2">Home</Link></li>
            </ul>
          </div>

          {/* Coverage Col */}
          <div className="space-y-8">
            <h4 className="text-lg font-bold border-l-4 border-primary pl-4 uppercase tracking-tighter">Áreas Atendidas</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <Link to="/cidade/curitiba" className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline">Curitiba</Link>
              <Link to="/cidade/sao-jose-dos-pinhais" className="text-[10px] font-bold text-gray-500 uppercase tracking-widest hover:text-primary">S. J. Pinhais</Link>
              <Link to="/cidade/colombo" className="text-[10px] font-bold text-gray-500 uppercase tracking-widest hover:text-primary">Colombo</Link>
              <Link to="/cidade/araucaria" className="text-[10px] font-bold text-gray-500 uppercase tracking-widest hover:text-primary">Araucária</Link>
              <Link to="/cidade/pinhais" className="text-[10px] font-bold text-gray-500 uppercase tracking-widest hover:text-primary">Pinhais</Link>
              <Link to="/#sitemap" className="text-[10px] font-bold text-gray-600 uppercase tracking-widest hover:text-primary">Ver Todos...</Link>
            </div>
          </div>

          {/* Contact Col */}
          <div className="space-y-8 bg-white/5 p-8 rounded-[2rem] border border-white/10 shadow-inner">
            <h4 className="text-lg font-bold text-primary uppercase tracking-tighter text-center">Fale Conosco</h4>
            <div className="space-y-6">
              <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="flex flex-col items-center group">
                <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg shadow-red-600/20 mb-3">
                  <i className="fa fa-phone-alt text-lg text-white"></i>
                </div>
                <p className="text-xl font-black text-white">{COMPANY_PHONE}</p>
              </a>
              <div className="pt-6 border-t border-white/10 flex justify-center gap-4 text-xl text-gray-600">
                <i className="fab fa-cc-visa"></i>
                <i className="fab fa-cc-mastercard"></i>
                <i className="fa fa-qrcode" title="PIX"></i>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom / Sitemap Generator */}
        <div id="sitemap" className="pt-16 border-t border-white/5 space-y-12">
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <p className="col-span-full text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em] mb-4">Sitemap: Localidades Atendidas</p>
              {BAIRROS.slice(0, 36).map(b => (
                <Link key={b} to={`/bairro/${b.toLowerCase().replace(/ /g, '-')}`} className="text-[9px] text-gray-600 hover:text-primary transition-colors truncate">
                  Desentupidora {b}
                </Link>
              ))}
              {CIDADES_RMC.map(c => (
                <Link key={c} to={`/cidade/${c.toLowerCase().replace(/ /g, '-')}`} className="text-[9px] text-primary/70 hover:text-primary transition-colors font-bold uppercase">
                  {c}
                </Link>
              ))}
           </div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
            <div className="text-center lg:text-left space-y-2">
              <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
                &copy; {currentYear} ADP Desentupidora. Todos os direitos reservados. 
                Rua Luiz Maltaca, 36 - CIC, Curitiba/PR. {COMPANY_SITE}
              </p>
              <p className="text-[10px] text-gray-600 uppercase tracking-widest">
                Certificações: Sanepar n. 293.102/PR | Alvará Ambiental n. 14.502.810/0001-20
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest group">
               <span>Desenvolvido com</span>
               <div className="relative">
                 <i className="fa fa-heart text-4xl text-red-600 animate-[pulse_1.5s_infinite]"></i>
               </div>
               <span>por</span>
               <a href="#" className="flex items-center gap-2 group hover:text-white transition-colors">
                 <span className="text-primary font-black text-sm">Suprema Mídia</span>
                 <i className="fa fa-external-link-alt text-primary/50"></i>
               </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
