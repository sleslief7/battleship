import Gameboard from './models/gameboard.js';
import Ship from './models/ship.js';
import Player from './models/player.js';
import { buildBoard } from './models/views/domHandler.js';

let game = new Gameboard();
game.placeShip(new Ship(5), 1, 2);
game.placeShip(new Ship(4, 'newShip', 'vertical'), 2, 4);
//game.placeShip(new Ship(5), 4, 7);
// game.placeShipsRandomly();
game.printBoardToConsole();
game.receiveAttack(1, 3);
game.receiveAttack(1, 2);
game.receiveAttack(2, 4);
console.log(game.missedAttacks);
console.log(game.hits);
console.log(game.areAllShipsSunk());

buildBoard(game);
