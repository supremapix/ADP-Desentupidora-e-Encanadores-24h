import React from 'react';
import { COMPANY_WHATSAPP } from '../constants';

interface VideoSectionProps {
  locationName?: string;
  customTitle?: React.ReactNode;
  customDescription?: React.ReactNode;
}

const VideoSection: React.FC<VideoSectionProps> = ({ 
  locationName = "Curitiba e Região",
  customTitle,
  customDescription
}) => {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Video Column */}
            <div className="relative w-full h-0 pb-[56.25%] lg:pb-0 lg:h-auto bg-black">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/jJ0WJqgXZ3k?si=twu74dX-bda_MI9L&playsinline=1&controls=1&rel=0&modestbranding=1" 
                title={customTitle ? "Vídeo Institucional ADP" : `Vídeo Institucional ADP Desentupidora em ${locationName}`}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" 
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Content Column */}
            <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold w-fit mb-2">
                <i className="fa fa-play-circle mr-2"></i> Veja nossa equipe em ação
              </div>
              
              {customTitle ? (
                <h2 className="font-display text-2xl md:text-3xl font-bold text-dark leading-tight">
                  {customTitle}
                </h2>
              ) : (
                <h2 className="font-display text-2xl md:text-3xl font-bold text-dark leading-tight">
                  Solução Profissional de Desentupimento em <span className="text-primary">{locationName}</span>
                </h2>
              )}
              
              <div className="text-gray-600 leading-relaxed text-lg space-y-4">
                {customDescription ? customDescription : (
                  <>
                    <p>
                      Assista ao vídeo e comprove a qualidade técnica da <strong>ADP Desentupidora</strong>. 
                      Estamos prontos para atender <strong>{locationName}</strong> com caminhões de hidrojateamento de alta performance e equipamentos rotativos modernos.
                    </p>
                    <p>
                      Nossos técnicos uniformizados e treinados realizam o serviço com máxima higiene e segurança, 
                      resolvendo entupimentos de esgoto, pias, ralos e vasos sanitários sem a necessidade de quebrar pisos na maioria dos casos.
                    </p>
                  </>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="#contato" 
                  className="bg-primary hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg text-center shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <i className="fa fa-clipboard-list"></i> Orçamento Grátis
                </a>
                <a 
                  href={`https://api.whatsapp.com/send?phone=${COMPANY_WHATSAPP}&text=Olá%20assisti%20o%20vídeo%20no%20site%20e%20preciso%20de%20um%20orçamento${locationName !== "Curitiba e Região" ? `%20para%20${locationName}` : ''}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25d366] hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-center shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <i className="fab fa-whatsapp"></i> Chamar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;