// child_process
// 7个api

// 1. exec
// exec 异步方法 一般会提供一个回掉函数，返回buffer，可以帮我们执行shell命令，或者跟软件交互
// execSync 同步方法

const {
  exec,
  execSync,
  spawn,
  spawnSync,
  execFile,
  execFileSync,
  fork,
} = require("node:child_process");
const path = require("node:path");
const { default: test } = require("node:test");

// exec("node -v", (err, stdout, stderr) => {
//   if (err) {
//     return err;
//   }
//   console.log(stdout.toString());
// });

// 同步方法
// const nodeVersion = execSync("node -v"); /// buffer
// console.log(nodeVersion.toString());

// execSync("mkdir test");
// 同步 vs 异步
// execSync 适合比较小的shell命令，上限200kb

// execSync("start chrome http://www.baidu.com");

// 2. spawn
// spawn 没有字节上限，返回的是流，实时返回的

// const a = execSync("netstat");
// console.log(a);
// const { stdout } = spawn("netstat");
// stdout.on("data", (msg) => {
//   console.log(msg.toString());
// });
// stdout.on("close", (msg) => {
//   console.log("结束了");
// });

// 3. execFile

// execFile(path.resolve(__dirname, './bat'))

// exec -> execFile -> spawn

// fork 只能接受js模块

const testProcess = fork("./test.js");
testProcess.send("我是主进程"); // nodejs cpu 密集型应用，让子进程去实现

// process.on('message', (msg) => {xxx})

// IPC 通讯，基于libuv
