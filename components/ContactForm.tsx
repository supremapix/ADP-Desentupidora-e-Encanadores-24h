import React, { FormEvent } from 'react';
import { COMPANY_WHATSAPP } from '../constants';

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
    <section id="contato" className="py-16 bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row relative">
          
          {/* Urgency Badge */}
          <div className="absolute top-0 right-0 lg:left-0 bg-red-600 text-white text-xs font-bold px-4 py-2 z-20 rounded-bl-xl lg:rounded-br-xl lg:rounded-bl-none shadow-md">
            <i className="fa fa-bolt mr-1"></i> Resposta em até 2 minutos
          </div>

          {/* Info Column */}
          <div className="lg:w-1/3 bg-primary text-white p-10 flex flex-col justify-center space-y-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
             <h3 className="font-display text-2xl font-bold relative z-10">Informações de Contato</h3>
             <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 animate-pulse">
                    <i className="fa fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <p className="font-bold">Endereço:</p>
                    <p className="text-sm opacity-90">Rua Luiz Maltaca, 36 - CIC, Curitiba-PR</p>
                    <a href="https://goo.gl/maps/xyz" target="_blank" rel="noreferrer" className="text-xs underline mt-1 block">Ver no Google Maps</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div>
                    <p className="font-bold">Email & Site:</p>
                    <p className="text-sm opacity-90">contato@desentopeadp.com.br</p>
                    <p className="text-sm opacity-90">www.adpcuritiba.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <i className="fa fa-phone-alt"></i>
                  </div>
                  <div>
                    <p className="font-bold">Telefones (Plantão):</p>
                    <p className="text-sm opacity-90">(41) 3345-1194</p>
                    <p className="text-sm opacity-90 text-yellow-300 font-bold">(41) 98517-1966</p>
                  </div>
                </div>
             </div>
          </div>

          {/* Form Column */}
          <div className="lg:w-2/3 p-10">
            <div className="mb-6">
              <h2 className="font-display text-3xl font-bold text-gray-800 mb-2">🏢 Desentupidora CIC</h2>
              <p className="text-primary font-bold">Solução Rápida e Eficiente! Chegada em 40-45 minutos.</p>
              <p className="text-red-500 font-bold text-sm mt-2 flex items-center gap-2">
                <i className="fa fa-exclamation-triangle"></i> Evite danos maiores! Atendimento prioritário.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input 
                  type="text" 
                  name="nome" 
                  placeholder="👉 Nome / Empresa:" 
                  required 
                  className="w-full bg-gray-50 border border-gray-300 text-gray-800 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="👉 Email de Contato:" 
                  required 
                  className="w-full bg-gray-50 border border-gray-300 text-gray-800 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                />
              </div>
              <div>
                <textarea 
                  name="mensagem" 
                  rows={4}
                  placeholder="📞 Whatsapp ou 📲 Seu Telefone de Contato e descreva o problema urgente:" 
                  required 
                  className="w-full bg-gray-50 border border-gray-300 text-gray-800 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                SOLICITAR VISITA IMEDIATA <i className="fa fa-paper-plane ml-2"></i>
              </button>
              <p className="text-center text-xs text-gray-400 mt-2">
                *Ao clicar, você será redirecionado para o WhatsApp de urgência.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;