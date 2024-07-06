{
  type MyOjb = {
    name: string;
    age: number;
  };
}

{
  const obj: {
    x: number;
    y: number;
    add(x: number, y: number): number;
  } = {
    x: 1,
    y: 2,
    add(a, b) {
      return a + b;
    },
  };

  type User = {
    name: string;
    age: number;
  };

  type Name = User["name"];
}

{
  interface MyObj {
    x: number;
    y: number;
  }
}

{
  interface MyInterface {
    readonly prop: number;
  }

  const person: MyInterface = {
    prop: 1,
  };

  // person.prop = 2;
}

{
  const myUser = {
    name: "John",
  } as const;

  // myUser.name = "Jane";
}

{
  type MyObj = {
    [property: string]: string;
  };

  const obj: MyObj = {
    name: "John",
    age: "25",
  };
}

{
  type MyType = {
    // [x: number]: boolean;
    [x: string]: string;
    // foo: number;
  };
}

{
  interface Point {
    x: number;
    y: number;
  }

  function computeDistance(point: Point) {
    /*...*/
  }

  let a = {
    x: 1,
    y: 2,
    z: 3,
  };

  computeDistance(a); // 报错
  computeDistance(a); // 正确
}

{
  let a: {} = { x: 1 };
  // a.x = 1;
  a.toString();
}
