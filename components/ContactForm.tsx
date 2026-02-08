
import React, { FormEvent } from 'react';
import { COMPANY_WHATSAPP, COMPANY_EMAIL, COMPANY_SITE, COMPANY_ADDRESS, COMPANY_PHONE, COMPANY_MOBILE } from '../constants';

const ContactForm: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const nome = formData.get('nome') as string;
    const email = formData.get('email') as string;
    const mensagem = formData.get('mensagem') as string;

    const textoWhatsApp = `Olá! Vim do site (URGENTE).\n\n*Nome:* ${nome}\n*Email:* ${email}\n*Mensagem:* ${mensagem}`;
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${COMPANY_WHATSAPP}&text=${encodeURIComponent(textoWhatsApp)}`;
    
    window.open(urlWhatsApp, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row relative">
          
          {/* Urgency Badge */}
          <div className="absolute top-0 right-0 lg:left-0 bg-red-600 text-white text-[10px] font-black px-6 py-3 z-20 rounded-bl-3xl lg:rounded-br-3xl lg:rounded-bl-none shadow-xl uppercase tracking-widest animate-pulse">
            <i className="fa fa-bolt mr-2"></i> Chegamos em 40 minutos
          </div>

          {/* Info Column */}
          <div className="lg:w-2/5 bg-primary text-white p-12 flex flex-col justify-center space-y-10 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
             <div className="relative z-10">
               <h3 className="font-display text-3xl font-black mb-4 leading-tight uppercase tracking-tighter">Fale com um Especialista</h3>
               <p className="text-white/70 text-sm">Orçamento gratuito e sem compromisso em toda Curitiba.</p>
             </div>
             
             <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center flex-shrink-0">
                    <i className="fa fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">Localização</p>
                    <p className="font-bold text-lg">{COMPANY_ADDRESS}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center flex-shrink-0">
                    <i className="fa fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">E-mail & Web</p>
                    <p className="font-bold text-lg lowercase">{COMPANY_EMAIL}</p>
                    <p className="text-sm opacity-60">www.desentopeadp.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                   <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center flex-shrink-0 border border-white/10">
                    <i className="fa fa-phone-alt text-xl"></i>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">Telefones Plantão</p>
                    <p className="font-black text-2xl">{COMPANY_PHONE}</p>
                    <p className="text-green-400 font-bold text-lg">{COMPANY_MOBILE}</p>
                  </div>
                </div>
             </div>
          </div>

          {/* Form Column */}
          <div className="lg:w-3/5 p-12 lg:p-20">
            <div className="mb-10">
              <h2 className="font-display text-4xl font-black text-dark mb-4 uppercase tracking-tighter">Orçamento Online</h2>
              <p className="text-gray-500 leading-relaxed">
                Preencha os dados abaixo e receba uma estimativa imediata via WhatsApp. 
                Atendemos residências, indústrias e condomínios.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Seu Nome</label>
                  <input 
                    type="text" 
                    name="nome" 
                    placeholder="Ex: João da Silva" 
                    required 
                    className="w-full bg-gray-50 border border-gray-100 text-gray-800 rounded-2xl p-5 focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">E-mail para Contato</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="seu@email.com" 
                    required 
                    className="w-full bg-gray-50 border border-gray-100 text-gray-800 rounded-2xl p-5 focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Qual o problema?</label>
                <textarea 
                  name="mensagem" 
                  rows={4}
                  placeholder="Descreva brevemente o que precisa (ex: pia entupida, limpeza de fossa...)" 
                  required 
                  className="w-full bg-gray-50 border border-gray-100 text-gray-800 rounded-2xl p-5 focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-6 rounded-2xl shadow-2xl hover:shadow-red-600/30 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-4 uppercase tracking-widest"
              >
                SOLICITAR VISITA IMEDIATA <i className="fa fa-arrow-right"></i>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
