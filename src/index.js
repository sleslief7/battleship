import './css/styles.css';
import Gameboard from './models/gameboard.js';
import Ship from './models/ship.js';
import Player from './models/player.js';
import { buildBoard } from './models/views/domHandler.js';

let game = new Gameboard();
game.placeShipsRandomly();

let game2 = new Gameboard();
game2.placeShipsRandomly();

document
  .getElementById('board-left')
  .appendChild(buildBoard(game, 'board-left', 'Player One'));

document
  .getElementById('board-right')
  .appendChild(buildBoard(game2, 'board-right', 'Player Two'));
