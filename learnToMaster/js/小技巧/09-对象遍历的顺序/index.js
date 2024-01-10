const obj = {
  p2: "aaa",
  2: "aaa",
  1: "aaa",
  p1: "aaa",
};

for (let key in obj) {
  console.log(key); // 输出 1,2,p2,p1
}

// 数字属性会提前，并且生序排序
// 字符串按照你书写的顺序，
// 内存空间，数字属性方便定位
