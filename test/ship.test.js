import Ship from '../src/models/ship.js';
import { validateShip } from '../src/models/validations/validations.js';

jest.mock('../src/models/validations/validations.js');

describe('Ship class', () => {
  beforeEach(() => {
    validateShip.mockClear();
  });

  test('should create a ship with given length, name, and direction', () => {
    const ship = new Ship(4, 'Battleship', 'vertical');
    expect(ship.length).toBe(4);
    expect(ship.name).toBe('Battleship');
    expect(ship.direction).toBe('vertical');
    expect(ship.hits).toBe(0);
    expect(ship.coordinates).toEqual([]);
  });

  test('should default name to length if not provided', () => {
    const ship = new Ship(3);
    expect(ship.name).toBe('3');
  });

  test('should call validateShip with length and direction', () => {
    new Ship(5, 'Carrier', 'horizontal');
    expect(validateShip).toHaveBeenCalledWith(5, 'horizontal');
  });

  test('should increase hits when hit is called', () => {
    const ship = new Ship(2);
    ship.hit();
    expect(ship.hits).toBe(1);
  });

  test('should not increase hits if ship is sunk', () => {
    const ship = new Ship(1);
    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(1);
  });

  test('should return true if ship is sunk', () => {
    const ship = new Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  test('should return false if ship is not sunk', () => {
    const ship = new Ship(3);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });
});
