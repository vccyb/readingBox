// const obj = {};

// obj.a = 1;
// Reflect.set(obj, "b", 2);
// console.log(obj); // { a: 1, b: 2 }.l

const obj = {
  a: 1,
  b: 2,
  get c() {
    return this.a + this.b;
  },
};

console.log(obj.c);
console.log(Reflect.get(obj, "c", { a: 3, b: 4 }));
