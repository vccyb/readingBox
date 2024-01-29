const fs = require("node:fs");
const fs2 = require("node:fs/promises");

// sync 同步

// fs.readFile(
//   "./hello.txt",
//   {
//     encoding: "utf-8",
//     flag: "r",
//   },
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// sync 同步，会阻塞下面的代码
// let result = fs.readFileSync("./hello.txt");
// console.log(result.toString());
// console.log("test");

// // promise版本

// fs2.readFile("./hello.txt").then((result) => {
//   console.log("promise");
//   console.log(result.toString());
// });

// // 返回一个对象, 这种流，处理大文件的时候会用
// const readFileStream = fs.createReadStream("./hello.txt");
// readFileStream.on("data", (chunk) => {
//   console.log(chunk.toString());
// });

// readFileStream.on("end", () => {
//   console.log("end");
// });

// 2 创建文件夹
// fs.mkdirSync("./chen");
// 递归创建
// fs.mkdirSync("./chen1/a/b/c", { recursive: true });

// 3 删除文件
// fs.rmSync("./chen", { recursive: true });

// 4 换名字
// fs.renameSync("./hello.txt", "./hello1.txt");

// 5 监听
fs.watch("./hello.txt", (eventType, filename) => {
  console.log(eventType, filename);
});
