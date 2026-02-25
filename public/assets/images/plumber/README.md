# Plumber-Themed Image Assets

Este diretório contém imagens placeholder para o tema de encanador e desentupimento. Estas imagens devem ser substituídas por fotos reais otimizadas para melhor desempenho e SEO.

## 📁 Estrutura de Arquivos

Cada imagem possui 4 versões:

1. **Desktop JPG** (`*.jpg`) - Versão principal para desktops
2. **Desktop WebP** (`*.webp`) - Versão otimizada para navegadores modernos
3. **Mobile JPG** (`*@mobile.jpg`) - Versão otimizada para dispositivos móveis
4. **Mobile WebP** (`*@mobile.webp`) - Versão mobile otimizada para navegadores modernos

### Imagens Disponíveis:

- `hero-poster.*` - Imagem principal do hero/banner (1920x1080px desktop, 768x1024px mobile)
- `plumber-1.*` - Encanador profissional em ação (1200x800px desktop, 600x800px mobile)
- `plumber-2.*` - Encanador especializado em serviço (1200x800px desktop, 600x800px mobile)
- `drain-1.*` - Limpeza de ralos e desentupimento (1200x800px desktop, 600x800px mobile)
- `sink-1.*` - Reparo de pias e instalações (1200x800px desktop, 600x800px mobile)

## 🔄 Como Substituir por Imagens Reais

### 1. Prepare suas Imagens

**Requisitos de Qualidade:**
- Use fotos profissionais de alta resolução
- Certifique-se de que as imagens são autênticas (do seu negócio/equipe)
- Evite usar imagens genéricas de bancos de imagens
- Mantenha uma aparência consistente entre todas as fotos

**Temas Recomendados:**
- `hero-poster`: Caminhão da empresa, equipe ou serviço em destaque
- `plumber-1`: Encanador trabalhando em tubulações
- `plumber-2`: Encanador com ferramentas ou no local
- `drain-1`: Processo de desentupimento/hidrojateamento
- `sink-1`: Instalação ou reparo de pia/torneira

### 2. Otimize as Imagens

#### Dimensões Recomendadas:
- **Desktop:** 1920x1080px (hero) ou 1200x800px (demais)
- **Mobile:** 768x1024px (hero) ou 600x800px (demais)

#### Ferramentas de Otimização Online (Gratuitas):

1. **TinyPNG/TinyJPG** (https://tinypng.com/)
   - Excelente para comprimir JPG e PNG
   - Mantém boa qualidade visual
   - Reduz tamanho do arquivo em até 70%

2. **Squoosh** (https://squoosh.app/)
   - Ferramenta do Google para otimização
   - Suporta conversão para WebP
   - Controle fino sobre qualidade/tamanho

3. **CloudConvert** (https://cloudconvert.com/jpg-to-webp)
   - Conversão em lote JPG para WebP
   - Configurações avançadas disponíveis

#### Usando Linha de Comando (Para Desenvolvedores):

```bash
# Instalar ferramentas (Ubuntu/Debian)
sudo apt-get install imagemagick webp

# Redimensionar para desktop
convert original.jpg -resize 1200x800^ -gravity center -extent 1200x800 -quality 85 plumber-1.jpg

# Redimensionar para mobile
convert original.jpg -resize 600x800^ -gravity center -extent 600x800 -quality 85 plumber-1@mobile.jpg

# Converter para WebP
cwebp -q 85 plumber-1.jpg -o plumber-1.webp
cwebp -q 85 plumber-1@mobile.jpg -o plumber-1@mobile.webp
```

### 3. Configurações de Qualidade Recomendadas

- **JPG Quality:** 80-85% (bom equilíbrio entre qualidade e tamanho)
- **WebP Quality:** 80-85% (geralmente 25-35% menor que JPG)
- **Tamanho Máximo de Arquivo:**
  - Desktop: < 200KB por imagem
  - Mobile: < 100KB por imagem

### 4. Substitua os Arquivos

1. **Backup:** Faça backup dos placeholders originais (opcional)
2. **Substitua:** Copie suas imagens otimizadas para este diretório, mantendo os mesmos nomes
3. **Verifique:** Confirme que todas as 4 versões de cada imagem foram substituídas
4. **Teste:** Visualize em diferentes dispositivos e tamanhos de tela

```bash
# Exemplo de substituição (no terminal)
cd public/assets/images/plumber/

# Backup (opcional)
mkdir -p ../backup
cp *.{jpg,webp} ../backup/

# Copiar novas imagens
cp /caminho/para/suas/imagens/optimizadas/* .
```

## 🎨 Boas Práticas de Imagens Web

### SEO e Acessibilidade:
- Use nomes de arquivo descritivos e relevantes
- Sempre forneça texto alternativo (alt text) nas tags `<img>`
- Mantenha o tamanho dos arquivos pequeno para carregamento rápido

### Performance:
- **WebP é preferível:** Use WebP quando possível, com JPG como fallback
- **Lazy Loading:** Considere implementar carregamento preguiçoso para imagens abaixo da dobra
- **Responsive Images:** Use a tag `<picture>` ou `srcset` para servir imagens apropriadas

### Exemplo de Uso no HTML:

```html
<picture>
  <!-- WebP para navegadores modernos -->
  <source 
    media="(min-width: 768px)" 
    srcset="/assets/images/plumber/plumber-1.webp" 
    type="image/webp"
  >
  <source 
    media="(max-width: 767px)" 
    srcset="/assets/images/plumber/plumber-1@mobile.webp" 
    type="image/webp"
  >
  
  <!-- JPG como fallback -->
  <source 
    media="(min-width: 768px)" 
    srcset="/assets/images/plumber/plumber-1.jpg" 
    type="image/jpeg"
  >
  <source 
    media="(max-width: 767px)" 
    srcset="/assets/images/plumber/plumber-1@mobile.jpg" 
    type="image/jpeg"
  >
  
  <!-- Fallback final -->
  <img 
    src="/assets/images/plumber/plumber-1.jpg" 
    alt="Encanador profissional realizando reparo de tubulação"
    loading="lazy"
  >
</picture>
```

## 📊 Checklist de Otimização

- [ ] Imagens são autênticas e representam seu negócio
- [ ] Dimensões corretas para desktop e mobile
- [ ] Formato JPG e WebP para cada versão
- [ ] Qualidade de 80-85% aplicada
- [ ] Tamanho de arquivo otimizado (< 200KB desktop, < 100KB mobile)
- [ ] Nomes de arquivo mantidos conforme convenção
- [ ] Testado em diferentes dispositivos e navegadores
- [ ] Alt text descritivo adicionado no código HTML

## 🔗 Recursos Adicionais

- [Web.dev: Image Optimization](https://web.dev/fast/#optimize-your-images)
- [MDN: Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Google PageSpeed Insights](https://pagespeed.web.dev/) - Teste a velocidade do seu site
- [WebP Converter](https://developers.google.com/speed/webp) - Documentação oficial WebP

## 📝 Notas Importantes

1. **Direitos Autorais:** Certifique-se de que você possui os direitos de uso de todas as imagens
2. **Privacidade:** Obtenha consentimento de pessoas que aparecem nas fotos
3. **Consistência:** Mantenha um estilo visual consistente em todas as imagens
4. **Atualização:** Atualize as imagens periodicamente para manter o conteúdo fresco

---

**Última Atualização:** Dezembro 2025  
**Versão:** 1.0.0
