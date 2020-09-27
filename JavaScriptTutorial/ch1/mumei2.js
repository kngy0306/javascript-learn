//大文字へ変換
const s = "Keep On Asking, and It Will Be Given You.";
const r = s.replace(/[a-z]+/g, function (m) {
  return m.toUpperCase();
});
console.log(r);

//降順に並べる
const ar = [100, 1, 20, 43, 30, 11, 4];
ar.sort((a, b) => {
  // 0より小さければaが前に来る
  // 0より大きければbが前に来る
  return b - a;
});
console.log(ar);

const fs = require("fs");

// Promiseを返す関数
function readFile_pr(fname) {
  return new Promise((resolve) => {
    fs.readFile(fname, "utf-8", (err, s) => {
      resolve(s);
    });
  });
}

// 順にファイルを読み込む
readFile_pr("text1.txt")
  .then((text) => {
    console.log("text1を読み込みました。", text);
    return readFile_pr("text2.txt");
  })
  .then((text) => {
    console.log("text2を読み込みました", text);
  });

// async/awaitを使う
const fs1 = require("fs");

// Promiseで非同期ファイルを読み込む関数を定義
function readFileEx(fname) {
  return new Promise((resolve, reject) => {
    fs1.readFile(fname, "utf-8", (err, data) => {
      resolve(data);
    });
  });
}

async function readAll() {
  const a = await readFileEx("text1.txt");
  console.log(a);
  const b = await readFileEx("text2.txt");
  console.log(b);
}

readAll();
