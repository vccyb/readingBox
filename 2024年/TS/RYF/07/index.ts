{
  let x: symbol = Symbol();
  let y: symbol = Symbol();
  // x === y;
}

{
  const x: unique symbol = Symbol();

  const y = Symbol();

  // x === y;

  const a: unique symbol = Symbol();
  const b: typeof a = a;
}

{
  const a = Symbol.for("foo");
  const b: typeof a = a;
}

{
  const a: unique symbol = Symbol();

  const b: symbol = a; // 正确

  const c: unique symbol = b; // 报错
}

{
  const x: unique symbol = Symbol();
  const y: symbol = Symbol();
  interface Foo {
    [x]: string;
    // [y]: string;
  }
}

{
  let x = Symbol();
  const y = Symbol(); // unique symbol
}
