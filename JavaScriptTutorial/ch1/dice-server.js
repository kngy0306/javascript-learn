// httpモジュールの読み込み
const http = require("http");
const ctype = { "Content-Type": "text/html;charset=utf-8" };

// Webサーバ実行
const svr = http.createServer(handler);
svr.listen(8081);

function handler(req, res) {
  const url = req.url;

  // トップページの場合
  if (url === "/" || url === "/index.html") {
    showIndexPage(req, res);
    return;
  }
  // サイコロページ
  if (url.substr(0, 6) === "/dice/") {
    showDicePage(req, res);
    return;
  }
  // その他
  res.writeHead(404, ctype);
  res.end("404 not found");
}

//トップページ
function showIndexPage(req, res) {
  // HTTPヘッダーを出力
  res.writeHead(200, ctype);
  // レスポンス本体
  const html =
    "<h1>サイコロページの案内</h1>\n" +
    "<p><a href='/dice/6'>6面体サイコロ</a></p>" +
    "<p><a href='/dice/12'>12面体サイコロ</a></p>";
  res.end(html);
}

//サイコロページにアクセスがあった時
function showDicePage(req, res) {
  res.writeHead(200, ctype);

  // 何面体のサイコロか
  const a = req.url.split("/");
  const num = parseInt(a[2]);
  // 乱数生成
  const rnd = Math.floor(Math.random() * num) + 1;

  res.end("<p style='font-size:72px;'>" + rnd + "</p>");
}
