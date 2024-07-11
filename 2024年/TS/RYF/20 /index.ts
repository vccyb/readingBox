{
  type MyObj = {
    foo: number;
    bar: string;
  };
  type keys = keyof MyObj;
  let a: keys = "bar";

  interface MyInterface {
    foo: number;
    bar: string;
    0: boolean;
  }

  type MyType = keyof MyInterface;

  let b: MyType = 0;
}

{
  interface T {
    [prop: number]: string;
  }

  type keys = keyof T;
  let c: keys = 3;
}

{
  type A = { a: string; z: boolean };
  type B = { b: string; z: boolean };

  // 返回 'z'
  type KeyT = keyof (A | B);

  let z: KeyT = "z";

  type C = A | B;
  let c: C = {
    a: "a",
    // b: "b",
    z: true,
  };
}

{
  type A = { a: string; x: boolean };
  type B = { b: string; y: number };

  // 返回 'a' | 'x' | 'b' | 'y'
  type KeyT = keyof (A & B);

  type D = A & B;

  let d: D = {
    a: "a",
    b: "b",
    x: true,
    y: 1,
  };

  // 相当于
  // keyof (A & B) ≡ keyof A | keyof B
}

{
  function prop<Obj, K extends keyof Obj>(obj: Obj, key: K) {
    return obj[key];
  }
}
{
  type NewProp<Obj> = {
    [prop in keyof Obj]: boolean;
  };
}

{
  type Mutable<Obj> = {
    -readonly [prop in keyof Obj]: Obj[prop];
  };
}

{
  // 用来取出（遍历）联合类型的每一个成员类型。

  type U = "a" | "b" | "c";
  type Foo = {
    [prop in U]: number;
  };
}

{
  type Person = {
    age: number;
    name: string;
    alive: boolean;
  };

  type T = Person["age" | "name"];
  type T2 = Person[keyof Person];
}

{
  interface A<A extends { length: number }> {}
}

{
  type T = 1 extends number ? true : false;
}

{
  interface Animal {
    live(): void;
  }

  interface Dog extends Animal {
    woof(): void;
  }

  type T1 = Dog extends Animal ? number : string;
  type T2 = Animal extends Dog ? number : string;
}

{
  type ToArray<Type> = Type extends any ? Type[] : never;

  type T = ToArray<string | number>;

  type ToArray2<Type> = [Type] extends [any] ? Type[] : never;

  type T2 = ToArray2<string | number>;
}

{
  type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

  type Str = Flatten<string[]>;
  type Num = Flatten<number>;
}

{
  type World = "wor1ld";

  // "hello world"
  type Greeting = `hello ${World}`;
}
