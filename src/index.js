import './css/styles.css';
import Gameboard from './models/gameboard.js';
import Ship from './models/ship.js';
import Player from './models/player.js';
import { buildBoard } from './models/views/domHandler.js';

let game = new Gameboard();
game.placeShipsRandomly();
//game.placeShip(new Ship(5), 4, 7);
//game.receiveAttack(1, 3);

document.getElementById('board-container').appendChild(buildBoard(game));
