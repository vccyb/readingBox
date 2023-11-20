
const arr = [1,2,3,4,5]
const iterator = arr[Symbol.iterator]()


let result = iterator.next()

while(!result.done) {
  console.log(result.value)
  result = iterator.next()
}