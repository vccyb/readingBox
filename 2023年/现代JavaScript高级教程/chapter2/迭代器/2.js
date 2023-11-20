const obj = {a: 1, b: 2, c: 3};
const iterator = Object.keys(obj)[Symbol.iterator]()

let result = iterator.next()
while(!result.done) {
  const key = result.value;
  console.log(key, obj[key])
  result = iterator.next()
}