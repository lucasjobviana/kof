import iori from './img/iori.jpg';
import kyo from './img/kyo.png';
import leona from './img/leona.jpg';
import shizuru from './img/shizuru.png';
import chris from './img/chris.jpg';
import terry from './img/terry.jpg';
import ralph from './img/ralf.jpg';
import bluemary from './img/bluemary.jpg';
import billy from './img/billy.jpg';
import ryu from './img/ryo.jpg';
import yamazaki from './img/yamazaki.png';
import rugal from './img/rugal.webp';
import oroshi from './img/oroshi.webp';
import shingo from './img/shingo.png';
import yuri from './img/yuri.png';
import yashiro from './img/yashiro.png';
import takuma from './img/takuma.png';
import k from './img/k.png';
import maxima from './img/maxima.png';

const cards = [{
  cardName: 'Iori Yagami',
  cardDescription:
    'Iori Yagami é um lutador com personalidade arrogante e agressiva,'
    + 'que possui habilidades de fogo e busca vingança'
    + 'pela morte de seus ancestrais.',
  cardAttr1: '28',
  cardAttr2: '42',
  cardAttr3: '35',
  cardRare: 'Supernatural Figther',
  cardVisible: true,
  cardImage: iori,
  cardTrunfo: false,
}, {
  cardName: 'Kyo Kusanagi',
  cardDescription:
    'Kyo Kusanagi é o líder do clã Kusanagi, especialista em artes marciais'
    + ' e dotado de habilidades de fogo.',
  cardAttr1: '35',
  cardAttr2: '26',
  cardAttr3: '37',
  cardRare: 'Supernatural Figther',
  cardVisible: true,
  cardImage: kyo,
  //cardImage: 'https://mcdn.wallpapersafari.com/medium/62/15/uY7CRk.png',
  //cardImage: 'https://mcdn.wallpapersafari.com/medium/49/51/Ww1zUX.jpg',
  cardTrunfo: false,
}, {
  cardName: 'Leona Heidern',
  cardDescription:
    'Leona é uma soldado da Ikari Warriors, com habilidades em artes marciais e um alter ego controlado por Orochi.',
  cardAttr1: '40',
  cardAttr2: '39',
  cardAttr3: '19',
  cardRare: 'Supernatural Figther',
  cardVisible: true,
  cardImage: leona,
  cardTrunfo: false,
}, {
  cardName: 'Shizuru Kagura ',
  cardDescription:
    'Shizuru Kagura é uma lutadora elegante e poderosa que controla o vento para derrotar seus oponentes. Ela como membro do clã Yata'
    + ' tem o dever impedir o retorno de Orochi.',
  cardAttr1: '31',
  cardAttr2: '37',
  cardAttr3: '22',
  cardRare: 'Supernatural Figther',
  cardVisible: true,
  cardImage: shizuru,
  cardTrunfo: false,
}, {
  cardName: 'Chris',
  cardDescription:
    'Chris, vocalista da banda C.Y.S, é um lutador carismático e habilidoso que usa poderes psíquicos em seus ataques.'
    + ' e dotado de habilidades de fogo.',
  cardAttr1: '24',
  cardAttr2: '43',
  cardAttr3: '19',
  cardRare: 'Supernatural Figther',
  cardVisible: true,
  cardImage: chris,
  cardTrunfo: false,
}, {
  cardName: 'Terry Bogard',
  cardDescription:
    'Terry Bogard é um lutador carismático e corajoso, conhecido por seus punhos poderosos e por sua busca por justiça. ',
  cardAttr1: '31',
  cardAttr2: '26',
  cardAttr3: '37',
  cardRare: 'Normal Figther',
  cardVisible: true,
  cardImage: terry,
  cardTrunfo: false,
}, {
  cardName: 'Ralph Jones',
  cardDescription:
    'Ralf é um ex-militar com habilidades em artes marciais. Junto com Clark, ele participa do torneio de KOF em busca de vingança contra seu ex-comandante.',
  cardAttr1: '31',
  cardAttr2: '33',
  cardAttr3: '27',
  cardRare: 'Normal Figther',
  cardVisible: true,
  cardImage: ralph,
  cardTrunfo: false,
}, {
  cardName: 'Blue Mary',
  cardDescription:
    'Blue Mary é uma agente secreta habilidosa em artes marciais, conhecida por seu estilo de luta único que incorpora técnicas de wrestling.',
  cardAttr1: '31',
  cardAttr2: '35',
  cardAttr3: '25',
  cardRare: 'Normal Figther',
  cardVisible: true,
  cardImage: bluemary,
  cardTrunfo: false,
}, {
  cardName: 'Billy Kane',
  cardDescription:
    'Billy Kane é um lutador de artes marciais com habilidades em artes com bastões e chutes, além de ser o guarda-costas pessoal de Geese Howard.',
  cardAttr1: '31',
  cardAttr2: '22',
  cardAttr3: '40',
  cardRare: 'Normal Figther',
  cardVisible: true,
  cardImage: billy,
  cardTrunfo: false,
}, {
  cardName: 'Ryu Sakazaki ',
  cardDescription:
    'Ryu é um artista marcial habilidoso que luta com um estilo de karatê e é o herdeiro da arte marcial Sakazaki.',
  cardAttr1: '31',
  cardAttr2: '37',
  cardAttr3: '35',
  cardRare: 'Normal Figther',
  cardVisible: true,
  cardImage: ryu,
  cardTrunfo: false,
}, {
  cardName: 'Ryuji Yamazaki',
  cardDescription:
    'Yamazaki é um lutador durão e sem escrúpulos que usa táticas sujas para vencer suas lutas. Ele é conhecido por sua personalidade sádica e por usar uma faca em combate.',
  cardAttr1: '31',
  cardAttr2: '26',
  cardAttr3: '38',
  cardRare: 'Normal Figther',
  cardVisible: true,
  cardImage: yamazaki,
  cardTrunfo: false,
}, {
  cardName: 'Rugal Bernstein',
  cardDescription:
    'Rugal Bernstein é um vilão egocêntrico e impiedoso, que busca poder e dominação a qualquer custo. ',
  cardAttr1: '31',
  cardAttr2: '42',
  cardAttr3: '45',
  cardRare: 'Supernatural Figther',
  cardVisible: true,
  cardImage: rugal,
  cardTrunfo: false,
}, {
  cardName: 'Oroshi',
  cardDescription:
    'Orochi é uma divindade malévola com poderes sobrenaturais.',
  cardAttr1: '35',
  cardAttr2: '27',
  cardAttr3: '45',
  cardRare: 'Divine',
  cardVisible: true,
  cardImage: oroshi,
  cardTrunfo: false,
}, {
  cardName: 'Shingo Yabuki',
  cardDescription:
    'Shingo Yabuki é um estudante do ensino médio japonês e é um fã / aluno do lutador de Kyo Kusanagi. ',
  cardAttr1: '31',
  cardAttr2: '35',
  cardAttr3: '20',
  cardRare: 'Normal Figther',
  cardVisible: true,
  cardImage: shingo,
  cardTrunfo: false,
}, {
  cardName: 'Yuri Sakazaki',
  cardDescription:
    'Yuri Sakazaki é conhecida por sua determinação, habilidades em artes marciais e carisma, sendo assim uma adversária formidável nos torneios de luta.',
  cardAttr1: '35',
  cardAttr2: '18',
  cardAttr3: '31',
  cardRare: 'Normal Figther',
  cardVisible: true,
  cardImage: yuri,
  cardTrunfo: false,
}, {
  cardName: 'Yashiro Nanakase',
  cardDescription:
    'Yashiro é retratado como um lutador carismático e confiante, com um estilo de luta baseado em técnicas poderosas e acrobáticas.',
  cardAttr1: '35',
  cardAttr2: '19',
  cardAttr3: '37',
  cardRare: 'Normal Figther',
  cardVisible: true,
  cardImage: yashiro,
  cardTrunfo: false,
}, {
  cardName: 'Takuma Sakazaki ',
  cardDescription:
    'Takuma é conhecido por seu estilo de luta baseado em karatê, combinando técnicas poderosas e precisas. Ele é um lutador sério, dedicado e determinado a proteger sua família e honrar a tradição do seu dojo.',
  cardAttr1: '35',
  cardAttr2: '38',
  cardAttr3: '30',
  cardRare: 'Normal Figther',
  cardVisible: true,
  cardImage: takuma,
  cardTrunfo: false,
}, {
  cardName: 'K\´',
  cardDescription:
    'k\´ é um clone de Kyo Kusanagi, foi criado como parte do projeto NESTS, uma organização que buscava criar guerreiros poderosos.',
  cardAttr1: '22',
  cardAttr2: '34',
  cardAttr3: '25',
  cardRare: 'Normal Figther',
  cardVisible: k,
  cardImage: k,
 
  cardTrunfo: false,
}, {
  cardName: 'Máxima',
  cardDescription:
    'Maxima é um ciborgue com habilidades e força amplificadas, e ele utiliza sua tecnologia avançada em combate.',
  cardAttr1: '25',
  cardAttr2: '33',
  cardAttr3: '40',
  cardRare: 'Normal Figther',
  cardVisible: true,
  cardImage: maxima,
  cardTrunfo: false,
}];

const teste = () => {
  return cards;
};

export const newShuffledDeck = () => {
  return [...cards.sort(() => Math.random() - 0.5)];
}


