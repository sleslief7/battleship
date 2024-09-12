import './css/styles.css';
import Player from './models/player.js';
import { buildBoard } from './dom.js';
import { SHIP_MODELS } from './constants.js';
import { createPlayerInput } from './createPlayerInfoScreen.js';
import { shipsBoardDisplay, displayHitShip } from './shipsBoard.js';

let playerOne = null;
let playerTwo = null;
let leftType = null;
let rightType = null;
let rightBoard = document.getElementById('right-board');
let leftBoard = document.getElementById('left-board');
const result = document.getElementById('result');
const randomizeBtn = document.getElementById('randomize');
const submitBtn = document.getElementById('submit-btn');
let isRunning = false;

function handleTileClick(e, player) {
  const { gameboard } = player;
  const tile = e.currentTarget;
  const x = tile.getAttribute('data-x');
  const y = tile.getAttribute('data-y');
  const ship = gameboard.board[x][y];
  let oppositePlayer = player.name === playerOne.name ? playerTwo : playerOne;

  let play = gameboard.receiveAttack(x, y);
  refreshPlayerBoard(player);

  if (gameboard.areAllShipsSunk()) {
    handleGameEnd(oppositePlayer.name);
    return;
  }

  if (play === null) {
    rightBoard.classList.toggle('pointer-events-disabled', true);
    setTimeout(() => {
      handleCpuPlay(playerTwo);

      if (oppositePlayer.gameboard.areAllShipsSunk()) {
        handleGameEnd(player.name);
        return;
      }
      rightBoard.classList.toggle('pointer-events-disabled', false);
    }, 500);
  }
}

function handleCpuPlay(player) {
  let oppositePlayer = player.name === playerOne.name ? playerTwo : playerOne;
  let play = true;
  while (play) {
    if (player.difficulty === 'regular') {
      play = oppositePlayer.gameboard.randomPlay();
      refreshPlayerBoard(oppositePlayer);
    } else {
      play = oppositePlayer.gameboard.hardPlay();
      refreshPlayerBoard(oppositePlayer);
    }
  }
}

function handleGameEnd(name) {
  document.querySelectorAll('.board').forEach((board) => {
    board.classList.toggle('pointer-events-disabled', true);
  });
  result.textContent = `${name} won`;
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
}

function refreshPage() {
  if (leftType === null || rightType === null) setPage(0);
  else if (leftType && rightType) setPage(1);
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
    let playerParams = document.getElementById('player-params-container');
    playerParams.appendChild(createPlayerInput(leftType, 'left'));
    playerParams.appendChild(createPlayerInput(rightType, 'right'));
    refreshPage();
  });
});

submitBtn.addEventListener('click', () => {
  setPage(2);

  let leftName = document.getElementById('left-name')?.value;
  let rightName = document.getElementById('right-name')?.value;
  let leftDifficulty = document.getElementById('left-difficulty')?.value;
  let rightDifficulty = document.getElementById('right-difficulty')?.value;

  playerOne = new Player(leftType, leftName, leftDifficulty, 'left');
  playerTwo = new Player(rightType, rightName, rightDifficulty, 'right');

  if (leftType === 'human' && rightType === 'cpu') {
    playerOne.name = leftName ? leftName : 'Human';
    playerTwo.name = 'CPU';
    displayNames();
    handleHumanVsCpuGame();
  } else if (playerOne.type === 'cpu' && playerTwo.type === 'cpu') {
    playerOne.name = 'CPU One';
    playerTwo.name = 'CPU Two';
    displayNames();
    handleCpuVsCpuGame();
  } else {
    playerOne.name = leftName ? leftName : 'Human One';
    playerTwo.name = rightName ? rightName : 'Human Two';
    displayNames();
  }

  if (playerOne.type === 'human' && !isRunning) {
    document
      .getElementById('pre-game-controls-container')
      .classList.toggle('hidden', false);
    randomizeBtn.addEventListener('click', () => {
      playerOne.gameboard.placeShipsRandomly();
      refreshPlayerBoard(playerOne);
    });
  }
});

function refreshPlayerBoard(player) {
  let boardElement = document.getElementById(player.boardId);
  boardElement.innerHTML = '';
  boardElement.appendChild(buildBoard(player));
  boardElement.appendChild(shipsBoardDisplay(player.side));
  displayHitShip(player);

  if (player.side === 'right' && player.type === 'cpu') {
    rightBoard.querySelectorAll('.tile').forEach((tile) => {
      tile.addEventListener('click', (e) => {
        handleTileClick(e, player);
      });
      tile.classList.toggle('ship', false);
    });
  }
}

function displayNames() {
  document.getElementById('player-one').textContent = playerOne.name;
  document.getElementById('player-two').textContent = playerTwo.name;
}

function handleHumanVsCpuGame() {
  refreshPlayerBoard(playerOne);
  placePlayerShips(playerTwo);
}
function handleCpuVsCpuGame() {
  placePlayerShips(playerOne);
  placePlayerShips(playerTwo);

  let preGameControls = document.getElementById('pre-game-controls-container');
  preGameControls.classList.toggle('hidden', false);
  preGameControls.querySelectorAll('button').forEach((button) => {
    button.classList.toggle('hidden', true);
  });
  let startCpuGameBtn = document.getElementById('start-cpu-game');

  startCpuGameBtn.classList.toggle('hidden', false);

  startCpuGameBtn.addEventListener('click', async () => {
    preGameControls.classList.toggle('hidden', true);

    rightBoard.classList.toggle('pointer-events-disabled', true);
    isRunning = true;
    let isLeftPlayerTurn = true;
    while (isRunning) {
      const currentPlayer = isLeftPlayerTurn ? playerOne : playerTwo;
      const oppositePlayer = isLeftPlayerTurn ? playerTwo : playerOne;
      await delay(100);
      result.textContent = '';
      handleCpuPlay(oppositePlayer);
      refreshPlayerBoard(currentPlayer);

      if (currentPlayer.gameboard.areAllShipsSunk()) {
        document.querySelectorAll('.board').forEach((board) => {
          board.classList.toggle('pointer-events-disabled', true);
        });
        result.textContent = `${oppositePlayer.name} won`;
        return;
      }
      isRunning = !currentPlayer.gameboard.areAllShipsSunk();
      isLeftPlayerTurn = !isLeftPlayerTurn;
    }
  });
}

function placePlayerShips(player) {
  player.gameboard.placeShipsRandomly();
  refreshPlayerBoard(player);
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

document.getElementById('start-game').onclick = startGame;
refreshPage();
