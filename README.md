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
- [Fotos de feiras e eventos](#fotos-de-feiras-e-eventos)
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
- Foto miniatura do tecido (carregamento lazy; substitui por "Foto em breve" se a imagem não existir)
- Nome e código do artigo
- **Composição** com porcentagem de cada componente em destaque
- **Gramatura** com barra de progresso proporcional ao range do catálogo
- Largura e ligamento
- Tags de segmento/linha
- Amostras de cor (até 9 bolinhas; as demais indicadas com "+N")

#### Carregamento progressivo de imagens
As fotos dos tecidos são carregadas em **três níveis** para equilibrar velocidade e qualidade:

| Nível | Arquivo | Tamanho médio | Quando carrega |
|---|---|---|---|
| Miniatura | `{código}-thumb.jpg` | ~20 KB | Grid de cards (automático, lazy) |
| Comprimida | `{código}.jpg` | ~93 KB | Ao abrir o modal do tecido |
| Original | `_backup_originais/{código}.jpg` | ~534 KB | Ao clicar na foto dentro do modal |

Ao clicar na foto dentro do modal aparece um hint **"Clique para ampliar"**. O clique abre o **lightbox** em tela cheia com a versão original em alta resolução.

#### Modal de detalhes
Clicar em qualquer card abre um modal com:
- Foto do tecido em tamanho médio (com opção de ampliar no lightbox)
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
- **No desktop:** pílulas coloridas com o nome do evento (truncado se necessário)
- **No mobile:** pontos coloridos compactos no lugar das pílulas (verde = feira, roxo = feriado, azul = outros)
- O dia atual recebe destaque especial: no desktop um fundo azul claro; no mobile um **círculo preenchido azul** ao redor do número
- Clicar em um dia com eventos abre um modal com todos os detalhes (nome, tipo, data, local e descrição)

#### Botão "Ver fotos" nos eventos de feira
Eventos com o campo `gallery: true` exibem um botão **"Ver fotos"** no modal. Ao clicar, o modal fecha e a aba **Fotos** abre automaticamente. Eventos com `gallery: false` exibem a nota *"Fotos ainda não adicionadas"*. Feriados e outros tipos não exibem nenhuma mensagem.

#### Lista de próximos eventos
Ao lado do calendário (abaixo no mobile) aparece uma lista dos próximos 15 eventos futuros em ordem cronológica. Clicar em um item abre o mesmo modal de detalhes.

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

Campo de busca em tempo real filtra por código, nome ou Pantone simultaneamente.

---

### Aba Fotos

Galeria em grid de fotos de feiras e eventos. Clicar em qualquer foto abre o **lightbox** diretamente em tela cheia com a imagem em qualidade original.

#### Lightbox
O lightbox é usado tanto para a galeria quanto para as fotos dos tecidos no modal:

- **Tela cheia** com fundo escuro
- **Setas laterais** `‹` e `›` para navegar entre fotos (apenas na galeria)
- **Contador** `1 / 17` no rodapé indicando a posição atual
- **Teclado** — `←` / `→` navega, `Esc` fecha
- **Swipe** no mobile — arrastar para o lado troca a foto
- **Spinner** de carregamento enquanto a imagem original é baixada
- Clicar no fundo escuro ou no botão `✕` fecha o lightbox

---

## Estrutura de arquivos

```
├── index.html                    # Estrutura completa da página (SPA de aba única)
├── style.css                     # Todos os estilos — responsivo, mobile-first
├── app.js                        # Toda a lógica da aplicação
├── data.js                       # Base de dados: tecidos, cores, eventos e galeria
├── icon.png                      # Logo exibida no cabeçalho
├── NA.png                        # Imagem para cores sem foto
│
├── [código].jpg                  # Foto comprimida do tecido — ex: 22.137.jpg
├── [código]-thumb.jpg            # Miniatura do tecido — ex: 22.137-thumb.jpg
│
├── febratextil-stand-00.jpg      # Fotos da galeria (comprimidas, ~1 MB cada)
├── febratextil-stand-01.jpg
├── febratextil-desfile-00.jpg
├── febratextil-[nome]-[n]-thumb.jpg  # Miniaturas da galeria (~50–120 KB)
│
└── _backup_originais/            # Originais dos tecidos para zoom de alta qualidade
    ├── 22.137.jpg                # (~534 KB por foto em média)
    └── ...
```

### Responsabilidade de cada arquivo

**`data.js`** — único arquivo editado no dia a dia. Contém:
- `fabrics[]` — array com todos os artigos do catálogo
- `colorData{}` — objeto com dados de cada cor (hex, nome, Pantone, imagem)
- `events[]` — array de eventos do calendário (inclui campo `gallery` para feiras)
- `galleryPhotos[]` — array de fotos da galeria
- `washingInstructions[]` — textos das instruções de lavagem

**`app.js`** — toda a lógica em uma IIFE. Principais seções:
- Estado da aplicação (`state`) centralizado num objeto único
- Filtragem (`filteredFabrics`) com suporte a todos os filtros combinados
- Renderização de cards com equalização de alturas por linha (`equalizeCardRows`)
- Dropdowns: segmento (seleção única) e composição/aplicação (multi-seleção com busca)
- Modal de tecido e modal de evento
- **Lightbox** com navegação, swipe e spinner
- Exportação CSV e PDF
- Calendário mensal, galeria e página de cores

**`style.css`** — organizado por seção com comentários. Usa variáveis CSS para consistência. Três breakpoints:
- `> 1024px` — desktop com sidebar lateral no calendário
- `≤ 768px` — mobile: filtros em bottom sheet arrastável, calendário compacto com pontos
- `≤ 480px` — ajustes finos para telas muito pequenas

---

## Como funciona por dentro

### Sistema de filtros
O estado de todos os filtros fica no objeto `state`. A função `filteredFabrics()` aplica cada filtro em sequência — se um artigo não passa em qualquer etapa, é excluído imediatamente. Os resultados são ordenados por código numérico.

Lógica de cada filtro:
- **Busca por texto** — `includes()` no nome e código normalizados (sem acento, minúsculo)
- **Segmento** — `Array.includes()` (um por vez)
- **Composição** — OR: basta o tecido conter **um** dos materiais selecionados
- **Gramatura** — intervalo numérico simples
- **Largura / Ligamento** — OR entre os valores selecionados via `Set`
- **Aplicação** — AND: o tecido deve contemplar **todas** as aplicações selecionadas
- **Cor** — busca o nome ou código em qualquer cor do array do artigo

### Carregamento progressivo de imagens
Cada foto de tecido existe em três versões. No card, a função `fabricThumbPath(code)` retorna `{code}-thumb.jpg`. No modal, `fabricImagePath(code)` retorna `{code}.jpg`. O clique na foto do modal chama `openLightbox(fabricOriginalPath(code))`, que aponta para `_backup_originais/{code}.jpg`.

Para as fotos da galeria, a miniatura é derivada automaticamente: `thumbSrc("foto.jpg")` → `"foto-thumb.jpg"`. O clique na galeria chama `openLightbox(src, allSrcs, index)` com o array completo para habilitar a navegação.

### Lightbox
Implementado com um overlay `position: fixed; z-index: 400` (acima do modal em z-index 200). O estado de navegação é mantido em `lbPhotos` (array de srcs) e `lbIndex` (posição atual). A função `lbNavigate(dir)` avança ou recua com wrap-around. Swipe é detectado por `touchstart/touchend` com threshold de 50 px.

### Alinhamento dos cards em grid
A função `equalizeCardRows()` agrupa os cards pela posição `getBoundingClientRect().top` e aplica `minHeight` uniforme nos elementos de composição e tags de cada linha. Chamada com `requestAnimationFrame` após o render e com debounce no `resize`.

### Bottom sheet de filtros (mobile)
No mobile (≤ 768 px), o painel de filtros posiciona-se na parte inferior da tela. Um listener `touchstart/touchmove/touchend` restringe o drag à faixa superior de 52 px (handle): arrastar mais de 80 px para baixo fecha o painel; caso contrário, volta à posição original.

### Exportação CSV
Usa a API `Blob` com UTF-8 + BOM para garantir compatibilidade com Excel. Separador `;` (padrão brasileiro). Cada artigo gera uma linha por cor; artigos com `colors: ["N/A"]` geram uma linha com "Sob consulta".

### Exportação PDF
Abre uma nova janela, injeta HTML com estilos inline otimizados para impressão e chama `window.print()` via `onload`. Sem dependência externa.

---

## Como adicionar ou editar dados

Toda edição é feita no arquivo **`data.js`**.

---

### Adicionar um tecido

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
  application: ["Vestuário", "Uniformes"],
  colors: ["0001 Branco", "0002 Preto"]  // ou ["N/A"] para sob consulta
}
```

> **Atenção:** os valores de `line`, `ligamento` e `application` viram opções automáticas nos filtros — use nomes idênticos aos já cadastrados para evitar duplicatas.

---

### Adicionar ou editar uma cor

```js
const colorData = {
  "0099": {
    name: "0099 - Verde Militar",   // Formato: "CÓDIGO - Nome"
    hex: "#4a5c3a",                 // Cor hexadecimal para fallback
    pantone: "7749 C",              // Código Pantone (ou "Não encontrado")
    img: "0099.png"                 // Imagem da amostra (ou null / "NA.png")
  }
};
```

---

### Adicionar um evento ao calendário

```js
{
  date: "2026-08-10",        // Formato AAAA-MM-DD
  type: "feira",             // Tipo: feira | feriado | lancamento | promocao | interno
  title: "Nome da Feira",
  location: "Cidade - UF",
  description: "Descrição...",
  gallery: true              // true = botão "Ver fotos" | false = "Fotos ainda não adicionadas"
                             // Omitir o campo em feriados e outros tipos
}
```

Para eventos com mais de um dia, cadastre uma entrada por dia com a mesma `title` e `location`.

---

### Adicionar fotos à galeria

```js
const galleryPhotos = [
  { src: "febratextil-stand-00.jpg",   caption: "FebraTêxtil 2026 — Estande Macias" },
  { src: "febratextil-desfile-00.jpg", caption: "FebraTêxtil 2026 — Desfile" },
];
```

Veja a seção [Fotos de feiras e eventos](#fotos-de-feiras-e-eventos) para instruções completas de nomeação e compressão.

---

## Imagens dos tecidos

As fotos dos artigos existem em três versões que precisam estar na raiz do repositório:

| Arquivo | Como gerar | Uso |
|---|---|---|
| `{código}.jpg` | Comprimido com Pillow (900 px, quality 82) | Modal do tecido |
| `{código}-thumb.jpg` | Comprimido com Pillow (400 px, quality 68) | Card na grade |
| `_backup_originais/{código}.jpg` | Original de câmera | Lightbox de alta qualidade |

**Exemplo:** artigo `22.137` → `22.137.jpg`, `22.137-thumb.jpg`, `_backup_originais/22.137.jpg`

Se a miniatura não existir, o card usa automaticamente a versão comprimida como fallback. Se nenhuma versão existir, exibe "Foto em breve".

### Script de compressão para novos tecidos

```python
from PIL import Image
import os

# Execute na pasta onde estão os arquivos originais
for filename in os.listdir('.'):
    if not filename.lower().endswith('.jpg'):
        continue
    img = Image.open(filename).convert('RGB')
    w, h = img.size
    code = os.path.splitext(filename)[0]

    # Versão comprimida (modal)
    if w > 900:
        img_med = img.resize((900, int(h * 900 / w)), Image.LANCZOS)
    else:
        img_med = img
    img_med.save(f'{code}.jpg', 'JPEG', quality=82, optimize=True)

    # Miniatura (card)
    if w > 400:
        img_th = img.resize((400, int(h * 400 / w)), Image.LANCZOS)
    else:
        img_th = img
    img_th.save(f'{code}-thumb.jpg', 'JPEG', quality=68, optimize=True)

    print(f'Gerado: {code}.jpg e {code}-thumb.jpg')
```

---

## Fotos de feiras e eventos

### Nomeação dos arquivos

Use o padrão `{evento}-{tipo}-{número}.jpg`, tudo em minúsculo, sem espaços ou acentos:

```
febratextil-stand-00.jpg
febratextil-stand-01.jpg
febratextil-desfile-00.jpg
febratextil-desfile-01.jpg
ondm-stand-00.jpg
```

Todos os arquivos ficam na **raiz do repositório** (mesma pasta do `index.html`).

### Miniaturas da galeria

Para cada foto da galeria também é necessário gerar uma miniatura com o sufixo `-thumb`:

```
febratextil-stand-00.jpg       ← exibida no lightbox (~1 MB)
febratextil-stand-00-thumb.jpg ← exibida na grade (~70 KB)
```

O site deriva o nome da miniatura automaticamente: se a miniatura não existir, usa a foto original como fallback.

### Script para gerar miniaturas e comprimir

Fotos de câmera profissional podem ter 20–36 MB — acima do limite de 25 MB do GitHub. Comprima sempre antes de subir:

```python
from PIL import Image
import os, glob

Image.MAX_IMAGE_PIXELS = None  # necessário para fotos de câmera profissional

for path in glob.glob("febratextil-*.jpg"):  # ajuste o padrão conforme o evento
    if "-thumb" in path:
        continue
    img = Image.open(path).convert("RGB")
    w, h = img.size

    # Original comprimida para o lightbox (max 2000 px)
    if w > 2000:
        img_full = img.resize((2000, int(h * 2000 / w)), Image.LANCZOS)
    else:
        img_full = img
    img_full.save(path, "JPEG", quality=88, optimize=True)

    # Miniatura para a grade (600 px)
    if w > 600:
        img_th = img.resize((600, int(h * 600 / w)), Image.LANCZOS)
    else:
        img_th = img
    name = os.path.splitext(path)[0]
    img_th.save(f"{name}-thumb.jpg", "JPEG", quality=72, optimize=True)

    print(f"{path}: {os.path.getsize(path)//1024} KB (thumb: {os.path.getsize(name+'-thumb.jpg')//1024} KB)")
```

> **Limite do GitHub:** arquivos acima de 25 MB são rejeitados. O script acima mantém as fotos em torno de 0,5–1,5 MB cada.

---

## Hospedagem no GitHub Pages

### Primeira publicação

1. Faça o upload de todos os arquivos para a branch `main` do repositório
2. No GitHub, acesse **Settings → Pages**
3. Em **Source**, selecione **Deploy from a branch**
4. Escolha o branch `main` e a pasta `/ (root)`
5. Clique em **Save**
6. Aguarde 1–2 minutos — o link do site aparecerá no topo da página

```
https://[seu-usuario].github.io/[nome-do-repositório]/
```

### Atualizações

Qualquer commit na branch `main` atualiza o site em 30–60 segundos. Se o navegador estiver com cache, use `Ctrl+Shift+R` para forçar o recarregamento.

### Repositório privado

GitHub Pages funciona em repositórios privados com plano pago (GitHub Pro, Teams ou Enterprise). Em contas gratuitas o repositório precisa ser público.

### Limite de tamanho de arquivo

O GitHub rejeita arquivos acima de **25 MB**. Comprima sempre as fotos antes de subir, especialmente fotos de câmera profissional.

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 semântico | Estrutura da página e acessibilidade (`aria-*`, `role`) |
| CSS3 com variáveis | Layout responsivo, animações, bottom sheet, lightbox |
| JavaScript ES6+ | Filtros, render, exportação, calendário, lightbox, modal |
| CSS Grid & Flexbox | Grade de cards, painel de filtros, calendário |
| Google Fonts (Inter) | Tipografia da interface |
| API Blob + createObjectURL | Exportação CSV sem servidor |
| window.print() | Exportação PDF sem biblioteca externa |
| Python + Pillow | Compressão e geração de miniaturas (pré-deploy) |

Nenhuma dependência de runtime além da fonte Google Fonts. Nenhum passo de build — o repositório é o próprio site.
