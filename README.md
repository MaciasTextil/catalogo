# Catálogo de Tecidos — Macias

Catálogo digital de tecidos técnicos desenvolvido inteiramente em **HTML, CSS e JavaScript puro** (sem frameworks ou dependências de build), hospedado via GitHub Pages. A ferramenta foi criada para que clientes e representantes possam consultar o portfólio completo de produtos, aplicar filtros combinados, visualizar cores com referência Pantone e exportar seleções em CSV ou PDF — tudo direto pelo navegador, inclusive no celular.

---

## Sumário

- [Demonstração](#demonstração)
- [Funcionalidades](#funcionalidades)
- [Estrutura de arquivos](#estrutura-de-arquivos)
- [Como funciona por dentro](#como-funciona-por-dentro)
- [Como adicionar ou editar dados](#como-adicionar-ou-editar-dados)
- [Imagens dos tecidos](#imagens-dos-tecidos)
- [Hospedagem no GitHub Pages](#hospedagem-no-github-pages)
- [Tecnologias](#tecnologias)

---

## Demonstração

O catálogo é dividido em cinco abas acessíveis pelo menu no topo da página:

| Aba | O que faz |
|---|---|
| **Tecidos** | Grade de produtos com filtros e exportação |
| **Eventos** | Calendário de feiras e feriados |
| **Vídeos** | Vídeos institucionais incorporados |
| **Cores** | Paleta completa de cores disponíveis |
| **Fotos** | Galeria de fotos de feiras e eventos |

---

## Funcionalidades

### Aba Tecidos

#### Busca e filtros
A barra de filtros sempre visível no topo oferece acesso rápido às opções mais usadas:

- **Campo de busca** — filtra em tempo real por nome do artigo ou código (ex: `22.137`, `Crepe`, `Ribana`)
- **Segmento** — menu suspenso de seleção única que lista todas as linhas de produto cadastradas. Exibe "Segmento" quando nenhum está selecionado
- **Composição** — menu suspenso com **multi-seleção** e caixa de busca interna. Lista todos os materiais presentes no portfólio (Poliamida, Poliéster, Viscose, Elastano, etc.). Ao selecionar mais de um, mostra tecidos que contenham **qualquer** um dos materiais escolhidos. O rótulo do botão muda conforme a seleção: `Composição` → `Poliamida` → `3 selecionadas`

Ao clicar em **Filtros** (ícone de sliders), um painel avançado abre com:

- **Gramatura (g/m²)** — intervalo com campos mínimo e máximo; mostra a faixa disponível no catálogo como dica
- **Largura (m)** — seleção múltipla por pílulas clicáveis com todos os valores cadastrados
- **Ligamento** — seleção múltipla por pílulas (Tafetá, Sarja, Malharia, etc.)
- **Aplicação** — menu suspenso multi-seleção com busca interna (Vestuário, Uniformes, Cama/Mesa/Banho, etc.)
- **Cor** — campo de texto livre; busca por nome da cor, código interno ou código Pantone

Todos os filtros podem ser combinados. Um **contador de filtros ativos** aparece sobre o botão. O botão **Limpar filtros** zera tudo de uma vez.

#### Cards de produto
Cada card exibe:
- Foto do tecido (carregamento lazy; substitui por "Foto em breve" se a imagem não existir)
- Nome e código do artigo
- **Composição** com porcentagem de cada componente em destaque
- **Gramatura** com barra de progresso proporcional ao range do catálogo
- Largura e ligamento
- Tags de segmento/linha
- Amostras de cor (até 9 bolinhas; as demais indicadas com "+N")

Clicar em qualquer card abre um **modal de detalhes** com:
- Foto ampliada
- Barras de composição proporcionais ao percentual de cada material
- Todos os dados técnicos (gramatura, largura, ligamento, segmentos, aplicações)
- Grade completa de cores com amostra visual, nome e código Pantone de cada uma
- Instruções de lavagem com ícones ilustrativos

#### Seleção e exportação
O botão **Selecionar** no canto superior direito ativa o modo de seleção:

- Clique em um card para selecioná-lo (borda azul + checkmark)
- Botão **Selecionar todos** seleciona todos os artigos visíveis (já filtrados)
- **Exportar CSV** — gera um arquivo `.csv` com ponto-e-vírgula como separador (compatível com Excel), codificado em UTF-8 com BOM. Cada linha corresponde a **uma cor** de um artigo, com as colunas: Código, Nome, Segmentos, Gramatura, Largura, Ligamento, Composição, Aplicações, Código Cor, Nome Cor, Pantone
- **Exportar PDF** — abre uma nova janela com layout de impressão otimizado e chama `window.print()` automaticamente. Cada artigo é exibido com todos os dados técnicos, composição formatada e lista de cores

---

### Aba Eventos

#### Calendário mensal
- Navegação por mês com botões `‹` e `›` e atalho **Hoje**
- Título no formato `Maio de 2026` (capitalização correta)
- Dias com eventos são destacados com fundo azul claro
- Cada dia exibe até 3 indicadores de evento; excedentes aparecem como `+N`
- **No desktop:** pílulas coloridas com o nome do evento (truncado)
- **No mobile:** pontos coloridos compactos no lugar das pílulas (verde = feira, roxo = feriado, azul = outros)
- O dia atual recebe destaque especial: no desktop um fundo azul claro; no mobile um **círculo preenchido azul** ao redor do número
- Clicar em um dia com eventos abre um modal com todos os detalhes (nome, tipo, data, local e descrição)

#### Lista de próximos eventos
Ao lado do calendário (abaixo no mobile) aparece uma lista dos próximos 15 eventos futuros em ordem cronológica, com tipo, data formatada, nome e local. Clicar em um item abre o mesmo modal de detalhes.

**Tipos de evento e cores:**

| Tipo | Cor | Descrição |
|---|---|---|
| `feira` | Verde | Feiras e exposições do setor têxtil |
| `feriado` | Roxo | Feriados nacionais e datas comemorativas |
| `lancamento` | Azul | Lançamentos de produtos |
| `promocao` | Laranja | Ações comerciais e promoções |
| `interno` | Cinza | Eventos internos da empresa |

---

### Aba Cores

Exibe todas as cores cadastradas no `colorData` de `data.js` com:
- Amostra visual da cor (imagem ou hex de fallback)
- Código interno
- Nome da cor
- Código Pantone correspondente

Campo de busca em tempo real filtra por código, nome ou Pantone simultaneamente. Contador mostra quantas cores estão visíveis.

---

### Aba Fotos

Galeria em grid de fotos de feiras, eventos ou qualquer imagem que a empresa queira disponibilizar. Clicar em uma foto a abre em modal ampliado com legenda. As fotos são adicionadas pelo array `galleryPhotos` em `data.js`.

---

## Estrutura de arquivos

```
├── index.html          # Estrutura completa da página (SPA de aba única)
├── style.css           # Todos os estilos — responsivo, mobile-first
├── app.js              # Toda a lógica da aplicação (filtros, render, modal, export)
├── data.js             # Base de dados: tecidos, cores, eventos e galeria
├── icon.png            # Logo exibida no cabeçalho
├── NA.png              # Imagem usada para cores sem foto (xadrez/não encontrado)
└── [código].jpg        # Fotos dos tecidos — ex: 22.137.jpg, 11.115.jpg
```

### Responsabilidade de cada arquivo

**`data.js`** — é o único arquivo que a equipe precisará editar no dia a dia. Contém:
- `fabrics[]` — array com todos os artigos do catálogo
- `colorData{}` — objeto com dados de cada cor (hex, nome, Pantone, imagem)
- `events[]` — array de eventos do calendário
- `galleryPhotos[]` — array de fotos da galeria
- `washingInstructions[]` — textos das instruções de lavagem (aplicadas a todos os artigos)

**`app.js`** — toda a lógica em uma IIFE (função auto-executada). Principais seções:
- Estado da aplicação (`state`) centralizado num objeto único
- Funções de filtragem (`filteredFabrics`) com suporte a todos os filtros combinados
- Renderização de cards (`renderCard`, `renderGrid`) com equalização de alturas por linha (`equalizeCardRows`)
- Dropdowns reutilizáveis: segmento (seleção única) e composição/aplicação (multi-seleção com busca)
- Modal de tecido e modal de evento
- Exportação CSV (Blob + URL temporária) e PDF (nova janela + `window.print`)
- Calendário com navegação mensal e renderização de células
- Galeria e página de cores

**`style.css`** — organizado por seção com comentários. Usa variáveis CSS (`--primary`, `--accent`, `--bg`, etc.) para manter consistência. Três breakpoints:
- `> 1024px` — layout desktop com sidebar lateral no calendário
- `≤ 768px` — mobile: painel de filtros vira bottom sheet arrastável, calendário compacto com pontos
- `≤ 480px` — ajustes finos para telas muito pequenas

---

## Como funciona por dentro

### Sistema de filtros
O estado de todos os filtros fica no objeto `state`. A função `filteredFabrics()` aplica cada filtro em sequência — se um artigo não passa em qualquer etapa, é excluído imediatamente (`return false`). Os resultados são sempre ordenados por código numérico do artigo.

A lógica de cada filtro:
- **Busca por texto** — `includes()` no nome e código normalizados (sem acento, minúsculo)
- **Segmento** — `Array.includes()` (um segmento por vez)
- **Composição** — OR: basta o tecido conter **um** dos materiais selecionados
- **Gramatura** — intervalo numérico simples
- **Largura / Ligamento** — OR entre os valores selecionados via `Set`
- **Aplicação** — AND: o tecido deve contemplar **todas** as aplicações selecionadas
- **Cor** — busca o nome ou código em qualquer cor do array do artigo

### Alinhamento dos cards em grid
Como os cards têm alturas variáveis (composições com 2 a 5 linhas, por exemplo), a função `equalizeCardRows()` agrupa os cards pela posição vertical (`getBoundingClientRect().top`) e aplica `minHeight` uniforme nos elementos `.comp-value` e `.card-lines` de cada linha. É chamada com `requestAnimationFrame` após o render e com debounce no `resize`.

### Bottom sheet de filtros (mobile)
No mobile (≤ 768 px), o painel de filtros avançados posiciona-se na parte inferior da tela como um *bottom sheet*. Implementado com `position: fixed; bottom: 0` e transição CSS. Um listener `touchstart/touchmove/touchend` restringe o drag à faixa superior (handle) de 52 px: se o usuário arrastar mais de 80 px para baixo, o painel fecha; caso contrário, volta à posição original. O scroll da página é bloqueado (`overflow: hidden`) enquanto o painel está aberto.

### Exportação CSV
Usa a API `Blob` com codificação UTF-8 + BOM (`﻿`) para garantir que o Excel abra com acentos corretos. O separador é `;` (padrão brasileiro no Excel). Cada artigo gera uma linha por cor; artigos com `colors: ["N/A"]` geram uma única linha com "Sob consulta".

### Exportação PDF
Abre uma nova janela (`window.open`), injeta um HTML completo com estilos inline otimizados para impressão (`@media print`, `page-break-inside: avoid`) e chama `window.print()` via `onload`. Não depende de biblioteca externa.

---

## Como adicionar ou editar dados

Toda edição é feita no arquivo **`data.js`**. Não é necessário mexer em `app.js` ou `index.html` para manutenção do conteúdo.

---

### Adicionar um tecido

Abra `data.js` e adicione um novo objeto ao array `fabrics`:

```js
{
  code: "22.999",               // Código único do artigo (string)
  name: "Nome do Artigo",       // Nome comercial completo
  line: ["Linha A", "Linha B"], // Um ou mais segmentos/linhas de produto
  gramWeight: 180,              // Gramatura em g/m² (número inteiro)
  width: 1.60,                  // Largura em metros (número decimal)
  ligamento: "Tafetá",          // Ligamento/estrutura do tecido
  composition: [
    { material: "Poliéster", percentage: 70 },
    { material: "Viscose",   percentage: 30 }
    // Os percentuais devem somar 100
  ],
  application: ["Vestuário", "Uniformes"], // Array de aplicações
  colors: ["0001 Branco", "0002 Preto"]    // Códigos de cor cadastrados em colorData
  // Para artigos sob consulta: colors: ["N/A"]
}
```

> **Atenção:** os valores de `line`, `ligamento` e `application` viram opções automáticas nos filtros — use nomes idênticos aos já cadastrados para evitar duplicatas.

---

### Adicionar ou editar uma cor

No objeto `colorData` em `data.js`, cada chave é o código da cor:

```js
const colorData = {
  // ...
  "0099": {
    name: "0099 - Verde Militar",   // Formato: "CÓDIGO - Nome"
    hex: "#4a5c3a",                 // Cor hexadecimal para fallback
    pantone: "7749 C",              // Código Pantone (ou "Não encontrado")
    img: "0099.png"                 // Imagem da amostra (ou null / "NA.png")
  }
};
```

Para que uma cor apareça no catálogo, ela precisa estar no `colorData` **e** referenciada no campo `colors` de pelo menos um tecido.

---

### Adicionar um evento ao calendário

No array `events` em `data.js`:

```js
{
  date: "2026-08-10",           // Data no formato AAAA-MM-DD
  type: "feira",                // Tipo (veja tabela de tipos acima)
  title: "Nome da Feira",       // Nome exibido no calendário e na lista
  location: "Cidade - UF",      // Local do evento (exibido no modal)
  description: "Descrição..."   // Texto explicativo exibido no modal
}
```

Para eventos com mais de um dia (como uma feira de 3 dias), cadastre uma entrada por dia com a mesma `title` e `location`, ajustando a `date` e a `description` de cada dia.

---

### Adicionar fotos à galeria

No array `galleryPhotos` em `data.js`:

```js
const galleryPhotos = [
  { src: "fotos/foto1.jpg", caption: "FebraTêxtil 2026 — estande Macias" },
  { src: "fotos/foto2.jpg", caption: "Lançamento da coleção outono/inverno" },
  { src: "fotos/foto3.jpg", caption: "" } // sem legenda
];
```

Crie uma pasta `fotos/` no repositório e suba as imagens para ela. As fotos são exibidas em grid responsivo e podem ser abertas em modal ao clicar.

---

## Imagens dos tecidos

As fotos dos artigos devem:
1. Estar no **formato JPG**
2. Ser nomeadas com o **código exato do artigo** (igual ao campo `code` em `data.js`)
3. Ficar na **raiz do repositório** (mesma pasta do `index.html`)

**Exemplo:** artigo `code: "22.137"` → arquivo `22.137.jpg`

Se a imagem não for encontrada, o card exibe automaticamente um placeholder com o texto "Foto em breve" — nenhuma mensagem de erro é exibida ao usuário.

### Otimização de imagens

Antes de subir as fotos para o GitHub, é fortemente recomendado comprimi-las. Imagens originais de câmera podem ter 3–8 MB cada; comprimidas ficam em torno de 80–150 KB, tornando o catálogo muito mais rápido no celular.

Usando Python + Pillow:

```python
from PIL import Image
import os

for filename in os.listdir('.'):
    if filename.lower().endswith('.jpg'):
        img = Image.open(filename)
        img = img.convert('RGB')
        w, h = img.size
        if w > 900:
            img = img.resize((900, int(h * 900 / w)), Image.LANCZOS)
        img.save(filename, 'JPEG', quality=82, optimize=True)
        print(f'Comprimido: {filename}')
```

Execute o script na pasta onde estão as imagens. As fotos são sobrescritas no lugar (faça backup antes se necessário).

---

## Hospedagem no GitHub Pages

### Primeira publicação

1. Faça o upload de todos os arquivos para a branch `main` do repositório
2. No GitHub, acesse **Settings → Pages**
3. Em **Source**, selecione **Deploy from a branch**
4. Escolha o branch `main` e a pasta `/ (root)`
5. Clique em **Save**
6. Aguarde 1–2 minutos — o link do site aparecerá no topo da página

O endereço será no formato:
```
https://[seu-usuario].github.io/[nome-do-repositório]/
```

### Atualizações

Qualquer commit na branch `main` recarrega o site automaticamente. A atualização leva cerca de 30–60 segundos para aparecer. Se o navegador estiver com cache, use `Ctrl+Shift+R` (ou `Cmd+Shift+R` no Mac) para forçar o recarregamento.

### Repositório privado

GitHub Pages funciona em repositórios privados em contas com plano pago (GitHub Pro, Teams ou Enterprise). Em contas gratuitas, o repositório precisa ser público para usar Pages.

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 semântico | Estrutura da página e acessibilidade (`aria-*`, `role`) |
| CSS3 com variáveis | Layout responsivo, animações, bottom sheet mobile |
| JavaScript ES6+ | Filtros, render, exportação, calendário, modal |
| CSS Grid & Flexbox | Grid de cards, painel de filtros, calendário |
| Google Fonts (Inter) | Tipografia da interface |
| API Blob + URL.createObjectURL | Exportação CSV sem servidor |
| window.print() | Exportação PDF sem biblioteca externa |

Nenhuma dependência externa além da fonte Google Fonts. Nenhum passo de build necessário — o repositório é o próprio site.
