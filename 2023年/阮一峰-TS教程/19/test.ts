// declare let x: number




// declare function sayHello(
//   name: string
// ): void


// type x = (params: string) => void
// sayHello('xxx')

// declare class Animal {
//   constructor(name: string);
//   eat(): void;
//   sleep(): void
// }


// declare class C {
//   // 静态成员
//   public static s0(): string;
//   private static s1: string;

//   // 属性
//   public a:number;
//   private b:number;

//   // 
//   constructor(arg: number);

//   m(x:number, y:number):number

//   get c():number;
//   set c(value:number);

//   [index:string]: any;
// }

// declare namespace AnimalLib {
//   class xxxx
// }


// declare module AnimalLib {
//   class Animal {
//     constructor(name: string);
//     eat(): void;
//     sleep(): void;
//   }

//   type Animals = 'Fish' | 'Dog'
// }


declare module myLib {
  function makeGreeting(s: string):string;
  let numberOfGreetings: number;
}


import { Foo as Bar} from 'moduleA'

declare module 'moduleA' {
  interface Bar extends Foo {
    custom: {
      prop1: string
    }
  }
}