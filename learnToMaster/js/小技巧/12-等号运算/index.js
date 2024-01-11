// 类型不同
// 对象转化为原始类型，使用valueof toString

var a = {
  n: 1,
  valueOf: function () {
    return this.n++;
  },
};

console.log(
  a == 1 && a == 2 && a == 3 // 输出: true
);
