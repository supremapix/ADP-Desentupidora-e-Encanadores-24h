
import React from 'react';
import { COMPANY_PHONE, COMPANY_WHATSAPP } from '../constants';

const FloatingButtons: React.FC = () => {
  return (
    <>
      {/* MOBILE FIXED BOTTOM BAR (md:hidden) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 sm:p-3 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`}
            className="min-h-[48px] bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase rounded-xl flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform"
            aria-label="Ligar Agora"
          >
            <i className="fa fa-phone-alt text-red-500 text-sm"></i>
            <span>Ligar Agora</span>
          </a>

          <a
            href={`https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent('Olá! Vim pelo site e preciso de atendimento para desentupimento.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase rounded-xl flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform"
            aria-label="Atendimento WhatsApp"
          >
            <i className="fab fa-whatsapp text-base"></i>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* DESKTOP FLOATING WHATSAPP BUTTON (hidden md:block) */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        <a
          href={`https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent('Olá! Vim pelo site e preciso de atendimento para desentupimento.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center bg-emerald-600 hover:bg-emerald-700 text-white p-3 pr-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Atendimento via WhatsApp"
        >
          <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
            <i className="fab fa-whatsapp text-2xl"></i>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase font-bold text-emerald-100 tracking-wider">Plantão 24h</span>
            <span className="text-xs font-extrabold tracking-wide uppercase">Atendimento WhatsApp</span>
          </div>
        </a>
      </div>
    </>
  );
};

export default FloatingButtons;

