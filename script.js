const fabrics = [
  {
    name: "Tomahawk Bio-D",
    code: "51134",
    composition: [
      { material: "Poliamida 6.6", percentage: 100 }
    ],
    gramWeight: 140,
    line: ["UV 50+", "BIO-D"],
    ligamento: "Tela",
    application: ["Camisas para pesca", "Camisas cargo", "Bonés", "Chapéus", "Jaquetas", "Shorts", "Bermudas"],
    colors: ["0192 - Areia", "4236 - Cinza Fossil", "9999 - Preto"],
    image: "#"
  },
  {
    name: "Destroyer Bio-D",
    code: "51132",
    composition: [
      { material: "Poliamida 6.6", percentage: 100 }
    ],
    gramWeight: 108,
    line: ["BIO-D"],
    ligamento: "Tela",
    application: ["Camisas para pesca", "Camisas cargo", "Bonés", "Chapéus", "Jaquetas", "Shorts", "Bermudas"],
    colors: ["0001 - Branco", "0192 - Areia", "1204 - Verde Militar", "2261 - Azul Marinho", "3390 - Cinza Chumbo", "4236 - Cinza Fossil", "9999 - Preto"],
    image: "#"
  },
  {
    name: "Tomahawk",
    code: "51133",
    composition: [
      { material: "Poliamida 6.6", percentage: 100 }
    ],
    gramWeight: 143,
    line: ["UV 50+"],
    ligamento: "Tela",
    application: ["Camisas para pesca", "Camisas cargo", "Bonés", "Chapéus", "Jaquetas", "Shorts", "Bermudas"],
    colors: ["0001 - Branco", "2261 - Azul Marinho", "3390 - Cinza Chumbo", "4236 - Caqui Queimado", "4341 - Areia Avermelhada", "4676 - Caqui Médio", "4832 - Marrom Chocolate", "9999 - Preto"],
    image: "#"
  },
  {
  name: "Destroyer",
  code: "51131",
  composition: [
    { material: "Poliamida 6.6", percentage: 100 }
  ],
  gramWeight: 112,
  line: ["UV 50+"],
  ligamento: "Tela",
  application: ["Camisas para pesca", "Camisas cargo", "Bonés", "Chapéus", "Jaquetas", "Shorts", "Bermudas"],
  colors: ["0001 - Branco","1204 - Verde Militar","1399 - Verde Aventura","2015 - Azul Claro Acinzentado","2261 - Azul Marinho","2715 - Azul Estratosfera","2954 - Azul Jeans","3301 - Cinza Cimento Esverdeado","3390 - Cinza Chumbo","3381 - Prata Esverdeado","3665 - Cinza Rato","3676 - Cinza Cimento", "4243 - Palha Clarissimo","4247 - Caqui Fossil","4341 - Areia Avermelhada", "5581 - Vinho", "5787 - Rosa Clássico","9999 - Preto"],
    image: "#"
},
{
  name: "Mactel Elastic",
  code: "10177",
  composition: [
    { material: "Poliamida 6.6", percentage: 94 },
    { material: "Elastano", percentage: 6 }
  ],
  gramWeight: 130,
  line: ["Esportivos", "Elastizados", "Alfaiataria"],
  ligamento: "Tela",
  application: ["Shorts", "Bermudas", "Calças esportivas", "Jaquetas", "Coletes", "Bonés"],
  colors: ["1204 - Verde Militar", "2261 - Azul Marinho", "4244 - Caqui Escuro", "4341 - Areia Avermelhada", "9999 - Preto"],
    image: "#"
},
{
  name: "Mac Stretch Air",
  code: "10178",
  composition: [
    { material: "Poliamida 6.6", percentage: 91 },
    { material: "Elastano Lycra®", percentage: 9 }
  ],
  gramWeight: 172,
  line: ["Esportivos"],
  ligamento: "Tela",
  application: ["Shorts"],
  colors: ["1204 - Verde Militar", "2261 - Azul Marinho", "4244 - Caqui Escuro", "4341 - Areia Avermelhada", "9999 - Preto"],
    image: "#"
},
{
  name: "Mac Elastic Power",
  code: "10173",
  composition: [
    { material: "Poliamida 6.6", percentage: 80 },
    { material: "Elastano", percentage: 20 }
  ],
  gramWeight: 134,
  line: ["Esportivos", "Elastizados", "Alfaiataria"],
  ligamento: "Tela",
  application: ["Shorts", "Bermudas", "Calças esportivas", "Jaquetas", "Coletes", "Bonés"],
  colors: ["0372 - Off White", "1204 - Verde Militar", "2261 - Azul Marinho", "4244 - Caqui Escuro", "9999 - Preto"],
    image: "#"
},
{
  name: "Mac Piquet Elastic",
  code: "10050",
  composition: [
    { material: "Poliamida 6.6", percentage: 94 },
    { material: "Elastano", percentage: 6 }
  ],
  gramWeight: 98,
  line: ["Esportivos", "Elastizados", "Alfaiataria"],
  ligamento: "Maquinetado",
  application: ["Shorts", "Bermudas", "Calças esportivas", "Jaquetas", "Coletes", "Bonés"],
  colors: ["0372 - Off White", "1204 - Verde Militar", "2261 - Azul Marinho", "9999 - Preto"],
    image: "#"
},
{
  name: "Mac Ergonomic Flex",
  code: "20111",
  composition: [
    { material: "Poliéster", percentage: 92 },
    { material: "Elastano", percentage: 8 }
  ],
  gramWeight: 114,
  line: ["Esportivos", "Elastizados"],
  ligamento: "Tela",
  application: ["Shorts", "Bermudas", "Camisas", "Agasalhos"],
  colors: ["0001 - Branco", "2694 - Azul Marinho", "9999 - Preto"],
    image: "#"
},
{
  name: "Mac Stretch",
  code: "10166",
  composition: [
    { material: "Poliamida 6.6", percentage: 90 },
    { material: "Elastano", percentage: 10 }
  ],
  gramWeight: 125,
  line: ["Esportivos", "Elastizados"],
  ligamento: "Tela",
  application: ["Shorts", "Bermudas", "Camisas", "Agasalhos"],
  colors: ["0001 - Branco", "0372 - Off White", "1204 - Verde Militar", "2080 - Azul Marinho", "4174 - Marrom", "4244 - Caqui Escuro", "5581 - Vinho", "9999 - Preto"],
    image: "#"
},
{
  name: "Mac Sensil Flex",
  code: "50132",
  composition: [
    { material: "Poliamida 6.6", percentage: 70 },
    { material: "Elastomultiéster", percentage: 30 }
  ],
  gramWeight: 110,
  line: ["Esportivos", "Elastizados"],
  ligamento: "Tela",
  application: ["Bermudas", "Shorts", "Jaquetas leves"],
  colors: ["9989 - Preto Mescla"],
    image: "#"
},
{
  name: "Mac Puelon",
  code: "10163",
  composition: [
    { material: "Poliamida 6.6", percentage: 94 },
    { material: "Elastano", percentage: 6 }
  ],
  gramWeight: 106,
  line: ["Esportivos", "Elastizados"],
  ligamento: "Tela",
  application: ["Shorts", "Bermudas"],
  colors: ["0001 - Branco","0372 - Off White","1204 - Verde Militar","2261 - Azul Marinho","3375 - Chumbo Pirata","4244 - Caqui Escuro","5384 - Vermelho Batom", "9999 - Preto"],
    image: "#"
},
{
  name: "Mac Springy",
  code: "20101",
  composition: [
    { material: "Poliéster", percentage: 96 },
    { material: "Elastano", percentage: 4 }
  ],
  gramWeight: 96,
  line: ["Esportivos", "Elastizados"],
  ligamento: "Tela",
  application: ["Shorts", "Bermudas"],
  colors: ["0001 - Branco", "9999 - Preto"],
    image: "#"
},
{
  name: "Strike Elastic",
  code: "20420",
  composition: [
    { material: "Poliéster", percentage: 97 },
    { material: "Elastano", percentage: 3 }
  ],
  gramWeight: 135,
  line: ["Esportivos", "Elastizados"],
  ligamento: "Sarja",
  application: ["Shorts", "Bermudas"],
  colors: ["0001 - Branco","2222 - Azul Medieval","5010 - Vermelho Cereja", "9999 - Preto"],
    image: "#"
},
{
  name: "Mac Baggy Canele PET",
  code: "22133",
  composition: [
    { material: "Poliéster PET", percentage: 100 }
  ],
  gramWeight: 167,
  line: ["PET", "Pesados"],
  ligamento: "Canele",
  application: ["Calças", "Ecobags", "Jalecos"],
  colors: ["0001 - Branco", "9999 - Preto"],
    image: "#"
},
{
  name: "Mac Twill PET",
  code: "26250",
  composition: [
    { material: "Algodão", percentage: 54 },
    { material: "Poliéster PET", percentage: 46 }
  ],
  gramWeight: 174,
  line: ["Alfaiataria", "PET"],
  ligamento: "Sarja",
  application: ["Casacos", "Saias", "Calças", "Coletes", "Shorts"],
  colors: ["0372 - Off White", "9999 - Preto"],
    image: "#"
},
{
  name: "Mac Ecotel PET",
  code: "22137",
  composition: [
    { material: "Poliéster PET", percentage: 100 }
  ],
  gramWeight: 149,
  line: ["Esportivos", "PET"],
  ligamento: "Tela",
  application: ["Shorts", "Bermudas", "Camisas", "Agasalhos", "Bolsas", "Acessórios"],
  colors: ["0001 - Branco", "9999 - Preto"],
    image: "#"
},
{
  name: "Mac Baggy PET",
  code: "22134",
  composition: [
    { material: "Poliéster PET", percentage: 100 }
  ],
  gramWeight: 128,
  line: ["Esportivos", "PET"],
  ligamento: "Tela",
  application: ["Shorts", "Bermudas", "Camisas", "Agasalhos", "Bolsas", "Acessórios"],
  colors: ["Em análise"],
    image: "#"
},
{
  name: "Mac Canelon Bio-D",
  code: "16601",
  composition: [
    { material: "Algodão", percentage: 63 },
    { material: "Poliamida 6.6", percentage: 37 }
  ],
  gramWeight: 150,
  line: ["BIO-D","Esportivos","UV 50+","Alfaiataria"],
  ligamento: "Canele",
  application: ["Calças cargo", "Camisas cargo", "Jaquetas","Bermudas","Peças de alfaiataria casual"],
  colors: ["1204 - Verde Militar","2261 - Azul Marinho","4244 - Caqui Escuro", "9999 - Preto"],
    image: "#"
},
{
  name: "Camberra PET",
  code: "22244",
  composition: [
    { material: "Poliéster PET", percentage: 100 }
  ],
  gramWeight: 130,
  line: ["Esportivos", "PET"],
  ligamento: "Sarja",
  application: ["Shorts", "Bermudas", "Jaquetas"],
  colors: ["0001 - Branco", "2271 - Azul Marinho", "9999 - Preto"],
    image: "#"
},
{
  name: "Carmel PET",
  code: "22047",
  composition: [
    { material: "Poliéster PET", percentage: 100 }
  ],
  gramWeight: 101,
  line: ["Esportivos", "PET"],
  ligamento: "Maquinetado Rip Stop",
  application: ["Bermudas", "Shorts", "Jaquetas", "Forros de Jaquetas", "Forros de Bolsas"],
  colors: ["0001 - Branco", "2694 - Azul Marinho", "9999 - Preto"],
    image: "#"
},
{
  name: "Mac Sport Light PET",
  code: "22131",
  composition: [
    { material: "Poliéster PET", percentage: 100 }
  ],
  gramWeight: 83,
  line: ["Esportivos", "PET"],
  ligamento: "Tela",
  application: ["Bermudas", "Shorts", "Jaquetas", "Agasalhos Esportivos"],
  colors: ["0001 - Branco","2092 - Azul Marinho Noite","3668 - Cinza Claro", "9999 - Preto"],
    image: "#"
},
{
  name: "Mac PolCarb",
  code: "22279",
  composition: [
    { material: "Poliéster", percentage: 97 },
    { material: "Carbono", percentage: 3 }
  ],
  gramWeight: 115,
  line: ["Técnicos"],
  ligamento: "Sarja",
  application: ["Roupas profissionais com propriedade antiestática"],
  colors: ["0001 - Branco","1104 - Verde","1209 - Verde Bayou","2058 - Azul Claro Céu","2095 - Azul Crystal","2195 - Azul Petróleo","2203 - Azul Marinho","2220 - Azul Claro","2249 - Azul Royal","2858 - Azul Claro Alaka","3010 - Cinza","5079 - Rosa","5108 - Vermelho", "9999 - Preto"],
    image: "#"
},
{
  name: "Mac PolCo Carb",
  code: "26279",
  composition: [
    { material: "Algodão", percentage: 58},
    { material: "Poliéster", percentage: 40 },
    { material: "Carbono", percentage: 2 }
  ],
  gramWeight: 140,
  line: ["Técnicos"],
  ligamento: "Sarja",
  application: ["Roupas profissionais com propriedade antiestática"],
  colors: ["0001 - Branco","1104 - Verde","1209 - Verde Bayou","2058 - Azul Claro Céu","2095 - Azul Crystal","2195 - Azul Petróleo","2203 - Azul Marinho","2220 - Azul Claro","2249 - Azul Royal","2858 - Azul Claro Alaka","3010 - Cinza","5079 - Rosa","5108 - Vermelho", "9999 - Preto"],
    image: "#"
},
{
  name: "Macnyl 500",
  code: "11133",
  composition: [
    { material: "Poliamida 6.6", percentage: 100 }
  ],
  gramWeight: 213,
  line: ["Pesados"],
  ligamento: "Tela",
  application: ["Botas", "Coletes Balísticos", "Coturnos", "Malas", "Mochilas"],
  colors: ["N/A"],
    image: "#"
},
{
  name: "Macnyl 380 Diamond",
  code: "11052",
  composition: [
    { material: "Poliamida 6.6", percentage: 100 }
  ],
  gramWeight: 197,
  line: ["Pesados"],
  ligamento: "Maquinetado",
  application: ["Botas", "Coletes Balísticos", "Coturnos", "Malas", "Mochilas"],
  colors: ["N/A"],
    image: "#"
},
{
  name: "Macnyl 1000",
  code: "11132",
  composition: [
    { material: "Poliamida 6.6", percentage: 100 }
  ],
  gramWeight: 322,
  line: ["Pesados"],
  ligamento: "Tela",
  application: ["Botas", "Coletes Balísticos", "Coturnos", "Malas", "Mochilas"],
  colors: ["N/A"],
    image: "#"
},
{
  name: "Macnyl 500 Rip Stop",
  code: "11131",
  composition: [
    { material: "Poliamida 6.6", percentage: 100 }
  ],
  gramWeight: 246,
  line: ["Pesados"],
  ligamento: "Rip Stop",
  application: ["Botas", "Coletes Balísticos", "Coturnos", "Malas", "Mochilas"],
  colors: ["N/A"],
    image: "#"
},
{
  name: "New MacPol 600",
  code: "22601",
  composition: [
    { material: "Poliéster", percentage: 100 }
  ],
  gramWeight: 220,
  line: ["Pesados"],
  ligamento: "REPS",
  application: [
    "Bolsas","Malas","Pochetes","Mochilas","Coletes Balísticos","Jaquetas de Motoqueiro","Botas","Artigos Militares","Artigos de Aventura"
  ],
  colors: ["0001 - Branco", "9999 - Preto"],
    image: "#"
},
{
  name: "Macnyl 240",
  code: "11197",
  composition: [
    { material: "Poliamida 6", percentage: 100 }
  ],
  gramWeight: 122,
  line: ["Pesados"],
  ligamento: "Tela",
  application: ["Jaquetas", "Malas", "Bolsas", "Malotes"],
  colors: ["0001 - Branco", "2261 - Azul Marinho", "9999 - Preto"],
    image: "#"
},
{
  name: "New Camberra",
  code: "22234",
  composition: [
    { material: "Poliéster", percentage: 100 }
  ],
  gramWeight: 130,
  line: ["Esportivos"],
  ligamento: "Sarja",
  application: ["Shorts", "Bermudas", "Jaquetas"],
  colors: ["0001 - Branco","2271 - Azul Marinho", "9999 - Preto"],
    image: "#"
},
{
  name: "Macpower Rip Stop",
  code: "51189",
  composition: [
    { material: "Poliamida 6.6", percentage: 100 }
  ],
  gramWeight: 143,
  line: ["Esportivos"],
  ligamento: "Maquinetado Rip Stop",
  application: ["Calças", "Coletes", "Bermudas", "Shorts", "Bonés"],
  colors: ["1204 - Verde Militar","2261 - Azul Marinho", "9999 - Preto"],
    image: "#"
},
{
  name: "Mac Simbel",
  code: "22410",
  composition: [
    { material: "Poliéster", percentage: 100 }
  ],
  gramWeight: 112,
  line: ["Esportivos","Alfaiataria"],
  ligamento: "Tela",
  application: ["Shorts", "Bermudas"],
  colors: ["0001 - Branco","2092 - Azul Marinho Noite","3029 - Cinza Tradewinds", "9999 - Preto"],
    image: "#"
},
{
  name: "Mac Bambu",
  code: "16120",
  composition: [
    { material: "Poliamida 6.6", percentage: 43 },
    { material: "Algodão", percentage: 34 },
    { material: "Bambu", percentage: 23 }
  ],
  gramWeight: 102,
  line: ["Esportivos", "Origem Sustentável"],
  ligamento: "Tela",
  application: ["Shorts", "Bermudas", "Camisas", "Agasalhos"],
  colors: ["0001 - Branco","2513 - Azul Marinho","9999 - Preto"],
    image: "#"
},
{
  name: "Mac Swim",
  code: "22135",
  composition: [
    { material: "Poliéster", percentage: 100 }
  ],
  gramWeight: 138,
  line: ["Esportivos"],
  ligamento: "Tela",
  application: ["Jaquetas", "Bermudas", "Peças Esportivas em Geral"],
  colors: ["0001 - Branco", "9999 - Preto"],
    image: "#"
},
{
  name: "Dubai Opaco",
  code: "11169",
  composition: [
    { material: "Poliamida 6.6", percentage: 100 }
  ],
  gramWeight: 75,
  line: ["Esportivos"],
  ligamento: "Tela",
  application: ["Forros de Jaquetas", "Jaquetas", "Bolsas", "Shorts"],
  colors: ["0001 - Branco", "2238 - Azul Marinho", "9999 - Preto"],
    image: "#"
},
{
  name: "Waimea",
  code: "22039",
  composition: [
    { material: "Poliéster", percentage: 100 }
  ],
  gramWeight: 102,
  line: ["Esportivos"],
  ligamento: "Maquinetado Rip Stop",
  application: ["Jaquetas", "Forros de Jaquetas", "Forros de Bolsas"],
  colors: ["0001 - Branco","2060 - Turquesa","2694 - Azul Marinho", "9999 - Preto"],
    image: "#"
},
{
  name: "Mac Milão",
  code: "12197",
  composition: [
    { material: "Poliamida 6.6", percentage: 89 },
    { material: "Poliéster", percentage: 11 }
  ],
  gramWeight: 101,
  line: ["Esportivos"],
  ligamento: "Tela",
  application: ["Bermudas", "Shorts", "Jaquetas"],
  colors: ["0001 - Branco", "1204 - Verde Militar","4244 - Caqui Escuro","8208 - Preto","8209 - Lavanda"],
    image: "#"
},
{
  name: "Strike",
  code: "22420",
  composition: [
    { material: "Poliéster", percentage: 100 }
  ],
  gramWeight: 115,
  line: ["Esportivos"],
  ligamento: "Sarja",
  application: ["Bermudas", "Shorts", "Jaquetas", "Agasalhos Esportivos"],
  colors: ["0001 - Branco","0130 - Amarelo Ouro","2044 - Azul Royal Médio","2092 - Azul Marinho Noite","5527 - Vermelho Danger", "9999 - Preto"],
    image: "#"
},
{
  name: "Dubai",
  code: "51139",
  composition: [
    { material: "Poliamida 6.6", percentage: 100 }
  ],
  gramWeight: 74,
  line: ["Esportivos"],
  ligamento: "Tela",
  application: ["Forros de Jaquetas", "Jaquetas", "Bolsas", "Shorts"],
  colors: ["0001 - Branco","0541 - Amarelo Manteiga","1000 - Verde água Claro","1017 - Verde Lago","1764 - Verde Limão","2261 - Azul Marinho","2847 - Azul Acinzentado","2934 - Azul Navy","4123 - MOCHA MOUSSE","3381 - Prata Esverdeado","4243 - Palha Clarissimo","5025 - Rosa Fluor","5286 - Rosa Velho","5384 - Vermelho Batom","5665 - Vermelho Queimado","5810 - Rosa Chiclete","9999 - Preto"],
    image: "#"
},
{
  name: "Carmel",
  code: "22037",
  composition: [
    { material: "Poliéster", percentage: 100 }
  ],
  gramWeight: 101,
  line: ["Esportivos"],
  ligamento: "Maquinetado Rip Stop",
  application: ["Bermudas", "Shorts", "Jaquetas", "Forros de Jaquetas", "Forros de Bolsas"],
  colors: ["0001 - Branco","1013 - Amarelo Limão Fluor","2694 - Azul Marinho","4247 - Caqui Fossil","9999 - Preto"],
    image: "#"
},
{
  name: "Gol!!!",
  code: "22417",
  composition: [
    { material: "Poliéster", percentage: 100 }
  ],
  gramWeight: 84,
  line: ["Esportivos"],
  ligamento: "Tela",
  application: ["Bermudas", "Shorts", "Jaquetas", "Agasalhos Esportivos"],
  colors: ["0001 - Branco","2694 - Azul Marinho","5527 - Vermelho Danger", "9999 - Preto"],
    image: "#"
},
{
  name: "MacPol",
  code: "22139",
  composition: [
    { material: "Poliéster", percentage: 100 }
  ],
  gramWeight: 100,
  line: ["Esportivos"],
  ligamento: "Tela",
  application: ["Shorts", "Bermudas", "Jaquetas"],
  colors: ["0001 - Branco","2694 - Azul Marinho", "9999 - Preto"],
    image: "#"
},
{
  name: "MacPower",
  code: "51188",
  composition: [
    { material: "Poliamida 6.6", percentage: 100 }
  ],
  gramWeight: 138,
  line: ["Esportivos"],
  ligamento: "Tela",
  application: ["Shorts", "Bermudas", "Jaquetas"],
  colors: ["0001 - Branco","0372 - Off White","0130 - Amarelo Ouro","0192 - Areia","1013 - Amarelo Limão Fluor","1204 - Verde Militar","1913 - Evergreen","2014 - Azul Royal","2059 - Azul Piscina","2261 - Azul Marinho","4174 - Marrom","4244 - Caqui Escuro","4676 - Caqui Médio","5527 - Vermelho Danger","5581 - Vinho","5978 - Vermelho", "9999 - Preto"],
    image: "#"
},
{
  name: "MacTel",
  code: "11150",
  composition: [
    { material: "Poliamida 6.6", percentage: 100 }
  ],
  gramWeight: 108,
  line: ["Esportivos"],
  ligamento: "Tela",
  application: ["Shorts", "Bermudas", "Jaquetas"],
  colors: ["0001 - Branco","0372 - Off White","0199 - Areia Escuro","1204 - Verde Militar","1913 - Evergreen","2011 - Azul Petróleo","2014 - Azul Royal","2073 - Azul Royal Escuro","2261 - Azul Marinho","2500 - Azul Marinho Escuro","2847 - Azul Acinzentado","2954 - Azul Jeans","3345 - Cinza Rato","3351 - Cinza Médio Esverdeado","3375 - Chumbo Pirata","3624 - Cinza Claro","4004 - Ocre Biscut","4007 - Caramelo","4123 - MOCHA MOUSSE","4174 - Marrom","4244 - Caqui Escuro","4676 - Caqui Médio","5384 - Vermelho Batom","5527 - Vermelho Danger","5581 - Vinho","5810 - Rosa Chiclete","5978 - Vermelho","6267 - Roxo","7007 - Laranja Fluor","7131 - Laranja", "9999 - Preto"],
    image: "#"
},
{
  name: "Texas",
  code: "11163",
  composition: [
    { material: "Poliamida 6.6", percentage: 100 }
  ],
  gramWeight: 73,
  line: ["Esportivos"],
  ligamento: "Tela",
  application: ["#"],
  colors: ["0001 - Branco", "2261 - Azul Marinho", "9999 - Preto"],
    image: "#"
},
{
  name: "Xadrez 1x1",
  code: "12192",
  composition: [
    { material: "Poliamida 6.6", percentage: 53 },
    { material: "Poliéster", percentage: 47 }
  ],
  gramWeight: 95,
  line: ["Esportivos"],
  ligamento: "Tela",
  application: ["Bermudas", "Shorts", "Jaquetas"],
  colors: ["8000 - Laranja + Preto","8038 - Rosa Claro + Branco","9999 - Preto + Branco"],
    image: "#"
},
{
  name: "Veneza Mescla",
  code: "51149",
  composition: [
    { material: "Poliamida 6.6", percentage: 100 }
  ],
  gramWeight: 100,
  line: ["Esportivos"],
  ligamento: "Tela",
  application: ["Bermudas", "Shorts", "Jaquetas", "Agasalhos Esportivos"],
  colors: ["N/A"],
    image: "#"
},
{
  name: "Macnyl 70",
  code: "11158",
  composition: [
    { material: "Poliamida 6.6", percentage: 100 }
  ],
  gramWeight: 90,
  line: ["Esportivos"],
  ligamento: "Tela",
  application: ["Forros de Jaquetas", "Jaquetas", "Bolsas"],
  colors: ["N/A"],
    image: "#"
},
{
  name: "Mac Piquet",
  code: "11020",
  composition: [
    { material: "Poliamida 6.6", percentage: 100 }
  ],
  gramWeight: 105,
  line: ["Esportivos"],
  ligamento: "Maquinetado",
  application: ["Forros de jaquetas", "Jaquetas", "Bolsas", "Shorts", "Entre outros"],
  colors: ["0001 - Branco","9999 - Preto"],
  image: "#"
},
{
  name: "Aerofit",
  code: "11049",
  composition: [
    { material: "Poliamida 6.6", percentage: 100 }
  ],
  gramWeight: 72,
  line: ["Esportivos"],
  ligamento: "Rip Stop",
  application: ["Jaquetas corta vento", "Bolsas", "Entre outros"],
  colors: ["0001 - Branco","0011 - Amarelo Limão Fluor","1204 - Verde Militar","1764 - Verde Limão","2073 - Azul Royal Escuro","2261 - Azul Marinho","2715 - Azul Estratosfera","2910 - Azul Royal Claro","4676 - Caqui Médio","5025 - Rosa Fluor","5384 - Vermelho Batom","6419 - Roxo Maravilha","7007 - Laranja Fluor","7131 - Laranja","9999 - Preto"],
  image: "#"
},
{
  name: "Nylpar Rip Stop",
  code: "11198",
  composition: [
    { material: "Poliamida 6.6", percentage: 100 }
  ],
  gramWeight: 123,
  line: ["Esportivos"],
  ligamento: "Rip Stop",
  application: ["Jaquetas", "Bonés", "Calças", "Pochetes", "Acessórios"],
  colors: ["9999 - Preto"],
  image: "#"
}
];

const catalog = document.getElementById('catalog');
const compositionFilter = document.getElementById('compositionFilter');
const gramWeightFilter = document.getElementById('gramWeightFilter');
const lineFilter = document.getElementById('lineFilter');
const ligamentoFilter = document.getElementById('ligamentoFilter');
const applicationFilter = document.getElementById('applicationFilter');
const colorFilter = document.getElementById('colorFilter');
const searchInput = document.getElementById('searchInput');

function generateOptions() {
  compositionFilter.innerHTML = '<option value="">Composição</option>';
  gramWeightFilter.innerHTML = '<option value="">Gramatura</option>';
  lineFilter.innerHTML = '<option value="">Linha</option>';
  ligamentoFilter.innerHTML = '<option value="">Ligamento</option>';
  applicationFilter.innerHTML = '<option value="">Aplicação</option>';
  colorFilter.innerHTML = '<option value="">Cor</option>';

  const uniqueComps = [...new Set(fabrics.flatMap(f => f.composition.map(c => `${c.percentage}% ${c.material}`)))].sort();
  uniqueComps.forEach(m => {
    const option = document.createElement('option');
    option.value = m;
    option.textContent = m;
    compositionFilter.appendChild(option);
  });

  const uniqueGrams = [...new Set(fabrics.map(f => f.gramWeight))].sort((a, b) => a - b);
  uniqueGrams.forEach(g => {
    const option = document.createElement('option');
    option.value = g;
    option.textContent = `${g} g/m²`;
    gramWeightFilter.appendChild(option);
  });

  const uniqueLines = [...new Set(fabrics.flatMap(f => f.line))].sort();
  uniqueLines.forEach(l => {
    const option = document.createElement('option');
    option.value = l;
    option.textContent = l;
    lineFilter.appendChild(option);
  });

  const uniqueLigamentos = [...new Set(fabrics.map(f => f.ligamento))].sort();
  uniqueLigamentos.forEach(lig => {
    const option = document.createElement('option');
    option.value = lig;
    option.textContent = lig;
    ligamentoFilter.appendChild(option);
  });

  const uniqueApps = [...new Set(fabrics.flatMap(f => f.application))].sort();
  uniqueApps.forEach(a => {
    const option = document.createElement('option');
    option.value = a;
    option.textContent = a;
    applicationFilter.appendChild(option);
  });

  const uniqueColors = [...new Set(fabrics.flatMap(f => f.colors))].sort();
  uniqueColors.forEach(c => {
    const option = document.createElement('option');
    option.value = c;
    option.textContent = c;
    colorFilter.appendChild(option);
  });
}

generateOptions();

new Choices(compositionFilter, { searchEnabled: true, searchResultLimit: 0, maxItemCount: -1, itemSelectText: '' });
new Choices(gramWeightFilter, { searchEnabled: true, searchResultLimit: 0, maxItemCount: -1, itemSelectText: '' });
new Choices(lineFilter, { searchEnabled: true, searchResultLimit: 0, maxItemCount: -1, itemSelectText: '' });
new Choices(ligamentoFilter, { searchEnabled: true, searchResultLimit: 0, maxItemCount: -1, itemSelectText: '' });
new Choices(applicationFilter, { searchEnabled: true, searchResultLimit: 0, maxItemCount: -1, itemSelectText: '' });
new Choices(colorFilter, { searchEnabled: true, searchResultLimit: 0, maxItemCount: -1, itemSelectText: '' });

function displayFabrics(list) {
  catalog.innerHTML = "";
  if (list.length === 0) {
    catalog.innerHTML = "<p>Nenhum tecido encontrado.</p>";
    return;
  }

  let pageDiv = null;

  list.forEach((fabric, index) => {
    if (index  === 0) {
      pageDiv = document.createElement('div');
      pageDiv.className = 'page';
      catalog.appendChild(pageDiv);
    }

    const div = document.createElement('div');
    div.className = 'fabric';
    const compString = fabric.composition.map(c => `${c.percentage}% ${c.material}`).join(", ");
    const coresLista = fabric.colors.map(c => `<li>${c}</li>`).join('');

    div.innerHTML = `
      <img src="${fabric.code}.jpg" alt="${fabric.code}.jpg">
      <h3>${fabric.name}</h3>
      <p><strong>Código:</strong> ${fabric.code}</p>
      <p><strong>Composição:</strong> ${compString}</p>
      <p><strong>Gramatura:</strong> ${fabric.gramWeight} g/m²</p>
      <p><strong>Linha:</strong> ${fabric.line.join(", ")}</p>
      <p><strong>Ligamento:</strong> ${fabric.ligamento}</p>
      <p><strong>Aplicação:</strong> ${fabric.application.join(", ")}</p>
      <p><strong>Cores:</strong></p>
      <ul>${coresLista}</ul>
    `;

    pageDiv.appendChild(div);
  });
}

function salvarComoPDF() {
  window.print();
}

function filterFabrics() {
  const comp = compositionFilter.value;
  const gram = gramWeightFilter.value;
  const line = lineFilter.value;
  const ligamento = ligamentoFilter.value;
  const app = applicationFilter.value;
  const color = colorFilter.value;
  const search = searchInput.value.trim().toLowerCase();

  const filtered = fabrics.filter(fabric => {
    const compValues = fabric.composition.map(c => `${c.percentage}% ${c.material}`);
    const matchComp = comp === "" || compValues.includes(comp);
    const matchGram = gram === "" || fabric.gramWeight === Number(gram);
    const matchLine = line === "" || fabric.line.includes(line);
    const matchLig = ligamento === "" || fabric.ligamento === ligamento;
    const matchApp = app === "" || fabric.application.includes(app);
    const matchColor = color === "" || fabric.colors.includes(color);
    const matchSearch = search === "" || fabric.name.toLowerCase().includes(search) || fabric.code.toLowerCase().includes(search);

    return matchComp && matchGram && matchLine && matchLig && matchApp && matchColor && matchSearch;
  });

  displayFabrics(filtered);
}

compositionFilter.addEventListener('change', filterFabrics);
gramWeightFilter.addEventListener('change', filterFabrics);
lineFilter.addEventListener('change', filterFabrics);
ligamentoFilter.addEventListener('change', filterFabrics);
applicationFilter.addEventListener('change', filterFabrics);
colorFilter.addEventListener('change', filterFabrics);
searchInput.addEventListener('input', filterFabrics);

displayFabrics(fabrics);

document.getElementById('downloadPDF').addEventListener('click', () => {
  const element = document.getElementById('catalog');

  const images = element.getElementsByTagName('img');
  const promises = [];

  for (let img of images) {
    if (!img.complete) {
      promises.push(new Promise((resolve) => {
        img.onload = img.onerror = resolve;
      }));
    }
  }

  Promise.all(promises).then(() => {
    const opt = {
      margin: 0.5,
      filename: 'catalogo-tecidos.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().set(opt).from(element).save();
  });

});












