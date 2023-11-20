// function outerFunction(outerVariable) {
//   function innerFunction(innerVariable) {
//     console.log('outerVariable:', outerVariable);
//     console.log('innerVariable:', innerVariable);
//   }
//   return innerFunction;
// }

// var newFunction = outerFunction('outside');
// newFunction('inside'); // 输出: outerVariable: outside innerVariable: inside



function createCounter() {
  let count = 0;
  return {
    increment: function() {
      count ++
    },
    decrement: function() {
      count --;
    },
    getCount: function() {
      return count
    }
  }
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount()); // 输出: 2