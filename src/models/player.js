import Gameboard from './gameboard.js';

export default class Player {
  constructor(type, name, side) {
    this.gameboard = new Gameboard();
    this.type = type;
    this.name = name;
    this.side = side;
    this.boardId = `${side}-board`;
  }
}
