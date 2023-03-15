let a  = 0
let b = 0xff

console.log(b)

let billion = 1_000_000_000


// 3.5 null 和 undefined
// 3.6 symbol
let s = Symbol('sym_x')
console.log(s.toString());


let [x, y] = [1, 2]
[x, y] = [x + 1, y + 1]
[x, y] = [y, x];
