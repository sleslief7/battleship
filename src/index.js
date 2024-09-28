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
const randomizeBtn = document.getElementById('randomize');
const homeBtn = document.getElementById('home-btn');
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
  while (play) {
    if (player.difficulty === 'regular') {
      play = await player.gameboard.randomPlay();
      refreshPlayerBoard(player);
    } else {
      play = await player.gameboard.hardPlay();
      refreshPlayerBoard(player);
    }
  }
}

function handleGameEnd(player) {
  document.querySelectorAll('.board').forEach((board) => {
    board.classList.toggle('pointer-events-disabled', true);
  });
  result.textContent = `${player.name} won`;
  isRunning = false;
}

async function handleHomeBtn(e) {
  if (isRunning) isRunning = false;
  await delay(500);
  let miniShipsContainerOne = document.getElementById(
    `left-mini-ships-container`
  );
  let miniShipsContainerTwo = document.getElementById(
    `right-mini-ships-container`
  );
  miniShipsContainerOne.innerHTML = '';
  miniShipsContainerTwo.innerHTML = '';
  leftBoard.innerHTML = '';
  rightBoard.innerHTML = '';
  result.textContent = '';
  playerOne = playerTwo = leftType = rightType = null;
  homeBtn.classList.toggle('hidden', true);
  document.getElementById('player-two').textContent = '';
  isRunning = false;
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
  document
    .getElementById('pre-game-controls-container')
    .classList.toggle('hidden', true);
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
    document
      .getElementById('pre-game-controls-container')
      .classList.toggle('hidden', false);
  }
}

export function refreshPlayerBoard(player) {
  let boardElement = document.getElementById(player.boardId);
  if (!isRunning) {
    boardElement.innerHTML = '';
    boardElement.appendChild(buildBoard(player));
  }
  let miniShipsContainer = document.getElementById(
    `${player.side}-mini-ships-container`
  );
  let oppositePlayer = player.name === playerOne.name ? playerTwo : playerOne;

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
  if (playerOne.type === playerTwo.type) {
    playerOne.name = `${playerOne.name} One`;
    playerTwo.name = `${playerTwo.name} Two`;
    playerOneTitle.textContent = playerOne.name;
    playerTwoTitle.textContent = playerTwo.name;
    return;
  }
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
      isRunning = isRunning && !currentPlayer.gameboard.areAllShipsSunk();
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

document.body.addEventListener('click', (e) => {
  document.querySelectorAll('.vs').forEach((el) => {
    el.classList.toggle('expanded-vs', false);
    el.classList.toggle('hidden-vs', false);
  });
});

document.getElementById('title').addEventListener('click', handleHomeBtn);
document.getElementById('start-game').onclick = startGame;
homeBtn.addEventListener('click', handleHomeBtn);

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    document.body.style.visibility = 'visible';
  }
};
refreshPage();
