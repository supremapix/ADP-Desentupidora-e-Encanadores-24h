
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_PHONE, COMPANY_WHATSAPP, BAIRROS } from '../constants';
import AnimatedLogo from './AnimatedLogo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-24 pb-12 overflow-hidden relative border-t border-white/5">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Col 1: Brand Authority */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20"><AnimatedLogo /></div>
              <div>
                <h3 className="font-display font-black text-2xl uppercase tracking-tighter">ADP <span className="text-primary">Curitiba</span></h3>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Saneamento Técnico</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Com mais de duas décadas de liderança em Curitiba, a ADP Desentupidora combina tecnologia industrial e atendimento humanizado para resolver emergências sanitárias com precisão e garantia total.
            </p>
            <div className="flex gap-4">
              {['facebook-f', 'instagram', 'linkedin-in', 'google'].map(icon => (
                <a key={icon} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 transition-all text-sm">
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services Hub */}
          <div className="space-y-8">
            <h4 className="text-lg font-bold border-l-4 border-primary pl-4 uppercase tracking-tighter">Serviços Especializados</h4>
            <ul className="space-y-4">
              {[
                { label: 'Hidrojateamento Industrial', path: '/servicos/hidrojateamento' },
                { label: 'Limpeza de Fossas Sépticas', path: '/servicos/limpeza-de-fossa' },
                { label: 'Desentupimento de Esgoto', path: '/#servicos' },
                { label: 'Vídeo Inspeção Computorizada', path: '/#servicos' },
                { label: 'Manutenção Preventiva', path: '/#servicos' },
                { label: 'Dúvidas Frequentes', path: '/faq' }
              ].map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-gray-500 hover:text-primary hover:translate-x-2 flex items-center gap-2 transition-all">
                    <i className="fa fa-chevron-right text-[10px]"></i> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Coverage Area */}
          <div className="space-y-8">
            <h4 className="text-lg font-bold border-l-4 border-primary pl-4 uppercase tracking-tighter">Atendimento Regional</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {BAIRROS.slice(0, 10).map(b => (
                <Link key={b} to={`/bairro/${b.toLowerCase().replace(/ /g, '-')}`} className="text-[11px] font-bold text-gray-600 hover:text-primary uppercase tracking-widest truncate transition-colors">
                  {b}
                </Link>
              ))}
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
              <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-3">Certificações de Qualidade</p>
              <div className="flex gap-4 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <i className="fa fa-shield-virus text-2xl" title="Protocolos Sanitários"></i>
                <i className="fa fa-leaf text-2xl" title="Sustentabilidade"></i>
                <i className="fa fa-certificate text-2xl" title="Técnicos Treinados"></i>
              </div>
            </div>
          </div>

          {/* Col 4: Urgent Contact */}
          <div className="space-y-8 bg-white/5 p-8 rounded-[2rem] border border-white/10 shadow-inner">
            <h4 className="text-lg font-bold text-primary uppercase tracking-tighter text-center">Plantão Emergencial</h4>
            <div className="space-y-6">
              <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="flex flex-col items-center group">
                <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg shadow-red-600/20 mb-3">
                  <i className="fa fa-phone-alt text-xl text-white"></i>
                </div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Telefone Principal</p>
                <p className="text-xl font-black text-white">{COMPANY_PHONE}</p>
              </a>
              <a href={`https://wa.me/${COMPANY_WHATSAPP}`} className="flex flex-col items-center group">
                <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center group-hover:-rotate-6 transition-transform shadow-lg shadow-green-500/20 mb-3">
                  <i className="fab fa-whatsapp text-2xl text-white"></i>
                </div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">WhatsApp Emergente</p>
                <p className="text-xl font-black text-green-400">(41) 98517-1966</p>
              </a>
            </div>
            <div className="pt-6 border-t border-white/10">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4 text-center">Métodos de Pagamento</p>
              <div className="flex justify-center gap-4 text-xl text-gray-600">
                <i className="fab fa-cc-visa"></i>
                <i className="fab fa-cc-mastercard"></i>
                <i className="fa fa-qrcode" title="PIX"></i>
                <i className="fa fa-file-invoice-dollar" title="Boleto"></i>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left space-y-2">
            <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
              &copy; {currentYear} ADP Desentupidora Curitiba. CNPJ: 14.502.810/0001-20. 
              Alvará de Funcionamento n. 293.102/PR. Responsável Técnico: Registro CRQ n. 09200452.
            </p>
            <p className="text-[10px] text-gray-600 uppercase tracking-widest">
              Sede Administrativa: Rua Luiz Maltaca, 36 - CIC, Curitiba/PR. Atendimento 24h.
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
