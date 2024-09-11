import Gameboard from './gameboard.js';

export default class Player {
  constructor(type, name, difficulty, side) {
    this.gameboard = new Gameboard(type);
    this.type = type;
    this.name = name;
    this.side = side;
    this.difficulty = difficulty;
    this.boardId = `${side}-board`;
  }
}
