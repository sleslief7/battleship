import { fromJSON } from 'postcss';
import Gameboard from './gameboard.js';

export default class Player {
  constructor(type, name, difficulty, side) {
    this.gameboard = new Gameboard();
    this.type = type;
    this.name = name ? name : type === 'human' ? 'Human' : 'CPU';
    this.side = side;
    this.difficulty = difficulty;
    this.boardId = `${side}-player-container`;
  }

  static fromJSON(json) {
    if (!json) return null;
    const data = JSON.parse(json);
    return new Player(data.type, data.name, data.difficulty, data.side);
  }
}
