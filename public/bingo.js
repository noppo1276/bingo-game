$(function () {
  "use strict";
  let max = 75,
    bingo = [],
    backNumber = [];

  function list(num) {
    $("#number").append($("<li>").addClass("centering").text(num));
  }

  if (localStorage.hasOwnProperty("num")) {
    backNumber = JSON.parse(localStorage.getItem("num"));
  }

  for (let i = 1; i <= max; i++) {
    if (backNumber.indexOf(i) === -1) {
      bingo.push(i);
    }
  }

  backNumber.forEach((num) => {
    list(num);
  });

  let timer, random;

  $("#start").on("click", function () {
    if ($(this).text() == "START") {
      $(this).text("STOP");

      timer = setInterval(() => {
        random = Math.floor(Math.random() * bingo.length);
        $("#roulette").text(bingo[random]);
      }, 50);
    } else {
      $(this).text("START");
      clearInterval(timer);

      let result = bingo[random];
      bingo.splice(random, 1);

      list(result);
      backNumber.push(result);
      localStorage.setItem("num", JSON.stringify(backNumber));
    }
  });

  $("#reset").on("click", function () {
    localStorage.clear();
    $("#number").empty();
    backNumber = [];

    for (let i = 1; i <= max; i++) {
      if (backNumber.indexOf(i) === -1) {
        bingo.push(i);
      }
    }
  });
});
