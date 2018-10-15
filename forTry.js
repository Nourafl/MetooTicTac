$(document).ready(function() {
  var turn = 1;
  var play = true;
  $("#board tr td").click(function() {
    if ($(this).text() == "" && play) {
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
    var arr1 = [$("#1").text(), $("#2").text(), $("#3").text()];
    var arr2 = [$("#3").text(), $("#6").text(), $("#9").text()];
    var arr3 = [$("#1").text(), $("#4").text(), $("#6").text()];
    var arr4 = [$("#9").text(), $("#7").text(), $("#6").text()];
    var arr5 = [$("#7").text(), $("#5").text(), $("#2").text()];

    var oCount = 0;
    var xCount = 0;
    for (var i = 0; i < 3; i++) {
      var ee = arr1[i];
      if (ee === "X") {
        xCount += 1;
      } else {
        oCount += 1;
      }
    }

    if (oCount === 3 || xCount === 3) {
      console.log("passed!");
      $("#board tr td").off("click");
    } else {
      console.log("failed");
      //  $("#board tr td").off("click");
    }
  }
});
