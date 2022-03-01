// * Here is our game object
const gameState = {
  players: ["x", "o"],
  numberOfTurns: 0,
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  winningCombinations: function (board) {
    [
      [board[0][0], board[0][1], board[0][2]], // across the top
      [board[1][0], board[1][1], board[1][2]], // across the middle
      [board[2][0], board[2][1], board[2][2]], // across the bottom
      [board[0][0], board[1][0], board[2][0]], // down-left
      [board[0][1], board[1][1], board[2][1]], // down-middle
      [board[0][2], board[1][2], board[2][2]], // down-right
      [board[0][0], board[1][1], board[2][2]],
    ]; // diagonal across the board
  },
};
// let board = gameState.board;

let player = {
  name: "",
  playerMark: "",
  boardPositions: [],
};
console.log({ gameState });
//console.log({ gameState.winningCombinations });
// * write functions to manipulate gameState
function createBoard() {
  // makes a 3 x 3 grid
  for (let i = 0; i <= 2; i++) {
    for (let k = 0; k <= 2; k++) {
        console.log(gameState.board[i][k] = 'x')
    }
  }
}
createBoard();
/* function getNumberOfPlayers(){
    
        prompts user to select number of players from selector
        default: game will think player is playing against computer unless selector is moved to 2
        if number of players is one then user
        will play against computer otherwise 
    } */
function getUserName() {
  //prompts user to enter their names and stores it in the player object name
}

/* function displayPlayersUserName(){
     displays user's name under Player tag   
    } */

/* function chooseWhoFirst(){
        game will always select player who is X's
    } */

function playerTurn() {
  // Players take turns placing their marks in an empty space
}

/* function placeMarks(){
        allows the player place a mark in an empty space on the board
    } */

/* function checksMarks(){
        check if mark is occupied by a player or is empty space
    } */

/* function checkWinningMove(){
    checks if the current player has won after they placed a mark
    }*/

/* function renderGame() {
        updates the game elements
    } */

/* function resetGame() {
        resets the board for a new game
    } */

// * Put Stuff of the screen

// * Makes references to the one <div id="tic-tac-toe"></div> in the <body></body> tag
//const ticTacToe = document.querySelector(".ticTacToe");
// * creates the squares on the board
// for (let i = 0; i <= 9; i++) {
//   const square = document.createElement("div");
//   ticTacToe.appendChild(square[i]);
// }

// * reference to our board

// * Make them work together
