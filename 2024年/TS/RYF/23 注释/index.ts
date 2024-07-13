// // @ts-nocheck

// const element = document.getElementById(123);

// let x: number;

// x = 0;

// // @ts-ignore
// x = false; // 不报错

// function doStuff(abc: string, xyz: string) {
//   assert(typeof abc === "string");
//   assert(typeof xyz === "string");
//   // do some stuff
// }

// expect(() => {
//   // @ts-expect-error
//   doStuff(123, 456);
// }).toThrow();

/**
 * @typedef {(number | string)} NumberLike
 * @param {string} somebody
 * @param {NumberLike} [b = '123']
 */
function sayHello(somebody, b?) {
  console.log("Hello " + somebody);
}

sayHello("sds");
