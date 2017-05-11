// BUSINESS LOGIC //

// Constructor for Game
var Game = function(playerOneScore, playerTwoScore) {
  this.playerOneScore = playerOneScore;
  this.playerTwoScore = playerTwoScore;
  this.winningScore = 100;
}

// Constructor for Player
var Player = function(playerName, runningScore, grandScore) {
  this.playerName = playerName;
  this.runningScore = runningScore;
  this.turnTotal = [];
  this.grandScore = grandScore;
  this.grandTotal = [];
}

// Prototype with for loop that adds objects inside array together to create running total
Player.prototype.addTurnTotal = function(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  this.runningScore = result;
}

// Prototype that clears runningScore if player rolls a 1:
Player.prototype.ifOne = function(dice) {
  if (dice === 1) {
  this.runningScore = 0;
  this.turnTotal = [];
  alert("Switch players!")
  }
return this.runningScore;
return this.turnTotal;
}

// Prototype that adds running total to grand total
Player.prototype.hold = function(total) {
  var result = 0;
  for (var i = 0; i < total.length; i++) {
    result += total[i];
  }
  this.grandScore = result;
}

// Constructor for Dice
var Dice = function() {
  this.sides = 6;
}

// Prototype that generates random number from 1 to 6
Dice.prototype.roll = function () {
return Math.floor(Math.random() * this.sides + 1);
}


// USER INTERFACE //

$(document).ready(function() {
  // this is instantiating a Player object using the Player constructor
  var playerOne = new Player("playerOneName", 0, 0);
  var playerTwo = new Player("playerTwoName", 0, 0);
// instantiate new game
  var game = new Game();


// CLICK FUNCTION FOR PLAYER 1 //
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
  });

// hold Button for playerOne, pushes round results to grand total:
$("#holdOne").click(function(event){
  event.preventDefault();
  var test = playerOne.grandTotal.push(playerOne.runningScore)
  var holdPlayerOne = playerOne.hold(playerOne.grandTotal);
  $(".grandTotal").text(playerOne.grandScore)

// alert to swtich players when user decides to hold
  alert("Switch players!")
});


// CLICK FUNCTION FOR PLAYER 2 //
  $("#rollTwo").click(function(event) {
    event.preventDefault();

// rolls dice, pushes result to turnTotal array
    var diceRollTwo = new Dice();
    var currentRollTwo = diceRollTwo.roll();
    var playerTurn = playerTwo.turnTotal.push(currentRollTwo);
    var run = playerTwo.addTurnTotal(playerTwo.turnTotal);

// if the player rolls a 1, it empties the turnTotal and runningScore
    var ifitsOne = playerTwo.ifOne(currentRollTwo);

// displaying results for Player 2 on HTML for user
    $(".roll-result-2").text(currentRollTwo);
    $(".runningTotal2").text(playerTwo.runningScore);

  });

// hold button for playerTwo, pushes round results to grand total:
  $("#holdTwo").click(function(event){
    event.preventDefault();
    var test = playerTwo.grandTotal.push(playerTwo.runningScore);
    var holdPlayerTwo = playerTwo.hold(playerTwo.grandTotal);
    $(".grandTotal2").text(playerTwo.grandScore);

// alert to swtich players when user decides to hold
    alert("Switch players!")
  });

});
