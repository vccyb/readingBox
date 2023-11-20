const set = new Set([1,2,3,4,5]);
const iterator = set.values()

let result = iterator.next()
while(!result.done){
  console.log(result.value)
  result = iterator.next()
}