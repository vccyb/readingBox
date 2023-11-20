
function add(x) {
  return x + 2;
}

function multiply(x) {
  return x * 3;
}

function compose(f, g) {
  return function(x) {
    return f(g(x))
  }
}

const composedFunction = compose(multiply, add)

console.log(composedFunction(5))