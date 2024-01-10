// 区分promiselike函数

function isPromiseLike(value) {
  return (
    value !== null &&
    (typeof value === "object" || typeof value === "function") &&
    typeof value.then === "function"
  );
}

const a = new Promise((res, rej) => {});
const b = Promise.resolve();

function c() {
  then: () => {};
}

console.log(isPromiseLike(a)); // true
console.log(isPromiseLike(b)); // true
console.log(isPromiseLike(c)); // false
