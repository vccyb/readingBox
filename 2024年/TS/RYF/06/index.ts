{
  const s: [string, number] = ["hello", 10];

  let a: [number, number?] = [1];
}

{
  type NamedNums = [string, ...number[]];

  const a: NamedNums = ["hello", 1, 2, 3];
  const b: NamedNums = ["hello", 1, 2, 3, 4];
}

{
  type Turple = [string, number];
  type Age = Turple[1];
}

{
  type t = readonly [number, string];
  type t2 = Readonly<[number, string]>;
}

{
  const arr: [number, number] = [1, 2];

  const arr2 = [1, 2] as const;

  function add(x: number, y: number) {}
  add(...arr);
  add(...arr2);
}
