{
  type A = {
    foo: number;
    bar: string;
  };

  type B = {
    [key in keyof A]: string;
  };

  type ToBoolean<T> = {
    [key in keyof T]: boolean;
  };

  type C = Partial<A>;
}

{
  type Concrete<Type> = {
    [key in keyof Type]-?: Type[key];
  };
}

{
  type A = {
    foo: number;
    bar: string;
  };

  type B = {
    [key in keyof A as `${key}-ID`]: number;
  };
}

{
  type User = {
    name: string;
    age: number;
  };

  type Filter<T> = {
    [key in keyof T as T[key] extends string ? key : never]: T[key];
  };

  type FilteredUser = Filter<User>;
}
