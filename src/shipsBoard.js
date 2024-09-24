import { SHIP_MODELS } from './constants.js';

export function shipsBoardDisplay(side) {
  let shipsContainer = document.createElement('div');
  shipsContainer.classList.add(`${side}-ships-container`);
  SHIP_MODELS.forEach((ship) => {
    let shipIllustration = document.createElement('div');
    shipIllustration.classList.add('single-ship-container', `${ship.name}`);
    let shipAndName = document.createElement('div');
    shipAndName.classList.add('ship-and-ship-name');
    let shipBoxContainer = document.createElement('div');
    shipBoxContainer.classList.add('ship-box-container');

    for (let i = 0; i < ship.length; i++) {
      let shipBox = document.createElement('div');
      shipBox.classList.add('ship', 'ship-wagon');
      shipBoxContainer.appendChild(shipBox);
    }

    let shipName = document.createElement('div');
    shipName.classList.add('ship-name');
    shipName.textContent = `${ship.name}`;
    shipAndName.append(shipBoxContainer, shipName);

    shipIllustration.appendChild(shipAndName);
    shipsContainer.appendChild(shipIllustration);
  });
  return shipsContainer;
}

export function displayHitShip(player) {
  let ships = player.gameboard.ships;
  let shipsHit = ships.filter((ship) => ship.hits > 0);
  if (shipsHit.length <= 0) return;
  for (let i = 0; i < shipsHit.length; i++) {
    let ship = shipsHit[i];
    let shipWagons = Array.from(
      document.querySelectorAll(
        `.${player.side}-ships-container  .${ship.name} .ship-wagon`
      )
    );

    for (let i = 0; i < ship.hits; i++) {
      shipWagons[i].classList.add('mini-ship-hit');
    }
  }
}
