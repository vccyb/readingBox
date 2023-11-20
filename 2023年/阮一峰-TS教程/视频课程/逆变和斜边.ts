



class Parent {
  house() {}
}

class Child extends Parent {
  car() {}
}

class Grandson extends Child {
  sleep() {}
}

function fn(callback: (instance: Child) => Child) {

}

fn((instance: Parent): Grandson => {
  return new Grandson();
})

// 参数可以传递父亲，返回值可以传递子类型






type Arg<T> = (arg: T) => void
type Return<T> = (arg: any) => T

type isArg = Arg<Parent> extends Arg<Child> ? true : false
type isReturn = Return<Grandson> extends Return<Child> ? true : false










export {}