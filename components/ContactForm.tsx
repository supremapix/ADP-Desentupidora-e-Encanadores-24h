import React, { FormEvent } from 'react';
import { ArrowUpRight, Phone } from 'lucide-react';
import { COMPANY_WHATSAPP, COMPANY_EMAIL, COMPANY_PHONE } from '../constants';

const ContactForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = `Olá! Gostaria de solicitar um orçamento.\n\nNome / empresa: ${data.get('nome')}\nBairro / cidade: ${data.get('local')}\nServiço: ${data.get('servico')}\nProblema: ${data.get('mensagem')}\n\nVim pelo site desentopeadp.com.br`;
    window.open(`https://api.whatsapp.com/send?phone=${COMPANY_WHATSAPP}&text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };
  return <section id="contato" className="adp-section adp-contact"><div className="site-container adp-contact-grid">
    <div><p className="adp-eyebrow">Vamos resolver?</p><h2>Conte com<br />a ADP.</h2><p>Conte o que está acontecendo. Você será direcionado ao WhatsApp da central para conversar sobre o atendimento.</p><a className="adp-contact-phone" href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`}><Phone size={22} />{COMPANY_PHONE}</a><a className="adp-contact-email" href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a></div>
    <form onSubmit={handleSubmit} className="adp-contact-form"><div className="adp-form-pair"><label htmlFor="contact-name">Seu nome ou empresa<input id="contact-name" name="nome" autoComplete="name" placeholder="Como podemos chamar você?" required /></label><label htmlFor="contact-location">Bairro e cidade<input id="contact-location" name="local" autoComplete="address-level2" placeholder="Ex.: CIC, Curitiba" required /></label></div><label htmlFor="contact-service">De qual serviço precisa?<select id="contact-service" name="servico" required defaultValue=""><option value="" disabled>Selecione uma opção</option>{['Desentupimento Geral', 'Hidrojateamento', 'Limpeza de Fossa', 'Vídeo Inspeção', 'Caça Vazamentos', 'Outros / Urgência'].map(s => <option key={s}>{s}</option>)}</select></label><label htmlFor="contact-message">O que está acontecendo?<textarea id="contact-message" name="mensagem" rows={3} placeholder="Descreva o problema" required /></label><button className="adp-button" type="submit">Continuar no WhatsApp <ArrowUpRight size={20} /></button><p className="adp-form-note">A mensagem abre preenchida no WhatsApp. Revise os dados e envie quando quiser. Nenhum orçamento é gerado automaticamente.</p></form>
  </div></section>;
};
export default ContactForm;
