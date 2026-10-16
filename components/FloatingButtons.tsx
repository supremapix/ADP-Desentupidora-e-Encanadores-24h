import React from 'react';
import { COMPANY_PHONE, COMPANY_WHATSAPP } from '../constants';

const FloatingButtons: React.FC = () => {
  const whatsapp = `https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent('Olá! Vim pelo site e preciso de atendimento para desentupimento.')}`;
  return <>
    <div className="adp-mobile-contact" aria-label="Atendimento rápido">
      <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`}><i className="fa fa-phone-alt" aria-hidden="true" /> Ligar agora</a>
      <a href={whatsapp} target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" aria-hidden="true" /> WhatsApp <span aria-hidden="true">↗</span></a>
    </div>
    <a className="adp-desktop-whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Falar com a ADP pelo WhatsApp"><i className="fab fa-whatsapp" aria-hidden="true" /><span>Fale com a ADP</span><span aria-hidden="true">↗</span></a>
  </>;
};
export default FloatingButtons;
