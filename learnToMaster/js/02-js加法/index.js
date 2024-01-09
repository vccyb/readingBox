console.log(1 + 1); // 2
console.log("1" + 1); // 11
console.log(NaN + 1); // NaN
console.log(NaN + "1"); // NaN1
console.log(null + 1); // 1
console.log(null + "1"); // null1
console.log([1] + 1); // 11
console.log([1, 2] + [1]); //1,21
console.log([1] + { n: 1 }); //1[object Object]

// 2
// 11
// NaN
// NaN1
// 1
// null1
// 11
// 1,21
// 1[object Object]
