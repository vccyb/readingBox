let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
a[c] = 456;
console.log(a[b]); // 输出 456

//  对象的属性只能是 string symbol

// 对象转成string  【object Object】
