function add(x) {
  return function(y) {
    return x + y;
  }
}

const add2 = add(2)

console.log(add2(5))
