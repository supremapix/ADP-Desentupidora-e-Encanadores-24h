import React, { useState } from 'react';
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
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Video Column */}
            <div className="relative w-full aspect-video bg-black flex items-center justify-center">
              {!isPlaying ? (
                <div 
                  className="absolute inset-0 w-full h-full cursor-pointer group flex items-center justify-center overflow-hidden" 
                  onClick={() => setIsPlaying(true)}
                >
                  <img 
                    src="https://img.youtube.com/vi/jJ0WJqgXZ3k/hqdefault.jpg" 
                    alt={customTitle ? "Vídeo Institucional ADP" : `Vídeo Institucional ADP Desentupidora em ${locationName}`}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-300 group-hover:scale-[1.02] transform transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Glassmorphism play button overlay */}
                  <div className="relative z-10 w-20 h-20 bg-primary/95 text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(155,17,30,0.5)] group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                    <i className="fa fa-play text-3xl ml-1"></i>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-white/10">
                    <i className="fa fa-play mr-1.5"></i> Clique para Assistir
                  </div>
                </div>
              ) : (
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/jJ0WJqgXZ3k?si=twu74dX-bda_MI9L&autoplay=1" 
                  title={customTitle ? "Vídeo Institucional ADP" : `Vídeo Institucional ADP Desentupidora em ${locationName}`}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              )}
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

              <div className="flex flex-col sm:flex-row gap-6 pt-4 items-center sm:items-start text-center sm:text-left">
                <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
                  <a 
                    href="#contato" 
                    className="w-full sm:w-auto bg-primary hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-center shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    <i className="fa fa-clipboard-list"></i> Orçamento
                  </a>
                  <p className="text-[10px] text-gray-400 mt-1.5 leading-tight">Preencha os dados do local.</p>
                </div>
                <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
                  <a 
                    href={`https://api.whatsapp.com/send?phone=${COMPANY_WHATSAPP}&text=Olá%20assisti%20o%20vídeo%20no%20site%20e%20preciso%20de%20um%20orçamento${locationName !== "Curitiba e Região" ? `%20para%20${locationName}` : ''}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto bg-[#25d366] hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-center shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    <i className="fab fa-whatsapp"></i> WhatsApp
                  </a>
                  <p className="text-[10px] text-gray-400 mt-1.5 leading-tight">Converse direto no aplicativo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;