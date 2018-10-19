$(document).ready(function () {
  var turn = 0;
  var play = true;
  var cells = $("#board tr td");
  var scoreX = 0;
  var scoreO = 0;
  var startingTurn = 0;//to solve O issue ()

  $(".X").click(function () {
    turn = 1;

  });
  $(".O").click(function () {
    turn = 0;

  }); // works perfect



  function game() {
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

      ticTacArray();
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
              sessionStorage.setItem('oScore', scoreO);

            }
            if (xCount === 3) {
              current = 'X'
              scoreX++;
              sessionStorage.setItem('xScore', scoreX);
              console.log(scoreO + scoreX);
            }
            console.log(myArray[i]);
            subArr[0].addClass("winner");// to select the winner cells then add CSS effect 
            subArr[1].addClass("winner");
            subArr[2].addClass("winner");



            $("#board tr td").off("click");
            // var text1 = parseInt($("#xScore").text());    turns NaN 3 need to be fixed
            // $("#xScore").text(text1 + sessionStorage.getItem("xScore"));
            // var text2 = parentInt($("#oScore").text());
            // $("#oScore").text(text2 + sessionStorage.getItem("oScore"));





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
    $(cells).css("background", "rgba(167, 100, 137, 0)"); // rest function works good but when  the game start Aftrer resetG() the background color inside ticTacArray wont change 
    turn = 0;
    play = true;
    startingTurn = 0;
    game();

  }
});
