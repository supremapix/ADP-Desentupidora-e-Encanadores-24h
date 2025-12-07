import React from 'react';
import Hero from '../src/components/Hero';

const HeroDemo: React.FC = () => {
  return (
    <>
      <Hero
        title="ADP Desentupidora CIC"
        subtitle="Serviços Profissionais de Desentupimento 24h em Curitiba"
        ctaText="Chamar Agora"
        ctaLink="#contato"
      />
      <section style={{ padding: '4rem 2rem', textAlign: 'center', background: '#f5f5f5' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Hero Component Demo</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          Este é um componente Hero responsivo com suporte a vídeo de fundo que funciona em dispositivos móveis.
          O vídeo tenta reproduzir automaticamente (muted) e, se o autoplay for bloqueado, exibe um botão de play.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Recursos:</h3>
          <ul style={{ listStyle: 'none', padding: 0, maxWidth: '600px', margin: '0 auto' }}>
            <li>✅ Autoplay com vídeo mudo</li>
            <li>✅ Suporte mobile (playsinline, webkit-playsinline)</li>
            <li>✅ Fallback com botão play quando autoplay é bloqueado</li>
            <li>✅ Poster image responsivo (desktop e mobile)</li>
            <li>✅ Múltiplos formatos de vídeo (WebM e MP4)</li>
            <li>✅ Design responsivo completo</li>
            <li>✅ Overlay com gradiente para melhor legibilidade</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default HeroDemo;
