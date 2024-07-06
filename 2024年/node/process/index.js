// 2. 进程参数 argv 返回数组
// console.log(process.argv.includes("--version") ? "1.0.0" : "无");

// 3. cwd __dirname 工作目录
// esm 用不了 dirname
// console.log(process.cwd());
// console.log(__dirname);

// 4. 内存信息
// console.log(process.memoryUsage());
// {
//   rss: 32604160, 常驻集大小，物理内存的村落
//   heapTotal: 4194304, v8 给我们分配的堆内存的总大小，包括为使用的内存
//   heapUsed: 3457960, 一使用的内存
//   external: 1378022, 外部的内存
//   arrayBuffers: 10507 二进制总量
// }

// 5. exit 退出进程

// setTimeout(() => {
//   console.log(5);
// }, 5000);

// process.on("exit", () => {
//   console.log("进程退出了");
// });
// setTimeout(() => {
//   process.exit();
// }, 2000);

// 6. kill 杀死进程

// setTimeout(() => {
//   console.log(5);
// }, 5000);

// setTimeout(() => {
//   process.kill(process.pid);
// }, 2000);

// 7. env 环境变量 ！！！！ 关键
// 获取操作系统所有的环境变量
console.log(process.env);

// env 环境变量，可以修改，但是只是在当前进程修改，不会真正影响系统的环境变量

process.env.XXX = "xxx";

// 7.1 env  区分环境， 比如测试 http，生产 https
// cross-env

console.log(process.env.NODE_ENV == "dev" ? "开发环境" : "生产环境");

// dev: cross-env NODE_ENV=dev node index.js
// 扩平台的 windows SET 设置环境变量
// posix export 设置环境变量
