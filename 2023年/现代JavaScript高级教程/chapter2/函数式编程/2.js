

function map(fn, array) {
  const result = [];
  for(let i = 0; i < array.length; i ++) {
    result.push(fn(array[i]))
  }
  return result
}

const numbers = [1,2,3,4,5]
const dobleNumbers = map(num => num * 2, numbers)

console.log(dobleNumbers)