import Ship from './ship.js';
import { BOARD_SIZE, SHIP_MODELS } from '../constants.js';
import { deepCopyShuffleArray } from '../utils/utils.js';

export default class Gameboard {
  constructor() {
    this.misses = new Set();
    this.hits = new Set();
    this.ships = [];
    this.boardSize = BOARD_SIZE;
    this.board = Array(this.boardSize)
      .fill()
      .map(() => Array(this.boardSize).fill(null));
  }

  canPlaceShip(ship, x, y) {
    const isHorizontal = ship.direction === 'horizontal';
    const length = ship.length;

    if (x < 0 || y < 0 || x >= this.boardSize || y >= this.boardSize)
      return false;
    if (isHorizontal && length + x >= this.boardSize) return false;
    if (!isHorizontal && length + y >= this.boardSize) return false;

    for (let i = 0; i < length; i++) {
      const dX = isHorizontal ? i : 0;
      const dY = !isHorizontal ? i : 0;
      if (this.board[x + dX][y + dY] !== null) return false;
    }

    return true;
  }

  placeShip(ship, x, y) {
    const isHorizontal = ship.direction === 'horizontal';
    for (let i = 0; i < ship.length; i++) {
      const dX = isHorizontal ? i : 0;
      const dY = !isHorizontal ? i : 0;
      this.board[x + dX][y + dY] = ship;
      ship.coordinates.push([x + dX, y + dY]);
    }
    this.ships.push(ship);
  }

  rand(end = this.boardSize) {
    return Math.floor(Math.random() * end);
  }

  placeShipsRandomly() {
    const models = deepCopyShuffleArray(SHIP_MODELS);
    this.ships = [];
    this.board = Array(this.boardSize)
      .fill()
      .map(() => Array(this.boardSize).fill(null));

    let ships = models.map((model) => {
      let direction = this.rand(2) === 0 ? 'horizontal' : 'vertical';
      return new Ship(model.length, model.name, direction);
    });

    ships.forEach((ship) => {
      let x = this.rand();
      let y = this.rand();
      while (!this.canPlaceShip(ship, x, y)) {
        ship.direction = this.rand(2) === 0 ? 'horizontal' : 'vertical';
        x = this.rand();
        y = this.rand();
      }
      this.placeShip(ship, x, y);
    });
  }

  receiveAttack(x, y) {
    if (this.board[x][y]) {
      let ship = this.board[x][y];
      ship.hit();
      this.hits.add(`[${x}, ${y}]`);
    } else {
      this.misses.add(`[${x}, ${y}]`);
    }
  }

  areAllShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }

  resetBoard() {
    this.misses = new Set();
    this.hits = new Set();
    this.ships = [];
    this.boardSize = BOARD_SIZE;
    this.board = Array(this.boardSize)
      .fill()
      .map(() => Array(this.boardSize).fill(null));
  }
}
