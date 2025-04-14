// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { userWordFormElement } from './dom';
import { checkWord, startGame } from './game';

startGame();

userWordFormElement.addEventListener('submit', event => {
  event.preventDefault();
  const userWord = event.target.word.value;
  if (!userWord) return;
  checkWord(userWord);
  event.target.reset();
});
