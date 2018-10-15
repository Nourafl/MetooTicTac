$(document).ready(function() {
  // After every move, check to see if there is a winner
  // Have a function called isWinner that receives an X or an O
  // Let's pretend it is X just for the pseudocode
  // Firstly, we need to check for horizontal wins
  // Is the top left, top middle and top right all X?
  // Is the middle left, middle middle and middle right all X?
  // Is the bottom left, bottom middle and bottom right all X?
  // Then, check for vertical wins
  // Do all the left boxes contain X?
  // Do all the middle boxes contain X?
  // Do all the right boxes contain X?
  //   Then, check for diagonals
  // Top left, middle, and bottom right (all X?)
  // Top right, middle, and bottom left (all X?)
  // e.g. Get me the text of the square with classes .top and .left
  var matchesLeft = document.querySelectorAll(".left");
  console.log(matchesLeft);
  var matchesTop = document.querySelectorAll(".top");
  console.log(matchesTop);
  for (var i = 0; i < matchesTop.length; i++) {
    console.log(matchesTop[i].text());
  }
  function isWinner() {
    var matchesMiddle = document.querySelectorAll(".middle");

    //var matchesTop = $(".top").text();
    var matchesLeft = document.querySelectorAll(".left");
    var matchesRight = document.querySelectorAll(".right");
    var matchesBottom = document.querySelectorAll(".bottom");
    var matchesBetween = document.querySelectorAll(".between");

    // for(var i = 0; i < 3; i++) {

    // }
  }
});
// isWinner();
//////////////////

var turn = 1;
var play = true;
var playX = [];
var playO = [];
$("#board tr td").click(function() {
  if ($(this).text() == "" && play) {
    if (turn % 2 == 1) {
      $(this).append("X");
    } else {
      $(this).append("O");
    }
    turn++;
  }
  // isWinner();
});
