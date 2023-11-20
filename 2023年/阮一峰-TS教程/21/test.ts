// interface T {
//   0: boolean;
//   a: string;
//   b(): void;
// }

// type KeyT = keyof T; // 0 | 'a' | 'b'

// let a: KeyT = 0


// string | number | symbol
type KeyT = keyof any;


let obj = {}

type KeyTT = keyof string
