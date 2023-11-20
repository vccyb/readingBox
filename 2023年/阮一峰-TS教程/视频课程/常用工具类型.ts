

// 


type A1 = { name: string, age: string }
type A2 = { age: number }

type Compute<T> = {
  [k in keyof T]: T[k];
}
type A1A2 = Compute<A1 & A2>

interface Company {
  num: number;
  name: string;
}

interface Person<T = any> {
  name: string;
  age: number;
  company: T
}

type DeepPartial<T> = {
  [k in keyof T]?: T[k] extends object ? DeepPartial<T[k]> : T[k];
}


type withCompany = DeepPartial<Person<Company>>


let person: withCompany = {
  company: {
    num: 123,

  }
}



// Pick Omit


type PickPerson = Pick<Person, "age">


// type C1 = keyof '123' | '1234'


type CC = keyof any

export {}
