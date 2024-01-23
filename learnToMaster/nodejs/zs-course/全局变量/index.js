global.name = "xxx";

// console.log(global);

// globalThis
// node 没有 DOM 和 BOM

// node环境内置的一些 api
// dirname 当前文件的文件目录，执行脚本的目录，绝对路径
// filename 文件名字
// extname 后缀

console.log(__dirname);
console.log(__filename);
// console.log(extname);

// Buffer

// process

console.log(process.argv);
console.log(process.cwd());

setTimeout(() => {
  console.log("结束");
}, 5000);

setTimeout(() => {
  process.exit();
}, 1000);

process.on("exit", (code) => {
  console.log("退出");
});
