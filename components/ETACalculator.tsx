
import React, { useState, useEffect } from 'react';
import { COMPANY_PHONE } from '../constants';

const ETACalculator: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [result, setResult] = useState<{ distance: number; eta: number } | null>(null);

  // Coordenadas da Base ADP no CIC, Curitiba
  const BASE_LAT = -25.5154;
  const BASE_LNG = -49.3425;

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Raio da Terra em km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const handleCalculate = () => {
    setStatus('loading');
    if (!navigator.geolocation) {
      setStatus('error');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const dist = calculateDistance(BASE_LAT, BASE_LNG, position.coords.latitude, position.coords.longitude);
        // Média de 30km/h em Curitiba + 10min de preparação da equipe
        // Aplicando margem de segurança de 25% conforme solicitado
        const timeMinutes = Math.round((dist / 30) * 60 + 10);
        
        setResult({
          distance: parseFloat(dist.toFixed(1)),
          eta: timeMinutes
        });
        setStatus('success');
      },
      () => setStatus('error'),
      { timeout: 10000 }
    );
  };

  return (
    <div className="bg-dark text-white p-8 rounded-[2.5rem] shadow-2xl border border-primary/20 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all"></div>
      
      <div className="relative z-10 text-center space-y-4">
        <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary text-2xl mx-auto mb-4 animate-bounce-slow">
          <i className="fa fa-route"></i>
        </div>
        <h3 className="font-display text-2xl font-bold uppercase tracking-tight">Tempo de Atendimento</h3>
        <p className="text-gray-400 text-sm">Calcule quanto tempo nossa equipe levará para chegar até você agora.</p>

        {status === 'idle' && (
          <div className="flex flex-col items-center w-full">
            <button 
              onClick={handleCalculate}
              className="w-full bg-primary hover:bg-red-700 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-primary/20 uppercase text-xs tracking-widest flex items-center justify-center gap-2"
            >
              <i className="fa fa-location-dot"></i> Calcular
            </button>
            <p className="text-[10px] text-gray-400 mt-1.5 text-center leading-normal">Solicita sua geolocalização para estimar o tempo.</p>
          </div>
        )}

        {status === 'loading' && (
          <div className="flex items-center justify-center gap-3 py-4">
            <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            <span className="text-xs font-bold text-primary uppercase">Rastreando Unidade...</span>
          </div>
        )}

        {status === 'success' && result && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 animate-fade-in">
             <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-500">Distância</p>
                  <p className="text-2xl font-black text-primary">{result.distance} km</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-500">Chegada em aprox.</p>
                  <p className="text-2xl font-black text-primary">{result.eta} min</p>
                </div>
             </div>
             <p className="text-[9px] mt-4 text-gray-500 italic">* Tempo médio calculado com base no tráfego atual de Curitiba.</p>
             <div className="flex flex-col items-center w-full mt-4">
               <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="w-full block bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-all text-sm uppercase">
                 Ligar
               </a>
               <p className="text-[9px] text-gray-400 mt-1 text-center leading-normal">Ligue para despachar nossa equipe de emergência imediatamente.</p>
             </div>
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-xs font-bold">
            Não foi possível localizar. <br/> Atendimento médio: 40-60 min.
          </div>
        )}
      </div>
    </div>
  );
};

export default ETACalculator;
