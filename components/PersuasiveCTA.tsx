
import React from 'react';
import { COMPANY_WHATSAPP } from '../constants';

const PersuasiveCTA: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-dark rounded-[4rem] p-12 lg:p-20 text-white relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.3)]">
          {/* Decoração Background */}
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[120px]"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 px-4 py-1 rounded-full text-primary text-[10px] font-black uppercase tracking-widest animate-pulse">
                <span className="w-2 h-2 bg-primary rounded-full"></span> Atendimento Prioritário Ativo
              </div>
              <h2 className="font-display text-4xl lg:text-6xl font-black leading-none uppercase tracking-tighter">
                Transparência <br/> <span className="text-primary">Radical ADP</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 text-primary border border-white/10">
                    <i className="fa fa-ban"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">Sem pegadinhas no preço</h4>
                    <p className="text-gray-400 text-sm">Diferente do mercado, <strong>NÃO COBRAMOS POR METRO CÚBICO</strong>. Você recebe um orçamento fechado e sem surpresas na nota fiscal.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 text-primary border border-white/10">
                    <i className="fa fa-file-contract"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">Garantia por escrito</h4>
                    <p className="text-gray-400 text-sm">Relatório técnico detalhado e garantia real de 90 dias em todos os procedimentos.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[3rem] space-y-8 text-center lg:text-left">
               <div className="space-y-2">
                 <p className="text-gray-400 uppercase text-[10px] font-black tracking-[0.2em]">Resolva o problema agora</p>
                 <h3 className="text-3xl font-bold">Últimas 3 vagas <br/> de plantão para hoje</h3>
               </div>
               
               <a 
                href={`https://wa.me/${COMPANY_WHATSAPP}`}
                className="group relative block w-full bg-[#25d366] hover:bg-green-600 text-white py-6 rounded-2xl font-black text-xl shadow-[0_20px_50px_rgba(37,211,102,0.4)] transition-all transform hover:-translate-y-2 text-center overflow-hidden"
               >
                 <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                 <i className="fab fa-whatsapp mr-3"></i> WHATSAPP URGENTE
               </a>

               <div className="flex justify-center lg:justify-start gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                 <span className="flex items-center gap-1"><i className="fa fa-lock text-primary"></i> 100% Seguro</span>
                 <span className="flex items-center gap-1"><i className="fa fa-bolt text-primary"></i> Resposta em 1 min</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersuasiveCTA;
