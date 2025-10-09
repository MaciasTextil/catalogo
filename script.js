const fabrics = [
  {
    name: "Tomahawk Bio-D",
    code: "51134",
    composition: [
      { material: "Poliamida 6.6", percentage: 100 }
    ],
    gramWeight: 140,
    width: 1.50,
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
    width: 1.50,
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
    width: 1.50,
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
  width: 1.50,
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
    { material: "Elastano Lycra®", percentage: 6 }
  ],
  gramWeight: 130,
  width: 1.35,
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
  width: 1.30,
  line: ["Esportivos", "4 sentidos", "Elastizados"],
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
    { material: "Elastano Lycra®", percentage: 20 }
  ],
  gramWeight: 134,
  width: 1.30,
  line: ["Esportivos", "Elastizados", "Alfaiataria", "4 sentidos"],
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
    { material: "Elastano Lycra®", percentage: 6 }
  ],
  gramWeight: 98,
  width: 1.35,
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
  width: 1.45,
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
    { material: "Elastano Lycra®", percentage: 10 }
  ],
  gramWeight: 125,
  width: 1.35,
  line: ["Esportivos", "Elastizados", "4 sentidos"],
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
  width: 1.40,
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
    { material: "Elastano Lycra®", percentage: 6 }
  ],
  gramWeight: 106,
  width: 1.38,
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
  width: 1.40,
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
  width: 1.30,
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
  width: 1.50,
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
  width: 1.60,
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
  width: 1.50,
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
  width: 1.50,
  line: ["Esportivos", "PET"],
  ligamento: "Tela",
  application: ["Shorts", "Bermudas", "Camisas", "Agasalhos", "Bolsas", "Acessórios"],
  colors: ["N/A"],
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
  width: 1.60,
  line: ["BIO-D","Esportivos","UV 50+","Alfaiataria"],
  ligamento: "Canele",
  application: ["Calças cargo", "Camisas cargo", "Jaquetas","Bermudas","Peças de alfaiataria casual"],
  colors: ["1204 - Verde Militar","2261 - Azul Marinho","4244 - Caqui Escuro", "9999 - Preto"],
    image: "#"
},
{
  name: "New Camberra PET",
  code: "22244",
  composition: [
    { material: "Poliéster PET", percentage: 100 }
  ],
  gramWeight: 130,
  width: 1.50,
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
  width: 1.50,
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
  width: 1.50,
  line: ["Esportivos", "PET"],
  ligamento: "Tela",
  application: ["Bermudas", "Shorts", "Jaquetas", "Agasalhos Esportivos"],
  colors: ["0001 - Branco","2092 - Azul Marinho Noite","3668 - Cinza Claro", "9999 - Preto"],
    image: "#"
},
{
  name: "Macnyl 500",
  code: "11133",
  composition: [
    { material: "Poliamida 6.6", percentage: 100 }
  ],
  gramWeight: 213,
  width: 1.50,
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
  width: 1.50,
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
  width: 1.50,
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
  width: 1.50,
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
  width: 1.40,
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
  width: 1.50,
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
  width: 1.50,
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
  width: 1.50,
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
  width: 1.50,
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
  width: 1.50,
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
  width: 1.60,
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
  width: 1.50,
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
  width: 1.55,
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
  width: 1.50,
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
  width: 1.50,
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
  width: 1.50,
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
  width: 1.50,
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
  width: 1.50,
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
  width: 1.50,
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
  width: 1.50,
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
  width: 1.50,
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
  width: 1.50,
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
  width: 1.50,
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
  width: 1.50,
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
  width: 1.50,
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
  width: 1.50,
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
  width: 1.50,
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
  width: 1.50,
  line: ["Esportivos"],
  ligamento: "Rip Stop",
  application: ["Jaquetas", "Bonés", "Calças", "Pochetes", "Acessórios"],
  colors: ["9999 - Preto"],
  image: "#"
}
];

// tabela central de cores
const colorData = {
  "N/A": { name: "N/A", pantone: "Apenas sob consulta", img: "NA.png" },
  "0001": { name: "0001 - Branco", pantone: "11-4001 TCX", img: "0001.png" },
  "0011": { name: "0011 - Amarelo Limão Fluor", pantone: "Não encontrado", img: "NA.png" },
  "0130": { name: "0130 - Amarelo Ouro", pantone: "14-0754 TCX", img: "0130.png" },
  "0192": { name: "0192 - Areia", pantone: "14-6305 TCX", img: "0192.png" },
  "0199": { name: "0199 - Areia Escuro", pantone: "14-6305 TCX", img: "0199.png" },
  "0372": { name: "0372 - Off White", pantone: "11-0608 TCX", img: "0372.png" },
  "0541": { name: "0541 - Amarelo Manteiga", pantone: "11-0619 TCX", img: "0541.png" },
  "1000": { name: "1000 - Verde água Claro", pantone: "12-5507 TCX", img: "1000.png" },
  "1013": { name: "1013 - Amarelo Limão Fluor", pantone: "Não encontrado", img: "NA.png" },
  "1017": { name: "1017 - Verde Lago", pantone: "18-4735 TCX", img: "1017.png" },
  "1104": { name: "1104 - Verde", pantone: "Não encontrado", img: "NA.png" },
  "1204": { name: "1204 - Verde Militar", pantone: "19-0419 TCX", img: "1204.png" },
  "1209": { name: "1209 - Verde Bayou", pantone: "Não encontrado", img: "NA.png" },
  "1399": { name: "1399 - Verde Aventura", pantone: "18-0117 TCX", img: "1399.png" },
  "1764": { name: "1764 - Verde Limão", pantone: "15-0343 TCX", img: "1764.png" },
  "1913": { name: "1913 - Evergreen", pantone: "19-6026 TCX", img: "1913.png" },
  "2011": { name: "2011 - Azul Petróleo", pantone: "19-4826 TCX", img: "2011.png" },
  "2014": { name: "2014 - Azul Royal", pantone: "19-3955 TCX", img: "2014.png" },
  "2015": { name: "2015 - Azul Claro Acinzentado", pantone: "16-4019 TCX", img: "2015.png" },
  "2044": { name: "2044 - Azul Royal Médio", pantone: "19-3955 TCX", img: "2044.png" },
  "2058": { name: "2058 - Azul Claro Céu", pantone: "Não encontrado", img: "NA.png" },
  "2059": { name: "2059 - Azul Piscina", pantone: "17-4435 TCX", img: "2059.png" },
  "2060": { name: "2060 - Turquesa", pantone: "17-4320 TCX", img: "2060.png" },
  "2073": { name: "2073 - Azul Royal Escuro", pantone: "19-3864 TCX", img: "2073.png" },
  "2080": { name: "2080 - Azul Marinho", pantone: "19-4027 TCX", img: "2080.png" },
  "2092": { name: "2092 - Azul Marinho Noite", pantone: "19-3924 TCX", img: "2092.png" },
  "2095": { name: "2095 - Azul Crystal", pantone: "Não encontrado", img: "NA.png" },
  "2195": { name: "2195 - Azul Petróleo", pantone: "Não encontrado", img: "NA.png" },
  "2203": { name: "2203 - Azul Marinho", pantone: "Não encontrado", img: "NA.png" },
  "2220": { name: "2220 - Azul Claro", pantone: "Não encontrado", img: "NA.png" },
  "2222": { name: "2222 - Azul Medieval", pantone: "19-3933 TCX", img: "2222.png" },
  "2238": { name: "2238 - Azul Marinho", pantone: "19-3920 TCX", img: "2238.png" },
  "2249": { name: "2249 - Azul Royal", pantone: "Não encontrado", img: "NA.png" },
  "2261": { name: "2261 - Azul Marinho", pantone: "19-4024 TCX", img: "2261.png" },
  "2271": { name: "2271 - Azul Marinho", pantone: "19-3933 TCX", img: "2271.png" },
  "2500": { name: "2500 - Azul Marinho Escuro", pantone: "19-3921 TCX", img: "2500.png" },
  "2513": { name: "2513 - Azul Marinho", pantone: "19-3923 TCX", img: "2513.png" },
  "2694": { name: "2694 - Azul Marinho", pantone: "19-3933 TCX", img: "2694.png" },
  "2715": { name: "2715 - Azul Estratosfera", pantone: "13-5309 TCX", img: "2715.png" },
  "2847": { name: "2847 - Azul Acinzentado", pantone: "16-4120 TCX", img: "2847.png" },
  "2858": { name: "2858 - Azul Claro Alaka", pantone: "Não encontrado", img: "NA.png" },
  "2910": { name: "2910 - Azul Royal Claro", pantone: "18-4043 TCX", img: "2910.png" },
  "2934": { name: "2934 - Azul Navy", pantone: "19-3832 TCX", img: "2934.png" },
  "2954": { name: "2954 - Azul Jeans", pantone: "19-3919 TCX", img: "2954.png" },
  "3010": { name: "3010 - Cinza", pantone: "Não encontrado", img: "NA.png" },
  "3029": { name: "3029 - Cinza Tradewinds", pantone: "15-4307 TCX", img: "3029.png" },
  "3301": { name: "3301 - Cinza Cimento Esverdeado", pantone: "17-6009 TCX", img: "3301.png" },
  "3345": { name: "3345 - Cinza Rato", pantone: "18-0513 TCX", img: "3345.png" },
  "3351": { name: "3351 - Cinza Médio Esverdeado", pantone: "17-6009 TCX", img: "3351.png" },
  "3375": { name: "3375 - Chumbo Pirata", pantone: "19-4305 TCX", img: "3375.png" },
  "3381": { name: "3381 - Prata Esverdeado", pantone: "15-4702 TCX", img: "3381.png" },
  "3390": { name: "3390 - Cinza Chumbo", pantone: "19-0506 TCX", img: "3390.png" },
  "3624": { name: "3624 - Cinza Claro", pantone: "17-6009 TCX", img: "3624.png" },
  "3665": { name: "3665 - Cinza Rato", pantone: "18-0306 TCX", img: "3665.png" },
  "3668": { name: "3668 - Cinza Claro", pantone: "15-4305 TCX", img: "3668.png" },
  "3676": { name: "3676 - Cinza Cimento", pantone: "18-5806 TCX", img: "3676.png" },
  "4004": { name: "4004 - Ocre Biscut", pantone: "16-1336 TCX", img: "4004.png" },
  "4007": { name: "4007 - Caramelo", pantone: "17-1047 TCX", img: "4007.png" },
  "4123": { name: "4123 - MOCHA MOUSSE", pantone: "17-1230 TCX", img: "4123.png" },
  "4174": { name: "4174 - Marrom", pantone: "19-0915 TCX", img: "4174.png" },
  "4236": { name: "4236 - Caqui Queimado", pantone: "19-0820 TCX", img: "4236.png" },
  "4243": { name: "4243 - Palha Clarissimo", pantone: "13-0000 TCX", img: "4243.png" },
  "4244": { name: "4244 - Caqui Escuro", pantone: "17-0618 TCX", img: "4244.png" },
  "4247": { name: "4247 - Caqui Fossil", pantone: "17-0517 TCX", img: "4247.png" },
  "4341": { name: "4341 - Areia Avermelhada", pantone: "13-6105 TCX", img: "4341.png" },
  "4676": { name: "4676 - Caqui Médio", pantone: "18-0521 TCX", img: "4676.png" },
  "4832": { name: "4832 - Marrom Chocolate", pantone: "19-1118 TCX", img: "4832.png" },
  "5010": { name: "5010 - Vermelho Cereja", pantone: "18-1653 TCX", img: "5010.png" },
  "5025": { name: "5025 - Rosa Fluor", pantone: "Não encontrado", img: "NA.png" },
  "5079": { name: "5079 - Rosa", pantone: "Não encontrado", img: "NA.png" },
  "5108": { name: "5108 - Vermelho", pantone: "Não encontrado", img: "NA.png" },
  "5286": { name: "5286 - Rosa Velho", pantone: "15-1317 TCX", img: "5286.png" },
  "5384": { name: "5384 - Vermelho Batom", pantone: "19-1764 TCX", img: "5384.png" },
  "5527": { name: "5527 - Vermelho Danger", pantone: "18-1763 TCX", img: "5527.png" },
  "5581": { name: "5581 - Vinho", pantone: "19-1725 TCX", img: "5581.png" },
  "5665": { name: "5665 - Vermelho Queimado", pantone: "19-1656 TCX", img: "5665.png" },
  "5787": { name: "5787 - Rosa Clássico", pantone: "12-1207 TCX", img: "5787.png" },
  "5810": { name: "5810 - Rosa Chiclete", pantone: "17-1928 TCX", img: "5810.png" },
  "5978": { name: "5978 - Vermelho", pantone: "19-1664 TCX", img: "5978.png" },
  "6267": { name: "6267 - Roxo", pantone: "19-3737 TCX", img: "6267.png" },
  "6419": { name: "6419 - Roxo Maravilha", pantone: "19-2820 TCX", img: "6419.png" },
  "7007": { name: "7007 - Laranja Fluor", pantone: "Não encontrado", img: "NA.png" },
  "7131": { name: "7131 - Laranja", pantone: "17-1452 TCX", img: "7131.png" },
  "8000": { name: "8000 - Laranja + Preto", pantone: "Xadrez", img: "NA.png" },
  "8038": { name: "8038 - Rosa Claro + Branco", pantone: "Xadrez", img: "NA.png" },
  "8208": { name: "8208 - Preto", pantone: "Xadrez", img: "NA.png" },
  "8209": { name: "8209 - Lavanda", pantone: "Xadrez", img: "NA.png" },
  "9989": { name: "9989 - Preto Mescla", pantone: "Mescla", img: "NA.png" },
  "9999": { name: "9999 - Preto", pantone: "19-4007 TCX", img: "9999.png" }
};

// ===== Elementos =====
const catalog = document.getElementById('catalog');
const compositionFilter = document.getElementById('compositionFilter');
const gramWeightFilter = document.getElementById('gramWeightFilter');
const widthFilter = document.getElementById('widthFilter');
const lineFilter = document.getElementById('lineFilter');
const ligamentoFilter = document.getElementById('ligamentoFilter');
const applicationFilter = document.getElementById('applicationFilter');
const colorFilter = document.getElementById('colorFilter');
const searchInput = document.getElementById('searchInput');
const coresContainer = document.getElementById('coresContainer');

const btnCatalogo = document.getElementById('btn-catalogo');
const btnVideos   = document.getElementById('btn-videos');
const btnCores    = document.getElementById('btn-cores');

const secCatalogo = document.getElementById('sec-catalogo');
const secVideos   = document.getElementById('sec-videos');
const secCores    = document.getElementById('sec-cores');

const tecidoModal = document.getElementById('tecidoModal');
const modalClose  = tecidoModal.querySelector('.close');
const mNome       = document.getElementById('m-nome');
const mCodigo     = document.getElementById('m-codigo');
const mComposicao = document.getElementById('m-composicao');
const mGramatura  = document.getElementById('m-gramatura');
const mLinha      = document.getElementById('m-linha');
const mLigamento  = document.getElementById('m-ligamento');
const mAplicacao  = document.getElementById('m-aplicacao');
const mCores      = document.getElementById('m-cores');
const mImagem     = document.getElementById('m-imagem');

const colorZoom   = document.getElementById('colorZoom');

// ===== Alternar seções =====
function showSection(section) {
  secCatalogo.classList.add('hidden');
  secVideos.classList.add('hidden');
  secCores.classList.add('hidden');

  btnCatalogo.classList.remove('active');
  btnVideos.classList.remove('active');
  btnCores.classList.remove('active');

  if (section === 'catalogo') {
    secCatalogo.classList.remove('hidden');
    btnCatalogo.classList.add('active');
  } else if (section === 'videos') {
    secVideos.classList.remove('hidden');
    btnVideos.classList.add('active');
  } else if (section === 'cores') {
    secCores.classList.remove('hidden');
    btnCores.classList.add('active');
  }
}

btnCatalogo.addEventListener('click', () => showSection('catalogo'));
btnVideos.addEventListener('click',   () => showSection('videos'));
btnCores.addEventListener('click',    () => showSection('cores'));

// ===== Gerar filtros =====
function generateOptions() {
  compositionFilter.innerHTML = '<option value="">Composição</option>';
  gramWeightFilter.innerHTML  = '<option value="">Gramatura</option>';
  lineFilter.innerHTML        = '<option value="">Linha</option>';
  ligamentoFilter.innerHTML   = '<option value="">Ligamento</option>';
  applicationFilter.innerHTML = '<option value="">Aplicação</option>';
  colorFilter.innerHTML       = '<option value="">Cor</option>';

  const uniqueComps = [...new Set(fabrics.flatMap(f => f.composition.map(c => `${c.percentage}% ${c.material}`)))].sort();
  uniqueComps.forEach(m => {
    const option = document.createElement('option');
    option.value = m;
    option.textContent = m;
    compositionFilter.appendChild(option);
  });

  const uniqueGrams = [...new Set(fabrics.map(f => f.gramWeight))].sort((a,b)=>a-b);
  uniqueGrams.forEach(g => {
    const option = document.createElement('option');
    option.value = g;
    option.textContent = `${g} g/m²`;
    gramWeightFilter.appendChild(option);
  });

  const uniqueWidths = [...new Set(fabrics.map(f => f.width))].sort((a, b) => a - b);
widthFilter.innerHTML = '<option value="">Largura</option>';
uniqueWidths.forEach(w => {
  const option = document.createElement('option');
  option.value = w;
  option.textContent = `${w.toFixed(2).replace('.', ',')} m`;
  widthFilter.appendChild(option);
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

// Choices.js
[compositionFilter, gramWeightFilter, widthFilter, lineFilter, ligamentoFilter, applicationFilter, colorFilter]
  .forEach(el => new Choices(el, {
    searchEnabled: true,
    searchResultLimit: 0,
    maxItemCount: -1,
    itemSelectText: ''
  }));

// ===== Filtrar e exibir catálogo =====
function displayFabrics(list) {
  catalog.innerHTML = "";
  if (list.length === 0) {
    catalog.innerHTML = "<p>Nenhum tecido encontrado.</p>";
    return;
  }

  list.forEach(fabric => {
    const div = document.createElement('div');
    div.className = 'fabric';

    const coresLista = fabric.colors.map(c => {
      const code = c.split(' ')[0];
      const data = colorData[code] || {};
      const img  = data.img || `${code}.png`;
      return `<li><img src="${img}" alt="${c}" style="width:20px;height:20px;border:1px solid #ccc;margin-right:4px;"> ${c}</li>`;
    }).join('');

    div.dataset.nome       = fabric.name;
    div.dataset.codigo     = fabric.code;
    div.dataset.composicao = fabric.composition.map(c => `${c.percentage}% ${c.material}`).join(", ");
    div.dataset.gramatura  = `${fabric.gramWeight} g/m²`;
    div.dataset.largura    = fabric.width ? `${fabric.width.toFixed(2).replace('.', ',')} m` : "—"; // <-- AQUI
    div.dataset.linha      = fabric.line.join(", ");
    div.dataset.ligamento  = fabric.ligamento;
    div.dataset.aplicacao  = fabric.application.join(", ");
    div.dataset.cores      = fabric.colors.join(", ");
    div.dataset.imagem     = `${fabric.code}.jpg`;

    div.innerHTML = `
      <img src="${fabric.code}.jpg" alt="${fabric.code}">
      <h3>${fabric.name}</h3>
      <p><strong>Código:</strong> ${fabric.code}</p>
      <p><strong>Composição:</strong> ${div.dataset.composicao}</p>
      <p><strong>Gramatura:</strong> ${div.dataset.gramatura}</p>
      <p><strong>Largura:</strong> ${div.dataset.largura}</p> <!-- <-- AQUI -->
      <p><strong>Linha:</strong> ${div.dataset.linha}</p>
      <p><strong>Ligamento:</strong> ${div.dataset.ligamento}</p>
      <p><strong>Aplicação:</strong> ${div.dataset.aplicacao}</p>
      <p><strong>Cores:</strong></p>
      <ul>${coresLista}</ul>
    `;
    catalog.appendChild(div);
  });
}


function filterFabrics() {
  const comp  = compositionFilter.value;
  const gram  = gramWeightFilter.value;
  const width = widthFilter.value;
  const line  = lineFilter.value;
  const lig   = ligamentoFilter.value;
  const app   = applicationFilter.value;
  const color = colorFilter.value;
  const search= searchInput.value.trim().toLowerCase();

  const filtered = fabrics.filter(fabric => {
    const compValues = fabric.composition.map(c => `${c.percentage}% ${c.material}`);
    return (comp==="" || compValues.includes(comp)) &&
           (gram==="" || fabric.gramWeight == Number(gram)) &&
           (width==="" || fabric.width == Number(width)) && // ← adiciona isso
           (line==="" || fabric.line.includes(line)) &&
           (lig===""  || fabric.ligamento === lig) &&
           (app===""  || fabric.application.includes(app)) &&
           (color===""|| fabric.colors.includes(color)) &&
           (search===""|| fabric.name.toLowerCase().includes(search) || fabric.code.toLowerCase().includes(search));
  });

  displayFabrics(filtered);
}

[compositionFilter, gramWeightFilter, widthFilter, lineFilter, ligamentoFilter, applicationFilter, colorFilter]
  .forEach(el => el.addEventListener('change', filterFabrics));
searchInput.addEventListener('input', filterFabrics);
displayFabrics(fabrics);

// ===== Exibir lista de cores única e ordenada =====
function displayColors() {
  const allColors = fabrics.flatMap(f =>
    f.colors.map(c => {
      const code = c.split(' ')[0];
      const data = colorData[code] || {};
      return { code: code, name: c, img: data.img || `${code}.png` };
    })
  );

  const uniqueSorted = Array.from(new Map(allColors.map(c => [c.code, c])).values())
                            .sort((a,b) => a.code.localeCompare(b.code));

  coresContainer.innerHTML = uniqueSorted.map(c =>
    `<li><img src="${c.img}" alt="${c.name}" style="width:20px;height:20px;border:1px solid #ccc;margin-right:4px;"> ${c.name}</li>`
  ).join('');
}
displayColors();

// ===== Modal detalhes + zoom na foto =====
catalog.addEventListener('click', e => {
  const card = e.target.closest('.fabric');
  if (!card) return;

  const fabricData = fabrics.find(f => String(f.code) === String(card.dataset.codigo));

  if (fabricData) {
    mNome.textContent       = fabricData.name;
    mCodigo.textContent     = fabricData.code;
    mComposicao.textContent = fabricData.composition.map(c => `${c.percentage}% ${c.material}`).join(", ");
    mGramatura.textContent  = `${fabricData.gramWeight} g/m²`;
    mLinha.textContent      = fabricData.line.join(", ");
    mLigamento.textContent  = fabricData.ligamento;
    mAplicacao.textContent  = fabricData.application.join(", ");

    mCores.innerHTML = "";
    fabricData.colors.forEach(c => {
      const li = document.createElement('li');
      li.textContent = c;
      mCores.appendChild(li);
    });
  }

  mImagem.src = card.dataset.imagem || `${card.dataset.codigo}.jpg`;

  tecidoModal.style.display = 'flex';
});

// ===== Fechar modal =====
modalClose.addEventListener('click', () => tecidoModal.style.display = 'none');
tecidoModal.addEventListener('click', e => { if (e.target === tecidoModal) tecidoModal.style.display = 'none'; });

// ===== Zoom cores =====
document.addEventListener('mouseover', e => {
  if (e.target.tagName === 'IMG' && e.target.parentElement.tagName === 'LI') {
    colorZoom.style.backgroundImage = `url(${e.target.src})`;
    colorZoom.style.display = 'block';
  }
});
document.addEventListener('mousemove', e => {
  if (colorZoom.style.display === 'block') {
    colorZoom.style.left = e.pageX + 15 + 'px';
    colorZoom.style.top  = e.pageY + 15 + 'px';
  }
});
document.addEventListener('mouseout', e => {
  if (e.target.tagName === 'IMG' && e.target.parentElement.tagName === 'LI') {
    colorZoom.style.display = 'none';
  }
});

// ===== Zoom na imagem do tecido dentro do modal =====
mImagem.addEventListener('hover', () => {
  // alterna zoom usando CSS transform
  if (mImagem.classList.contains('zoomed')) {
    mImagem.classList.remove('zoomed');
    mImagem.style.transform = 'scale(1)';
    mImagem.style.cursor = 'zoom-in';
  } else {
    mImagem.classList.add('zoomed');
    mImagem.style.transform = 'scale(3)';
    mImagem.style.cursor = 'zoom-out';
  }
});
