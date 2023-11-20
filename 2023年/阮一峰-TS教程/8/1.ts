
// // type MyFunc = (txt: string) => void;

// // const hello: MyFunc = function(txt) {
// //   console.log('sss')
// // }


// function add(
//   x:number,
//   y:number
// ) {
//   return x + y;
// }

// const myAdd:typeof add = function (x, y) {
//   return x + y;
// }



function reverse(str: string): string
function reverse(arr: any[]): any[]
function reverse(
  stringOrArray: string|any[]
): string|any[] {
  if(typeof stringOrArray === 'string') {
    return stringOrArray.split("").reverse().join(' ');
  }else {
    return []
  }
}