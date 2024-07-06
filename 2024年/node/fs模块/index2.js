const fs = require("node:fs");
const fsp = require("node:fs/promises");
// 1. 异步 同步promise，
fs.readFile("./xj.txt", { encoding: "utf-8", flag: "r" }, (err, data) => {
  if (err) throw err;
  console.log(data);
});

// 阻塞代码执行
const result = fs.readFileSync("./xj.txt");
console.log(result.toString());

// promise
fsp
  .readFile("./xj.txt")
  .then((result) => {
    console.log(result.toString());
  })
  .catch((err) => {
    console.log("111", err);
  });

// 流, 适合一下大的文件场景
const readStream = fs.createReadStream("./xj.txt");
readStream.on("data", (chunk) => {
  setTimeout(() => {
    console.log(chunk.toString());
  }, 2000);
});

readStream.on("end", () => {
  console.log("end");
});

// 2. 创建文件夹

fs.mkdirSync("./testFs");
fs.mkdirSync("./testFs/a/b/c", {
  recursive: true,
});

fs.rmSync("./testFs", {
  recursive: true,
});

// 3. 重命名
fs.renameSync("./index.txt", "index2.txt");

// 4. 文件变化
fs.watch("./index.txt", (event, filename) => {
  console.log(event, filename);
});

//5. 注意事项
// fs io操作基于libuv
// 计时器都是v8事件循环完成的
// io 完成任务之后，才会推入v8的队列

fs.readFile(
  "./xj.txt",
  {
    encoding: "utf-8",
    flag: "r",
  },
  (err, dataStr) => {
    if (err) throw err;
    console.log(dataStr.toString());
  }
);

setImmediate(() => {
  console.log("setImmediate");
});

//6. 写入文件

fs.writeFileSync("./index.txt", "xxx");
fs.writeFileSync("./index.txt", "xxx", {
  flag: "a", // append
});

fs.appendFileSync("./index.txt", "\nqqq");

// 7. 可写流 大量数据分批插入
let writeStream = fs.createWriteStream("./index.txt");
let verse = ["1234556", "qqqqqqq", "qazwsxedc"];
verse.forEach((item) => {
  writeStream.write(item + "\n");
});

writeStream.end();
writeStream.on("finish", () => {
  console.log("end");
});

// 8 . 软连接硬链接

// 原始地址 硬链接后的地址
fs.linkSync("./index.txt", "./index2.txt");
// 硬链接  共享文件 备份文件, 原始文件删除不影响

// 软连接需要管理员权限  快捷方式
fs.symlinkSync("./index.txt", "./index3.txt");
