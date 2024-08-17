import './css/styles.css';
import Player from './models/player.js';
import { buildBoard } from './dom.js';

let leftType = 'human';
let rightType = 'cpu';
let rightDifficulty = 'easy';
let leftDifficulty = 'easy';
let leftName = 'Leslie';
let rightName = 'Jake';
const playerOne = new Player(leftType, leftName, 'left');
const playerTwo = new Player(rightType, rightName, 'right');

document.getElementById(playerOne.boardId).appendChild(buildBoard(playerOne));
document.getElementById(playerTwo.boardId).appendChild(buildBoard(playerTwo));

if (playerOne.type === 'cpu') {
  playerOne.gameboard.placeShipsRandomly();
}
if (playerTwo.type === 'cpu') {
  playerTwo.gameboard.placeShipsRandomly();
}

// let boards = document.querySelectorAll('.board');
// boards[0].classList.toggle('pointer-events-disabled', false);
// boards[1].classList.toggle('pointer-events-disabled', true);

function refreshPage() {
  if (leftType === null || rightType === null) setPage(0);
  else if (leftDifficulty === null || rightDifficulty === null) setPage(1);
  else setPage(2);
}

function setPage(i) {
  let pageIds = [
    'player-type-selection-container',
    'player-details-page',
    'game-page',
  ];
  pageIds.forEach((pId) =>
    document.getElementById(pId).classList.toggle('hidden', true)
  );
  document.getElementById(pageIds[i]).classList.toggle('hidden', false);
}

document.querySelectorAll('.vs').forEach((option) => {
  option.addEventListener('click', (e) => {
    const element = e.currentTarget;
    leftType = element.getAttribute('data-left-type');
    rightType = element.getAttribute('data-right-type');
    refreshPage();
  });
});

refreshPage();
