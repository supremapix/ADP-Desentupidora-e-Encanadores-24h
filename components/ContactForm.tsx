
import React, { FormEvent } from 'react';
import { COMPANY_WHATSAPP, COMPANY_EMAIL, COMPANY_SITE, COMPANY_PHONE } from '../constants';

const ContactForm: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const nome = formData.get('nome') as string;
    const servico = formData.get('servico') as string;
    const local = formData.get('local') as string;
    const mensagem = formData.get('mensagem') as string;

    const textoWhatsApp = `🚨 *NOVO ORÇAMENTO SITE* 🚨\n\n👤 *Nome:* ${nome}\n🛠️ *Serviço:* ${servico}\n📍 *Localização:* ${local}\n📝 *Mensagem:* ${mensagem}\n\n_Vim pelo site oficial desentopeadp.com.br_`;
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${COMPANY_WHATSAPP}&text=${encodeURIComponent(textoWhatsApp)}`;
    
    window.open(urlWhatsApp, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto bg-white rounded-[3.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          
          {/* Lado Esquerdo: Info */}
          <div className="lg:w-2/5 bg-primary text-white p-12 lg:p-16 flex flex-col justify-center space-y-12">
             <div>
                <span className="bg-white/10 border border-white/20 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 inline-block">Atendimento Direto</span>
                <h3 className="font-display text-4xl font-black mb-6 leading-none uppercase tracking-tighter">Peça seu <br/>Orçamento <span className="text-white/50">Grátis</span></h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  Preencha os dados e receba resposta em menos de 2 minutos diretamente no seu WhatsApp. 
                  Estamos de plantão agora.
                </p>
             </div>
             
             <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 transition-transform group-hover:scale-110">
                    <i className="fa fa-phone-alt text-2xl"></i>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Central de Atendimento</p>
                    <p className="font-black text-2xl">{COMPANY_PHONE}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 transition-transform group-hover:scale-110">
                    <i className="fa fa-envelope text-2xl"></i>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">E-mail Comercial</p>
                    <p className="font-bold text-lg lowercase">{COMPANY_EMAIL}</p>
                  </div>
                </div>
             </div>
             
             <div className="pt-10 flex gap-4 opacity-50">
               <i className="fab fa-cc-visa text-3xl"></i>
               <i className="fab fa-cc-mastercard text-3xl"></i>
               <i className="fa fa-qrcode text-3xl"></i>
               <span className="text-[10px] font-bold uppercase ml-auto self-center">Aceitamos Cartões</span>
             </div>
          </div>

          {/* Lado Direito: Form */}
          <div className="lg:w-3/5 p-12 lg:p-20">
            <h2 className="font-display text-4xl font-black text-dark mb-10 uppercase tracking-tighter">Fale com <span className="text-primary">Nossos Técnicos</span></h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Seu Nome / Empresa</label>
                  <input type="text" name="nome" placeholder="Ex: João Silva" required className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-5 focus:ring-4 focus:ring-primary/20 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Bairro / Cidade</label>
                  <input type="text" name="local" placeholder="Ex: Batel, Curitiba" required className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-5 focus:ring-4 focus:ring-primary/20 outline-none transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Tipo de Urgência</label>
                <select name="servico" required className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-5 focus:ring-4 focus:ring-primary/20 outline-none transition-all appearance-none">
                  <option value="">Selecione o serviço...</option>
                  <option value="Desentupimento Geral">Desentupimento Geral</option>
                  <option value="Hidrojateamento">Hidrojateamento</option>
                  <option value="Limpeza de Fossa">Limpeza de Fossa</option>
                  <option value="Vídeo Inspeção">Vídeo Inspeção</option>
                  <option value="Caça Vazamentos">Caça Vazamentos</option>
                  <option value="Outros">Outros / Urgência</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">O que está acontecendo?</label>
                <textarea name="mensagem" rows={4} placeholder="Conte brevemente o problema..." required className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-5 focus:ring-4 focus:ring-primary/20 outline-none transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-6 rounded-2xl shadow-2xl hover:shadow-red-600/30 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-4 uppercase tracking-widest text-lg">
                SOLICITAR ORÇAMENTO NO WHATSAPP <i className="fab fa-whatsapp text-2xl"></i>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
