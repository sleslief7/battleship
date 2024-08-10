export default class Ship {
  constructor(length, name = length.toString(), direction = 'horizontal') {
    this.length = length;
    this.hits = 0;
    this.direction = direction;
    this.name = name;
  }

  hit() {
    if (this.isSunk()) return;
    this.hits++;
  }

  isSunk() {
    return this.hits === this.length;
  }
}
