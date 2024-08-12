// const Gameboard = require('../src/models/gameboard');
// const Ship = require('../src/models/ship');

import Gameboard from '../src/models/gameboard';
import Ship from '../src/models/ship';

let gameboard = new Gameboard();
let myShip = new Ship(5, 'myShip', 'vertical');

test('Inbound location', () => {
  expect(gameboard.canPlaceShip(myShip, 3, 3)).toBe(true);
});
test('Out of bound location', () => {
  expect(gameboard.canPlaceShip(myShip, 3, 11)).toBe(false);
});
test('Place ship 3,3', () => {
  expect(gameboard.placeShip(myShip, 3, 11)).toBe();
});
