// {
//   let arr: number[] = [123, 123, 134];

//   let arr2: (number | string)[] = ["123", 123];

//   let a3: Array<number> = [123];
//   let a4: number[] = [1, 2, 3];
//   let foo = a4[99];
// }

// {
//   type Names = string[];
//   type Name = Names[number];
// }

{
  const arr = [123];
  arr; // 推断为 any[]

  arr.push(123);
  arr; // 推断类型为 number[]

  // arr.push("abc");
  arr; // 推断类型为 (string|number)[]
}

{
  const arr = [0, 1];
  arr[0] = 99;

  const a2: readonly number[] = [0, 1];

  // a2[1] = 2; readonly
  // a2.push(2);
  // delete a2[0];
}

// ts number[] readonly number[]
// number[] 是 readonly number[] 的子类型

// readonly number[], 没有pop push
// number 的方法要更多，字类型

{
  let a1: number[] = [1, 2];
  let a2: readonly number[] = [1, 2];
  // a2 = a1;
  // a1 = a2;
}

function getSum(s: number[]) {}

const arr: readonly number[] = [1, 2];

// getSum(arr);
// number[] 不能用 readonly number[] 替换

{
  let arr: Array<number> = [123];

  let arr2: ReadonlyArray<number> = [456];
}

{
  const arr = [0, 1] as const;
}

{
  let multi: number[][] = [
    [1, 2],
    [3, 4],
  ];
}
