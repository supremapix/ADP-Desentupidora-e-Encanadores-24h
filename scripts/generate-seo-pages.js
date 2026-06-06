import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const TEMPLATE_FILE = path.join(DIST_DIR, 'index.html');

console.log('🚀 Iniciando pré-renderização de páginas para máximo SEO...');

if (!fs.existsSync(TEMPLATE_FILE)) {
  console.error(`❌ Erro: O arquivo template em ${TEMPLATE_FILE} não existe. Execute o build do Vite primeiro!`);
  process.exit(1);
}

// Read index.html template from dist
const template = fs.readFileSync(TEMPLATE_FILE, 'utf-8');

// Configurações Globais
const COMPANY_PHONE = "(41) 3345-1194";
const COMPANY_MOBILE = "(41) 98517-1966";
const COMPANY_WHATSAPP = "5541985171966";
const COMPANY_EMAIL = "contato@desentopeadp.com.br";
const COMPANY_SITE = "https://www.desentopeadp.com.br";
const COMPANY_ADDRESS = "Rua Luiz Maltaca, 36 - CIC, Curitiba-PR";

// Utilitário para slugs
const slugify = (text) => 
  text.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');

const BAIRROS = [
  "Vila Parolin", "Vila Torres", "Jardim Schaffer", "Vila Sabará", "Boqueirão de Baixo", 
  "Boqueirão de Cima", "Tanguá", "Vila Zumbi", "Abranches de Baixo", "Abranches de Cima", 
  "Vila Nossa Senhora da Luz", "Vila Tecnológica", "Vila Oficinas", "Vila Fanny", "Vila Hauer", 
  "Batel Soho", "Alto da Rua XV", "CIC Norte", "CIC Central", "CIC Sul", "Vila Guaíra", 
  "Centro Histórico", "Ecoville", "Carmo Abranches", "Água Verde", "Ahú", "Alto Boqueirão", 
  "Alto da Glória", "Alto da XV", "Atuba", "Augusta", "Bacacheri", "Bairro Alto", "Barreirinha", 
  "Batel", "Bigorrilho", "Boa Vista", "Bom Retiro", "Boqueirão", "Butiatuvinha", "Cabral", 
  "Cachoeira", "Cajuru", "Campina do Siqueira", "Campo Comprido", "Campo de Santana", 
  "Capão da Imbuia", "Capão Raso", "Cascatinha", "Caximba", "Centro", "Centro Cívico", 
  "Cidade Industrial de Curitiba", "Cristo Rei", "Fanny", "Fazendinha", "Ganchinho", "Guabirotuba", 
  "Guaíra", "Hauer", "Hugo Lange", "Jardim Botânico", "Jardim das Américas", "Jardim Social", 
  "Juvevê", "Lamenha Pequena", "Lindóia", "Mercês", "Mossunguê", "Novo Mundo", "Orleans", 
  "Parolin", "Pilarzinho", "Pinheirinho", "Portão", "Prado Velho", "Rebouças", "Riviera", 
  "Santa Cândida", "Santa Felicidade", "Santa Quitéria", "Santo Inácio", "São Braz", 
  "São Francisco", "São João", "São Lourenço", "São Miguel", "Vila Pantanal", "Seminário", 
  "Sítio Cercado", "Taboão", "Tarumã", "Tatuquara", "Tingui", "Uberaba", "Umbará", 
  "Vila Izabel", "Vista Alegre", "Xaxim", "Santa Quitéria Velha", "Portão Velho", "Guaíra Velho", 
  "Uberaba de Cima", "Uberaba de Baixo", "São Braz Velho", "Cidade Industrial", "Vila Verde", 
  "Vila Barigui", "Caiuá", "Xaxim Velho", "Fazendinha-Portão", "Campo Comprido Velho", 
  "Bacacheri Velho", "Capão da Imbuia Velho", "Pinheirinho Velho", "Vila São Pedro", 
  "Vila Osternack", "Conjunto Caiuá", "Conjunto Parigot de Souza", "Vila Reno", "Vila Audi",
  "Vila Vitória Régia", "Vila Santa Helena", "Vila Conquista", "Vila Osvaldo Cruz", "Vila Itatiaia",
  "Vila Atenas", "Vila Sandra", "Jardim Gabineto", "Belo Ar", "Colina Verde", "Gralha Azul", "Barro Preto"
];

const CIDADES_RMC = [
  "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Araucária", "Balsa Nova", 
  "Bocaiúva do Sul", "Campina Grande do Sul", "Campo do Tenente", "Campo Largo", 
  "Campo Magro", "Cerro Azul", "Colombo", "Contenda", "Doutor Ulysses", "Fazenda Rio Grande", 
  "Itaperuçu", "Lapa", "Mandirituba", "Piên", "Pinhais", "Piraquara", "Quatro Barras", 
  "Quitandinha", "Rio Branco do Sul", "Rio Negro", "São José dos Pinhais", "Tijucas do Sul", 
  "Tunas do Paraná", "Curitiba"
];

const SERVICES_DETAILED = [
  { id: "desentupimento-de-pia", title: "Desentupimento de Pia", desc: "Remoção de gordura e restos de alimentos com máquinas rotativas elétricas de alta performance." },
  { id: "desentupimento-de-ralo", title: "Desentupimento de Ralo", desc: "Limpeza de ralos de banheiro e quintal obstruídos por cabelos, terra e resíduos sólidos." },
  { id: "desentupimento-de-vaso", title: "Desentupimento de Vaso Sanitário", desc: "Desobstrução sem quebrar a louça sanitária, utilizando sondas flexíveis de alta tecnologia." },
  { id: "desentupimento-de-esgoto", title: "Desentupimento de Esgoto", desc: "Soluções estratégicas completas para redes coletoras residenciais, comerciais e colunas prediais." },
  { id: "limpeza-de-caixa-de-gordura", title: "Limpeza de Caixa de Gordura", desc: "Manutenção essencial para evitar transbordamentos na cozinha, mau cheiro e pragas." },
  { id: "hidrojateamento", title: "Hidrojateamento", desc: "Uso de jato de água em altíssima pressão para limpeza pesada e desobstrução de tubulações complexas." },
  { id: "limpeza-de-fossa", title: "Limpeza de Fossa", desc: "Esgotamento técnico com caminhão auto vácuo e destinação de efluentes em estação licenciada Sanepar." },
  { id: "video-inspecao", title: "Vídeo Inspeção", desc: "Localização precisa de desníveis, rachaduras e obstruções ocultas com micro-câmeras de alta definição." }
];

// Helper to write static html files
const saveFile = (relativeDir, content) => {
  const targetDir = path.join(DIST_DIR, relativeDir);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  fs.writeFileSync(path.join(targetDir, 'index.html'), content, 'utf-8');
};

// Replace elements in Template Header and Body
const buildPage = (urlPath, seoData, bodyHtml) => {
  const canonicalUrl = `${COMPANY_SITE}${urlPath}`;
  const keywordsStr = seoData.keywords || 'desentupidora curitiba, desentupimento curitiba, desentupir vaso, desentupir pia, limpa fossa, hidrojateamento';
  
  // Create structured data JSON-LD scripts
  const jsonLdScripts = (seoData.structuredData || []).map(sd => 
    `<script type="application/ld+json">${JSON.stringify(sd)}</script>`
  ).join('\n    ');

  let html = template;

  // 1. Reemplazar Título
  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${seoData.title}</title>`);

  // 2. Insertar Metas e JSON-LD no <head>
  const seoHeadTags = `
    <meta name="description" content="${seoData.description}">
    <meta name="keywords" content="${keywordsStr}">
    <link rel="canonical" href="${canonicalUrl}">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="${seoData.title}">
    <meta property="og:description" content="${seoData.description}">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:site_name" content="ADP Desentupidora Curitiba">
    <meta property="og:image" content="${seoData.image || 'https://img.desentopeadp.com.br/hero-adp.webp'}">
    <meta property="og:locale" content="pt_BR">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${seoData.title}">
    <meta name="twitter:description" content="${seoData.description}">
    <meta name="twitter:image" content="${seoData.image || 'https://img.desentopeadp.com.br/hero-adp.webp'}">
    
    <!-- Resource Hints -->
    <link rel="dns-prefetch" href="https://img.desentopeadp.com.br">
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://img.desentopeadp.com.br" crossorigin="anonymous">
    
    <!-- Structured Data -->
    ${jsonLdScripts}
  `;

  // Inject before </head>
  html = html.replace('</head>', `${seoHeadTags}\n</head>`);

  // 3. Inject pre-rendered layout HTML in <div id="root">
  const cleanBodyHtml = `
    <div id="root">
      ${bodyHtml}
    </div>
  `;
  
  // Reemplace division de montaje
  html = html.replace('<div id="root"></div>', cleanBodyHtml);
  html = html.replace('<div id="root" class="root"></div>', cleanBodyHtml);

  return html;
};

// Standarized UI Layout Snippets for perfect layout paint inside static html files
const getHeaderHtml = () => `
  <header class="fixed top-0 left-0 w-full z-[100] bg-white shadow-md py-4">
    <div class="container mx-auto px-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <span class="text-2xl font-black text-dark font-display">ADP <span class="text-primary">SANEAMENTO</span></span>
      </div>
      <nav class="hidden lg:flex items-center gap-8 font-black font-display text-xs uppercase tracking-widest text-gray-600">
        <a href="/" class="hover:text-primary transition-colors">Início</a>
        <a href="/servicos/hidrojateamento" class="hover:text-primary transition-colors">Hidrojateamento</a>
        <a href="/servicos/limpeza-de-fossa" class="hover:text-primary transition-colors">Limpeza de Fossa</a>
        <a href="/faq" class="hover:text-primary transition-colors">FAQ</a>
        <a href="/glossario" class="hover:text-primary transition-colors">Glossário</a>
      </nav>
      <div class="flex items-center gap-4">
        <a href="tel:${COMPANY_PHONE.replace(/\D/g, '')}" class="bg-red-600 hover:bg-red-700 text-white font-black px-5 py-2.5 rounded-xl uppercase text-xs flex items-center gap-2 shadow-lg transition-all">
          <i class="fa fa-phone-alt"></i> ${COMPANY_PHONE}
        </a>
      </div>
    </div>
  </header>
`;

const getFooterHtml = () => `
  <footer class="bg-dark text-white pt-20 pb-10 border-t border-white/5">
    <div class="container mx-auto px-4 max-w-6xl grid md:grid-cols-3 gap-12">
      <div>
        <h4 class="font-display font-black text-2xl tracking-tighter mb-4 uppercase">ADP <span class="text-primary">DESENTUPIDORA</span></h4>
        <p class="text-sm text-gray-400 mb-6 font-light leading-relaxed">Referência em desentupimento técnico, higienização, e sucção de efluentes em Curitiba e Região Metropolitana. Unidades de prontidão emergencial 24 horas.</p>
        <p class="text-xs text-primary font-bold">Ligue a qualquer hora: ${COMPANY_PHONE}</p>
      </div>
      <div>
        <h4 class="font-display font-bold text-sm tracking-widest uppercase mb-4 text-gray-300">Contatos Rápidos</h4>
        <ul class="space-y-3 text-sm text-gray-400">
          <li><strong>WhatsApp:</strong> <a href="https://wa.me/${COMPANY_WHATSAPP}" class="hover:text-white transition-colors">${COMPANY_MOBILE}</a></li>
          <li><strong>Central Telefônica:</strong> <a href="tel:${COMPANY_PHONE.replace(/\D/g, '')}" class="hover:text-white transition-colors">${COMPANY_PHONE}</a></li>
          <li><strong>E-mail:</strong> ${COMPANY_EMAIL}</li>
          <li><strong>Sede:</strong> ${COMPANY_ADDRESS}</li>
        </ul>
      </div>
      <div>
        <h4 class="font-display font-bold text-sm tracking-widest uppercase mb-4 text-gray-300">Selo de Qualidade</h4>
        <p class="text-xs text-gray-400 font-light leading-relaxed">Orçamentos com preço justo e fechado no local sem compromisso. Descarte de resíduos ecologicamente correto com guias de destinação final licenciados pelos órgãos de saneamento.</p>
      </div>
    </div>
    <div class="container mx-auto px-4 max-w-6xl mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
      <p>&copy; 2026 ADP Saneamento. Todos os direitos reservados. Licença Ambiental Sanepar e IAT-PR.</p>
      <div class="flex gap-6">
        <a href="/mapa-do-site" class="hover:text-white transition-colors">Mapa do Site</a>
        <a href="/faq" class="hover:text-white transition-colors">FAQ</a>
      </div>
    </div>
  </footer>
`;

const getContactFormHtml = (locationName) => `
  <section class="py-20 bg-gray-50" id="contato">
    <div class="container mx-auto px-4 max-w-3xl text-center">
      <span class="text-primary font-black text-[10px] uppercase tracking-widest mb-4 inline-block">Orçamento Seguro em ${locationName}</span>
      <h2 class="font-display text-4xl font-extrabold text-dark mb-6">Fale Conosco em Tempo Real</h2>
      <p class="text-gray-500 text-sm max-w-lg mx-auto mb-10 leading-relaxed font-light">Solicite agora o seu orçamento rápido. Não cometa o erro de fechar com empresas clandestinas. Escolha segurança, preço justo e garantia ADP.</p>
      
      <form class="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 text-left space-y-6">
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-xs font-bold text-gray-600 mb-2">Seu Nome completo</label>
            <input type="text" placeholder="Nome" class="w-full border border-gray-200 p-4 rounded-xl text-sm" required />
          </div>
          <div>
            <label class="block text-xs font-bold text-gray-600 mb-2">WhatsApp / Telefone</label>
            <input type="text" placeholder="(41) 99999-9999" class="w-full border border-gray-200 p-4 rounded-xl text-sm" required />
          </div>
        </div>
        <div>
          <label class="block text-xs font-bold text-gray-600 mb-2">Tipo de Serviço Necessário</label>
          <select class="w-full border border-gray-200 p-4 rounded-xl text-sm bg-gray-50">
            <option>Desentupimento de Pia ou Ralo</option>
            <option>Desentupimento de Vaso Sanitário</option>
            <option>Desentupimento de Rede de Esgoto</option>
            <option>Limpeza de Fossa Séptica ou Caixa de Gordura</option>
            <option>Hidrojateamento sob Pressão</option>
            <option>Vídeo Inspeção Hidráulica</option>
            <option>Outros serviços</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-bold text-gray-600 mb-2">Descrição da Ocorrência</label>
          <textarea rows="4" placeholder="Ex: Ralo transbordando no banheiro de casa no bairro ${locationName}..." class="w-full border border-gray-200 p-4 rounded-xl text-sm" required></textarea>
        </div>
        <button type="submit" class="w-full py-5 text-white bg-green-500 font-black rounded-xl hover:bg-green-600 shadow-xl tracking-widest text-sm uppercase transition-all flex items-center justify-center gap-2 pointer-events-none">
          <i class="fab fa-whatsapp"></i> Confirmar Orçamento Via WhatsApp
        </button>
      </form>
    </div>
  </section>
`;

// ==================== GENERATE HOMEPAGE (/) ====================
console.log(' - Renderizando Home (/)');
const homeSeo = {
  title: "ADP Desentupidora Curitiba | R$ 79,90 o metro | 24h",
  description: "Desentupidora em Curitiba 24h. Chegada em 30 min, a partir de R$ 79,90 o metro linear. Todos os bairros. Ligue (41) 3345-1194 ou WhatsApp (41) 98517-1966.",
  structuredData: [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${COMPANY_SITE}/#organization`,
      "name": "ADP Desentupidora",
      "url": COMPANY_SITE,
      "telephone": [COMPANY_PHONE, COMPANY_MOBILE],
      "openingHours": "Mo-Su 00:00-23:59",
      "description": "Desentupidora em Curitiba 24h. Atendemos todos os bairros com chegada em 30 minutos.",
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
      "priceRange": "R$ 79,90 - R$ 199,90"
    }
  ]
};

const homeBodyHtml = `
  ${getHeaderHtml()}
  <main class="overflow-x-hidden pt-24 bg-white">
    <!-- Hero Home -->
    <section class="bg-indigo-950 text-white py-24 text-center relative overflow-hidden">
      <div class="container mx-auto px-4 max-w-5xl relative z-10">
        <span class="bg-primary/20 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest inline-block mb-6">Atendimento 24 Horas em Curitiba</span>
        <h1 class="text-5xl md:text-7xl font-display font-black tracking-tighter mb-6 uppercase">Desentupidora <br/><span class="text-primary">Curitiba</span></h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light font-sans">
          Resolvemos obstruções com preço pré-acordado e garantia. Atendemos residências, indústrias e comércio com equipamentos rotativos modernos de desobstrução, sucção e hidrojateamento de redes.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="tel:${COMPANY_PHONE.replace(/\D/g, '')}" class="bg-red-600 text-white font-black px-10 py-5 rounded-2xl shadow-xl uppercase text-sm">Ligar Agora</a>
          <a href="https://wa.me/${COMPANY_WHATSAPP}" class="bg-green-500 text-white font-black px-10 py-5 rounded-2xl shadow-xl uppercase text-sm">WhatsApp 24h</a>
        </div>
      </div>
    </section>
    
    <!-- Servicos Rápidos -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 max-w-6xl text-center">
        <h2 class="font-display text-4xl font-black mb-12">Nossos Serviços Especializados</h2>
        <div class="grid md:grid-cols-3 gap-8">
          ${SERVICES_DETAILED.map(s => `
            <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 text-left">
              <h3 class="font-display text-2xl font-bold mb-3">${s.title}</h3>
              <p class="text-sm text-gray-500 leading-relaxed font-light mb-6">${s.desc}</p>
              <a href="/servicos/${s.id}" class="text-xs text-primary font-black uppercase tracking-widest">Saber Mais &rarr;</a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    
    ${getContactFormHtml('Curitiba')}
  </main>
  ${getFooterHtml()}
`;

const renderedHome = buildPage('/', homeSeo, homeBodyHtml);
fs.writeFileSync(path.join(DIST_DIR, 'index.html'), renderedHome, 'utf-8');


// ==================== GENERATE SERVICES ====================
console.log(' - Renderizando Serviços Individuais e Técnico...');
SERVICES_DETAILED.forEach(service => {
  const servicePath = `/servicos/${service.id}`;
  const serviceTitle = `${service.title} Curitiba | ADP Desentupidora 24h`;
  const serviceDesc = `Serviço tático de ${service.title.toLowerCase()} em Curitiba. Atendimento imediato 24h comercial, residencial e industrial. Preço fixado no local.`;
  
  const serviceSeo = {
    title: serviceTitle,
    description: serviceDesc,
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.desc,
        "serviceType": service.title,
        "provider": {
          "@type": "LocalBusiness",
          "name": "ADP Desentupidora",
          "telephone": COMPANY_PHONE
        }
      }
    ]
  };

  const serviceBodyHtml = `
    ${getHeaderHtml()}
    <main class="overflow-x-hidden pt-24 bg-white">
      <section class="bg-dark text-white py-24 text-center">
        <div class="container mx-auto px-4 max-w-4xl">
          <span class="bg-primary/20 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest inline-block mb-6">Manutenção Profissional</span>
          <h1 class="text-5xl md:text-6xl font-display font-black tracking-tighter mb-6 uppercase">${service.title}</h1>
          <p class="text-xl text-gray-300 mb-8 font-light">${service.desc}</p>
          <a href="tel:${COMPANY_PHONE.replace(/\D/g, '')}" class="bg-red-600 text-white font-black px-10 py-5 rounded-2xl shadow-xl uppercase text-sm">Chamar Técnico 24h</a>
        </div>
      </section>
      
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4 max-w-4xl">
          <h2 class="text-3xl font-display font-bold mb-6">Especificação Técnica do Serviço</h2>
          <p class="text-gray-700 leading-relaxed mb-6 font-light">Nossos serviços de <strong>${service.title}</strong> são pautados pelo compromisso ambiental e rigor operacional. Utilizamos as ferramentas mais seguras que preservam os canos sem quebrar o encanamento, removendo o lodo, gordura sólida acumulada e bloqueios com total rapidez.</p>
          <p class="text-gray-700 leading-relaxed font-light mb-6">As causas mais comuns para este entupimento são o acúmulo de gordura que solidifica nas paredes do encanamento, descarte de resíduos de higiene inadequados nos vasos, ou obstruções provocadas por raízes ou detritos de construções. Nossas máquinas rotativas executam raspagem em curvas severas sem causar rachaduras.</p>
        </div>
      </section>
      
      ${getContactFormHtml(service.title)}
    </main>
    ${getFooterHtml()}
  `;

  const renderedService = buildPage(servicePath, serviceSeo, serviceBodyHtml);
  saveFile(`servicos/${service.id}`, renderedService);
});


// ==================== GENERATE HIDROJATEAMENTO (/servicos/hidrojateamento) ====================
console.log(' - Renderizando Hidrojateamento...');
const hydroSeo = {
  title: "Hidrojateamento Curitiba 24h | Desentupimento de Alta Pressão",
  description: "Equipamentos industriais táticos de hidrojateamento para redes de esgoto, galerias pluviais e colunas prediais. Atendimento 24h em Curitiba e Região.",
  structuredData: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Hidrojateamento de Alta Pressão",
      "name": "Serviço de Hidrojateamento Curitiba",
      "description": "Limpeza técnica profunda, desobstrução de encanamentos com hidrojateamento de alta pressão.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "ADP Desentupidora",
        "telephone": COMPANY_PHONE
      }
    }
  ]
};

const hydroBodyHtml = `
  ${getHeaderHtml()}
  <main class="overflow-x-hidden pt-24 bg-white">
    <section class="bg-primary text-white py-24 text-center">
      <div class="container mx-auto px-4 max-w-4xl">
        <h1 class="text-5xl font-display font-black uppercase mb-4">Hidrojateamento profissional</h1>
        <p class="text-xl opacity-90 font-light">A solução definitiva para obstruções pesadas em redes industriais, prediais e comerciais.</p>
      </div>
    </section>
    <section class="py-20">
      <div class="container mx-auto px-4 max-w-4xl">
        <h2 class="text-3xl font-display font-bold mb-6">Tecnologia por Trás da Alta Pressão</h2>
        <p class="text-gray-700 font-light leading-relaxed mb-6">Utilizando bombas pressurizadas de 5.000 a 25.000 PSI, pulverizamos pedras de gordura e resíduos cimentícios com total eficiência, desobstruindo galerias completas sem quebras.</p>
      </div>
    </section>
    ${getContactFormHtml('Hidrojateamento')}
  </main>
  ${getFooterHtml()}
`;
saveFile('servicos/hidrojateamento', buildPage('/servicos/hidrojateamento', hydroSeo, hydroBodyHtml));


// ==================== GENERATE LIMPEZA DE FOSSA (/servicos/limpeza-de-fossa) ====================
console.log(' - Renderizando Limpeza de Fossa...');
const fossaSeo = {
  title: "Limpeza de Fossa Séptica 24h - ADP Desentupidora Curitiba",
  description: "Esgotamento e limpeza profissional de fossas sépticas com caminhão vácuo em Curitiba e Região Metropolitana. Descarte certificado na Sanepar.",
  structuredData: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Limpeza de Fossa Séptica",
      "name": "Serviço de Limpa Fossa Curitiba",
      "provider": {
        "@type": "LocalBusiness",
        "name": "ADP Desentupidora",
        "telephone": COMPANY_PHONE
      }
    }
  ]
};

const fossaBodyHtml = `
  ${getHeaderHtml()}
  <main class="overflow-x-hidden pt-24 bg-white">
    <section class="bg-dark text-white py-24 text-center">
      <div class="container mx-auto px-4 max-w-4xl">
        <h1 class="text-5xl font-display font-black uppercase mb-4">Limpeza de Fossa Séptica</h1>
        <p class="text-xl opacity-80 font-light">Esgotamento completo de efluentes com caminhões táticos de auto vácuo e descarte em ETE certificadas.</p>
      </div>
    </section>
    ${getContactFormHtml('Limpeza de Fossa')}
  </main>
  ${getFooterHtml()}
`;
saveFile('servicos/limpeza-de-fossa', buildPage('/servicos/limpeza-de-fossa', fossaSeo, fossaBodyHtml));


// ==================== GENERATE FAQ (/faq) ====================
console.log(' - Renderizando FAQ (/faq)...');
const faqSeo = {
  title: "Perguntas Frequentes (FAQ) - Guia Completo ADP Desentupidora",
  description: "Tire suas dúvidas sobre serviços de desentupimento em Curitiba, preços, formas de pagamento, e responsabilidade civil em condomínios comerciais e residenciais.",
  structuredData: [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage"
    }
  ]
};

const faqBodyHtml = `
  ${getHeaderHtml()}
  <main class="overflow-x-hidden pt-24 bg-white">
    <section class="bg-dark text-white py-20 text-center">
      <div class="container mx-auto px-4 max-w-4xl">
        <h1 class="text-4xl md:text-5xl font-display font-black uppercase mb-4">Dúvidas Técnicas e FAQ</h1>
        <p class="text-lg text-gray-300 font-light">Entenda o funcionamento de orçamentos, garantias, e especificações de saneamento da ADP</p>
      </div>
    </section>
    ${getContactFormHtml('Auxílio FAQ')}
  </main>
  ${getFooterHtml()}
`;
saveFile('faq', buildPage('/faq', faqSeo, faqBodyHtml));


// ==================== GENERATE GLOSSARIO (/glossario) ====================
console.log(' - Renderizando Glossário (/glossario)...');
const glossSeo = {
  title: "Glossário e Termos Técnicos | ADP Desentupidora",
  description: "Entenda os principais termos de saneamento, desentupimento, hidrojateamento e esgotamento de fossas. Guia explicativo completo da ADP Curitiba."
};
const glossBodyHtml = `
  ${getHeaderHtml()}
  <main class="overflow-x-hidden pt-24 bg-lightGray">
    <section class="bg-dark text-white py-20 text-center">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-display font-black uppercase mb-4">Glossário de Saneamento</h1>
        <p class="text-gray-300">Entenda os termos técnicos aplicados pela equipe ADP no dia-a-dia</p>
      </div>
    </section>
    ${getContactFormHtml('Termos Técnicos')}
  </main>
  ${getFooterHtml()}
`;
saveFile('glossario', buildPage('/glossario', glossSeo, glossBodyHtml));


// ==================== GENERATE SITEMAP PAGE (/mapa-do-site) ====================
console.log(' - Renderizando Mapa do Site (/mapa-do-site)...');
const mapSeo = {
  title: "Mapa do Site | ADP Desentupidora Curitiba",
  description: "Navegue de forma clara pelas cidades, bairros e serviços integrados oferecidos pela ADP Saneamento no Paraná."
};
const mapBodyHtml = `
  ${getHeaderHtml()}
  <main class="overflow-x-hidden pt-24 bg-white">
    <section class="bg-dark text-white py-20 text-center">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-display font-black uppercase mb-4">Mapa de Páginas do Site</h1>
        <p class="text-gray-300">Encontre todas as localidades atendidas em Curitiba e Região Metropolitana</p>
      </div>
    </section>
  </main>
  ${getFooterHtml()}
`;
saveFile('mapa-do-site', buildPage('/mapa-do-site', mapSeo, mapBodyHtml));


// ==================== GENERATE LEGACY FILE (/desentupidora.html) ====================
console.log(' - Renderizando Arquivo Legado (/desentupidora.html)...');
const legacySeo = {
  title: "Desentupidora em Curitiba de Plantão | ADP",
  description: "Atendimento imediato e emergencial de desentupimento com preços imbatíveis táticos. Ligue agora mesmo 24 horas por dia."
};
saveFile('desentupidora', buildPage('/desentupidora.html', legacySeo, fossaBodyHtml));


// ==================== GENERATE ALL BAIRROS (/bairro/:slug) ====================
console.log(` - Cooperando com ${BAIRROS.length} bairros para geração de páginas de SEO Local...`);
BAIRROS.forEach(bairroName => {
  const slug = slugify(bairroName);
  const path = `/bairro/${slug}`;
  const title = `Desentupidora em ${bairroName} 24h | Atendimento Emergencial em ${bairroName}`;
  const desc = `Precisa de desentupidora em ${bairroName}? Atendimento tático imediato em 30 min com preço fechado justo. Visita gratuita. Ligue (41) 3345-1194 ou envie WhatsApp.`;

  const structuredLocal = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${COMPANY_SITE}${path}#localbusiness`,
    "name": `ADP Desentupidora ${bairroName}`,
    "url": `${COMPANY_SITE}${path}`,
    "telephone": COMPANY_PHONE,
    "logo": "https://img.desentopeadp.com.br/adp-desentupidora.webp",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "addressCountry": "BR"
    },
    "description": `Serviços profissionais e emergenciais de desentupimento 24 horas no bairro ${bairroName}, Curitiba.`,
    "areaServed": {
      "@type": "Neighborhood",
      "name": bairroName
    }
  };

  const bodyHtml = `
    ${getHeaderHtml()}
    <main class="bg-lightGray min-h-screen pt-24">
      <!-- Hero Bairro -->
      <section class="bg-indigo-950 text-white py-24 relative overflow-hidden">
        <div class="container mx-auto px-4 relative z-10 text-center lg:text-left max-w-5xl flex flex-col lg:flex-row items-center gap-10">
          <div>
            <span class="bg-primary/20 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest inline-block mb-4">Saneamento Técnico em Curitiba</span>
            <h1 class="text-4xl md:text-6xl font-display font-black tracking-tighter mb-4 uppercase">Desentupidora <br/><span class="text-primary">${bairroName}</span> 24h</h1>
            <p class="text-lg text-gray-300 mb-8 max-w-xl font-light">Equipes estratégicas motorizadas equipadas prontas para sanar qualquer entupimento hidráulico em <strong>${bairroName}</strong> imediatamente.</p>
            <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="tel:${COMPANY_PHONE.replace(/\D/g, '')}" class="bg-red-600 text-white font-black px-8 py-4 rounded-xl text-xs uppercase shadow-lg">Ligar Agora</a>
              <a href="#contato" class="bg-white/10 text-white border border-white/20 font-black px-8 py-4 rounded-xl text-xs uppercase hover:bg-white/20 transition-all">Orçamento Grátis</a>
            </div>
          </div>
          <div class="hidden lg:block w-96 h-96">
            <img src="https://img.desentopeadp.com.br/hero-adp.webp" alt="Encanador Profissional" class="w-full h-full object-cover rounded-2xl shadow-xl rotate-3" />
          </div>
        </div>
      </section>

      <!-- Grid Bairro -->
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 class="font-bold text-xl mb-4">Emergência 24h em ${bairroName}</h3>
              <p class="text-sm text-gray-500 font-light leading-relaxed">Permanecemos com viaturas posicionadas para deslocamento imediato em ${bairroName}, reduzindo o tempo de atendimento a apenas 30 minutos.</p>
            </div>
            <div class="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 class="font-bold text-xl mb-4">Tecnologia Especializada</h3>
              <p class="text-sm text-gray-500 font-light leading-relaxed font-sans">Aplicamos máquinas com cabos rotatitvos de aço flexível e hidrojato de alta pressão, removendo a sujeira sem romper a parede do tubo.</p>
            </div>
            <div class="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 class="font-bold text-xl mb-4">Garantia por Escrito</h3>
              <p class="text-sm text-gray-500 font-light leading-relaxed">Cada intervenção efetuada da ADP Saneamento no bairro ${bairroName} é emitida com certificado de garantia de 90 dias, proporcionando total apoio.</p>
            </div>
          </div>
        </div>
      </section>

      ${getContactFormHtml(bairroName)}
    </main>
    ${getFooterHtml()}
  `;

  saveFile(`bairro/${slug}`, buildPage(path, { title, description: desc, structuredData: [structuredLocal] }, bodyHtml));
});


// ==================== GENERATE ALL CIDADES (/cidade/:slug) ====================
console.log(` - Cooperando com ${CIDADES_RMC.length} cidades de RMC para geração de páginas de SEO Local...`);
CIDADES_RMC.forEach(cidadeName => {
  const slug = slugify(cidadeName);
  const path = `/cidade/${slug}`;
  const title = `Desentupidora em ${cidadeName} 24h | Atendimento Emergencial em ${cidadeName}`;
  const desc = `Serviços profissionais e emergenciais de desentupimento, hidrojateamento e limpeza de fossa em ${cidadeName}-PR. Unidade tática de plantão 24h. Ligue (41) 3345-1194.`;

  const structuredLocal = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${COMPANY_SITE}${path}#localbusiness`,
    "name": `ADP Desentupidora ${cidadeName}`,
    "url": `${COMPANY_SITE}${path}`,
    "telephone": COMPANY_PHONE,
    "logo": "https://img.desentopeadp.com.br/adp-desentupidora.webp",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cidadeName,
      "addressRegion": "PR",
      "addressCountry": "BR"
    },
    "description": `Serviços profissionais e emergenciais de desentupimento e limpa fossa em ${cidadeName}, Paraná.`,
    "areaServed": {
      "@type": "City",
      "name": cidadeName
    }
  };

  const bodyHtml = `
    ${getHeaderHtml()}
    <main class="bg-lightGray min-h-screen pt-24">
      <!-- Hero Cidade -->
      <section class="bg-indigo-950 text-white py-24 relative overflow-hidden">
        <div class="container mx-auto px-4 relative z-10 text-center lg:text-left max-w-5xl flex flex-col lg:flex-row items-center gap-10">
          <div>
            <span class="bg-primary/20 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest inline-block mb-4">Saneamento em Curitiba e RMC</span>
            <h1 class="text-4xl md:text-6xl font-display font-black tracking-tighter mb-4 uppercase">Desentupidora em <br/><span class="text-primary">${cidadeName}</span> 24h</h1>
            <p class="text-lg text-gray-300 mb-8 max-w-xl font-light">Dispomos de unidades móveis de efluentes estrategicamente localizadas prontas para atender residências e indústrias em <strong>${cidadeName}</strong>.</p>
            <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="tel:${COMPANY_PHONE.replace(/\D/g, '')}" class="bg-red-600 text-white font-black px-8 py-4 rounded-xl text-xs uppercase shadow-lg">Ligar Agora</a>
              <a href="#contato" class="bg-white/10 text-white border border-white/20 font-black px-8 py-4 rounded-xl text-xs uppercase hover:bg-white/20 transition-all">Orçamento Sem Taxas</a>
            </div>
          </div>
          <div class="hidden lg:block w-96 h-96">
            <img src="https://img.desentopeadp.com.br/hero-adp.webp" alt="Encanador Profissional" class="w-full h-full object-cover rounded-2xl shadow-xl -rotate-3" />
          </div>
        </div>
      </section>

      <!-- Grid Cidade -->
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 class="font-bold text-xl mb-4">Esgotamento Completo</h3>
              <p class="text-sm text-gray-500 font-light leading-relaxed">Caminhões auto vácuo de grande porte para limpeza de fossas e caixas de gordura de condomínios residenciais e comerciais em ${cidadeName}.</p>
            </div>
            <div class="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 class="font-bold text-xl mb-4">Tecnologia Avançada</h3>
              <p class="text-sm text-gray-500 font-light leading-relaxed font-sans">Nossos bicos técnicos e maquinários eletrônicos removem incrustações históricas no encanamento, sem necessitar quebrar calçadas em ${cidadeName}.</p>
            </div>
            <div class="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 class="font-bold text-xl mb-4">Certificação Sanepar</h3>
              <p class="text-sm text-gray-500 font-light leading-relaxed">Atuamos em total conformidade socioambiental, gerando manifestos de descarte fidedignos em ETE registradas da Sanepar.</p>
            </div>
          </div>
        </div>
      </section>

      ${getContactFormHtml(cidadeName)}
    </main>
    ${getFooterHtml()}
  `;

  saveFile(`cidade/${slug}`, buildPage(path, { title, description: desc, structuredData: [structuredLocal] }, bodyHtml));
});

// ==================== GENERATE SITEMAP.XML ====================
console.log(' - Gerando sitemap.xml automatizado com TODAS as URLs...');
let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Paginas Estaticas -->
  <url><loc>${COMPANY_SITE}/</loc><priority>1.0</priority><lastmod>2026-06-06</lastmod><changefreq>daily</changefreq></url>
  <url><loc>${COMPANY_SITE}/faq</loc><priority>0.8</priority><lastmod>2026-06-06</lastmod></url>
  <url><loc>${COMPANY_SITE}/glossario</loc><priority>0.8</priority><lastmod>2026-06-06</lastmod></url>
  <url><loc>${COMPANY_SITE}/mapa-do-site</loc><priority>0.7</priority><lastmod>2026-06-06</lastmod></url>
  <url><loc>${COMPANY_SITE}/galeria-ia</loc><priority>0.7</priority><lastmod>2026-06-06</lastmod></url>

  <!-- Paginas de Servicos -->
  <url><loc>${COMPANY_SITE}/servicos/hidrojateamento</loc><priority>0.9</priority><lastmod>2026-06-06</lastmod></url>
  <url><loc>${COMPANY_SITE}/servicos/limpeza-de-fossa</loc><priority>0.9</priority><lastmod>2026-06-06</lastmod></url>
`;

SERVICES_DETAILED.forEach(s => {
  sitemapXml += `  <url><loc>${COMPANY_SITE}/servicos/${s.id}</loc><priority>0.8</priority><lastmod>2026-06-06</lastmod></url>\n`;
});

sitemapXml += `\n  <!-- Bairros de Curitiba -->\n`;
BAIRROS.forEach(b => {
  sitemapXml += `  <url><loc>${COMPANY_SITE}/bairro/${slugify(b)}</loc><priority>0.6</priority><lastmod>2026-06-06</lastmod></url>\n`;
});

sitemapXml += `\n  <!-- Cidades Regiao Metropolitana -->\n`;
CIDADES_RMC.forEach(c => {
  sitemapXml += `  <url><loc>${COMPANY_SITE}/cidade/${slugify(c)}</loc><priority>0.7</priority><lastmod>2026-06-06</lastmod></url>\n`;
});

sitemapXml += `</urlset>\n`;

fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf-8');
fs.writeFileSync(path.join(ROOT_DIR, 'public', 'sitemap.xml'), sitemapXml, 'utf-8');
console.log(` ✅ sitemap.xml gerado com sucesso contendo ${BAIRROS.length + CIDADES_RMC.length + SERVICES_DETAILED.length + 7} URLs!`);

console.log('✅ Pré-renderização e geração de páginas concluídas com absoluto sucesso!');
