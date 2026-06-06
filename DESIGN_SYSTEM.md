# Sistema de Design Completo (Design System) - ADP Desentupidora

Este arquivo reúne todas as especificações visuais, padrões de tipografia, paleta de cores, espaçamentos e componentes de interface da **ADP Desentupidora Curitiba**. Ele serve como um mapa estético centralizado para que você revise a identidade visual e realize quaisquer atualizações ou correções de design.

---

## 🎨 1. Paleta de Cores (Color Palette)

A paleta de cores foi desenvolvida para transmitir **urgência extrema, confiabilidade técnica e forte contraste visual**, mantendo alta conformidade de acessibilidade tanto no modo claro quanto em seções com fundo escuro.

| Papel Visual | Nome do Token | Valor Hexadecimual | Uso Principal |
| :--- | :--- | :--- | :--- |
| **Principal (Primary)** | `primary` | `#9B111E` (Vermelho Rubi Profundo) | Botões de ação imediata, ícones de alerta, cabeçalhos de destaque. |
| **Secundária (Secondary)** | `secondary` | `#FFEBB3` (Bege Creme Suave) | Fundos secundários quentes, textos secundários de contraste. |
| **Destaque (Accent/Ink)** | `accent` / `ink` | `#FFC72C` (Amarelo Ouro Técnico) | Chamadas, badges, estrelas de avaliação técnica, badges de destaque. |
| **Escuro (Dark/Slate)** | `slate-900 / dark` | `#111111` / `#0F172A` | Backgrounds de alta imersão, rodapé, modo escuro. |
| **Cinza Claro (Light Gray)** | `lightGray` | `#FAF9F6` (Branco Off-white Nobre) | Fundos principais limpos, seções de texto corrido. |

---

## font 2. Tipografia (Typography) & Escala

A tipografia do site combina a fluidez moderna da família **Barlow** com o rigor técnico de **Inter**, proporcionando leitura confortável e alto impacto promocional.

*   **Fonte de Títulos (Display):** `'Barlow Condensed', sans-serif` — Para títulos (h1, h2, h3, h4) com peso Bold/Black (700 a 900), resultando em excelente estrutura vertical.
*   **Fonte de Apoio/Texto Corrido (SANS):** `'Barlow', 'Inter', sans-serif` — Para parágrafos, botões e legibilidade geral no mobile.

### Escala de Fontes (Variáveis CSS da `:root`)

```css
:root {
  --font-primary-family: 'Barlow', 'Inter', sans-serif;
  --font-secondary-family: 'Barlow Condensed', sans-serif;
  
  /* Tamanhos de Títulos */
  --text-h1: 3rem;              /* Desktop */
  --text-h1-mobile: 2.25rem;    /* Mobile */
  --text-h2: 2.25rem;           /* Desktop */
  --text-h2-mobile: 1.75rem;    /* Mobile */
  --text-h3: 1.75rem;           /* Desktop */
  --text-h3-mobile: 1.4rem;     /* Mobile */
  --text-h4: 1.35rem;           /* Desktop */
  --text-h4-mobile: 1.15rem;    /* Mobile */
  
  /* Textos de Apoio */
  --text-p: 1.05rem;            /* Desktop */
  --text-p-mobile: 0.95rem;     /* Mobile */
  --text-small: 0.875rem;       /* Avisos menores, legendas */
  --text-label: 0.75rem;        /* Subtítulos de tags e labels secundárias */
  
  /* Pesos e Linhas */
  --font-weight-title: 700;     /* Bold */
  --font-weight-body: 400;      /* Regular */
  --line-height-title: 1.1;     /* Títulos espremidos e agressivos */
  --line-height-body: 1.6;      /* Conforto na leitura dos parágrafos */
  --letter-spacing-uppercase: 0.08em; /* Elegância em termos em caixa alta */
}
```

---

## 📏 3. Espaçamentos, Gaps e Grades (Grid & Layout)

Para alcançar consistência rítmica ao longo do site, utilizamos unidades fixas e proporcionais:

```css
:root {
  --margin-title-subtitle: 1rem;       /* Margem inferior do título principal */
  --margin-subtitle-paragraph: 1.5rem;  /* Margem entre subtítulo secundário e corpo */
  --padding-section: 5.5rem;           /* Espaçamento interno de seções (Desktop) */
  --padding-section-mobile: 3rem;      /* Espaçamento interno de seções (Mobile) */
  --gap-cards: 2rem;                   /* Distância entre grades de cartões (Desktop) */
  --gap-cards-mobile: 1.25rem;         /* Distância entre grades de cartões (Mobile) */
  --padding-card: 2.5rem;              /* Espaço interno dos cards (Desktop) */
  --padding-card-mobile: 1.5rem;       /* Espaço interno dos cards (Mobile) */
}
```

---

## 🛠️ 4. Configurações Prontas em Código (Vapor JSON-LD / HTML / CSS)

As variáveis CSS acima estão inseridas no cabeçalho do arquivo `/index.html` e são herdadas por toda a aplicação React.

### Exemplo de Configuração Tailwind Extendida no Site (`index.html`):

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#9B111E',   // Vermelho Rubi
        secondary: '#FFEBB3', // Bege Creme
        dark: '#111111',      // Preto Grafite
        accent: '#FFC72C',    // Amarelo Destaque
        lightGray: '#FAF9F6'  // Off-white
      }
    }
  }
}
```

---

## ✏️ Como Realizar Correções de Design

Se desejar corrigir qualquer padrão visual:
1. **Para alterar Cores:** Modifique as constantes dentro de `tailwind.config` no `/index.html`.
2. **Para alterar Fontes ou Alturas:** Atualize os valores de `--text-` no seletor `:root` localizado no bloco `<style>` do `/index.html`.
3. **Para alterar Componentes Específicos:** Me responda listando a alteração desejada e eu irei ajustar cirurgicamente as classes CSS correspondentes!
