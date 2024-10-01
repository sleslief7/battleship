# Battleship Game

## Overview

This is a Battleship game implemented using vanilla JavaScript, CSS, and HTML. The game features two modes of play: Human vs CPU and CPU vs CPU. The CPU has two difficulty levels: 'Easy' and 'Hard'.

## Features

- **Classes**: The game is structured using classes for Ships, Player, and Gameboard.
- **Game Modes**:
  - **Human vs CPU**: Play against the computer.
  - **CPU vs CPU**: Watch two computer players battle it out.
- **CPU Difficulty Levels**:
  - **Easy**: The CPU makes random shots.
  - **Hard**: The CPU uses a strategy to find and sink ships by saving possible and suggested moves.
- **Ship Placement**:
  - **Drag and Drop**: Players can drag and drop their ships onto the gameboard.
  - **Random Placement**: Players can choose to place their ships randomly.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/battleship.git

   ```

2. Navigate to the project directory:
   cd battleship

3. Open index.html in your browser to play the game.

## Testing

This project uses Jest for unit testing. To run the tests:

1. Install Jest:
   npm install --save-dev jest

2. Run the tests:
   npm test

## How to Play

1. Choose a game mode: Human vs CPU or CPU vs CPU.
2. Choose CPU difficulty.
3. If playing Human vs CPU, place your ships on the gameboard.
4. Take turns to attack the opponent’s ships.
5. The game ends when all ships of one player are sunk.

## Screenshots

**Homepage**

<img src=".\battleship_screenshots\battleship_homepage.png" alt="Homepage" title="Homepage" width="200"/>

**CPU vs CPU selection**

<img src=".\battleship_screenshots\cpu_vs_cpu.png" alt="CPU vs CPU selection" title="CPU vs CPU selection" width="200"/>

**Human vs CPU selection**

<img src=".\battleship_screenshots\human_vs_cpu.png" alt="Human vs CPU selection" title="Human vs CPU selection" width="200"/>

**Drag and drop**

<img src=".\battleship_screenshots\drag_and_drop.png" alt="Drag and drop" title="Drag and drop" width="200"/>

**CPU vs CPU game**

<img src=".\battleship_screenshots\cpu_vs_cpu_game.png" alt="CPU vs CPU game" title="CPU vs CPU game" width="200"/>

**Human vs CPU game**

<img src=".\battleship_screenshots\human_vs_cpu_game.png" alt="Human vs CPU game" title="Human vs CPU game" width="200"/>
