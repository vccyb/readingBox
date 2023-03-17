


let data = [1, 2, 3, 4, 5];

let sum = 0;

for(let element of data) {
  sum += element
}

console.log(sum);


let o = {x: 1, y: 2, z: 3}

let keys = "";
for(let k of Object.keys(o)) {
  keys += k;
}


console.log(keys);


let f = {}

for(let letter of "mississippi") {
  if(f[letter]) {
    f[letter] ++;
  }else {
    f[letter] = 1;
  }
}

console.log(f);


let m = new Map([[1, "one"]])

for(let [key ,value] of m) {
  console.log(key, value);
}


// for in

  