function* oneDigitPrimes() {
  yield 2;
  yield 3;
  yield 5;
  yield 7;
}


let primes = oneDigitPrimes();

console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().done);

console.dir(
  primes[Symbol.iterator]()
);


[...oneDigitPrimes()]

let sum = 0;
for(let prime of oneDigitPrimes()) {
  sum += prime
}

console.log(sum);

const seq = function*(from, to) {
  for(let i = from; i <= to; i ++) {
    yield i;
  }  
}

// [...seq(3,5)]


let o = {

  x: 1, y: 2, z: 3,
  *g() {
    for(let key of Object.keys(this)) {
      yield key;
    }
  }
}

console.log(
  [...o.g()]
);


// 尽量不要乱去使用生成器


