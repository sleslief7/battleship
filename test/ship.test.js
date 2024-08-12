import Ship from '../src/models/ship';

let myShip;

beforeEach(() => {
  myShip = new Ship(2, 'myShip', 'vertical');
});

test('Add 1 to hits', () => {
  myShip.hit();
  expect(myShip.hits).toBe(1);
});
test('Test IsSunk', () => {
  expect(myShip.isSunk()).toBe(false);
  myShip.hit();
  myShip.hit();
  expect(myShip.isSunk()).toBe(true);
});
test('Test that hits does not exceeds ship length', () => {
  myShip.hit();
  myShip.hit();
  myShip.hit();
  expect(myShip.hits).toBe(2);
});
