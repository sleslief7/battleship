import './css/styles.css';
import Player from './models/player.js';
import { buildBoard } from './dom.js';
import { SHIP_MODELS } from './constants.js';

let leftType = null; //'cpu';
let rightType = null; //'cpu';
let rightDifficulty = null; //'easy';
let leftDifficulty = null; //'easy';
let leftName = null; //'Leslie';
let rightName = null; //'Jake';
const playerOne = new Player(leftType, leftName, 'left');
const playerTwo = new Player(rightType, rightName, 'right');
let rightBoard = document.getElementById('right-board');
let leftBoard = document.getElementById('left-board');
const result = document.getElementById('result');
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

  if (player.side === 'right') {
    rightBoard.querySelectorAll('.tile').forEach((tile) => {
      tile.addEventListener('click', (e) => {
        handleTileClick(e, player);
      });
    });
  }
}

function handleTileClick(e, player) {
  const { gameboard } = player;
  const tile = e.currentTarget;
  const x = tile.getAttribute('data-x');
  const y = tile.getAttribute('data-y');
  const ship = gameboard.board[x][y];
  result.textContent = '';
  if (gameboard.receiveAttack(x, y)) {
    result.textContent = `${ship.name} was hit`;
  }
  refreshPlayerBoard(player);

  if (gameboard.areAllShipsSunk()) {
    document.querySelectorAll('.board').forEach((board) => {
      board.classList.toggle('pointer-events-disabled', true);
    });
    result.textContent = `${playerOne.name} won`;
  }

  rightBoard.classList.toggle('pointer-events-disabled', true);
  if (!gameboard.areAllShipsSunk()) {
    setTimeout(() => {
      result.textContent = '';
      playerOne.gameboard.randomPlay();
      refreshPlayerBoard(playerOne);
      rightBoard.classList.toggle('pointer-events-disabled', false);
    }, 1000);
  }
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
  rightBoard.classList.toggle('pointer-events-disabled', false);

  if (playerOne.type === 'cpu' && playerTwo.type === 'cpu') {
    document.getElementById('start-game').addEventListener('click', () => {
      isRunning = true;
      rightBoard.classList.toggle('pointer-events-disabled', true);
      if (playerOne.type === 'cpu' && playerTwo.type === 'cpu') {
        if (isRunning) {
          while (
            !playerOne.gameboard.areAllShipsSunk() ||
            !playerTwo.gameboard.areAllShipsSunk()
          ) {
            setTimeout(() => {
              result.textContent = '';
              playerOne.gameboard.randomPlay();
              refreshPlayerBoard(playerOne);
            }, 1000);

            setTimeout(() => {
              result.textContent = '';
              playerTwo.gameboard.randomPlay();
              refreshPlayerBoard(playerTwo);
            }, 1000);
          }
        }
      }
    });
  }
}

function refreshPage() {
  if (leftType === null || rightType === null) setPage(0);
  else if (leftDifficulty === null || rightDifficulty === null) setPage(1);
  else setPage(2);

  if (leftType === 'human' && rightType === 'human') {
    document.getElementById('human-vs-human').classList.toggle('hidden', false);
  } else if (leftType === 'human' && rightType === 'cpu') {
    document.getElementById('human-vs-cpu').classList.toggle('hidden', false);
  } else if (leftType === 'cpu' && rightType === 'cpu') {
    document.getElementById('cpu-vs-cpu').classList.toggle('hidden', false);
  }
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

document.querySelectorAll('.submit-btn').forEach((submit) => {
  option.addEventListener('click', (e) => {
    setPage(2);
    refreshPage();
  });
});

document.getElementById('start-game').onclick = startGame;
refreshPage();
