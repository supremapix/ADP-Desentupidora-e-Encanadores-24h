# ADP: identidade editorial

## Direção
Uma empresa local de serviço técnico, não uma plataforma de tecnologia. O layout usa tipografia condensada de grande escala, linhas divisórias, numeração de serviços e blocos de cor sóbria. Sem gradientes decorativos, brilho, contadores de credibilidade ou depoimentos inventados.

## Tokens
- Vermelho ADP: `#9b111e`.
- Papel: `#f5f2e9`.
- Grafite: `#242822`.
- Fundo de serviços: `#fffef9`.
- Linhas: `#d4d5c9`.
- Títulos: Barlow Condensed, 600–800.
- Texto: Barlow, 400–600. Controles de formulário com 16px para evitar zoom involuntário no celular.

Os tokens e o layout da página inicial ficam em `index.css`. Cabeçalho, rodapé e contatos fixos ficam em `components/SiteChrome.css`. Não adicionar um segundo conjunto de tokens inline ao `index.html`.

## Hierarquia
1. Problema e contato imediato.
2. Diretório dos oito serviços existentes, com links preservados.
3. Endereço e etapas do atendimento.
4. Bairros e cidades com links para páginas SEO existentes.
5. Dúvidas práticas.
6. Formulário que prepara a mensagem no WhatsApp, sem simular orçamento ou prazo de resposta.

## Imagens e afirmações
A imagem de tubulação vem de um ativo já utilizado pelo site e foi convertida para WebP. A legenda é descritiva e não atribui a instalação a uma obra da ADP. Ver `public/images/README.md`. Não utilizar imagens de procedência não documentada como prova de frota, equipe ou obra real. Novas fotografias devem ter autoria e contexto confirmados.

## Acessibilidade
- Menu acionável por teclado, fecha ao navegar, clicar fora ou usar Escape.
- Link de salto para o conteúdo; foco visível.
- FAQ com disclosure nativo (`details`/`summary`).
- Formulário com labels associados e indicação de que o usuário revisa/envia no WhatsApp.
- Sem animações permanentes; preferência por movimento reduzido respeitada.
- Contatos móveis acima da área segura do sistema e espaço correspondente no rodapé.

## Validação
- `npm ci`
- `npm run typecheck`
- `npm run build` (inclui a geração das 177 URLs SEO; o gerador existente também atualiza `public/sitemap.xml`).
- `npm run dev`

O TypeScript verifica a aplicação ativa da raiz, `components/` e `pages/`. A pasta antiga `src/` contém cópias incompletas não importadas pelo entrypoint e fica fora do programa de compilação, sem remover arquivos do histórico.

Antes de publicar, revisar em navegador a 390px, 768px e 1440px: menu/serviços/Escape, navegação e voltar, links de bairro, FAQ, campos obrigatórios, mensagem preparada no WhatsApp (não enviar durante QA), ausência de rolagem horizontal, foco e contraste. Também verificar páginas de serviço, cidade e bairro, além da home. Não confundir build aprovado com teste visual concluído.

## Compartilhamento e identidade nos navegadores
- `FloatingButtons.tsx` exporta FloatingActions: links de compartilhamento só abrem após clique; nenhuma postagem automática. Mensagem copiada inclui título atual e URL pública canônica, sem parâmetros privados de consulta.
- `https://www.desentopeadp.com.br/` respondeu 200 em 16/10/2026; o domínio sem www redirecionou para www. A prévia não é usada como URL pública de compartilhamento.
- OG JPEG em `/og-adp.jpg`, 1200×630, é ilustração de identidade (não fotografia de serviço). WhatsApp e outras redes buscam os metadados HTML; não é possível forçar o cache ou a apresentação final do aplicativo. A imagem só estará disponível no domínio canônico após aprovação e publicação em produção.
- Ícones seguem os formatos atuais documentados em https://realfavicongenerator.net/: SVG, PNG96, ICO, Apple Touch180 e manifest192/512. O ícone maskable é separado e tem margem de segurança. Não se afirma que o validador externo tenha sido executado.
- `npm run test:seo`, após o build, verifica metadados únicos e corretos nas 177 URLs, favicon e crédito. Imagens de favicon têm dimensões conferidas na geração.
- Referências de compartilhamento: https://developer.pinterest.com/docs/web-features/buttons/ ; https://faq.whatsapp.com/425247423114725/ ; https://learn.microsoft.com/en-us/linkedin/consumer/integrations/self-serve/plugins/share-plugin . Endpoints convencionais de Facebook/X/LinkedIn/Threads precisam de smoke test autenticado; não foram efetuadas postagens de teste.
