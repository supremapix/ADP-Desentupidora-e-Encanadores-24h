# Exemplos de Uso das Imagens

Este arquivo demonstra como usar as imagens de encanador nos componentes React da aplicação.

## 🎯 Uso Básico

### Importação Simples

```tsx
import React from 'react';

const PlumberHero = () => {
  return (
    <div className="hero">
      <img 
        src="/assets/images/plumber/hero-poster.jpg" 
        alt="Equipe de encanadores ADP - Serviço 24h"
        className="hero-image"
      />
    </div>
  );
};

export default PlumberHero;
```

## 📱 Imagens Responsivas

### Usando `<picture>` para Múltiplos Formatos

```tsx
import React from 'react';

const ResponsivePlumberImage = () => {
  return (
    <picture>
      {/* WebP para Desktop (navegadores modernos) */}
      <source 
        media="(min-width: 768px)" 
        srcSet="/assets/images/plumber/plumber-1.webp" 
        type="image/webp"
      />
      
      {/* WebP para Mobile */}
      <source 
        media="(max-width: 767px)" 
        srcSet="/assets/images/plumber/plumber-1@mobile.webp" 
        type="image/webp"
      />
      
      {/* JPG para Desktop (fallback) */}
      <source 
        media="(min-width: 768px)" 
        srcSet="/assets/images/plumber/plumber-1.jpg" 
        type="image/jpeg"
      />
      
      {/* JPG para Mobile (fallback) */}
      <source 
        media="(max-width: 767px)" 
        srcSet="/assets/images/plumber/plumber-1@mobile.jpg" 
        type="image/jpeg"
      />
      
      {/* Fallback final para navegadores muito antigos */}
      <img 
        src="/assets/images/plumber/plumber-1.jpg" 
        alt="Encanador profissional realizando serviço de desentupimento"
        loading="lazy"
        className="plumber-image"
      />
    </picture>
  );
};

export default ResponsivePlumberImage;
```

## 🚀 Componente Reutilizável

### Componente PlumberImage Genérico

```tsx
import React from 'react';

interface PlumberImageProps {
  imageName: 'hero-poster' | 'plumber-1' | 'plumber-2' | 'drain-1' | 'sink-1';
  alt: string;
  className?: string;
  lazy?: boolean;
}

const PlumberImage: React.FC<PlumberImageProps> = ({ 
  imageName, 
  alt, 
  className = '', 
  lazy = true 
}) => {
  const basePath = '/assets/images/plumber';
  
  return (
    <picture>
      <source 
        media="(min-width: 768px)" 
        srcSet={`${basePath}/${imageName}.webp`} 
        type="image/webp"
      />
      <source 
        media="(max-width: 767px)" 
        srcSet={`${basePath}/${imageName}@mobile.webp`} 
        type="image/webp"
      />
      <source 
        media="(min-width: 768px)" 
        srcSet={`${basePath}/${imageName}.jpg`} 
        type="image/jpeg"
      />
      <source 
        media="(max-width: 767px)" 
        srcSet={`${basePath}/${imageName}@mobile.jpg`} 
        type="image/jpeg"
      />
      <img 
        src={`${basePath}/${imageName}.jpg`} 
        alt={alt}
        loading={lazy ? 'lazy' : 'eager'}
        className={className}
      />
    </picture>
  );
};

export default PlumberImage;
```

### Uso do Componente Reutilizável

```tsx
import React from 'react';
import PlumberImage from './PlumberImage';

const ServiceSection = () => {
  return (
    <section className="services">
      <div className="service-card">
        <PlumberImage 
          imageName="plumber-1"
          alt="Encanador profissional com ferramentas"
          className="service-image"
        />
        <h3>Encanadores Profissionais</h3>
        <p>Equipe especializada disponível 24h</p>
      </div>
      
      <div className="service-card">
        <PlumberImage 
          imageName="drain-1"
          alt="Serviço de desentupimento rápido"
          className="service-image"
        />
        <h3>Desentupimento</h3>
        <p>Resolução rápida e eficiente</p>
      </div>
      
      <div className="service-card">
        <PlumberImage 
          imageName="sink-1"
          alt="Reparo e instalação de pias"
          className="service-image"
        />
        <h3>Instalações</h3>
        <p>Instalação e reparo de louças</p>
      </div>
    </section>
  );
};

export default ServiceSection;
```

## 🎨 Background Images no CSS

### Como Usar como Background

```tsx
import React from 'react';

const HeroWithBackground = () => {
  return (
    <div 
      className="hero-section"
      style={{
        backgroundImage: `url('/assets/images/plumber/hero-poster.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px'
      }}
    >
      <div className="hero-content">
        <h1>Desentupidora ADP 24h</h1>
        <p>Atendimento rápido em toda Curitiba</p>
      </div>
    </div>
  );
};

export default HeroWithBackground;
```

### Background Responsivo com Media Queries (CSS)

```css
.hero-section {
  background-image: url('/assets/images/plumber/hero-poster@mobile.jpg');
  background-size: cover;
  background-position: center;
  height: 400px;
}

/* Desktop */
@media (min-width: 768px) {
  .hero-section {
    background-image: url('/assets/images/plumber/hero-poster.jpg');
    height: 600px;
  }
}

/* Navegadores com suporte a WebP */
.webp .hero-section {
  background-image: url('/assets/images/plumber/hero-poster@mobile.webp');
}

@media (min-width: 768px) {
  .webp .hero-section {
    background-image: url('/assets/images/plumber/hero-poster.webp');
  }
}
```

## 🔄 Lazy Loading Avançado

### Com Intersection Observer

```tsx
import React, { useEffect, useRef, useState } from 'react';

interface LazyPlumberImageProps {
  imageName: string;
  alt: string;
  className?: string;
}

const LazyPlumberImage: React.FC<LazyPlumberImageProps> = ({ 
  imageName, 
  alt, 
  className = '' 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={className}>
      {isLoaded && (
        <picture>
          <source 
            media="(min-width: 768px)" 
            srcSet={`/assets/images/plumber/${imageName}.webp`} 
            type="image/webp"
          />
          <source 
            media="(max-width: 767px)" 
            srcSet={`/assets/images/plumber/${imageName}@mobile.webp`} 
            type="image/webp"
          />
          <img 
            src={`/assets/images/plumber/${imageName}.jpg`} 
            alt={alt}
            className="fade-in"
          />
        </picture>
      )}
    </div>
  );
};

export default LazyPlumberImage;
```

## 📊 Galeria de Imagens

### Grid de Serviços

```tsx
import React from 'react';
import PlumberImage from './PlumberImage';

const ServicesGallery = () => {
  const services = [
    {
      image: 'plumber-1',
      title: 'Encanadores 24h',
      description: 'Profissionais qualificados sempre disponíveis'
    },
    {
      image: 'plumber-2',
      title: 'Equipe Especializada',
      description: 'Experiência e qualidade garantida'
    },
    {
      image: 'drain-1',
      title: 'Desentupimento',
      description: 'Resolução rápida de entupimentos'
    },
    {
      image: 'sink-1',
      title: 'Instalações',
      description: 'Instalação e reparo completo'
    }
  ];

  return (
    <div className="services-gallery">
      <h2>Nossos Serviços</h2>
      <div className="gallery-grid">
        {services.map((service, index) => (
          <div key={index} className="gallery-item">
            <PlumberImage 
              imageName={service.image as any}
              alt={service.title}
              className="gallery-image"
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGallery;
```

## 🌟 Boas Práticas

### 1. Sempre use Alt Text descritivo
```tsx
// ✅ BOM
<img src="..." alt="Encanador profissional instalando tubulação em residência" />

// ❌ RUIM
<img src="..." alt="imagem" />
<img src="..." alt="" />
```

### 2. Use Lazy Loading para imagens abaixo da dobra
```tsx
// Hero/Banner - NÃO use lazy loading
<img src="..." alt="..." loading="eager" />

// Imagens abaixo da dobra - USE lazy loading
<img src="..." alt="..." loading="lazy" />
```

### 3. Sempre forneça múltiplos formatos
```tsx
// Ordem: WebP primeiro (menor), JPG como fallback
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <source srcSet="image.jpg" type="image/jpeg" />
  <img src="image.jpg" alt="..." />
</picture>
```

### 4. Considere preload para imagens críticas
```tsx
// No <head> do HTML para hero image
<link rel="preload" as="image" href="/assets/images/plumber/hero-poster.webp" type="image/webp" />
```

## 🎯 Exemplo Completo de Seção Hero

```tsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <picture>
        <source 
          media="(min-width: 768px)" 
          srcSet="/assets/images/plumber/hero-poster.webp" 
          type="image/webp"
        />
        <source 
          media="(max-width: 767px)" 
          srcSet="/assets/images/plumber/hero-poster@mobile.webp" 
          type="image/webp"
        />
        <source 
          media="(min-width: 768px)" 
          srcSet="/assets/images/plumber/hero-poster.jpg" 
          type="image/jpeg"
        />
        <source 
          media="(max-width: 767px)" 
          srcSet="/assets/images/plumber/hero-poster@mobile.jpg" 
          type="image/jpeg"
        />
        <img 
          src="/assets/images/plumber/hero-poster.jpg" 
          alt="Desentupidora ADP - Serviço emergencial 24 horas em Curitiba"
          loading="eager"
          className="hero-background"
        />
      </picture>
      
      <div className="hero-overlay">
        <h1>Desentupidora ADP 24h</h1>
        <p>Atendimento emergencial em toda Curitiba</p>
        <button className="cta-button">Chamar Agora</button>
      </div>
    </section>
  );
};

export default HeroSection;
```

---

**Dica:** Para detectar suporte a WebP dinamicamente, você pode usar a biblioteca [modernizr](https://modernizr.com/) ou implementar uma detecção manual em JavaScript.
