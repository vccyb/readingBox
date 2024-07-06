{
  enum Color {
    Red,
    Green,
    Blue,
  }

  let c: Color = Color.Green;
}

{
  enum Foo {
    A,
    B,
    C,
  }

  const Bar = {
    A: 0,
    B: 1,
    C: 2,
  } as const;
}

{
  enum Color {
    Red = 1,
  }

  // Color.Red = 4;

  const enum Color2 {}
}

{
  enum MyEnum {
    One = "One",
    Two = "Two",
  }

  function f(arg: MyEnum) {
    return "arg is " + arg;
  }

  // f("One"); // 报错
  let one: MyEnum = MyEnum.One;
  f(one);
}

{
  enum MyEnum {
    A = "a",
    B = "b",
  }

  type x1 = keyof typeof MyEnum;

  type y1 = {
    [key in MyEnum]: any;
  };
}
