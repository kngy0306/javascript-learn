var app = new Vue({
  el: "#app",
  data: {
    items: [
      { title: "領収書を準備する", isChecked: true },
      { title: "Vue.jsハンズオンをする", isChecked: false },
      { title: "荷解きをする", isChecked: false },
      { title: "パンフレットの資料作り", isChecked: false },
      { title: "色の理由を考える", isChecked: true },
    ],
    newItemTitle: "",
  },
  methods: {
    addTodo: function () {
      this.items.push({
        title: this.newItemTitle,
        isChecked: false,
      });
      this.newItemTitle = "";
      this.saveTodo(); // ブラウザに保存
    },
    deleteTodo: function () {
      this.items = this.items.filter(function (item) {
        return item.isChecked == false;
      });
      this.saveTodo();
    },
    saveTodo: function () {
      localStorage.setItem("items", JSON.stringify(this.items));
    },
    loadTodo: function () {
      this.items = JSON.parse(localStorage.getItem("items"));
      if (!this.items) {
        this.items = [];
      }
    },
  },
  mounted: function () {
    this.loadTodo();
  },
});
