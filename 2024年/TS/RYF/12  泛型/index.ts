{
  function getFirst<T>(arr: T[]): T {
    return arr[0];
  }

  getFirst<number>([1, 2, 3]); // 1
}

{
  function map<T, U>(arr: T[], f: (arg: T) => U) {
    return arr.map(f);
  }

  map<string, number>(["1", "2", "3"], (n) => parseInt(n)); // [1,2,3]
}

{
  function id<T>(arg: T): T {
    return arg;
  }

  let myId: <T>(arg: T) => T = id;
}

{
  interface Box<Type> {
    content: Type;
  }
}

{
  class Pair<K, V> {
    key: K;
    value: V;
  }
}

{
  type Nullable<T> = T | undefined | null;
}

{
  type Tree<T> = {
    value: T;
    left: Tree<T> | null;
    right: Tree<T> | null;
  };
}

{
  function getFirst2<T = string>(arr: T[]): T {
    return arr[0];
  }

  getFirst2(["2", "2", 1]);
}

{
  type a = (string | number)[];
  type b = Array<string | number>;
}

{
  function comp<T extends { length: number }>(a: T, b: T) {
    if (a.length >= b.length) {
      return a;
    }
    return b;
  }

  comp([1, 2], [1, 2, 3]);
  comp("123", "1234");
  // comp(1, 2s);
}
