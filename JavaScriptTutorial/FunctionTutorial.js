// 匿名（無名）関数
// functionの後に関数名をつけずに宣言している
// 同期処理
var result = new Promise(function (resolve) {
  resolve(new Date());
});
result.then(function (data) {
  console.log(data.getFullYear()); // 2020
});

// callback function
function confirmed(fn) {
  const input = window.prompt("実行しますか？");
  fn(input);
}

confirmed(function (input) {
  if (input === "実行") {
    console.log("リポジトリを削除");
  }
});

// forEachなどのメソッドもコールバック関数
const foods = ["にじじん", "じゃがいも", "玉ねぎ"];
foods.forEach(function (food) {
  console.log(food);
});

function viewMyFav(callback){
  callback("中田花奈！");
  callback("早川聖来！");
}

viewMyFav(function(member){
  console.log("俺の嫁！俺の嫁！" + member + "さーん！");
});

const container = document.getElementById("app");
const pokemons = 10;
