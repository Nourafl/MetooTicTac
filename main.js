$(document).ready(function () {
  var turn = 1;
  var play = true;
  var cells = $("#board tr td");


  function game() {
    $(cells).click(function () {
      if ($(this).text() === "" && play) {
        if (turn % 2 == 1) {
          $(this).append("X");
        } else {
          $(this).append("O");
        }
        turn++;
      }

      ticTacArray();
    });
    function ticTacArray() {
      var myArray = [
        [$("#1").text(), $("#2").text(), $("#3").text()],
        [$("#3").text(), $("#6").text(), $("#9").text()],
        [$("#1").text(), $("#4").text(), $("#7").text()],
        [$("#9").text(), $("#7").text(), $("#8").text()],
        [$("#7").text(), $("#5").text(), $("#3").text()],
        [$("#2").text(), $("#5").text(), $("#8").text()],
        [$("#1").text(), $("#5").text(), $("#9").text()],
        [$("#4").text(), $("#5").text(), $("#6").text()]
      ];
      var oCount = 0;
      var xCount = 0;
      for (var i = 0; i < myArray.length; i++) {
        oCount = 0;
        xCount = 0;
        var ee1 = myArray[i];
        for (var d = 0; d < ee1.length; d++) {
          if (ee1[d] === "X") {
            xCount += 1;
          } else if (ee1[d] === "O") {
            oCount += 1;
          }
          if (oCount === 3 || xCount === 3) {
            console.log("passed!");
            $("#board tr td").off("click");
            $('a').click(function (e) {
            });
            swal({
              title: "Well Done!",
              text: "Player # wins the game",
              icon: "success",
              button: true,
            });
            $('button').click(function () {
              location.reload();
            })

          }
          else {
            console.log('jh');
          }
        }
      }
    }
  }
  game();

});


