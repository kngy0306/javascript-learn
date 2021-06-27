// ページがロードされるまで実行しない
document.addEventListener("DOMContentLoaded", function () {
  const submit = document.querySelector("#submit");
  const newTask = document.querySelector("#task");

  // 初期はボタン利用不可にしておく
  submit.disabled = true;

  // inputフィールドに文字が入力されたらdisabled = falseに変える
  newTask.onkeyup = () => {
    if (newTask.value.length > 0) {
      submit.disabled = false;
    } else {
      submit.disabled = true;
    }
  };

  // フォームが送信されたら
  document.querySelector("form").onsubmit = () => {
    const task = newTask.value;

    const li = document.createElement("li");
    li.innerHTML = task;

    // ul要素に追加する
    document.querySelector("#tasks").append(li);

    newTask.value = "";

    submit.disabled = true;

    return false;
  };
});
