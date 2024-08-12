import Gameboard from '../src/models/gameboard';
import Ship from '../src/models/ship';

let gameboard;
let myShip;

beforeEach(() => {
  gameboard = new Gameboard();
  myShip = new Ship(5, 'myShip', 'vertical');
});
test('Inbound location', () => {
  expect(gameboard.canPlaceShip(myShip, 3, 3)).toBe(true);
});
test('Out of bound location', () => {
  expect(gameboard.canPlaceShip(myShip, 3, 10)).toBe(false);
});
test('Place ship 3,3', () => {
  gameboard.placeShip(myShip, 3, 2);
  expect(gameboard.ships.length).toBe(1);
});
