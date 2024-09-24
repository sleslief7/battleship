export function buildBoard(player) {
  const { gameboard } = player;
  let { board, boardSize } = gameboard;

  const boardDiv = document.createElement('div');
  boardDiv.classList.add('board');
  boardDiv.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;
  boardDiv.style.gridTemplateRows = `repeat(${boardSize}, 1fr)`;

  for (let y = boardSize - 1; y >= 0; y--) {
    for (let x = 0; x < boardSize; x++) {
      const ship = board[x][y];
      const tile = document.createElement('div');
      tile.classList.add(`tile`);
      tile.setAttribute('data-x', x);
      tile.setAttribute('data-y', y);
      tile.style.gridColumn = x + 1;
      tile.style.gridRow = boardSize - y;
      colorTile(gameboard, tile, x, y);
      boardDiv.appendChild(tile);
    }
  }
  gameboard.ships.forEach((ship) => {
    if (player.type === 'human' || ship.isSunk()) {
      let shipElement = document.createElement('div');
      let isH = ship.direction === 'horizontal';
      let x = ship.x;
      let y = ship.y;
      let length = ship.length;
      let shipImgName = isH
        ? ship.name.toLowerCase()
        : `rotated-${ship.name.toLowerCase()}`;
      let gridColumn = x + 1;
      let gridRow = boardSize - y;

      shipElement.style.cssText = isH
        ? `
        grid-column: ${gridColumn} / span ${length};
        grid-row: ${gridRow};
      `
        : `
      grid-column: ${gridColumn} ;
      grid-row: ${gridRow} / span ${length}; `;
      shipElement.classList.add('placed-ship', shipImgName);
      boardDiv.appendChild(shipElement);
    }
  });

  return boardDiv;
}

function colorTile(gameBoard, tile, x, y) {
  const ship = gameBoard.board[x][y];
  let el = document.createElement('i');

  if (gameBoard.hits.has(`[${x}, ${y}]`) && !ship.isSunk()) {
    el.classList.add('fa-regular', 'fa-circle-dot');
    tile.appendChild(el);
    tile.classList.add('hit');
    tile.style.pointerEvents = 'none';
  }
  if (gameBoard.misses.has(`[${x}, ${y}]`)) {
    el.classList.add('fa-regular', 'fa-circle');
    tile.appendChild(el);
    tile.classList.add('miss');
    tile.style.pointerEvents = 'none';
  }
  if (ship && ship.isSunk()) {
    tile.classList.toggle('hit', false);
    tile.innerHTML = '<i class="fa-solid fa-x sunk-x"></i>';
    tile.style.pointerEvents = 'none';
  }
}
