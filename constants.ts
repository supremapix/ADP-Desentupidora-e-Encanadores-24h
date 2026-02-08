
export const COMPANY_PHONE = "(41) 3345-1194";
export const COMPANY_MOBILE = "(41) 98517-1966";
export const COMPANY_WHATSAPP = "5541985171966";
export const COMPANY_EMAIL = "contato@desentopeadp.com.br";
export const COMPANY_SITE = "https://www.desentopeadp.com.br";
export const COMPANY_ADDRESS = "Rua Luiz Maltaca, 36 - CIC, Curitiba-PR";

// Utilitário para gerar slugs consistentes (ex: "Bocaiúva" -> "bocaiuva")
export const slugify = (text: string) => 
  text.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');

export const BAIRROS = [
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

export const CIDADES_RMC = [
  "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Araucária", "Balsa Nova", 
  "Bocaiúva do Sul", "Campina Grande do Sul", "Campo do Tenente", "Campo Largo", 
  "Campo Magro", "Cerro Azul", "Colombo", "Contenda", "Doutor Ulysses", "Fazenda Rio Grande", 
  "Itaperuçu", "Lapa", "Mandirituba", "Piên", "Pinhais", "Piraquara", "Quatro Barras", 
  "Quitandinha", "Rio Branco do Sul", "Rio Negro", "São José dos Pinhais", "Tijucas do Sul", 
  "Tunas do Paraná", "Curitiba"
];

export const SERVICES_LIST = [
  "Desentupimento de Pia",
  "Desentupimento de Ralo",
  "Desentupimento de Vaso Sanitário",
  "Desentupimento de Esgoto",
  "Limpeza de Caixa de Gordura",
  "Hidrojateamento",
  "Limpeza de Fossa",
  "Vídeo Inspeção",
  "Caça Vazamentos",
  "Desentupimento de Colunas",
  "Desentupimento de Tanque",
  "Desentupimento de Mictório"
];

export const SERVICES_DETAILED = [
  { id: "desentupimento-de-pia", title: "Desentupimento de Pia", desc: "Remoção de gordura e restos de alimentos com máquinas rotativas elétricas." },
  { id: "desentupimento-de-ralo", title: "Desentupimento de Ralo", desc: "Limpeza de ralos de banheiro e quintal obstruídos por cabelos e resíduos sólidos." },
  { id: "desentupimento-de-vaso", title: "Desentupimento de Vaso Sanitário", desc: "Desobstrução sem quebrar a louça, utilizando sondas flexíveis de alta performance." },
  { id: "desentupimento-de-esgoto", title: "Desentupimento de Esgoto", desc: "Soluções completas para redes coletoras e colunas de prédios." },
  { id: "limpeza-de-caixa-de-gordura", title: "Limpeza de Caixa de Gordura", desc: "Manutenção essencial para evitar mau cheiro e transbordamentos na cozinha." },
  { id: "hidrojateamento", title: "Hidrojateamento", desc: "Uso de alta pressão para limpeza pesada em tubulações industriais e galerias." },
  { id: "limpeza-de-fossa", title: "Limpeza de Fossa", desc: "Esgotamento com caminhão vácuo e descarte em estação de tratamento certificada." },
  { id: "video-inspecao", title: "Vídeo Inspeção", desc: "Localização precisa de problemas estruturais com câmeras de alta definição." }
];
