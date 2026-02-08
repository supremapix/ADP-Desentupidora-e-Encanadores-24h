
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_PHONE, COMPANY_WHATSAPP, BAIRROS, COMPANY_EMAIL, COMPANY_SITE } from '../constants';
import AnimatedLogo from './AnimatedLogo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-24 pb-12 overflow-hidden relative border-t border-white/5">
      {/* Decorative Accent */}
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
              Com mais de 25 anos de experiência, a ADP Desentupidora é líder em soluções hidráulicas em Curitiba, 
              combinando tecnologia industrial com atendimento imediato e transparente.
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
            <h4 className="text-lg font-bold border-l-4 border-primary pl-4 uppercase tracking-tighter">Navegação Rápida</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sm text-gray-500 hover:text-primary transition-all flex items-center gap-2"><i className="fa fa-chevron-right text-[10px]"></i> Home</Link></li>
              <li><Link to="/servicos/hidrojateamento" className="text-sm text-gray-500 hover:text-primary transition-all flex items-center gap-2"><i className="fa fa-chevron-right text-[10px]"></i> Hidrojateamento</Link></li>
              <li><Link to="/servicos/limpeza-de-fossa" className="text-sm text-gray-500 hover:text-primary transition-all flex items-center gap-2"><i className="fa fa-chevron-right text-[10px]"></i> Limpeza de Fossa</Link></li>
              <li><Link to="/faq" className="text-sm text-gray-500 hover:text-primary transition-all flex items-center gap-2"><i className="fa fa-chevron-right text-[10px]"></i> Perguntas Frequentes</Link></li>
              <li><a href={COMPANY_SITE} className="text-sm text-gray-500 hover:text-primary transition-all flex items-center gap-2"><i className="fa fa-external-link-alt text-[10px]"></i> Site Oficial</a></li>
            </ul>
          </div>

          {/* Coverage Col */}
          <div className="space-y-8">
            <h4 className="text-lg font-bold border-l-4 border-primary pl-4 uppercase tracking-tighter">Atendimento</h4>
            <div className="grid grid-cols-2 gap-2">
              {BAIRROS.slice(0, 10).map(b => (
                <Link key={b} to={`/bairro/${b.toLowerCase().replace(/ /g, '-')}`} className="text-[10px] font-bold text-gray-600 hover:text-primary uppercase tracking-widest truncate">
                  {b}
                </Link>
              ))}
            </div>
            <div className="pt-6 border-t border-white/5">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-4">Pagamento Facilitado</p>
              <div className="flex gap-4 text-2xl text-gray-600">
                <i className="fab fa-cc-visa"></i>
                <i className="fab fa-cc-mastercard"></i>
                <i className="fa fa-qrcode" title="PIX"></i>
                <i className="fa fa-file-invoice-dollar" title="Boleto"></i>
              </div>
            </div>
          </div>

          {/* Contact Col */}
          <div className="space-y-8 bg-white/5 p-8 rounded-[2rem] border border-white/10 shadow-inner">
            <h4 className="text-lg font-bold text-primary uppercase tracking-tighter text-center">Contatos 24h</h4>
            <div className="space-y-6">
              <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="flex flex-col items-center group">
                <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg shadow-red-600/20 mb-3">
                  <i className="fa fa-phone-alt text-xl text-white"></i>
                </div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Central Curitiba</p>
                <p className="text-xl font-black text-white">{COMPANY_PHONE}</p>
              </a>
              <a href={`mailto:${COMPANY_EMAIL}`} className="flex flex-col items-center group">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center group-hover:-rotate-6 transition-transform shadow-lg shadow-primary/20 mb-3">
                  <i className="fa fa-envelope text-xl text-white"></i>
                </div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">E-mail Comercial</p>
                <p className="text-xs font-bold text-gray-300 lowercase">{COMPANY_EMAIL}</p>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left space-y-2">
            <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
              &copy; {currentYear} ADP Desentupidora. Todos os direitos reservados. CNPJ: 14.502.810/0001-20. 
              Alvará Sanepar n. 293.102/PR.
            </p>
            <p className="text-[10px] text-gray-600 uppercase tracking-widest">
              Rua Luiz Maltaca, 36 - CIC, Curitiba/PR. {COMPANY_SITE}
            </p>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
             <span>Desenvolvido por</span>
             <a href="https://supremasite.com.br" target="_blank" rel="noreferrer" className="flex items-center gap-2 group hover:text-white transition-colors">
               <span className="text-primary font-black">Suprema Sites</span>
               <i className="fa fa-external-link-alt text-primary/50"></i>
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
