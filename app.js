//et numberOfPlayers = 1;

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
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  },
  winningCombinations: function (board) {
    //let currentPlayer = gameState.currentPlayer;
    // across the top
    if (board[0][0] === "x" && board[0][1] === "x" && board[0][2] === "x") {
      gameStatus = "Finished";
      let winner = document.getElementById("winner");
      winner.innerText = `X is the winner!`;
    }
    // across the middle
    if (board[1][0] === "x" && board[1][1] === "x" && board[1][2] === "x") {
      gameStatus = "Finished";
      let winner = document.getElementById("winner");
      winner.innerText = "X is the winner!";
    }
    // across the bottom
    if (board[2][0] === "x" && board[2][1] === "x" && board[2][2] === "x") {
      gameStatus = "Finished";
      let winner = document.getElementById("winner");
      winner.innerText = "X is the winner!";
    }
    // Going down the left side
    if (board[0][0] === "x" && board[1][0] === "x" && board[2][0] === "x") {
      gameStatus = "Finished";
      let winner = document.getElementById("winner");
      winner.innerText = "X is the winner!";
    }
    // Going down the middle
    if (board[0][1] === "x" && board[1][1] === "x" && board[2][1] === "x") {
      gameStatus = "Finished";
      let winner = document.getElementById("winner");
      winner.innerText = "X is the winner!";
    }
    // [
    //   [board[0][0], board[0][1], board[0][2]], // across the top
    //   [board[1][0], board[1][1], board[1][2]], // across the middle
    //   [board[2][0], board[2][1], board[2][2]], // across the bottom
    //   [board[0][0], board[1][0], board[2][0]], // down-left
    //   [board[0][1], board[1][1], board[2][1]], // down-middle
    //   [board[0][2], board[1][2], board[2][2]], // down-right
    //   [board[0][0], board[1][1], board[2][2]], // diagonal across the board
    // ];
  },
};

// * How to play the game(tic-tac-toe)
// 1. Draw a board
// 2. the first player goes first
// 3. the second player goes second
// 4. keep alternating moves until one of the players has drawn a row of three symbols or until no one can win
//console.log({ gameState });
//console.log({ gameState.winningCombinations });
// * write functions to manipulate gameState
// function createBoard() {
//   // makes a 3 x 3 grid
//   for (let i = 0; i <= 2; i++) {
//     for (let k = 0; k <= 2; k++) {
//       //gameState.board[i][k] = "x";
//     }
//   }
//   console.log(gameState.board);
//}
//createBoard();

// function getNumberOfPlayers(event) {
//   if (gameState.numberOfPlayers === 2) {
//     player2 = "user";
//   }
// prompts user to select number of players from selector
// default: game will think player is playing against computer unless selector is moved to 2
// if number of players is one then user
// will play against computer otherwise
//}
//getNumberOfPlayers();

// function getUserName() {
//   //player.name = prompt("What's your name?");
//   //prompts user to enter their names and stores it in the player object name
// }
//getUserName();
//console.log(player.name);
/* function displayPlayersUserName(){
     displays user's name under Player tag   
    } */

/* function chooseWhoFirst(){
        game will always select player who is X's
    } */

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

/* function checkGame(){
    check if player's borderPositions is included in the 
} 
 */
// gameState.winningCombinations([ Test top row function in gameState object
//   ["x", "x", "x"],
//   [null, null, null],
//   [null, null, null],
// ]);

function resetGame() {
  //resets the board for a new game
  gameState = {
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    gameStatus: "playing",
  };
}

// * Put Stuff of the screen

// * Makes references to the one <div id="tic-tac-toe"></div> in the <body></body> tag
const ticTacToe = document.getElementById("tic-tac-toe");
// * creates the play button on the board
const playButton = document.createElement("button");
playButton.classList.add("PLAY");
ticTacToe.appendChild(playButton);
playButton.innerText = "PLAY";
// * creates the reset button on the board
const resetButton = document.createElement("button");
resetButton.classList.add("RESET");
ticTacToe.appendChild(resetButton);
resetButton.innerText = "RESET";
// * selector
const selectNumberOfPlayers = document.getElementsByTagName("select")[0];
selectNumberOfPlayers.addEventListener(
  "change",
  function getNumberOfPlayers(event) {
    numberOfPlayers = event.target.value;
    console.log(numberOfPlayers);
  }
);

// * Make cell change from null to "x" or "o"
ticTacToe.addEventListener("click", function (event) {
  console.log(event.target.id);
  let row = event.target.id[0];
  let col = event.target.id[1];
  gameState.move(gameState.currentPlayer, row, col);
  renderBoard();
  if (gameState.currentPlayer === gameState.player1) {
    gameState.currentPlayer = gameState.player2;
    gameState.winningCombinations(gameState.board);
  } else if (gameState.currentPlayer === gameState.player2) {
    gameState.currentPlayer = gameState.player1;
    gameState.winningCombinations(gameState.board);
  }
});

function renderBoard() {
  for (let i = 0; i < gameState.board.length; i++) {
    for (let k = 0; k < gameState.board[i].length; k++) {
      let currentEl = gameState.board[i][k];
      let currentCell = document.getElementById(`${i}${k}`);
      currentCell.innerText = currentEl;
    }
  }
}
function checkBoard() {
  gameState.winningCombinations(board);
}
// * reference to our board

// * Make them work together
// * Listen to clicks to our play button
// playButton.addEventListener("click"),
//   function () {
//     console.log("Play Me!");
//   }; showing type error in dev tool

// * Listen to clicks on our reset button
resetButton.addEventListener("click", function () {
  console.log("Reset me!");
  //resetGame();
});
