
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import ContactForm from '../components/ContactForm';

const ImageGallery: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<{ url: string; prompt: string; id: number; size: string }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [imageSize, setImageSize] = useState<'1K' | '2K' | '4K'>('1K');
  const [hasKey, setHasKey] = useState(false);

  useEffect(() => {
    document.title = "Galeria IA PRO - Gere Imagens de Alta Resolução | ADP Desentupidora";
    window.scrollTo(0, 0);
    checkKey();
  }, []);

  const checkKey = async () => {
    // @ts-ignore
    const selected = await window.aistudio.hasSelectedApiKey();
    setHasKey(selected);
  };

  const handleSelectKey = async () => {
    // @ts-ignore
    await window.aistudio.openSelectKey();
    setHasKey(true); // Proceed as if successful per guidelines
  };

  const suggestedPrompts = [
    "Encanador profissional consertando tubulação de esgoto moderna",
    "Caminhão desentupidor de alta pressão em frente a uma casa no Batel, Curitiba",
    "Tubulação industrial limpa e reluzente vista por dentro",
    "Equipe técnica uniformizada com equipamentos de vídeo inspeção",
  ];

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setError(null);

    try {
      // Create fresh instance to ensure latest key
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [{ text: prompt }]
        },
        config: {
          imageConfig: {
            aspectRatio: "1:1",
            imageSize: imageSize
          }
        }
      });

      let foundImage = false;
      if (response.candidates && response.candidates[0].content && response.candidates[0].content.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            const base64EncodeString = part.inlineData.data;
            const newImageUrl = `data:image/png;base64,${base64EncodeString}`;
            
            setGeneratedImages(prev => [
              { url: newImageUrl, prompt: prompt, id: Date.now(), size: imageSize },
              ...prev
            ]);
            
            foundImage = true;
            break;
          }
        }
      }

      if (!foundImage) {
        setError("A IA gerou uma resposta, mas nenhuma imagem foi incluída. Tente uma descrição mais específica.");
      }
    } catch (err: any) {
      console.error(err);
      if (err.message?.includes("Requested entity was not found")) {
        setError("Erro de Chave API. Por favor, selecione sua chave novamente.");
        setHasKey(false);
      } else {
        setError("Ocorreu um erro ao gerar a imagem. Verifique se sua chave possui créditos ou tente outro prompt.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (!hasKey) {
    return (
      <main className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-[2rem] shadow-2xl p-10 text-center border border-gray-100">
          <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
            <i className="fa fa-key"></i>
          </div>
          <h2 className="font-display text-2xl font-bold text-dark mb-4">Acesso à Galeria PRO</h2>
          <p className="text-gray-600 mb-8 text-sm">
            Para utilizar o gerador de imagens de alta resolução (Gemini 3 Pro), você precisa selecionar sua própria chave de API com faturamento ativado.
          </p>
          <div className="bg-blue-50 text-blue-700 p-4 rounded-xl text-xs mb-8 text-left border border-blue-100">
            <p className="font-bold mb-1"><i className="fa fa-info-circle"></i> Importante:</p>
            Acesse <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noreferrer" className="underline font-bold">ai.google.dev/gemini-api/docs/billing</a> para configurar sua conta paga.
          </div>
          <button 
            onClick={handleSelectKey}
            className="w-full bg-primary hover:bg-teal-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1"
          >
            Selecionar Chave de API
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="bg-dark text-white py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-gray-900">
             <i className="fa fa-robot text-[20rem] text-white/5 animate-pulse-slow"></i>
             <div className="absolute inset-0 bg-gradient-to-r from-primary to-dark opacity-90"></div>
        </div>
        <div className="relative z-10 animate-fade-in-up">
          <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 border border-white/20">
            <i className="fa fa-crown text-yellow-400 mr-2"></i> Tecnologia PRO Image
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Gerador de Imagens IA <span className="text-primary">PRO</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Crie representações realistas de alta qualidade para seus projetos e visualizações hidráulicas.
          </p>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden p-8 lg:p-12 border border-gray-100">
          
          <div className="mb-10 text-center">
            <h2 className="font-display text-2xl font-bold text-dark mb-2">Configure sua Geração</h2>
            <p className="text-gray-500 text-sm">Escolha o tamanho e descreva a cena com detalhes.</p>
          </div>

          <form onSubmit={handleGenerate} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Resolução da Imagem</label>
                <div className="flex gap-2">
                  {(['1K', '2K', '4K'] as const).map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setImageSize(size)}
                      className={`flex-1 py-3 rounded-xl font-bold border-2 transition-all ${imageSize === size ? 'bg-primary/10 border-primary text-primary shadow-inner' : 'bg-gray-50 border-gray-100 text-gray-400 hover:border-gray-300'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Prompt Rápido</label>
                <select 
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                >
                  <option value="">Selecione uma ideia...</option>
                  {suggestedPrompts.map((p, i) => <option key={i} value={p}>{p}</option>)}
                </select>
              </div>
            </div>

            <div className="relative">
              <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-2 block">O que você quer ver?</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ex: Detalhe de um ralo sifonado limpo com água cristalina correndo..."
                rows={3}
                className="w-full p-5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all text-lg resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading || !prompt.trim()}
              className={`w-full py-6 rounded-2xl font-bold text-xl text-white shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-4 ${loading || !prompt.trim() ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-teal-700 shadow-primary/30'}`}
            >
              {loading ? (
                <>
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Processando Alta Qualidade...
                </>
              ) : (
                <>
                  <i className="fa fa-wand-magic-sparkles"></i> Renderizar Imagem {imageSize}
                </>
              )}
            </button>
          </form>

          {error && (
            <div className="mt-8 p-5 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-xl flex items-start gap-4 animate-fade-in">
              <i className="fa fa-triangle-exclamation text-xl mt-1"></i>
              <div>
                <p className="font-bold">Falha na Geração</p>
                <p className="text-sm opacity-80">{error}</p>
                {error.includes("Chave") && (
                   <button onClick={() => setHasKey(false)} className="mt-2 text-xs font-bold underline">Trocar Chave agora</button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Gallery Grid */}
        {generatedImages.length > 0 && (
            <div className="mt-20 animate-fade-in">
              <div className="flex items-center justify-between mb-12 border-b-2 border-gray-100 pb-6">
                <h3 className="font-display text-3xl font-bold text-dark">
                  Criações Recentes <span className="text-gray-300 font-light ml-2">({generatedImages.length})</span>
                </h3>
                <button onClick={() => setGeneratedImages([])} className="text-xs font-bold text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest">Limpar Galeria</button>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {generatedImages.map((img) => (
                  <div key={img.id} className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100 group">
                    <div className="relative overflow-hidden aspect-square">
                      <img 
                        src={img.url} 
                        alt={img.prompt} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                      />
                      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20">
                        {img.size} RESOLUTION
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <a 
                          href={img.url} 
                          download={`adp-ia-pro-${img.id}.png`}
                          className="bg-white text-dark font-black py-4 px-6 rounded-xl shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all hover:bg-primary hover:text-white text-center flex items-center justify-center gap-3"
                        >
                          <i className="fa fa-download"></i> SALVAR EM ALTA
                        </a>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-500 text-xs italic line-clamp-2" title={img.prompt}>
                        "{img.prompt}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
      </section>

      <section className="py-20 bg-white border-y border-gray-100">
         <div className="container mx-auto px-4 text-center">
           <h3 className="font-display text-3xl font-bold mb-12 uppercase tracking-tight">O Poder da Visualização</h3>
           <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <div className="space-y-4">
                 <div className="w-20 h-20 bg-primary/10 text-primary rounded-3xl flex items-center justify-center mx-auto text-3xl transform rotate-3 hover:rotate-0 transition-transform shadow-lg">
                   <i className="fa fa-expand"></i>
                 </div>
                 <h4 className="font-bold text-xl">4K Nativo</h4>
                 <p className="text-sm text-gray-500 leading-relaxed">Gere imagens com clareza profissional para catálogos, banners e sites de alta performance.</p>
              </div>
              <div className="space-y-4">
                 <div className="w-20 h-20 bg-primary/10 text-primary rounded-3xl flex items-center justify-center mx-auto text-3xl transform -rotate-3 hover:rotate-0 transition-transform shadow-lg">
                   <i className="fa fa-camera-retro"></i>
                 </div>
                 <h4 className="font-bold text-xl">Fotorrealismo</h4>
                 <p className="text-sm text-gray-500 leading-relaxed">Modelos treinados para entender texturas hidráulicas, brilho de metais e estados da água.</p>
              </div>
              <div className="space-y-4">
                 <div className="w-20 h-20 bg-primary/10 text-primary rounded-3xl flex items-center justify-center mx-auto text-3xl transform rotate-6 hover:rotate-0 transition-transform shadow-lg">
                   <i className="fa fa-microchip"></i>
                 </div>
                 <h4 className="font-bold text-xl">Gemini 3 Pro</h4>
                 <p className="text-sm text-gray-500 leading-relaxed">A última palavra em IA generativa, processando prompts complexos com precisão artística.</p>
              </div>
           </div>
         </div>
      </section>

      <ContactForm />
    </main>
  );
};

export default ImageGallery;
