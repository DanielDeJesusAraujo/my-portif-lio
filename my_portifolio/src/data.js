import imgWallet from './images/wallet.jpg';
import imgTrivia from './images/trivia.jpg';
import imgSolar from './images/solar-system.jpg';

const projects = [
  {
    id: 1,
    name: 'WALLET',
    image: imgWallet,
    url: 'https://danieldejesusaraujo.github.io/Trywallet/',
    describe: 'projeto desenvolvido ultilizando react.js, redux, javaScript, HTML5, CSS3, bootstrap...',
  }, {
    id: 2,
    name: 'TRIVIA',
    image: imgTrivia,
    url: 'https://danieldejesusaraujo.github.io/game-trivia/',
    describe: 'projeto desenvolvido em grupo ultilizando react.js, contextAPI, integração a API, javaScript, HTML5, CSS3, styled components, bootstrap...',
  }, {
    id: 3,
    name: 'SOLAR SYSTEM',
    image: imgSolar,
    url: 'https://danieldejesusaraujo.github.io/Solar-system/',
    describe: 'projeto desenvolvido ultilizando react.js, javaScript, HTML5 e CSS3.',
  }
];

export default projects;
