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
var whoStarts;
var gameBoardCells = [
  gameBoardCell1, gameBoardCell2, gameBoardCell3,
  gameBoardCell4, gameBoardCell5, gameBoardCell6,
  gameBoardCell7, gameBoardCell8, gameBoardCell9
];
var winningCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];


/* Event Listeners */
window.addEventListener("load", function() {
  savePlayers();
  whoseTurn = players[0];
  whoStarts = players[0];
  showPlayers();
});
gameBoard.addEventListener("click", function (event) {
  addMoves(event);
  showResults();
});


/* Functions */
function createPlayer(id, token) {
  var player = {
    id: id,
    token: token,
    wins: 0
  }
  return player;
}

function savePlayers() {
  players.push(createPlayer("one", "❌"));
  players.push(createPlayer("two", "⭕️"));
}

function showPlayers() {
  playerOneSymbol.innerHTML = players[0].token;
  playerOneWins.innerHTML = `${players[0].wins} wins`;

  playerTwoSymbol.innerHTML = players[1].token;
  playerTwoWins.innerHTML = `${players[1].wins} wins`;
}

function trackWhoStarts() {
  if (whoStarts === players[0]) {
    whoStarts = players[1];
  } else {
    whoStarts = players[0];
  }
  whoseTurn = whoStarts;
  updateTurn();
  return whoStarts;
}

function trackTurns() {
  if (whoseTurn === players[0]) {
    whoseTurn = players[1];
  } else {
    whoseTurn = players[0];
  }
  updateTurn();
  return whoseTurn;
}

function updateTurn() {
  whoseTurnItIs.innerHTML = `It's ${whoseTurn.token}'s turn`;
}

function addMoves(event) {
  if ((event.target.classList.contains("game-board-cell")) && (event.target.closest(".game-board-cell").innerHTML === "")) {
    var gameBoardCell = event.target.closest(".game-board-cell");
    gameBoardCell.innerHTML = whoseTurn.token;
  }
}

function detectWin(player) {
  for (var i = 0; i < winningCombos.length; i++) {
    if (
      gameBoardCells[winningCombos[i][0]].innerHTML === player.token &&
      gameBoardCells[winningCombos[i][1]].innerHTML === player.token &&
      gameBoardCells[winningCombos[i][2]].innerHTML === player.token
    ) {
      return true;
    }
  }
  return false;
}

function detectDraw() {
  for (var i = 0; i < gameBoardCells.length; i++) {
    if (gameBoardCells[i].innerHTML === "") {
      return false;
    }
  }
  return true;
}

function showResults() {
  if (detectWin(whoseTurn)) {
    increaseWins();
    showPlayers();
    whoseTurnItIs.innerHTML = `${whoseTurn.token} wins!`;
    gameBoard.classList.add("disabled");
    setTimeout(resetGameBoard, 3000);
    return;
  }

  if (detectDraw()) {
    showPlayers();
    whoseTurnItIs.innerHTML = `It's a draw!`;
    setTimeout(resetGameBoard, 3000);
    return;
  }
  trackTurns();
}

function increaseWins() {
  whoseTurn.wins++;
}

function resetGameBoard() {
  for (var i = 0; i < gameBoardCells.length; i++) {
    gameBoardCells[i].innerHTML = "";
    gameBoard.classList.remove("disabled");
    trackWhoStarts();
  }
}
