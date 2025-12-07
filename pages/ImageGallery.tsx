import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import ContactForm from '../components/ContactForm';

const ImageGallery: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<{ url: string; prompt: string; id: number }[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Galeria IA - Gere Imagens de Serviços | ADP Desentupidora";
    window.scrollTo(0, 0);
  }, []);

  const suggestedPrompts = [
    "Um encanador profissional consertando uma pia moderna",
    "Caminhão de desentupidora em uma rua residencial de Curitiba",
    "Tubulação industrial limpa e brilhante após hidrojateamento",
    "Banheiro luxuoso com encanamento perfeito",
  ];

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: prompt }]
        },
      });

      // Find the image part in the response
      let foundImage = false;
      if (response.candidates && response.candidates[0].content && response.candidates[0].content.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            const base64EncodeString = part.inlineData.data;
            const newImageUrl = `data:image/png;base64,${base64EncodeString}`;
            
            setGeneratedImages(prev => [
              { url: newImageUrl, prompt: prompt, id: Date.now() },
              ...prev
            ]);
            
            foundImage = true;
            break;
          }
        }
      }

      if (!foundImage) {
        setError("Não foi possível gerar a imagem. Tente novamente com outra descrição.");
      }
    } catch (err) {
      console.error(err);
      setError("Ocorreu um erro ao conectar com a IA. Por favor, tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="bg-dark text-white py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-r from-primary to-dark opacity-90"></div>
             <img src="https://loremflickr.com/1920/600/artificial,intelligence,technology" alt="AI Background" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative z-10 animate-fade-in-up">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Galeria de Imagens IA <i className="fa fa-magic text-yellow-400 ml-2 animate-pulse"></i>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Utilize nossa ferramenta de Inteligência Artificial para visualizar cenários, equipamentos ou resultados de serviços hidráulicos.
          </p>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-8 border border-gray-100">
          
          <div className="mb-8 text-center">
            <h2 className="font-display text-2xl font-bold text-dark mb-2">Descreva a imagem que deseja criar</h2>
            <p className="text-gray-500">Ex: "Um ralo de banheiro limpo e desentupido", "Ferramentas de encanador organizadas"</p>
          </div>

          <form onSubmit={handleGenerate} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Digite sua descrição aqui..."
                className="w-full p-5 pr-16 bg-gray-50 border border-gray-300 rounded-xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all text-lg"
              />
              <button 
                type="button" 
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
                onClick={() => setPrompt('')}
                title="Limpar"
              >
                <i className="fa fa-times-circle text-xl"></i>
              </button>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {suggestedPrompts.map((p, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPrompt(p)}
                  className="text-xs bg-gray-100 hover:bg-primary hover:text-white text-gray-700 py-2 px-4 rounded-full transition-colors border border-gray-200"
                >
                  {p}
                </button>
              ))}
            </div>

            <button
              type="submit"
              disabled={loading || !prompt.trim()}
              className={`w-full py-4 rounded-xl font-bold text-lg text-white shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 ${loading || !prompt.trim() ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-teal-700 hover:shadow-primary/40'}`}
            >
              {loading ? (
                <>
                  <i className="fa fa-spinner fa-spin"></i> Gerando Imagem...
                </>
              ) : (
                <>
                  <i className="fa fa-paint-brush"></i> Gerar Imagem
                </>
              )}
            </button>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-r">
              <p><i className="fa fa-exclamation-circle mr-2"></i> {error}</p>
            </div>
          )}
        </div>

        {/* Gallery Grid */}
        {generatedImages.length > 0 && (
            <div className="mt-16 animate-fade-in">
              <h3 className="font-display text-3xl font-bold text-center text-dark mb-10 border-b pb-4">
                Sua Galeria Criativa ({generatedImages.length})
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {generatedImages.map((img) => (
                  <div key={img.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 group">
                    <div className="relative overflow-hidden aspect-square">
                      <img 
                        src={img.url} 
                        alt={img.prompt} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <a 
                          href={img.url} 
                          download={`adp-ia-${img.id}.png`}
                          className="bg-white text-primary font-bold py-2 px-6 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all hover:bg-gray-100"
                        >
                          <i className="fa fa-download mr-2"></i> Baixar
                        </a>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Prompt:</p>
                      <p className="text-gray-800 text-sm line-clamp-2" title={img.prompt}>
                        "{img.prompt}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
      </section>

      <section className="py-12 bg-white mt-12">
         <div className="container mx-auto px-4 text-center">
           <h3 className="font-display text-2xl font-bold mb-6">Por que usar IA na ADP?</h3>
           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                 <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                   <i className="fa fa-lightbulb"></i>
                 </div>
                 <h4 className="font-bold mb-2">Visualização</h4>
                 <p className="text-sm text-gray-600">Ajuda a visualizar como um ambiente pode ficar após uma reforma hidráulica.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                 <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                   <i className="fa fa-tools"></i>
                 </div>
                 <h4 className="font-bold mb-2">Referências</h4>
                 <p className="text-sm text-gray-600">Crie referências visuais de problemas (como pias entupidas) para explicar melhor sua situação.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                 <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                   <i className="fa fa-robot"></i>
                 </div>
                 <h4 className="font-bold mb-2">Inovação</h4>
                 <p className="text-sm text-gray-600">A ADP está sempre na vanguarda da tecnologia, desde nossos equipamentos até o site.</p>
              </div>
           </div>
         </div>
      </section>

      <ContactForm />
    </main>
  );
};

export default ImageGallery;