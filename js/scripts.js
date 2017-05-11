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
  this.turnTotal = [];
}
// add addTotal() method to for Player prototype (so it works for all instances of Player)
Player.prototype.pushRoll = function(dieInput) {

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
Dice.prototype.hold = function () {

}


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
    $(".roll-result").empty();
    var diceRollOne = new Dice();
    var currentRollOne = diceRollOne.roll();
    var playerTurn = playerOne.turnTotal.push(currentRollOne)
    $(".roll-result").append(currentRollOne);
    console.log(currentRollOne)
    console.log(playerOne);
  });
    $("#rollTwo").click(function(event) {
      event.preventDefault();
      $(".roll-result-2").empty();
      var diceRollTwo = new Dice();
      var currentRollTwo = diceRollTwo.roll();
      var playerTurn = playerTwo.turnTotal.push(currentRollTwo)
      $(".roll-result-2").append(currentRollTwo);
      console.log(currentRollTwo);
      console.log(playerTwo);
  });

});    // player in turn rolls die
    // jquery shows current roll score

  // button for holding
