const result = document.getElementById('result');

export function buildBoard(gameboard, side, player) {
  let { board, boardSize } = gameboard;

  const boardDiv = document.createElement('div');
  boardDiv.classList.add('board');
  boardDiv.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;

  for (let y = boardSize - 1; y >= 0; y--) {
    for (let x = 0; x < boardSize; x++) {
      const ship = board[x][y];
      const tile = document.createElement('div');
      tile.classList.add(`grid-item`);
      tile.setAttribute('data-x', x);
      tile.setAttribute('data-y', y);
      tile.onclick = () => {
        gameboard.receiveAttack(x, y);
        refreshTile(gameboard, tile, x, y);
        if (ship && ship.isSunk()) showShipHasSunk(ship, side);
        if (gameboard.areAllShipsSunk()) {
          document.querySelectorAll('.board').forEach((board) => {
            board.classList.toggle('pointer-events-disabled', true);
          });
          result.textContent = `${player} won`;
        }
      };
      if (ship && side === 'board-left') tile.classList.add('ship');
      refreshTile(gameboard, tile, x, y);
      boardDiv.appendChild(tile);
    }
  }
  return boardDiv;
}

function refreshTile(gameBoard, tile, x, y) {
  const ship = gameBoard.board[x][y];

  if (gameBoard.hits.has(`[${x}, ${y}]`)) {
    tile.classList.add('hit');
    tile.style.pointerEvents = 'none';
    result.textContent = `${ship.name} was hit`;
  }
  if (gameBoard.misses.has(`[${x}, ${y}]`)) {
    tile.classList.add('miss');
    tile.style.pointerEvents = 'none';
    result.textContent = `You missed`;
  }
  if (ship && ship.isSunk()) {
    tile.classList.toggle('hit', false);
    tile.classList.toggle('sunk', true);
    tile.style.pointerEvents = 'none';
  }
}

function showShipHasSunk(ship, side) {
  result.textContent = `${ship.name} was sunk`;
  ship.coordinates.forEach((coord) => {
    let parent = document.querySelector(`#${side}`);

    parent
      .querySelector(`[data-x="${coord[0]}"][data-y="${coord[1]}"]`)
      .classList.add('sunk');
  });
}
