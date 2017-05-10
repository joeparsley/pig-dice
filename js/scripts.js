//Business Logic
// Constructor for Game
var Game = function(playerOneScore, playerTwoScore) {
  this.playerOneScore = playerOneScore;
  this.playerTwoScore = playerTwoScore;
  this.winningScore = 100;
}

// Game prototype
// Game.prototype.winCon = function() {
//   if (playerOneScore || playerTwoScore === 100)
//   return alert("winner")
// }

// Constructor for Player
var Player = function(playerName, currentScore) {
  this.playerName = playerName;
  this.currentScore = currentScore;
}
// add addTotal() method to for Player prototype (so it works for all instances of Player)
Player.prototype.addTotal = function(dieInput) {
  this.currentScore = this.currentScore + dieInput;
  return this.currentScore;
}
// Die Constructor!
var Dice = function() {
  this.sides = 6;
}
// adds roll() method to the Dice prototype
Dice.prototype.roll = function () {
return Math.floor(Math.random() * this.sides) + 1
}

// adds hold() method to the Dice prototype
// Dice.prototype.hold = function ()  {
//
// }

//User Interface
$(document).ready(function() {
  var playerOne = new Player("playerOneName", 0);
  var playerTwo = new Player("playerTwoName", 0);
  // instantiate new game?
  var game = new Game();
  // this is instantiating a Player object using the Player constructor

  // button for rolling
  $("#rollOne").click(function(event) {
    event.preventDefault();
    var diceRoll = new Dice();
    var currentRoll = diceRoll.roll();
    $(".roll-result").append(currentRoll);
  });
    $("#rollTwo").click(function(event) {
      event.preventDefault();
      var diceRoll = new Dice();
      var currentRoll = diceRoll.roll();
      $(".roll-result-2").append(currentRoll);
  });
});    // player in turn rolls die
    // jquery shows current roll score

  // button for holding
