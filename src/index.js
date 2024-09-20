import './css/styles.css';
import Player from './models/player.js';
import { buildBoard } from './dom.js';
import { SHIP_MODELS } from './constants.js';
import { createPlayerInput } from './createPlayerInfoScreen.js';
import { shipsBoardDisplay, displayHitShip } from './shipsBoard.js';
import {
  buildDraggableShips,
  dragOverHandler,
  dropHandler,
  dragEnterHandler,
} from './draggableElements.js';

let playerOne = null;
let playerTwo = null;
let leftType = null;
let rightType = null;
let rightBoard = document.getElementById('right-player-container');
let leftBoard = document.getElementById('left-player-container');
const result = document.getElementById('result');
const randomizeBtn = document.getElementById('randomize');
const submitBtn = document.getElementById('submit-btn');
let playerParams = document.getElementById('player-params-container');
let isRunning = false;

async function handleTileClick(e, player) {
  const { gameboard } = player;
  const tile = e.currentTarget;
  const x = tile.getAttribute('data-x');
  const y = tile.getAttribute('data-y');
  const ship = gameboard.board[x][y];
  let oppositePlayer = player.name === playerOne.name ? playerTwo : playerOne;

  let play = gameboard.receiveAttack(x, y);
  refreshPlayerBoard(player);

  if (gameboard.areAllShipsSunk()) {
    handleGameEnd(oppositePlayer);
    return;
  }

  if (play === null) {
    rightBoard.classList.toggle('pointer-events-disabled', true);
    await handleCpuPlay(playerTwo);

    if (oppositePlayer.gameboard.areAllShipsSunk()) {
      handleGameEnd(player);
      return;
    }
    rightBoard.classList.toggle('pointer-events-disabled', false);
  }
}

async function handleCpuPlay(player) {
  let oppositePlayer = player.name === playerOne.name ? playerTwo : playerOne;
  let play = true;
  while (play) {
    if (player.difficulty === 'regular') {
      play = await oppositePlayer.gameboard.randomPlay();
      refreshPlayerBoard(oppositePlayer);
    } else {
      play = await oppositePlayer.gameboard.hardPlay();
      refreshPlayerBoard(oppositePlayer);
    }
  }
}

function handleGameEnd(player) {
  document.querySelectorAll('.board').forEach((board) => {
    board.classList.toggle('pointer-events-disabled', true);
  });
  result.textContent = `${player.name} won`;

  const homeBtn = document.createElement('button');
  homeBtn.id = 'home-btn';
  homeBtn.textContent = 'Home';
  result.appendChild(homeBtn);
  homeBtn.addEventListener('click', () => handleHomeBtn(homeBtn));
  isRunning = false;
}

function handleHomeBtn(btn) {
  let miniShipsContainerOne = document.getElementById(
    `${playerOne.side}-mini-ships-container`
  );
  let miniShipsContainerTwo = document.getElementById(
    `${playerTwo.side}-mini-ships-container`
  );
  miniShipsContainerOne.innerHTML = '';
  miniShipsContainerTwo.innerHTML = '';
  playerOne = null;
  playerTwo = null;
  leftType = null;
  rightType = null;
  playerParams.innerHTML = '';
  rightBoard.innerHTML = '';
  result.textContent = '';
  btn.classList.toggle('hidden', true);
  setPage(0);
  document.getElementById('player-two').textContent = '';
  isRunning = false;
}

function startGame() {
  if (playerOne.gameboard.ships.length !== SHIP_MODELS.length) {
    alert(`You must place ${SHIP_MODELS.length} ships!`);
    return;
  }
  isRunning = true;
  placePlayerShips(playerTwo);
  displayNames();
  document
    .getElementById('pre-game-controls-container')
    .classList.toggle('hidden', true);
  rightBoard.classList.toggle('pointer-events-disabled', false);
  refreshPlayerBoard(playerOne);
  refreshPlayerBoard(playerTwo);
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

export function refreshPlayerBoard(player) {
  let boardElement = document.getElementById(player.boardId);
  boardElement.innerHTML = '';
  boardElement.appendChild(buildBoard(player));
  let miniShipsContainer = document.getElementById(
    `${player.side}-mini-ships-container`
  );
  let oppositePlayer = player.name === playerOne.name ? playerTwo : playerOne;

  if (isRunning) {
    boardElement.innerHTML = '';
    boardElement.appendChild(buildBoard(player));
    miniShipsContainer.innerHTML = '';
    miniShipsContainer.appendChild(shipsBoardDisplay(player.side));
    displayHitShip(player);
  } else if (!isRunning && player.side === 'left' && player.type === 'human') {
    miniShipsContainer.innerHTML = '';
    miniShipsContainer.appendChild(buildDraggableShips(player));
  } else if (
    !isRunning &&
    player.type === 'cpu' &&
    oppositePlayer.type === 'cpu'
  ) {
    miniShipsContainer.innerHTML = '';
    miniShipsContainer.appendChild(shipsBoardDisplay(player.side));
  }

  if (player.side === 'right' && player.type === 'cpu') {
    rightBoard.querySelectorAll('.tile').forEach((tile) => {
      tile.addEventListener('click', (e) => {
        handleTileClick(e, player);
      });
      tile.classList.toggle('ship', false);
    });
  }

  if (player.side === 'left' && player.type === 'human' && !isRunning) {
    leftBoard.querySelectorAll('.tile').forEach((tile) => {
      tile.ondragover = dragOverHandler;
      tile.addEventListener('drop', (e) =>
        dropHandler(e, player, refreshPlayerBoard)
      );
      tile.addEventListener('dragenter', (e) => dragEnterHandler(e, player));
    });
  }
}

function displayNames() {
  let playerOneTitle = document.getElementById('player-one');
  let playerTwoTitle = document.getElementById('player-two');
  playerOneTitle.textContent = '';
  playerTwoTitle.textContent = '';
  playerOneTitle.textContent = playerOne.name;
  if (
    isRunning ||
    (isRunning && playerTwo.type === 'cpu') ||
    (!isRunning && playerOne.type === 'cpu')
  ) {
    playerTwoTitle.textContent = playerTwo.name;
  }
}

function handleHumanVsCpuGame() {
  refreshPlayerBoard(playerOne);
  let preGameControls = document.getElementById('pre-game-controls-container');
  preGameControls.classList.toggle('hidden', false);
  preGameControls.querySelectorAll('button').forEach((button) => {
    button.classList.toggle('hidden', true);
  });
  let startGameBtn = document.getElementById('start-game');
  startGameBtn.classList.toggle('hidden', false);
  randomizeBtn.classList.toggle('hidden', false);
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
      result.textContent = '';
      await handleCpuPlay(oppositePlayer);
      refreshPlayerBoard(currentPlayer);

      if (currentPlayer.gameboard.areAllShipsSunk()) {
        handleGameEnd(oppositePlayer);
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

document.getElementById('start-game').onclick = startGame;
refreshPage();
