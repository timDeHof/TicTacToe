// * How to play the game(tic-tac-toe)
// 1. Draw a board
// 2. the first player goes first
// 3. the second player goes second
// 4. keep alternating moves until one of the players has drawn a row of three symbols or until no one can win

// * Here is our game object
const gameState = {
  players: ["x", "o"],
  numberOfPlayers: 1,
  numberOfTurns: 0,
  player1: "user",
  player2: "computer",
  currentPlayer: "user",
  gameStatus: "playing",
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],

  move: function (player, rowNum, colNum) {
    if (!this.board[rowNum][colNum]) {
      this.board[rowNum][colNum] = player;
    }

    console.log(this.board);
    return this.board;
  },

  clear: function () {
    let winner = document.getElementById("winner");
    let playersField = document.querySelector(".playersField");
    // let cell = document.getElementsByClassName("cell");
    // cell.classList.remove("target");
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.gameStatus = "playing";
    this.currentPlayer = "user";
    winner.innerText = "";
    playersField.innerText = "";
  },

  winningCombinations: function (board) {
    let winner = document.getElementById("winner");

    // across the top
    if (
      board[0][0] === "user" &&
      board[0][1] === "user" &&
      board[0][2] === "user"
    ) {
      this.gameStatus = "Finished";
      winner.innerText = `user is the winner!`;
    }

    // across the middle
    if (
      board[1][0] === "user" &&
      board[1][1] === "user" &&
      board[1][2] === "user"
    ) {
      this.gameStatus = "Finished";
      winner.innerText = "user is the winner!";
    }

    // across the bottom
    if (
      board[2][0] === "user" &&
      board[2][1] === "user" &&
      board[2][2] === "user"
    ) {
      this.gameStatus = "Finished";
      winner.innerText = "user is the winner!";
    }

    // Going down the left side
    if (
      board[0][0] === "user" &&
      board[1][0] === "user" &&
      board[2][0] === "user"
    ) {
      this.gameStatus = "Finished";
      winner.innerText = "user is the winner!";
    }

    // Going down the middle
    if (
      board[0][1] === "user" &&
      board[1][1] === "user" &&
      board[2][1] === "user"
    ) {
      this.gameStatus = "Finished";
      winner.innerText = "user is the winner!";
    }

    // Going down the right
    if (
      board[0][2] === "user" &&
      board[1][2] === "user" &&
      board[2][2] === "user"
    ) {
      this.gameStatus = "Finished";
      winner.innerText = "user is the winner!";
    }

    // diagonal across the board - top-left to bottom-right
    if (
      board[0][0] === "user" &&
      board[1][1] === "user" &&
      board[2][2] === "user"
    ) {
      this.gameStatus = "Finished";
      winner.innerText = "user is the winner!";
    }

    // diagonal across the board - top-right to bottom-left
    if (
      board[0][2] === "user" &&
      board[1][1] === "user" &&
      board[2][0] === "user"
    ) {
      this.gameStatus = "Finished";
      winner.innerText = "user is the winner!";
    }

    // * if computer wins
    // across the top
    if (
      board[0][0] === "computer" &&
      board[0][1] === "computer" &&
      board[0][2] === "computer"
    ) {
      this.gameStatus = "Finished";
      winner.innerText = `computer is the winner!`;
    }

    // across the middle
    if (
      board[1][0] === "computer" &&
      board[1][1] === "computer" &&
      board[1][2] === "computer"
    ) {
      this.gameStatus = "Finished";
      winner.innerText = "computer is the winner!";
    }

    // across the bottom
    if (
      board[2][0] === "computer" &&
      board[2][1] === "computer" &&
      board[2][2] === "computer"
    ) {
      this.gameStatus = "Finished";
      winner.innerText = "computer is the winner!";
    }

    // Going down the left side
    if (
      board[0][0] === "computer" &&
      board[1][0] === "computer" &&
      board[2][0] === "computer"
    ) {
      this.gameStatus = "Finished";
      winner.innerText = "computer is the winner!";
    }

    // Going down the middle
    if (
      board[0][1] === "computer" &&
      board[1][1] === "computer" &&
      board[2][1] === "computer"
    ) {
      this.gameStatus = "Finished";
      winner.innerText = "computer is the winner!";
    }

    // Going down the right
    if (
      board[0][2] === "computer" &&
      board[1][2] === "computer" &&
      board[2][2] === "computer"
    ) {
      this.gameStatus = "Finished";
      winner.innerText = "computer is the winner!";
    }

    // diagonal across the board - top-left to bottom-right
    if (
      board[0][0] === "computer" &&
      board[1][1] === "computer" &&
      board[2][2] === "computer"
    ) {
      this.gameStatus = "Finished";
      winner.innerText = "computer is the winner!";
    }

    // diagonal across the board - top-right to bottom-left
    if (
      board[0][2] === "computer" &&
      board[1][1] === "computer" &&
      board[2][0] === "computer"
    ) {
      this.gameStatus = "Finished";
      winner.innerText = "computer is the winner!";
    }
  },
};
let playersField = document.querySelector(".playersField");
// * write functions to manipulate gameState
let numberOfPlayers = document
  .querySelector(".getNum")
  .addEventListener("click", function () {
    let playersNumber = Number(
      document.querySelector("#numberOfPlayers").value
    );
    // when there is no input
    if (!playersNumber) {
      document.querySelector("#players").textContent =
        "Please select a number!";
      //when players is one
    } else if (playersNumber === 1) {
      document.querySelector("#players").textContent =
        "Player one: user and player two: computer";
      generatePlayBtn();
      generateResetBtn();
    } else {
      document.querySelector("#players").textContent =
        "Player one: userName1 and Player two: userName2";
      generatePlayBtn();
      generateResetBtn();
    }

    //console.log(playersNumber, typeof playersNumber);
  });

// function playerTurn() {
//    Players take turns placing their marks in an empty space
// }

/* function placeMarks(){
    allows the player place a mark in an empty space on the board
    } */

/* function checksMarks(){
    check if mark is occupied by a player or is empty space
    } */
/* function getPlayersMarkPosition(){
    gets the mark position of the player and returns it to the boardPositions property array
} */

function resetGame() {
  gameState.clear(gameState);
  renderBoard();
  console.log({ gameState });
}

// * Put Stuff of the screen

// * Makes references to the one <div id="tic-tac-toe"></div> in the <body></body> tag
const ticTacToe = document.getElementById("tic-tac-toe");

// * creates the play button on the board
function generatePlayBtn() {
  let playButton = document.createElement("button");
  playButton.classList.add("PLAY");
  playersField.appendChild(playButton);
  playButton.innerText = "PLAY";
}

// * creates the reset button on the board
function generateResetBtn() {
  let resetButton = document.createElement("button");
  resetButton.classList.add("RESET");
  playersField.appendChild(resetButton);
  resetButton.innerText = "RESET";
}

// * selector
// users to select a number of players from selector
// default: game will think player is playing against computer unless selector is moved to 2
// if number of players is one then user
// will play against computer otherwise

// const selectNumberOfPlayers = document.getElementsByTagName("select")[0];
// selectNumberOfPlayers.addEventListener(
//   "change",
//   function getNumberOfPlayers(event) {
//     numberOfPlayers = event.target.value;
//     console.log(numberOfPlayers);
//   }
// );
// * Getting player 1 name
function getPlayer1NameValue() {
  // Selecting the input element and get its value
  let inputVal = document.getElementById("inputPlayer1Id").value;
  // Displaying the value
  displayPlayer1Name(inputVal);
}

function displayPlayer1Name(name) {
  let player1 = document.getElementById("player1");
  player1.innerText = `Player 1: ${name}`;
}
// * Make cell change from null to "x" or "o"
ticTacToe.addEventListener("click", function (event) {
  if (event.target.className !== "cell") {
    // document.getElementById(".warning").style.visibility = "visible";
    return;
  } else {
    // document.getElementById(".warning").style.visibility = "hidden";
    let row = event.target.id[0];
    let col = event.target.id[1];
    gameState.move(gameState.currentPlayer, row, col);
    renderBoard();
    switchPlayer();
  }
});

// * switches players
function switchPlayer() {
  if (gameState.currentPlayer === gameState.player1) {
    // would like to check if cell is empty before moving to next player
    checkMoveValidation();
    gameState.currentPlayer = gameState.player2;
    checkBoard();
  } else if (gameState.currentPlayer === gameState.player2) {
    gameState.currentPlayer = gameState.player1;
    checkBoard();
  }
}
// * updates board with with playerPosition indexes
function renderBoard() {
  for (let i = 0; i < gameState.board.length; i++) {
    for (let k = 0; k < gameState.board[i].length; k++) {
      let currentEl = gameState.board[i][k];
      let currentCell = document.getElementById(`${i}${k}`);
      currentCell.innerText = currentEl;
    }
  }
}

// * checks if move was valid or not
function checkMoveValidation() {}
function checkBoard() {
  // checks if board has a winner
  gameState.winningCombinations(gameState.board);
  console.log({ gameState });
}
// * reference to our board

// * Make them work together
// * Listen to clicks to our play button
playButton.addEventListener("click", function () {
  console.log("Play Me!");
}); // showing type error in dev tool

// * Listen to clicks on our reset button
resetButton.addEventListener("click", function () {
  console.log("Reset me!");
  resetGame();
});
