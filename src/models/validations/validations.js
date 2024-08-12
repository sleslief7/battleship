import { SHIP_MODELS } from '../../constants.js';

export function validateShip(length, direction) {
  const maxShipLen = Math.max(...SHIP_MODELS.map((s) => s.length));
  if (length > maxShipLen || length < 0) {
    throw new Error(`Length should be between 0 and ${maxShipLen}`);
  }
  if (direction !== 'horizontal' && direction !== 'vertical') {
    throw new Error('Direction must be vertical or horizontal');
  }
}
