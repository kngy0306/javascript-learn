// 匿名（無名）関数
// functionの後に関数名をつけずに宣言している
const isTweetable = function (text) {
  return text.length <= 140;
};

// function 高階関数(コールバック関数) {
//  コールバック関数();
// }
// function bring(food) {
//   if (/** 手洗いを終えたら */){
//    食材をもってきてもらう処理
//   }
// }

// function peer(food) {
//   if (/** 手洗いを終えたら */){
//    食材をもってきてもらう処理
//   }
// }

// function cut(food) {
//   if (/** 手洗いを終えたら */){
//    食材をもってきてもらう処理
//   }
// }

// // 高階関数を使った場合
// function washed(fn){
//   if(/** 手洗いが終えたら */){
//     fn(); // コールバック関数の処理
//   }
// }

// function bring(food) {
//   // 食材をもってきてもらう処理
// }

// function peer(food) {
//   // 食材をもってきてもらう処理
// }

// function cut(food) {
//   // 食材をもってきてもらう処理
// }

// washed(bring);

// callback function
function confirmed(fn) {
  const input = window.prompt("実行しますか？");
  fn(input);
}

confirmed(function(input){
  if(input === "実行"){
    console.log("リポジトリを削除");
  }
});

// forEachなどのメソッドもコールバック関数  
const foods = ["にじじん", "じゃがいも", "玉ねぎ"];
foods.forEach(function(food){
  console.log(food);
});
