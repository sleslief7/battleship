import { SHIP_MODELS } from './constants.js';
import Ship from './models/ship.js';
import { refreshPlayerBoard } from './index.js';

let dragIndex = null;
let isH = true;
let dragShipId = null;
let dragShipTiles = [];
const pixels = 48;

export function buildDraggableShips(player) {
  const boardBuilderControls = document.getElementById(
    `${player.side}-mini-ships-container`
  );
  boardBuilderControls.innerHTML = '';

  let resetShipsBtn = document.createElement('button');
  let rotateBtn = document.createElement('button');
  resetShipsBtn.textContent = 'Reset Ships Position';
  resetShipsBtn.classList.add('btn');
  rotateBtn.textContent = 'Rotate Ships';
  rotateBtn.classList.add('btn');
  rotateBtn.id = 'rotate-ships-btn';
  rotateBtn.addEventListener('click', () => handleRotateShipsBtn(player));
  resetShipsBtn.addEventListener('click', () => handleResetShipsBtn(player));

  let shipsContainer = document.createElement('div');
  shipsContainer.id = 'draggable-ships-container';
  shipsContainer.style.flexDirection = isH ? 'column' : 'row';
  SHIP_MODELS.forEach((ship) => {
    if (player.gameboard.ships.some((x) => x.name === ship.name)) return;

    let draggableShip = document.createElement('div');
    draggableShip.ondragstart = onDragStartHandler;
    draggableShip.ondragend = onDragEndHandler;
    draggableShip.classList.add('draggable-ship');
    draggableShip.id = ship.name;
    draggableShip.draggable = true;

    let shipClass = ship.name.toLowerCase();
    if (!isH) shipClass = `rotated-${shipClass}`;
    draggableShip.classList.add(shipClass);

    const width = isH ? ship.length * pixels : pixels;
    const height = !isH ? ship.length * pixels : pixels;
    draggableShip.style.width = `${width}px`;
    draggableShip.style.height = `${height}px`;

    shipsContainer.appendChild(draggableShip);
  });

  boardBuilderControls.appendChild(shipsContainer);
  boardBuilderControls.appendChild(resetShipsBtn);
  boardBuilderControls.appendChild(rotateBtn);
}

function handleResetShipsBtn(player) {
  player.gameboard.resetBoard();
  refreshPlayerBoard(player);
}

function handleRotateShipsBtn(player) {
  isH = !isH;
  buildDraggableShips(player);
}

function onDragStartHandler(e) {
  const { id, offsetLeft, offsetWidth, offsetHeight } = e.target;

  const offsetTop = getDistanceFromTop(e.target);
  const length = SHIP_MODELS.find((x) => x.name === id).length;
  const mouse = isH ? e.clientX : e.clientY;
  const start = isH ? offsetLeft : offsetTop;
  const size = isH ? offsetWidth : offsetHeight;

  dragIndex = Math.floor((mouse - start) / (size / length));
  dragShipId = id;
  e.dataTransfer.setData('text', id);
}

function getDistanceFromTop(el) {
  const rect = el.getBoundingClientRect();
  const distanceFromTop = rect.top;
  return distanceFromTop;
}

export function dragOverHandler(e) {
  e.preventDefault();
}

function buildXAndY(tile, isH) {
  let x = Number(tile.getAttribute('data-x'));
  let y = Number(tile.getAttribute('data-y'));
  x = isH ? x - dragIndex : x;
  y = !isH ? y + dragIndex : y;
  return { x, y };
}

export function dragEnterHandler(e, player) {
  e.preventDefault();
  const { gameboard: gb } = player;
  const length = SHIP_MODELS.find((x) => x.name === dragShipId).length;
  const ship = new Ship(length, dragShipId, isH ? 'horizontal' : 'vertical');
  const { x, y } = buildXAndY(e.target, isH);
  const hoverClass = gb.canPlaceShip(ship, x, y) ? 'can-drop' : 'can-not-drop';

  let tileCoords = [];
  for (let i = 0; i < length; i++) {
    const newX = isH ? x + i : x;
    const newY = !isH ? y - i : y;
    if (gb.isInside(newX, newY)) tileCoords.push([newX, newY]);
  }

  dragShipTiles.forEach((element) => {
    element.classList.remove('can-drop');
    element.classList.remove('can-not-drop');
  });

  dragShipTiles = tileCoords.map((coord) =>
    document.querySelector(
      `#left-player-container .tile[data-x="${coord[0]}"][data-y="${coord[1]}"]`
    )
  );

  dragShipTiles.forEach((element) => {
    element.classList.add(hoverClass);
  });
}

export function dropHandler(e, player, refreshPlayerBoard) {
  e.preventDefault();
  const { gameboard: gb } = player;
  const length = SHIP_MODELS.find((x) => x.name === dragShipId).length;
  const ship = new Ship(length, dragShipId, isH ? 'horizontal' : 'vertical');
  const { x, y } = buildXAndY(e.target, isH);
  if (gb.canPlaceShip(ship, x, y)) {
    let rotateBtn = document.getElementById('rotate-ships-btn');
    gb.placeShip(ship, x, y);
    refreshPlayerBoard(player);
    if (gb.ships === SHIP_MODELS.length) rotateBtn.style.pointerEvents = 'none';
  }

  dragShipTiles.forEach((element) => {
    element.classList.remove('can-drop');
    element.classList.remove('can-not-drop');
  });
}

function onDragEndHandler(e) {
  dragShipTiles.forEach((element) => {
    element.classList.remove('can-drop');
    element.classList.remove('can-not-drop');
  });
}
