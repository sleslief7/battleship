import Gameboard from './src/models/gameboard.js';
import Ship from './src/models/ship.js';

let game = new Gameboard();
game.placeShip(new Ship(2), 0, 2, 'horizontal');
game.placeShip(new Ship(4), 2, 4, 'horizontal');
game.placeShip(new Ship(5), 4, 7, 'horizontal');
game.printBoardToConsole();
