



type ResStatusMessage<T> = T extends 200 | 201 | 204 | 206 ? "success" : "fail"


type IMessage = ResStatusMessage<200>
type IMessage2 = ResStatusMessage<404>


type Conditional<T, U> = T extends U ? true : false

type t1 = Conditional<'str', string>
type t2 = Conditional<'str', boolean>


type FromatReturnValue<T> = T extends string ? string : T extends number ? number : never

function sum<T extends string | number>(a: T, b: T): FromatReturnValue<T>{
  return a + (b as any);
}

let r = sum(1, 2)



type SelectType<T> = T 
