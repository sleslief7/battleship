import Ship from './ship.js';
import { BOARD_SIZE, SHIP_MODELS } from '../constants.js';
import { deepCopyShuffleArray } from '../utils/utils.js';

export default class Gameboard {
  constructor() {
    this.misses = new Set();
    this.hits = new Set();
    this.ships = [];
    this.boardSize = BOARD_SIZE;
    this.unresolvedHits = [];
    this.board = Array(this.boardSize)
      .fill()
      .map(() => Array(this.boardSize).fill(null));
    this.directions = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
  }

  canPlaceShip(ship, x, y) {
    const isHorizontal = ship.direction === 'horizontal';
    const length = ship.length;

    if (!this.isInside(x, y)) return false;
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

  randomPlay() {
    let x = this.rand();
    let y = this.rand();
    while (
      this.hits.has(this.coordsToStr(x, y)) ||
      this.misses.has(this.coordsToStr(x, y))
    ) {
      x = this.rand();
      y = this.rand();
    }

    return this.receiveAttack(x, y);
  }

  hardPlay() {
    if (!this.unresolvedHits.length) return this.randomPlay();

    let x = this.unresolvedHits.at(-1)[0];
    let y = this.unresolvedHits.at(-1)[1];

    let moves = this.getSuggestedMoves(x, y);
    if (!moves.length) moves = this.getPossibleMoves(x, y);
    if (!moves.length) return this.randomPlay();

    let rand = this.rand(moves.length - 1);

    return this.receiveAttack(moves[rand][0], moves[rand][1]);
  }

  getSuggestedMoves(x, y) {
    let suggestedMoves = [];
    let hitNeighbors = this.directions
      .map((m) => [x + m[0], y + m[1]])
      .filter(
        (coord) =>
          this.hits.has(this.coordsToStr(coord[0], coord[1])) &&
          !this.board[coord[0]][coord[1]]?.isSunk() &&
          this.isInside(coord[0], coord[1])
      );
    let directions = Array.from(
      new Set(
        hitNeighbors.map((m) =>
          JSON.stringify([Math.abs(x - m[0]), Math.abs(y - m[1])])
        )
      )
    ).map((str) => JSON.parse(str));

    const travel = (d) => {
      let cursor = [x, y];
      while (true) {
        cursor = [cursor[0] + d[0], cursor[1] + d[1]];
        if (!this.isInside(...cursor)) break;
        if (this.board[x][y]?.isSunk()) break;
        if (
          !this.hits.has(this.coordsToStr(...cursor)) &&
          !this.misses.has(this.coordsToStr(...cursor))
        ) {
          suggestedMoves.push(cursor);
          break;
        }
        if (this.misses.has(this.coordsToStr(...cursor))) break;
      }
    };
    for (let direction of directions) {
      travel(direction);
      direction = [direction[0] * -1, direction[1] * -1];
      travel(direction);
    }
    return suggestedMoves;
  }

  isInside(x, y) {
    return x >= 0 && x < this.boardSize && y >= 0 && y < this.boardSize;
  }

  getPossibleMoves(x, y) {
    return this.directions
      .map((pm) => [x + pm[0], y + pm[1]])
      .filter((coord) => this.canPlay(coord[0], coord[1]));
  }

  canPlay(x, y) {
    return (
      this.isInside(x, y) &&
      !this.hits.has(this.coordsToStr(x, y)) &&
      !this.misses.has(this.coordsToStr(x, y))
    );
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
    let attack;
    if (this.board[x][y]) {
      let ship = this.board[x][y];
      ship.hit();
      this.hits.add(this.coordsToStr(x, y));
      this.unresolvedHits.push([x, y]);
      attack = ship;
    } else {
      this.misses.add(this.coordsToStr(x, y));
      attack = null;
    }

    if (attack) {
      if (attack.isSunk()) {
        this.unresolvedHits = this.unresolvedHits.filter(
          (subArr1) =>
            !attack.coordinates.some(
              (subArr2) =>
                subArr1[0] === subArr2[0] && subArr1[1] === subArr2[1]
            )
        );
      }
    }

    return attack;
  }

  areAllShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }

  coordsToStr(x, y) {
    return `[${x}, ${y}]`;
  }

  resetBoard() {
    this.misses = new Set();
    this.hits = new Set();
    this.ships = [];
    this.boardSize = BOARD_SIZE;
    this.unresolvedHits = [];
    this.board = Array(this.boardSize)
      .fill()
      .map(() => Array(this.boardSize).fill(null));
  }
}
