import Player from '../src/models/player.js';
import Gameboard from '../src/models/gameboard.js';

jest.mock('../src/models/gameboard.js');

describe('Player class', () => {
  beforeEach(() => {
    Gameboard.mockClear();
  });

  test('should create a player with given type, name, difficulty, and side', () => {
    const player = new Player('human', 'John', 'easy', 'left');
    expect(player.type).toBe('human');
    expect(player.name).toBe('John');
    expect(player.difficulty).toBe('easy');
    expect(player.side).toBe('left');
    expect(player.boardId).toBe('left-player-container');
    expect(player.gameboard).toBeInstanceOf(Gameboard);
  });

  test('should default name to "Player" if type is human and name is not provided', () => {
    const player = new Player('human', '', 'medium', 'right');
    expect(player.name).toBe('Player');
  });

  test('should default name to "CPU" if type is not human and name is not provided', () => {
    const player = new Player('cpu', '', 'hard', 'left');
    expect(player.name).toBe('CPU');
  });

  test('should create a player from JSON', () => {
    const json = JSON.stringify({
      type: 'human',
      name: 'Alice',
      difficulty: 'easy',
      side: 'right',
    });
    const player = Player.fromJSON(json);
    expect(player).toBeInstanceOf(Player);
    expect(player.type).toBe('human');
    expect(player.name).toBe('Alice');
    expect(player.difficulty).toBe('easy');
    expect(player.side).toBe('right');
  });

  test('should return null if JSON is null', () => {
    const player = Player.fromJSON(null);
    expect(player).toBeNull();
  });
});
