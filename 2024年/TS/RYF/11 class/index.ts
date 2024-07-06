{
  class Point {
    x: number;
    y: number;
    z = "134";
  }

  class A {
    readonly id = "foo";
  }

  const a = new A();
  // a.id = "bar"; // error
}

{
  class C {
    _name = "";

    get name() {
      return this._name;
    }

    set name(value) {
      this._name = value;
    }
  }
}

{
  interface Point {
    x: number;
    y: number;
  }

  class MyClass implements Point {
    x = 0;
    y = 1;
    z = "134";
  }
}

{
  class A {
    x: number = 1;
  }

  interface A {
    u: number;
  }

  let a = new A();
  a.u = 2;
}

{
  class A {}
  let a: A = new A();
  type Aclass = typeof A;
}

{
  class A {
    private privateGreet() {
      console.log("sss");
    }
    private x = 1;

    #abc = 999;

    public greet() {
      this.privateGreet();
    }
  }

  class B extends A {
    public xx() {
      this.greet();
    }

    privateGreet1() {
      console.log("sss");
    }
  }

  const a = new A();
  a.greet();
}

{
  class Point {
    constructor(public x: number, public y: number) {}
  }
}
