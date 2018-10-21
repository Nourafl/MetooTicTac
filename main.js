$(document).ready(function () {
  var turn = 0;
  var play = true;
  var cells = $("#board tr td");
  var scoreX = 0;
  var scoreO = 0;
  var startingTurn = 0;//to solve O issue ()




  function chosePlayer() {
    $(".X").click(function () {
      turn = 1;
      $(this).off()
    });
    $(".O").click(function () {
      turn = 0;
      $(this).off()

    }); // works perfect ..
  };


  function game() {
    chosePlayer();
    $(cells).click(function () {

      if ($(this).text() === "" && play) {
        if (turn % 2 == 1) {
          $(this).append("X");
        } else {
          $(this).append("O");
        }
        turn++;
        startingTurn++;
      }

      ticTacArray();// check winner functiom .. works amazing thanks me
    });
    function ticTacArray() {
      var myArray = [
        [$("#1"), $("#2"), $("#3")],
        [$("#3"), $("#6"), $("#9")],
        [$("#1"), $("#4"), $("#7")],
        [$("#9"), $("#7"), $("#8")],
        [$("#7"), $("#5"), $("#3")],
        [$("#2"), $("#5"), $("#8")],
        [$("#1"), $("#5"), $("#9")],
        [$("#4"), $("#5"), $("#6")]
      ];
      var oCount = 0;
      var xCount = 0;

      for (var i = 0; i < myArray.length; i++) {
        oCount = 0;
        xCount = 0;
        var subArr = myArray[i];
        for (var d = 0; d < subArr.length; d++) {
          if (subArr[d].text() === "X") {
            xCount += 1;
          } else if (subArr[d].text() === "O") {
            oCount += 1;

          }
          if (oCount === 3 || xCount === 3) {

            if (oCount === 3) {
              current = 'O ';
              scoreO++;
              sessionStorage.setItem("owins", scoreO);

            }
            if (xCount === 3) {
              current = 'X'
              scoreX++;
              sessionStorage.setItem("xwins", scoreX);

            }

            subArr[0].addClass("winner");// to select the winner cells then add CSS effect 
            subArr[1].addClass("winner");
            subArr[2].addClass("winner");



            $("#board tr td").off("click");
            var $xscore = parseInt($("xwins").text());    //turns NaN 3 need to be fixed
            $("#xScore").text($xscore + sessionStorage.getItem("xwins"));
            var $oscore = parseInt($("owins").text());
            $("#oScore").text($oscore + sessionStorage.getItem("owins"));





            swal({
              title: "Well Done  " + current + "!",
              text: "wins the game",
              icon: "success",
              button: 'Play again'

            });
            $('button').click(function () {
              resetG()




            })
            return;
          }
        }
        if (startingTurn === 9 && i === myArray.length - 1) {
          setTimeout(function () {

            swal({
              title: "Oops!",
              text: "You got a tie",
              icon: "error",
              button: 'lets try again',
            });
            $('button').click(function () {

              resetG();
            })
          });

        }

      }
    }
  }

  game();

  function resetG() {
    $(cells).text("");
    $(cells).removeClass("winner"); // clear winner background
    turn = 0;
    play = true;
    startingTurn = 0;
    game();

  }
});
