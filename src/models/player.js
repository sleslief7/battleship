import Gameboard from './gameboard.js';

export default class Player {
  constructor(player, name = 'Player') {
    this.board = new Gameboard();
    this.playerType = player;
    this.name = name;
  }
}
