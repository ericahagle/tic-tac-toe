/* Query Selectors */
var playerOneSymbol = document.querySelector("#p1Symbol");
var playerTwoSymbol = document.querySelector("#p2Symbol");
var playerOneWins = document.querySelector("#p1Wins");
var playerTwoWins = document.querySelector("#p2Wins");
var whoseTurnItIs = document.querySelector("#turns");
var gameBoard = document.querySelector("#gameBoard");
var gameBoardCell1 = document.querySelector("#cell1");
var gameBoardCell2 = document.querySelector("#cell2");
var gameBoardCell3 = document.querySelector("#cell3");
var gameBoardCell4 = document.querySelector("#cell4");
var gameBoardCell5 = document.querySelector("#cell5");
var gameBoardCell6 = document.querySelector("#cell6");
var gameBoardCell7 = document.querySelector("#cell7");
var gameBoardCell8 = document.querySelector("#cell8");
var gameBoardCell9 = document.querySelector("#cell9");


/* Data Model */
var players = [];
var whoseTurn;


/* Event Listeners */
window.addEventListener("load", function() {
  savePlayers();
  whoseTurn = players[0];
  showPlayers();
});
gameBoard.addEventListener("click", function (event) {
  addMoves(event);
});


/* Functions */
function createPlayerOne() {
  var player = {
    id: "one",
    token: "❌",
    wins: 0
  }
  return player;
}

function createPlayerTwo() {
  var player = {
    id: "two",
    token: "⭕️",
    wins: 0
  }
  return player;
}

function savePlayers() {
  players.push(createPlayerOne());
  players.push(createPlayerTwo());
}

function showPlayers() {
  playerOneSymbol.innerHTML = players[0].token;
  playerOneWins.innerHTML = `${players[0].wins} wins`;

  playerTwoSymbol.innerHTML = players[1].token;
  playerTwoWins.innerHTML = `${players[1].wins} wins`;
}

function trackTurns() {
  if (whoseTurn === players[0]) {
    whoseTurn = players[1];
    whoseTurnItIs.innerHTML = `It's ${players[1].token}'s turn`;
  } else {
    whoseTurn = players[0];
    whoseTurnItIs.innerHTML = `It's ${players[0].token}'s turn`;
  }
  return whoseTurn;
}

function addMoves(event) {
  if ((event.target.classList.contains("game-board-cell")) && (event.target.closest(".game-board-cell").innerHTML === "")) {
    var gameBoardCell = event.target.closest(".game-board-cell");
    gameBoardCell.innerHTML = whoseTurn.token;
    trackTurns();
  }
}