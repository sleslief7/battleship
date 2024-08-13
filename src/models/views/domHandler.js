export function buildBoard(gameboard) {
  let { board, boardSize } = gameboard;

  const boardDiv = document.createElement('div');
  boardDiv.classList.add('board');
  boardDiv.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;

  for (let y = boardSize - 1; y >= 0; y--) {
    for (let x = 0; x < boardSize; x++) {
      const tile = document.createElement('div');
      tile.classList.add(`grid-item`);
      tile.setAttribute('data-x', x);
      tile.setAttribute('data-y', y);
      tile.onclick = () => {
        gameboard.receiveAttack(x, y);
        refreshTile(gameboard, tile, x, y);
      };
      if (board[x][y]) {
        tile.classList.add('ship');
      }
      refreshTile(gameboard, tile, x, y);
      boardDiv.appendChild(tile);
    }
  }
  return boardDiv;
}

function refreshTile(board, tile, x, y) {
  if (board.hits.has(`[${x}, ${y}]`)) {
    tile.classList.add('hit');
  }
  if (board.misses.has(`[${x}, ${y}]`)) {
    tile.classList.add('miss');
  }
}
