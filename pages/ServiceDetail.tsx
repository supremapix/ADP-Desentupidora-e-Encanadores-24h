
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import { SERVICES_DETAILED, COMPANY_SITE } from '../constants';
import VideoSection from '../components/VideoSection';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES_DETAILED.find(s => s.id === id);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} em Curitiba 24h | ADP Desentupidora`;
      window.scrollTo(0, 0);
    }
  }, [service]);

  if (!service) return <Navigate to="/" />;

  const canonicalUrl = `${COMPANY_SITE}/servicos/${service.id}`;

  return (
    <main className="bg-white">
      <link rel="canonical" href={canonicalUrl} />
      
      <section className="bg-dark text-white pt-32 pb-24 relative">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
           <h1 className="font-display text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
             {service.title}
           </h1>
           <p className="text-xl text-gray-400 max-w-2xl mx-auto">
             Soluções de alta performance com tecnologia industrial para {service.title.toLowerCase()} em toda Curitiba e RMC.
           </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-display font-bold text-dark mb-6">Excelência Técnica em {service.title}</h2>
              <div className="prose prose-lg text-gray-600">
                <p>{service.desc}</p>
                <p>A ADP utiliza equipamentos de ponta para garantir que o serviço seja feito de forma limpa e eficiente. Nossos técnicos são especialistas em diagnóstico hidráulico, identificando a causa raiz do problema para evitar que o entupimento retorne em poucos dias.</p>
              </div>
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100 aspect-square lg:aspect-auto h-full min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2000&auto=format&fit=crop" 
                alt="Encanador Profissional ADP em serviço" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          <div className="bg-secondary p-12 lg:p-16 rounded-[3rem] border border-gray-100 mb-20">
             <h3 className="text-2xl font-display font-bold text-dark mb-10 text-center">Por que escolher a ADP para {service.title}?</h3>
             <div className="grid md:grid-cols-3 gap-8">
               {[
                 { title: "Atendimento 24h", desc: "Não importa a hora, temos uma equipe pronta para você." },
                 { title: "Preço Justo", desc: "Orçamento grátis e facilidade no pagamento em até 12x." },
                 { title: "Garantia Total", desc: "90 dias de garantia por escrito em todos os serviços." }
               ].map((item, i) => (
                 <div key={i} className="text-center space-y-4">
                   <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-2xl mx-auto"><i className="fa fa-check"></i></div>
                   <h4 className="font-bold text-dark">{item.title}</h4>
                   <p className="text-sm text-gray-500">{item.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      <VideoSection locationName={service.title} />
      <ContactForm />
    </main>
  );
};

export default ServiceDetail;
