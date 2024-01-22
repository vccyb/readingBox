// 五种模式

// 1. 引入自己编写的模块
require("./test.js");

// 2. 引入第三方模块
// const md5 = require("md5");
// console.log(md5("123456"));

// 3. node.js 的内置模块  fs http net os child_process
const fs = require("node:fs"); // 高版本的node.js node:fs

console.log(fs);

// 4. c++ 扩展 .node 模块

// 5. 支持引入json文件
const data = require("./data.json");
console.log(data);

// 6. 到处

// module.exports = {
//   success: 1,
//   error: 0,
//   fn: {},
// };

// const {error} = require('./xxx.js)

// 7. 直接到处值
// module.exports = "hello world";

// 8. module.exports = () => {xxx}
