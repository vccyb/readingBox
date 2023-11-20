
const map = new Map([["a", 1], ["b", 2], ["c", 3]])
const iterator = map.entries()

let result = iterator.next()
while(!result.done) {
  const [key, value] = result.value
  console.log(key, value)
  result = iterator.next()
}