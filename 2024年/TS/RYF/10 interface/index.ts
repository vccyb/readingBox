{
  interface Person {
    name: string;
    age: number;
  }

  type a = Person["name"]; // string
}

{
  interface Person {
    readonly name: string;
    age?: number;
  }

  interface X {
    [key: string]: number;
  }
}

{
  type Sub = (x: number, y: number) => number;
  interface A {
    add(x: number, y: number): number;
    sub: Sub;
    // new (message?: string): Error;
  }

  let a: A = {
    add(x, y) {
      return x + y;
    },
    sub(x, y) {
      return x - y;
    },
  };
}

{
  interface Shape {
    name: string;
  }

  interface Style {
    color: string;
  }

  interface Circle extends Shape, Style {
    radius;
  }

  let a: Circle = {
    name: "a",
    radius: 1,
    color: "red",
  };
}

{
  type Country = {
    name: string;
    capital: string;
  };

  interface CountryWithPop extends Country {
    x: number;
  }
}

{
  interface Box {
    height: number;
    width: number;
  }

  interface Box {
    size: number;
  }

  let box: Box = {
    height: 1,
    width: 2,
    size: 3,
  };
}

{
  interface Window {
    myUtils: {
      log: (message: string) => void;
    };
  }
}

{
}
{
  interface Circle {
    area: bigint;
  }

  interface Rectangle {
    area: number;
  }

  // declare const s: Circle | Rectangle;
  // s.area;
}

{
  interface Point {
    x: number;
    y: string;
  }
  type PointCopy1 = {
    [key in keyof Point]: Point[key];
  };
}
