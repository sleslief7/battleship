import { SHIP_MODELS } from './constants.js';
import Ship from './models/ship.js';
import { refreshPlayerBoard } from './index.js';

let dragIndex = null;
let direction = 'horizontal';
let dragShipId = null;
let dragShipTiles = [];

export function buildDraggableShips(player) {
  let draggableShipsContainer = document.createElement('div');
  draggableShipsContainer.id = 'draggable-ships-container';
  let resetShipsBtn = document.createElement('button');
  resetShipsBtn.textContent = 'Reset Ships Position';
  resetShipsBtn.classList.add('btn');
  let rotateBtn = document.createElement('button');
  rotateBtn.textContent = 'Rotate Ships';
  rotateBtn.classList.add('btn');
  rotateBtn.id = 'rotate-ships-btn';

  SHIP_MODELS.forEach((ship) => {
    if (player.gameboard.ships.some((x) => x.name === ship.name)) return;

    let shipContainer = document.createElement('div');
    shipContainer.classList.add('draggable-ship');
    shipContainer.id = ship.name;
    shipContainer.draggable = true;

    shipContainer.ondragstart = onDragStartHandler;
    shipContainer.ondragend = onDragEndHandler;

    for (let i = 0; i < ship.length; i++) {
      let shipBox = document.createElement('div');
      shipBox.classList.add('ship-box');
      shipBox.setAttribute('data-index', i);
      shipContainer.appendChild(shipBox);
      if (direction === 'horizontal') {
        shipContainer.style.flexDirection = 'row';
        draggableShipsContainer.style.flexDirection = 'column';
      } else {
        shipContainer.style.flexDirection = 'column';
        draggableShipsContainer.style.flexDirection = 'row';
      }
    }
    draggableShipsContainer.appendChild(shipContainer);
  });
  rotateBtn.addEventListener('click', () => handleRotateShipsBtn());
  resetShipsBtn.addEventListener('click', () => handleResetShipsBtn(player));

  draggableShipsContainer.appendChild(resetShipsBtn);
  draggableShipsContainer.appendChild(rotateBtn);

  return draggableShipsContainer;
}

function handleResetShipsBtn(player) {
  player.gameboard.resetBoard();
  refreshPlayerBoard(player);
}

function handleRotateShipsBtn() {
  let ships = document.querySelectorAll('.draggable-ship');
  let shipsContainer = document.getElementById('draggable-ships-container');

  if (ships.length === 0) return;

  if (direction === 'horizontal') {
    ships.forEach((ship) => {
      ship.style.flexDirection = 'column';
    });
    shipsContainer.style.flexDirection = 'row';
    direction = 'vertical';
  } else {
    ships.forEach((ship) => {
      ship.style.flexDirection = 'row';
    });
    shipsContainer.style.flexDirection = 'column';
    direction = 'horizontal';
  }
}

function onDragStartHandler(e) {
  const { id, offsetLeft, offsetWidth, offsetHeight } = e.target;

  const offsetTop = getDistanceFromTop(e.target);
  const isHorizontal = direction === 'horizontal';
  const length = SHIP_MODELS.find((x) => x.name === id).length;
  const mouse = isHorizontal ? e.clientX : e.clientY;
  const start = isHorizontal ? offsetLeft : offsetTop;
  const size = isHorizontal ? offsetWidth : offsetHeight;

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
  const isH = direction === 'horizontal';
  const length = SHIP_MODELS.find((x) => x.name === dragShipId).length;
  const ship = new Ship(length, dragShipId, direction);
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
  const isH = direction === 'horizontal';
  const length = SHIP_MODELS.find((x) => x.name === dragShipId).length;
  const ship = new Ship(length, dragShipId, direction);
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
