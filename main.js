/* Query Selectors */
var playerOneSymbol = document.querySelector("#p1Symbol");
var playerTwoSymbol = document.querySelector("#p2Symbol");
var playerOneWins = document.querySelector("#p1Wins");
var playerTwoWins = document.querySelector("#p2Wins");


/* Data Model */
var players = [];


/* Event Listeners */
window.addEventListener("load", function() {
  savePlayers();
  showPlayers();
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
  console.log("Players:", players);
}

function showPlayers() {
  playerOneSymbol.innerHTML = players[0].token;
  playerOneWins.innerHTML = `${players[0].wins} wins`;
  
  playerTwoSymbol.innerHTML = players[1].token;
  playerTwoWins.innerHTML = `${players[1].wins} wins`;
}