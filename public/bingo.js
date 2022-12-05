$(function () {
  // * * *  1〜75までの配列を作る
  const max = 75,
    bingo = [];

  for (var i = 1; i <= max; i++) {
    bingo.push(i);
  }

  let timer, random;

  $("#button").on("click", function () {
    // * * *  ボタンをおしたらスタートがストップになる
    if ($(this).text() == "START") {
      $(this).text("STOP");

      // * * *  丸の中の数字がぐるぐる回りだす
      timer = setInterval(function () {
        // * * *  数字をはランダム
        random = Math.floor(Math.random() * bingo.length);
        $("#roulette").text(bingo[random]);
      }, 50);
    } else {
      // * * *  ストップボタンを押したら文字がスタートに戻る
      $(this).text("START");

      // * * *  ストップのボタンを押したら数字が止まる
      clearInterval(timer);

      // * * *  結果を抽選から外す
      let result = bingo[random];
      bingo.splice(random, 1);

      // * * *  止まった数字が一覧に表示される
      $("#number").append($("<li>").text(result));
      $("#number li").addClass("centering");
    }
  });
});
