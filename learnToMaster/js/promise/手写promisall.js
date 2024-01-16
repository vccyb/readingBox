Promise.myAll = function (promises) {
  let res, rej;
  const p = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  // 设置p的状态
  const result = [];
  let count = 0;
  let fulFilledCount = 0; // 完成的数量s
  for (const prom of promises) {
    const i = count;
    count++;
    Promise.resolve(prom).then((data) => {
      // 将成功的数据汇总到 result
      result[i] = data;
      fulFilledCount++;
      if (fulFilledCount === count) {
        res(result);
      }
    }, rej);
  }

  if (count === 0) {
    res(result);
  }

  return p;
};

Promise.myAll([]).then((datas) => {
  console.log(datas);
});

Promise.myAll([1, 2, 3]).then((datas) => {
  console.log(datas);
});

let rp = Promise.reject("aa");

Promise.myAll([1, rp]).then((datas) => {
  console.log(datas);
});
