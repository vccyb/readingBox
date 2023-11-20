

// import type {A} from './a';


// declare module './a' {
//   interface A {
//     y: number
//   }
// } 

// const a: A = {
//   x: 0,
//   y: 0
// }




// export {} 

// declare global {
//   interface String {
//     toSmallString: string
//   }
// }

// String.prototype.toSmallString = (): string => {
//   return ''
// }



// export {};

// declare global {
//   interface globalThis {
//     myAppConfig: object;
//   }
// }

// globalThis



declare module "url" {
  export interface Url {
    protocol?: string;
    hostname?: string;
    pathname?: string;
  }
}


