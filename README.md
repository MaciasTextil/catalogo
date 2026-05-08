# Catálogo de Tecidos — Macias

Catálogo digital de tecidos técnicos desenvolvido em HTML, CSS e JavaScript puro, hospedado via GitHub Pages. Permite que clientes e representantes consultem o portfólio completo de produtos com filtros avançados, exportação de dados e muito mais.

---

## Funcionalidades

### Tecidos
- **Busca** por nome ou código do artigo
- **Filtro por Segmento** (linha de produto)
- **Filtro por Composição** com multi-seleção (Poliamida, Poliéster, Viscose, etc.)
- **Filtros avançados:** gramatura, largura, ligamento, aplicação e cor
- **Cards** com foto, composição, gramatura (barra visual), largura, ligamento e cores disponíveis
- **Modal de detalhes** com barras de composição, paleta de cores completa com Pantone e instruções de lavagem

### Exportação
- **CSV** — exporta os tecidos selecionados com uma linha por cor, incluindo código, nome e Pantone
- **PDF** — gera um documento formatado pronto para impressão

### Eventos
- **Calendário mensal** com feriados nacionais e feiras do setor
- **Lista de próximos eventos** com tipo, data e local
- Modal de detalhes ao clicar num evento

### Outras abas
- **Vídeos** — incorporação de vídeos institucionais
- **Cores** — paleta completa com busca por código, nome ou Pantone
- **Fotos** — galeria de imagens de feiras e eventos

---

## Estrutura de arquivos

```
├── index.html       # Estrutura da página
├── style.css        # Estilos (responsivo, mobile-first)
├── app.js           # Lógica da aplicação
├── data.js          # Dados dos tecidos, cores e eventos
├── icon.png         # Logo exibida no cabeçalho
├── NA.png           # Placeholder para cores sem imagem
└── *.jpg            # Fotos dos tecidos (nomeadas pelo código do artigo)
```

---

## Como adicionar ou editar dados

Toda edição é feita no arquivo **`data.js`**.

### Adicionar um tecido

```js
{
  code: "22.999",
  name: "Nome do Artigo",
  line: ["Linha A", "Linha B"],         // segmentos
  gramWeight: 180,                       // g/m²
  width: 1.60,                           // metros
  ligamento: "Tafetá",
  composition: [
    { material: "Poliéster", percentage: 70 },
    { material: "Viscose",   percentage: 30 }
  ],
  application: ["Vestuário", "Uniformes"],
  colors: ["0001 Branco", "0002 Preto"]  // ou ["N/A"] para sob consulta
}
```

### Adicionar um evento

```js
{ date: "2026-08-10", type: "feira", title: "Nome da Feira",
  location: "Local do evento", description: "Descrição." }
```

Tipos disponíveis: `feira` · `feriado` · `lancamento` · `promocao` · `interno`

### Adicionar fotos à galeria

No array `galleryPhotos` em `data.js`:

```js
const galleryPhotos = [
  { src: "fotos/foto1.jpg", caption: "Legenda opcional" },
  { src: "fotos/foto2.jpg", caption: "" }
];
```

---

## Imagens dos tecidos

As fotos dos artigos devem ser nomeadas com o **código exato do tecido** seguido de `.jpg` e colocadas na raiz do projeto.

Exemplo: código `22.999` → arquivo `22.999.jpg`

Se a imagem não for encontrada, o card exibe "Foto em breve" automaticamente.

> **Dica:** para reduzir o tamanho das imagens antes de subir, use o script Python com Pillow (redimensiona para 900 px e comprime com qualidade 82).

---

## Hospedagem no GitHub Pages

1. Suba todos os arquivos para o repositório
2. Vá em **Settings → Pages**
3. Selecione o branch `main` e a pasta `/ (root)`
4. Aguarde alguns segundos — o site estará disponível no link gerado

---

## Tecnologias

- HTML5 · CSS3 · JavaScript ES6+ (sem frameworks)
- Google Fonts — Inter
- 100% compatível com GitHub Pages (sem build step)
