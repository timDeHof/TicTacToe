// * Here is our game object
const gameState = {
  players: ["x", "o"],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]]
};
let board = gameState.board;
const winningCombinations = [ 
    [board[0][0], board[0][1], board[0][2]], // across the top
    [board[1][0], board[1][1], board[1][2]], // across the middle
    [board[2][0], board[2][1], board[2][2]], // across the bottom
    [board[0][0], board[1][0], board[2][0]], // down-left
    [board[0][1], board[1][1], board[2][1]], // down-middle
    [board[0][2], board[1][2], board[2][2]], // down-right
    [board[0][0], board[1][1], board[2][2]]] // diagonal across the board

let player = {
  name: "",
  boardPositions: [],
};
console.log({ gameState });
console.log({ winningCombinations });
// * write functions to manipulate gameState

/* function getNumberOfPlayers(){
        prompts user to select number of players from selector
        default: game will think player is playing against computer unless selector is moved to 2
        if number of players is one then user
        will play against computer otherwise 
    } */
/* function getUserName(){
     prompts user to enter their names and stores it in the player object name 
   } */

/* function displayPlayersUserName(){
     displays user's name under Player tag   
    } */

/* function chooseWhoFirst(){
        game will always select player who is X's
    } */

/* function playerTurn(){
        take turns placing our marks in an occupied space
    } */

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

// * reference to our board

// * Make them work together
