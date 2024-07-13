{
  type A = Promise<string>;

  type B = Awaited<A>;

  type C = Awaited<string>;
}

{
  type T1 = Exclude<"a" | "b" | "c", "a">; // 'b'|'c'
  type T2 = Exclude<"a" | "b" | "c", "a" | "b">; // 'c'
  type T3 = Exclude<string | (() => void), Function>; // string
  type T4 = Exclude<string | string[], any[]>; // string
  type T5 = Exclude<(() => void) | null, Function>; // null
  type T6 = Exclude<200 | 400, 200 | 201>; // 400
  type T7 = Exclude<number, boolean>; // number
}

{
  type T1 = Extract<"a" | "b" | "c", "a">; // 'a'
  type T2 = Extract<"a" | "b" | "c", "a" | "b">; // 'a'|'b'
  type T3 = Extract<"a" | "b" | "c", "a" | "d">; // 'a'
  type T4 = Extract<string | string[], any[]>; // string[]
  type T5 = Extract<(() => void) | null, Function>; // () => void
  type T6 = Extract<200 | 400, 200 | 201>; // 200
}

{
  // string|number
  type T1 = NonNullable<string | number | undefined>;

  // string[]
  type T2 = NonNullable<string[] | null | undefined>;

  type T3 = NonNullable<boolean>; // boolean
  type T4 = NonNullable<number | null>; // number
  type T5 = NonNullable<string | undefined>; // string
  type T6 = NonNullable<null | undefined>; // never
}

{
  interface A {
    x: number;
    y: number;
  }

  type T1 = Omit<A, "x">;
}

{
  type T1 = Parameters<() => string>; // []

  type T2 = Parameters<(s: string) => void>; // [s:string]

  type T3 = Parameters<<T>(arg: T) => T>; // [arg: unknown]

  type T4 = Parameters<(x: { a: number; b: string }) => void>; // [x: { a: number, b: string }]

  type T5 = Parameters<(a: number, b: number) => number>; // [a:number, b:number]
}

{
  type T = Record<"a" | "b", number>;
}
