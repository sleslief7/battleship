import './css/styles.css';
import Player from './models/player.js';
import { buildBoard } from './dom.js';
import { SHIP_MODELS } from './constants.js';

let leftType = 'human';
let rightType = 'cpu';
let rightDifficulty = 'easy';
let leftDifficulty = 'easy';
let leftName = 'Leslie';
let rightName = 'Jake';
const playerOne = new Player(leftType, leftName, 'left');
const playerTwo = new Player(rightType, rightName, 'right');
let isRunning = false;

if (playerOne.type === 'cpu') playerOne.gameboard.placeShipsRandomly();
if (playerTwo.type === 'cpu') playerTwo.gameboard.placeShipsRandomly();

refreshPlayerBoard(playerOne);
refreshPlayerBoard(playerTwo);

if (playerOne.type === 'human' && !isRunning) {
  const randomizeBtn = document.getElementById('randomize');
  document
    .getElementById('pre-game-controls-container')
    .classList.toggle('hidden', false);
  randomizeBtn.addEventListener('click', () => {
    playerOne.gameboard.placeShipsRandomly();
    refreshPlayerBoard(playerOne);
  });
}

function refreshPlayerBoard(player) {
  let boardElement = document.getElementById(player.boardId);
  boardElement.innerHTML = '';
  boardElement.appendChild(buildBoard(player));
}

function startGame() {
  if (
    playerOne.gameboard.ships.length !== SHIP_MODELS.length ||
    playerTwo.gameboard.ships.length !== SHIP_MODELS.length
  ) {
    alert(`You must place ${SHIP_MODELS.length} ships!`);
    return;
  }
  isRunning = true;
  document
    .getElementById('pre-game-controls-container')
    .classList.toggle('hidden', true);
  document
    .getElementById('right-board')
    .classList.toggle('pointer-events-disabled', false);
}

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

document.getElementById('start-game').onclick = startGame;

refreshPage();
