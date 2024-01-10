// 高阶函数

async function asyncFilter(array, predicate) {
  const result = await Promise.all(array.map(predicate));

  return array.filter((_value, index) => result[index]);
}

// 示例
async function isOddNumber(n) {
  await delay(100);
  return n % 2 !== 0;
}

async function filterOddNumbers(numbers) {
  return asyncFilter(numbers, isOddNumber);
}

filterOddNumbers([1, 2, 3, 4, 5, 6]).then(console.log);
