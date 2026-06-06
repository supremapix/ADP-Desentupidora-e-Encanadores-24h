import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_SITE, COMPANY_EMAIL, COMPANY_PHONE } from '../constants';

interface EnhancedSEOProps {
  title: string;
  description: string;
  path: string; // ex: "/bairro/parolin" ou "/"
  type?: 'website' | 'article' | 'business';
  image?: string;
  keywords?: string;
  structuredData?: Record<string, any> | Record<string, any>[];
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  path,
  type = 'website',
  image = 'https://img.desentopeadp.com.br/hero-adp.webp',
  keywords = 'desentupidora curitiba, desentupimento curitiba, desentupir pia, desentupir ralo, desentupir esgoto, limpeza de fossa curitiba, hidrojateamento curitiba',
  structuredData
}) => {
  const canonicalUrl = `${COMPANY_SITE}${path.startsWith('/') ? path : '/' + path}`;

  // Default LocalBusiness structured data if none provided
  const defaultBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${COMPANY_SITE}/#organization`,
    "name": "ADP Desentupidora Curitiba",
    "url": COMPANY_SITE,
    "telephone": COMPANY_PHONE,
    "email": COMPANY_EMAIL,
    "logo": "https://img.desentopeadp.com.br/adp-desentupidora.webp",
    "image": image,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Luiz Maltaca, 36 - CIC",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "postalCode": "81250-130",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.4770,
      "longitude": -49.2845
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  const jsonLdData = structuredData || defaultBusinessData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* Resource Hints for Web Performance */}
      <link rel="dns-prefetch" href="https://img.desentopeadp.com.br" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
      <link rel="preconnect" href="https://img.desentopeadp.com.br" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />

      {/* Preloading Core Fonts/Assets */}
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&family=Barlow+Condensed:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap" as="style" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type === 'business' ? 'business.business' : type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="ADP Desentupidora Curitiba" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLdData)}
      </script>

      {/* Critical Core Styles / Layout hints */}
      <style>{`
        /* Critical CSS optimizations for anti-layout-shift and fast initial paint */
        body {
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .btn-shimmer {
          background-size: 200% auto;
          animation: shimmer-btn-effect 3s linear infinite;
        }
        @keyframes shimmer-btn-effect {
          to { background-position: 200% center; }
        }
      `}</style>
    </Helmet>
  );
};

export default EnhancedSEO;
