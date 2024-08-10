import Gameboard from './src/models/gameboard.js';
import Ship from './src/models/ship.js';

let game = new Gameboard();
game.placeShip(new Ship(5), 1, 2);
//game.placeShip(new Ship(4), 2, 4);
//game.placeShip(new Ship(5), 4, 7);
console.log(game.canPlaceShip(new Ship(5, 'myShip'), 2, 11));
game.printBoardToConsole();
