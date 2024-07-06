// function printCar(car: {
//   make: string;
//   model: string;
//   year: number;
//   chargeVoltage?: number;
// }) {
//   console.log(car.make);
//   let a = car.chargeVoltage;
// }

// printCar({
//   make: "Honda",
//   model: "Accord",
//   year: 2017,
// });

// printCar({
//   make: "Honda",
//   model: "Accord",
//   year: 2017,
//   chargeVoltage: 11,
// });

// printCar({
//   make: "Honda",
//   model: "Accord",
//   year: 2017,
//   chargeVoltage: 11,
//   // aa: "qq",
// });

// const myPhones = {
//   home: { country: "+1", area: "211", number: "652-4515" },
//   work: { country: "+1", area: "670", number: "752-5856" },
//   fax: { country: "+1", area: "322", number: "525-4357" },
// };

// const phones: {
//   [k: string]: {
//     country: number;
//     area: string;
//     number: string;
//   };
// } = {};

const arr = ["js"];

// const cars = [
//   {
//     make: "1",
//     model: "2",
//     year: 2002,
//   },
// ];

// const tuple = ["js"] as const;

// let a: number[] = [1, 2, 3, 4];

// a = [1, 2, 3, 4, 5];
// const b: [1, 2, 3, 4] = [1, 2, 3, 4];

//          [Year, Make,     Model    ]
// let myCar = [2002, "Toyota", "Corolla"];
// // destructured assignment is convenient here!
// const [year, make, model] = myCar;

// const a: readonly [1, 2] = [1, 2];
// a.push(3);
// a.push()

// 不带readonly
// let a: number[] = [4, 5, 6];
// let b: [4, 5, 6] = [4, 5, 6];

// a = b; // b是a的字集，b是a的字类型
// b = a;

// 带readonly
let a: number[] = [4, 5, 6];
let b: readonly [4, 5, 6] = [4, 5, 6];

// a = b; //
// b = a;
