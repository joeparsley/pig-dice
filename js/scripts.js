// BUSINESS LOGIC //

// Constructor for Game
var Game = function(playerOneScore, playerTwoScore) {
  this.playerOneScore = playerOneScore;
  this.playerTwoScore = playerTwoScore;
  this.winningScore = 100;
}

// Constructor for Player
var Player = function(playerName, currentScore, runningScore) {
  this.playerName = playerName;
  this.currentScore = currentScore;
  this.runningScore = runningScore;
  this.turnTotal = [];
}

// For loop that adds objects inside array together to create running total
Player.prototype.addTurnTotal = function(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  this.runningScore = result;
}

// Clear runningScore if player rolls a 1:
Player.prototype.ifOne = function(dice) {
  if (dice === 1) {
  this.runningScore = 0;
  this.turnTotal = [];
  }
return this.runningScore;
return this.turnTotal;
}


// Constructor for Dice
var Dice = function() {
  this.sides = 6;
}

// adds roll() method to the Dice prototype, generates random number from 1 to 6
Dice.prototype.roll = function () {
return Math.floor(Math.random() * this.sides + 1);
}

// adds hold() method to the Dice prototype, which will add running total to grand total
Dice.prototype.hold = function () {

}


// USER INTERFACE //

// this is instantiating a Player object using the Player constructor
$(document).ready(function() {
  var playerOne = new Player("playerOneName", 0, 0);
  var playerTwo = new Player("playerTwoName", 0, 0);
// instantiate new game
  var game = new Game();

// click function for player 1
  $("#rollOne").click(function(event) {
    event.preventDefault();

// rolls dice, pushes result to turnTotal array
    var diceRollOne = new Dice();
    var currentRollOne = diceRollOne.roll();
    var playerTurn = playerOne.turnTotal.push(currentRollOne);
    var run = playerOne.addTurnTotal(playerOne.turnTotal);
    var ifitsOne = playerOne.ifOne(currentRollOne)
// displaying results for Player 1 on HTML to user
    $(".roll-result").text(currentRollOne);
    $(".runningTotal").text(playerOne.runningScore);
    console.log(currentRollOne)
    console.log(playerOne);
  });

// click function for player 2
    $("#rollTwo").click(function(event) {
      event.preventDefault();

// rolls dice, pushes result to turnTotal array
      var diceRollTwo = new Dice();
      var currentRollTwo = diceRollTwo.roll();
      var playerTurn = playerTwo.turnTotal.push(currentRollTwo)
      var run = playerTwo.addTurnTotal(playerTwo.turnTotal);
      var ifitsOne = playerTwo.ifOne(currentRollTwo)
// displaying results for Player 2 on HTML for user
      $(".roll-result-2").text(currentRollTwo);
      $(".runningTotal2").text(playerTwo.runningScore);
      console.log(currentRollTwo);
      console.log(playerTwo);
  });

});
