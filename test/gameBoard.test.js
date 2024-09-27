import Gameboard from '../src/models/gameboard.js';
import Ship from '../src/models/ship.js';
import { BOARD_SIZE } from '../src/constants.js';

describe('Gameboard', () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test('should initialize the gameboard correctly', () => {
    expect(gameboard.misses.size).toBe(0);
    expect(gameboard.hits.size).toBe(0);
    expect(gameboard.ships.length).toBe(0);
    expect(gameboard.board.length).toBe(BOARD_SIZE);
    expect(gameboard.board[0].length).toBe(BOARD_SIZE);
  });

  test('should be able to place a ship on the board', () => {
    const ship = new Ship(3, 'Battleship', 'horizontal');
    const canPlace = gameboard.canPlaceShip(ship, 0, 0);
    expect(canPlace).toBe(true);

    gameboard.placeShip(ship, 0, 0);
    expect(gameboard.board[0][0]).toBe(ship);
    expect(gameboard.board[1][0]).toBe(ship);
    expect(gameboard.board[2][0]).toBe(ship);
    expect(gameboard.ships.length).toBe(1);
  });

  test('should not place a ship outside the board', () => {
    const ship = new Ship(4, 'Destroyer', 'horizontal');
    const canPlace = gameboard.canPlaceShip(ship, BOARD_SIZE - 2, 0);
    expect(canPlace).toBe(false);
  });

  test('should handle receiving an attack on a ship', () => {
    const ship = new Ship(3, 'Battleship', 'horizontal');
    gameboard.placeShip(ship, 0, 0);

    const attackResult = gameboard.receiveAttack(0, 0);
    expect(attackResult).toBe(ship);
    expect(gameboard.hits.has('[0, 0]')).toBe(true);
  });

  test('should handle receiving a miss', () => {
    const attackResult = gameboard.receiveAttack(1, 1);
    expect(attackResult).toBe(null);
    expect(gameboard.misses.has('[1, 1]')).toBe(true);
  });

  test('should report if all ships are sunk', () => {
    const ship = new Ship(2, 'Patrol Boat', 'vertical');
    gameboard.placeShip(ship, 0, 1);

    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(0, 1);

    expect(ship.isSunk()).toBe(true);
    expect(gameboard.areAllShipsSunk()).toBe(true);
  });

  test('should reset the board correctly', () => {
    const ship = new Ship(2, 'Patrol Boat', 'vertical');
    gameboard.placeShip(ship, 0, 0);

    gameboard.receiveAttack(0, 0);
    gameboard.resetBoard();

    expect(gameboard.misses.size).toBe(0);
    expect(gameboard.hits.size).toBe(0);
    expect(gameboard.ships.length).toBe(0);
    expect(gameboard.board[0][0]).toBe(null);
  });
});
