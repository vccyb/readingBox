Function.prototype.myCall = function (ctx, ...args) {
  ctx = ctx === null || ctx === undefined ? globalThis : Object(ctx);
  let key = Symbol("temp");
  Object.defineProperty(ctx, key, {
    enumerable: false,
    value: this, // 把方法赋值给对象的属性
  });
  const result = ctx[key](...args);
  return result;
};

function method(a, b) {
  return a + b;
}

let res = method.myCall(null, 2, 3);
console.log(res);
