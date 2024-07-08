{
  type T = "a" | "b";
  let foo = "a";

  let bar: T = foo as T;
  let bar2: T = <T>foo;
}

{
  const username = document.querySelector("#username") as HTMLInputElement;

  if (username) {
    username.value = "hello";
  }
}

{
  const value: unknown = "hello world";
  const s1: string = value as string;
}

{
  const n = 1;
  const m: string = n as unknown as string;
}

{
  let s = "js" as const;
}

{
  const a1 = [1, 2, 3];
  const a2 = [1, 2, 3] as const;
}

{
  function add(x: number, y: number) {
    return x + y;
  }

  const nums = [1, 2] as const;
  const total = add(...nums);
}

{
  const root = document.getElementById("root")!;
  root.innerText = "hello world";

  class Ponit {
    x!: number;
    y!: number;
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }
}

{
  function isString(value: unknown): void {
    if (typeof value !== "string") {
      throw new Error("value is not a string");
    }
  }
}

{
  function isString2(value: unknown): asserts value is string {
    if (typeof value !== "string") {
      throw new Error("value is not a string");
    }
  }
}
