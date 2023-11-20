


// function outer() {
//   var outerVariable = "Hello"
  
//   function inner() {
//     var innerVaribale = "World"
//     console.log(outerVariable + " " + innerVaribale)
//   }

//   inner()
// }

// outer()


function createCounter() {
  var count = 0;

  return function(){
    count ++;
    console.log(count)
  }
}

var counter =  createCounter()
counter()
counter()