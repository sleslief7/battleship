import Ship from './ship.js';
import { BOARD_SIZE } from '../constants.js';

export default class Gameboard {
  constructor() {
    this.missedAttacks = [];
    this.ships = [];
    this.boardSize = BOARD_SIZE;
    this.board = Array(this.boardSize)
      .fill()
      .map(() => Array(this.boardSize).fill(null));
  }

  canPlaceShip(ship, x, y, direction) {
    let length = ship.length;

    if (x < 0 || y < 0) return false;

    if (direction === 'horizontal') {
      return length + x <= this.boardSize;
    }
    if (direction === 'vertical') {
      return length + y <= this.boardSize;
    }
    return false;
  }

  placeShip(ship, x, y, direction) {
    const isHorizontal = direction === 'horizontal';
    for (let i = 0; i < ship.length; i++) {
      const dX = isHorizontal ? i : 0;
      const dY = !isHorizontal ? i : 0;
      this.board[x + dX][y + dY] = ship;
    }
  }

  receiveAttack(coords) {}

  missAttack() {
    this.missedAttacks++;
  }

  printBoardToConsole() {
    let log = '';
    for (let y = this.boardSize; y >= 0; y--) {
      for (let x = 0; x < this.boardSize; x++) {
        const s = this.board[x][y];
        log += `${!s ? '[ ]' : `[${s.length}]`}`;
      }
      log += '\n';
    }
    console.log(log);
  }
}
