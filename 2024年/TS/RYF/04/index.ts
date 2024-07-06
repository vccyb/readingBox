// 1 boolean

{
  const x: boolean = true;
  const y: boolean = false;
}
// 2. string

{
  const x: string = "hello";
  const y: string = `${x} world`;
}

// 3. number
{
  const x: number = 123;
  const y: number = 3.14;
  const z: number = 0xff;
  const q: number = 10101010;
}

// 4. bigint
{
  const x: bigint = 123n;
  // const y: bigint = 12;
}

// 5. symbol
{
  const x: symbol = Symbol();
  const y: symbol = Symbol("hello");
}

// 6. object
{
  const x: object = {};
  const y: object = [];
  const z: object = function () {};
}

// 7. undefined null

{
  let x: undefined = undefined;
  let y;

  let z: null = null;

  let c = undefined;
  let d = null;
}

{
  // const s: string = new String("hello");
  // typeof s;

  const s: String = "12";
}

// 建议只使用 字面量类型

// Object object

// Object {}

// object 不包含原始类型值

{
  let x: "123";
  const y = "https";
  const z = {
    foo: 1,
  };

  let xx: 5 = 5;
  let yy: number = 5;
  xx = yy as 5;
}

{
  let x: string | number;
  x = 234;
  x = "hello";

  let xx: string | number | "a" | "b" | "c" | "d" | "e" | "f";
}

{
  let obj: {
    foo: string;
  } & {
    bar: string;
  };

  obj = {
    foo: "hello",
    bar: "world",
  };

  type A = {
    a: string;
    b: number;
  };

  type B = A & {
    extend: string;
  };
}

{
  type Age = number;
  type Color = "red" | "blue" | "green";
  // type Color = "a";

  type Greeting = `hello ${Age}`;
}

{
  const a = { x: 0 };
  type T0 = typeof a;
  type T1 = typeof a.x;

  // type 类型名别 = typeof 值
}

{
  {
    let x: number;
    type T = string;
  }

  {
    type T = number;
    let x: T;
  }
}

{
  // 1. 父子类型关系
  // 2. 父类型可以兼容字类型
  // 3. x(父类型) = y 字类型
  // 4. 所有使用父类型的地方可以使用子类型替换

  let a: "hi" = "hi";
  let b: string = "123";
  // b = a;

  a = b;
}
