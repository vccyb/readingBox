// any

// let x: any;

// x = 10;
// x = "hello";
// x = { a: 1 };

// // x(1);

// function add(x, y) {
//   return x + y;
// }

// let x: any = "hello";
// let y: number;

// y = x; // 不报错

// y * 123; // 不报错
// y.toFixed(); // 不报错

// let v: unknown = 123;
// let v1: boolean = v;

// let v2: number = v;

// let v1: unknown = { foo: 123 };
// v1.foo; // 报错

// let v2: unknown = "hello";
// v2.trim(); // 报错

// let v3: unknown = (n = 0) => n + 1;
// v3(); // 报错

// let a: unknown = 1;

// if (typeof a === "number") {
//   a.toFixed(2);
// }

function fn(x: string | number) {
  if (typeof x === "string") {
    x;
  } else if (typeof x === "number") {
    x;
  } else {
    x;
  }
}

function f(): never {
  throw new Error("Error");
}

let v1: number = f(); // 不报错
let v2: string = f(); // 不报错
let v3: boolean = f(); // 不报错
