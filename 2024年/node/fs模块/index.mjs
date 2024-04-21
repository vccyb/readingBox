// import { readFileSync, writeFileSync } from "node:fs";
// const content = readFileSync("./hd.txt", "utf8");
// console.log(content);

// writeFileSync("xj.txt", "houdunren");

// writeFileSync("xj.txt", "append string", { flag: "a" });

// 异步操作  有点蛮烦

// import { readFile, writeFile } from "node:fs";
import { error } from "node:console";
import { readFile } from "node:fs/promises";

// readFile("./hd.txt", "utf8", (error, content) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(content);
//     // 异步写入
//     writeFile("xj.txt", content, (error) => {
//       if (error) console.log(error);
//       else console.log("文件写入成功");
//     });
//   }
// });

readFile("hd.txt", "utf-8")
  .then((content) => {
    console.log(content);
  })
  .catch((error) => console.log(error));
console.log("这个会先执行");
