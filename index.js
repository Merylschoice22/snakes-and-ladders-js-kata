const board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let currentPosition = 1;
let gameOn = "";

function start() {
  gameOn = true;
  currentPosition = board[0];
}

function move(spaces) {
  if (currentPosition + spaces <= board.length) {
    currentPosition += spaces;
  } else {
    currentPosition = currentPosition;
  }
  if (currentPosition === board.length) {
    gameOn = false;
    console.log("You won!");
  } else {
    console.log("Roll again!");
  }
  return currentPosition;
}

let dice = "";

function roll() {
  if (gameOn === true) {
    dice = Math.floor(Math.random() * 6) + 1;
    move(dice);
  } else {
    console.log("Press PLAY to restart the game!");
  }
}

start();
console.log(
  `Start! Game on? ${gameOn}. Game piece is on position ${currentPosition}`
);

roll();
console.log(
  `Turn 1 - rolled a ${dice} and game piece is now on position ${currentPosition}`
);
roll();
console.log(
  `Turn 2 - rolled a ${dice} and game piece is now on position ${currentPosition}`
);
roll();
console.log(
  `Turn 3 - rolled a ${dice} and game piece is now on position ${currentPosition}`
);
roll();
console.log(
  `Turn 4 - rolled a ${dice} and game piece is now on position ${currentPosition}`
);
roll();
console.log(
  `Turn 5 - rolled a ${dice} and game piece is now on position ${currentPosition}`
);
roll();
console.log(
  `Turn 6 - rolled a ${dice} and game piece is now on position ${currentPosition}`
);
roll();
console.log(
  `Turn 7 - rolled a ${dice} and game piece is now on position ${currentPosition}`
);
roll();
console.log(
  `Turn 8 - rolled a ${dice} and game piece is now on position ${currentPosition}`
);
roll();
console.log(
  `Turn 9 - rolled a ${dice} and game piece is now on position ${currentPosition}`
);
roll();
console.log(
  `Turn 10 - rolled a ${dice} and game piece is now on position ${currentPosition}`
);
roll();
console.log(
  `Turn 11 - rolled a ${dice} and game piece is now on position ${currentPosition}`
);
roll();
console.log(
  `Turn 12 - rolled a ${dice} and game piece is now on position ${currentPosition}`
);
