export function createPlayerInput(playerType, side) {
  let container = document.createElement('div');

  if (playerType === 'cpu') {
    let cpuContainer = document.createElement('div');
    cpuContainer.classList.add('cpu-container');
    cpuContainer.innerHTML = `
      <label for="${side}-difficulty">${capitalizeFirstLetter(
      side
    )} difficulty: </label>
      <select name="difficulty" id="${side}-difficulty">
          <option value="regular">Regular</option>
          <option value="hard">Hard</option>
      </select>
    `;
    container.appendChild(cpuContainer);
  }

  if (playerType === 'human') {
    let humanContainer = document.createElement('div');
    humanContainer.classList.add('human-container');
    humanContainer.innerHTML = `
      <label for="${side}-name">${capitalizeFirstLetter(
      side
    )} player name: </label>
      <input type="text" id="${side}-name" maxlength="20">
    
    `;
    container.appendChild(humanContainer);
  }

  return container;
}

function capitalizeFirstLetter(word) {
  if (!word) return '';
  return word.charAt(0).toUpperCase() + word.slice(1);
}
