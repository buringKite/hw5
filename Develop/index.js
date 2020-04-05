// let x = new Date().getHours();

// console.log(x);

$(document).ready(function () {
  $("#btn0").click(function (event) {
    let text = $("input").val();
    $(".event0").text(text).css("color", "red");
  });
  $("#btn1").click(function (event) {
    let text = $("input").val();
    $(".event1").text(text).css("color", "red");
  });
  $("#btn2").click(function (event) {
    let text = $("input").val();
    $(".event2").text(text).css("color", "red");
  });
  $("#btn3").click(function (event) {
    let text = $("input").val();
    $(".event3").text(text).css("color", "red");
  });
  $("#btn4").click(function (event) {
    let text = $("input").val();
    $(".event4").text(text).css("color", "red");
    localStorage.setItem("t", JSON.stringify(text));
    JSON.parse(localStorage.getItem("t"));
  });
  $("#btn5").click(function (event) {
    let text = $("input").val();
    $(".event5").text(JSON.stringify(text)).css("color", "red");
  });
  $("#btn6").click(function (event) {
    let text = $("input").val();
    $(".event6").text(text).css("color", "red");
  });
  $("#btn7").click(function (event) {
    let text = $("input").val();
    $(".event7").text(text).css("color", "red");
  });
  $("#btn8").click(function (event) {
    let text = $("input").val();
    $(".event8").text(text).css("color", "red");
  });
  $("#btn9").click(function (event) {
    let text = $("input").val();
    $(".event9").text(text).css("color", "red");
  });

  // let blue = $("[id=myHours]").css("background-color", "blue");
  var dt = new Date();
  var time = dt.getHours();
  console.log(time);
  let x = $("[id=hour]").toArray();
  let b = x.innerHTML;

  for (i = 0; i < x.length; i++) {
    let y = +x[i].innerHTML;
    if (time !== y) {
      $("[id=myHours]").css("color", "blue");
    } else {
      $("[id=myHours]").css("color", "red");
    }
  }
});
