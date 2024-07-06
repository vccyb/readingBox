{
  function hello(txt: string) {
    console.log(txt);
  }

  type hello2 = (txt: string) => void;
}

{
  let f: (x: number) => number;
  f = function (y: number) {
    return y * 2;
  };

  type MyFun = (txt: string) => void;
}

{
  let add: {
    (x: number, y: number): number;
  };

  let foo: {
    (x: number, y: number): void;
    version: string;
  };
}

{
  function f2(x?: number) {
    x;
  }
}

{
  function f3(x: number, y = 10) {}
  // 可选参数和默认值不能同时作用一个参数
}

{
  function name22([x, y]: [number, number]) {}

  name22([1, 2]);
}
