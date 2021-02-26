const createCounter = () => {
  let count = 0;
  return function increment() {
    // `increment`関数は`createCounter`関数のスコープに定義された`変数`count`を参照している
    count = count + 1;
    return count;
  };
};
// createCounter()の実行結果は、内側で定義されていた`increment`関数
const myCounter = createCounter();
// myCounter関数の実行結果は`count`の評価結果
console.log(myCounter()); // => 1
console.log(myCounter()); // => 2

// クラスにおけるgetterとsetter
class NumberWrapper {
  constructor(value) {
    this._value = value;
  }

  get value() {
    console.log("getter");
    return this._value;
  }

  set value(newValue) {
    console.log("setter");
    this._value = newValue;
  }
}

const numberWrapper = new NumberWrapper(1);
console.log(numberWrapper.value);
numberWrapper.value = 42;
console.log(numberWrapper.value);
