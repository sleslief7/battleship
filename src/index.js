import './css/styles.css';
import './css/battleships.css';
import './css/responsive.css';
import Player from './models/player.js';
import { buildBoard } from './dom.js';
import { SHIP_MODELS } from './constants.js';
import { shipsBoardDisplay, displayHitShip } from './shipsBoard.js';
import {
  buildDraggableShips,
  dragOverHandler,
  dropHandler,
  dragEnterHandler,
} from './draggableElements.js';

let playerOne = Player.fromJSON(localStorage.getItem('playerOne'));
let playerTwo = Player.fromJSON(localStorage.getItem('playerTwo'));
let leftType = localStorage.getItem('leftType');
let rightType = localStorage.getItem('rightType');
let rightBoard = document.getElementById('right-player-container');
let leftBoard = document.getElementById('left-player-container');
const result = document.getElementById('result');
const modal = document.getElementById('result-container');
const resetBtn = document.getElementById('reset-btn');
const randomizeBtn = document.getElementById('randomize');
const homeBtn = document.getElementById('home-btn');
const preGameControls = document.getElementById('pre-game-controls-container');
const startCpuGameBtn = document.getElementById('start-cpu-game');

let isRunning = false;

async function handleTileClick(e, player) {
  const { gameboard } = player;
  const tile = e.currentTarget;
  const x = tile.getAttribute('data-x');
  const y = tile.getAttribute('data-y');
  let oppositePlayer = player.side === playerOne.side ? playerTwo : playerOne;

  let play = gameboard.receiveAttack(x, y);
  refreshPlayerBoard(player);

  if (gameboard.areAllShipsSunk()) {
    handleGameEnd(oppositePlayer);
    return;
  }

  if (play === null) {
    rightBoard.classList.toggle('pointer-events-disabled', true);
    await handleCpuPlay(oppositePlayer);

    if (oppositePlayer.gameboard.areAllShipsSunk()) {
      handleGameEnd(player);
      return;
    }
    rightBoard.classList.toggle('pointer-events-disabled', false);
  }
}

async function handleCpuPlay(player) {
  let play = true;
  while (play && isRunning) {
    if (player.difficulty === 'regular') {
      play = await player.gameboard.randomPlay();
      if (isRunning) refreshPlayerBoard(player);
    } else {
      play = await player.gameboard.hardPlay();
      if (isRunning) refreshPlayerBoard(player);
    }
  }
}

function handleGameEnd(player) {
  document.querySelectorAll('.board').forEach((board) => {
    board.classList.toggle('pointer-events-disabled', true);
  });
  modal.showModal();
  modal.classList.toggle('slide-in-bck-center', true);
  result.textContent = `${getDisplayName(player.side)} won`;
  isRunning = false;
}

async function handleHomeBtn(e) {
  isRunning = false;
  document.getElementById(`left-mini-ships-container`).innerHTML = '';
  document.getElementById(`right-mini-ships-container`).innerHTML = '';
  document.getElementById(`drag-ships-container`).innerHTML = '';
  leftBoard.innerHTML = '';
  rightBoard.innerHTML = '';
  result.textContent = '';
  playerOne = playerTwo = leftType = rightType = null;
  homeBtn.classList.toggle('hidden', true);
  document.getElementById('player-two').textContent = '';
  localStorage.clear();
  refreshPage();
}

function startGame() {
  if (playerOne.gameboard.ships.length !== SHIP_MODELS.length) {
    alert(`You must place ${SHIP_MODELS.length} ships!`);
    return;
  }
  isRunning = true;
  placePlayerShips(playerTwo);
  displayNames();
  preGameControls.classList.toggle('hidden', true);
  rightBoard.classList.toggle('pointer-events-disabled', false);
  refreshPlayerBoard(playerOne);
  refreshPlayerBoard(playerTwo);
}

function refreshPage() {
  if (playerOne && playerTwo) {
    setPage(1);
  } else {
    setPage(0);
  }
}

function setPage(i) {
  let pageIds = ['player-type-selection-container', 'game-page'];
  pageIds.forEach((pId) =>
    document.getElementById(pId).classList.toggle('hidden', true)
  );
  if (i === 1) {
    LoadGamePageContent();
    homeBtn.classList.toggle('hidden', false);
  }
  document.getElementById(pageIds[i]).classList.toggle('hidden', false);
}

document.querySelectorAll('.vs').forEach((option) => {
  option.addEventListener('click', (e) => {
    e.stopPropagation();
    const el = e.currentTarget;
    leftType = el.getAttribute('data-left-type');
    rightType = el.getAttribute('data-right-type');
    localStorage.setItem('leftType', leftType);
    localStorage.setItem('rightType', rightType);

    el.classList.toggle('expanded-vs', true);
    el.classList.toggle('hidden-vs', false);
    document.querySelectorAll(`.vs:not(#${el.id})`).forEach((x) => {
      x.classList.toggle('expanded-vs', false);
      x.classList.toggle('hidden-vs', true);
    });
  });
});

document.querySelectorAll('.play-btn').forEach((x) => {
  x.addEventListener('click', (e) => {
    let vs = document.querySelector('.vs.expanded-vs');
    let leftName = vs.querySelector('.left-name')?.value ?? null;
    let rightName = vs.querySelector('.right-name')?.value ?? null;
    let leftDifficulty = vs.querySelector('.left-difficulty')?.value ?? null;
    let rightDifficulty = vs.querySelector('.right-difficulty')?.value ?? null;

    playerOne = new Player(leftType, leftName, leftDifficulty, 'left');
    playerTwo = new Player(rightType, rightName, rightDifficulty, 'right');
    localStorage.setItem('playerOne', JSON.stringify(playerOne));
    localStorage.setItem('playerTwo', JSON.stringify(playerTwo));

    refreshPage();
  });
});

randomizeBtn.addEventListener('click', () => {
  if (!playerOne) return;
  playerOne.gameboard.placeShipsRandomly();
  refreshPlayerBoard(playerOne);
});

function LoadGamePageContent() {
  if (leftType === 'human' && rightType === 'cpu') {
    handleHumanVsCpuGame();
  } else if (playerOne.type === 'cpu' && playerTwo.type === 'cpu') {
    handleCpuVsCpuGame();
  }
  displayNames();

  if (playerOne.type === 'human' && !isRunning) {
    preGameControls.classList.toggle('hidden', false);
  }
}

export function refreshPlayerBoard(player) {
  let boardElement = document.getElementById(player.boardId);
  let miniShipsContainer = document.getElementById(
    `${player.side}-mini-ships-container`
  );

  let dragShipContainer = document.getElementById(`drag-ships-container`);
  let oppositePlayer = player.name === playerOne.name ? playerTwo : playerOne;
  if (
    (!isRunning && player.side !== 'right') ||
    player.type === oppositePlayer.type
  ) {
    boardElement.innerHTML = '';
    boardElement.appendChild(buildBoard(player));
  }

  if (isRunning) {
    boardElement.innerHTML = '';
    displayHitShip(player);
    boardElement.appendChild(buildBoard(player));
    if (
      player.gameboard.areAllShipsSunk() ||
      oppositePlayer.gameboard.areAllShipsSunk()
    ) {
      return;
    }
    miniShipsContainer.innerHTML = '';
    dragShipContainer.innerHTML = '';
    miniShipsContainer.appendChild(shipsBoardDisplay(player.side));
    displayHitShip(player);
  } else if (!isRunning && player.side === 'left' && player.type === 'human') {
    buildDraggableShips(player);
  } else if (
    !isRunning &&
    player.type === 'cpu' &&
    oppositePlayer.type === 'cpu'
  ) {
    miniShipsContainer.innerHTML = '';
    dragShipContainer.innerHTML = '';
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
  playerTwoTitle.style.display = 'block';
  playerOneTitle.textContent = getDisplayName('left');

  if (isRunning || playerOne.type === 'cpu')
    playerTwoTitle.textContent = getDisplayName('right');
}

function getDisplayName(side = 'left') {
  let leftName = playerOne.name;
  let rightName = playerTwo.name;
  if (leftName === rightName) {
    leftName += ' One';
    rightName += ' Two';
  }
  return side === 'left' ? leftName : rightName;
}

function handleHumanVsCpuGame() {
  refreshPlayerBoard(playerOne);
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

  preGameControls.classList.toggle('hidden', false);
  preGameControls.querySelectorAll('button').forEach((button) => {
    button.classList.toggle('hidden', true);
  });

  startCpuGameBtn.classList.toggle('hidden', false);
}

function placePlayerShips(player) {
  player.gameboard.placeShipsRandomly();
  refreshPlayerBoard(player);
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

startCpuGameBtn.onclick = async () => {
  preGameControls.classList.toggle('hidden', true);

  leftBoard.classList.toggle('pointer-events-disabled', true);
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
    isRunning = isRunning && !currentPlayer.gameboard.areAllShipsSunk();
    isLeftPlayerTurn = !isLeftPlayerTurn;
  }
};

async function handleResetGame() {
  modal.classList.toggle('slide-in-bck-center', false);
  modal.classList.toggle('slide-out-bck-center', true);
  await delay(700);
  modal.close();
  document.getElementById(`left-mini-ships-container`).innerHTML = '';
  document.getElementById(`right-mini-ships-container`).innerHTML = '';
  document.getElementById(`drag-ships-container`).innerHTML = '';
  leftBoard.innerHTML = '';
  rightBoard.innerHTML = '';
  playerOne.gameboard.resetBoard();
  playerTwo.gameboard.resetBoard();
  refreshPage();
  refreshPlayerBoard(playerOne);
  refreshPlayerBoard(playerTwo);
  localStorage.setItem('playerOne', JSON.stringify(playerOne));
  localStorage.setItem('playerTwo', JSON.stringify(playerTwo));
}

document.body.addEventListener('click', (e) => {
  document.querySelectorAll('.vs').forEach((el) => {
    el.classList.toggle('expanded-vs', false);
    el.classList.toggle('hidden-vs', false);
  });
});

document.getElementById('title').addEventListener('click', handleHomeBtn);
document.getElementById('start-game').onclick = startGame;
homeBtn.addEventListener('click', handleHomeBtn);
resetBtn.addEventListener('click', handleResetGame);

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    document.body.style.visibility = 'visible';
  }
};
refreshPage();
