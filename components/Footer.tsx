
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_PHONE, COMPANY_WHATSAPP, BAIRROS } from '../constants';
import AnimatedLogo from './AnimatedLogo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-20 pb-10 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div className="w-24 h-24 mb-6">
              <AnimatedLogo />
            </div>
            <h3 className="font-display text-xl font-bold text-primary">ADP Desentupidora</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Referência em Curitiba e Região Metropolitana há mais de 25 anos. Especialistas em desentupimentos técnicos, 
              hidrojateamento industrial e limpeza de fossas com descarte ecológico certificado. Atendimento 24h real.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"><i className="fab fa-facebook-f text-xs"></i></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"><i className="fab fa-instagram text-xs"></i></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"><i className="fab fa-google text-xs"></i></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg border-l-4 border-primary pl-4 uppercase tracking-tighter">Navegação</h4>
            <ul className="grid gap-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Página Inicial</Link></li>
              <li><Link to="/servicos/hidrojateamento" className="hover:text-primary transition-colors">Hidrojateamento</Link></li>
              <li><Link to="/servicos/limpeza-de-fossa" className="hover:text-primary transition-colors">Limpeza de Fossa</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">Dúvidas Frequentes (FAQ)</Link></li>
              <li><Link to="/#servicos" className="hover:text-primary transition-colors">Todos os Serviços</Link></li>
              <li><Link to="/#contato" className="hover:text-primary transition-colors">Peça seu Orçamento</Link></li>
            </ul>
          </div>

          {/* Column 3: Areas & Specialized */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg border-l-4 border-primary pl-4 uppercase tracking-tighter">Áreas de Atuação</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] text-gray-500 uppercase font-bold tracking-widest">
              {BAIRROS.slice(0, 10).map(b => (
                <Link key={b} to={`/bairro/${b.toLowerCase().replace(/ /g, '-')}`} className="hover:text-primary transition-colors truncate">
                  {b}
                </Link>
              ))}
              <span className="text-primary italic">Ver todas...</span>
            </div>
            <div className="pt-4 border-t border-white/5">
              <p className="text-xs font-bold text-gray-400 mb-2">Certificações & Normas</p>
              <div className="flex gap-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                <i className="fa fa-shield-alt text-2xl" title="Sanepar Certificada"></i>
                <i className="fa fa-recycle text-2xl" title="Descarte Ecológico"></i>
                <i className="fa fa-user-shield text-2xl" title="Técnicos Treinados"></i>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Urgency */}
          <div className="space-y-6 bg-white/5 p-6 rounded-3xl border border-white/10">
            <h4 className="font-bold text-lg text-primary uppercase tracking-tighter">Fale Conosco</h4>
            <div className="space-y-4">
              <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform">
                  <i className="fa fa-phone-alt text-white"></i>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Plantão Fixo</p>
                  <p className="font-black text-lg">{COMPANY_PHONE}</p>
                </div>
              </a>
              <a href={`https://wa.me/${COMPANY_WHATSAPP}`} className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center group-hover:-rotate-6 transition-transform">
                  <i className="fab fa-whatsapp text-white text-xl"></i>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">WhatsApp 24h</p>
                  <p className="font-black text-lg text-green-500">(41) 98517-1966</p>
                </div>
              </a>
              <div className="pt-4 border-t border-white/10">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Formas de Pagamento</p>
                <div className="flex gap-3 text-2xl text-gray-500">
                  <i className="fab fa-cc-visa"></i>
                  <i className="fab fa-cc-mastercard"></i>
                  <i className="fa fa-barcode" title="Boleto para Empresas"></i>
                  <i className="fa fa-qrcode" title="PIX"></i>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-xs text-gray-500 leading-relaxed max-w-2xl">
              &copy; {currentYear} ADP Desentupidora Curitiba. CNPJ: 14.502.810/0001-20. 
              Rua Luiz Maltaca, 36 - CIC, Curitiba - PR, 81265-480. Todos os direitos reservados.
              As imagens e vídeos contidos neste site são de propriedade da ADP ou licenciadas.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
            Desenvolvido com <i className="fa fa-heart text-red-600 animate-pulse"></i> por 
            <a href="https://supremasite.com.br" target="_blank" rel="noreferrer" className="text-primary hover:underline">
              Suprema Sites Express
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
