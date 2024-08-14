import { validateShip } from './validations/validations.js';

export default class Ship {
  constructor(length, name = length.toString(), direction = 'horizontal') {
    validateShip(length, direction);
    this.length = length;
    this.name = name;
    this.direction = direction;
    this.hits = 0;
    this.coordinates = [];
  }

  hit() {
    if (this.isSunk()) return;
    this.hits++;
  }

  isSunk() {
    return this.hits === this.length;
  }
}
