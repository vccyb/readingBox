const { exec, execSync, spawn } = require("node:child_process");
// 1. exec 异步方法，回掉函数，返回buffer，可以帮我们执行shell命令
// 2. execSync (同步)
// 3. 执行较小的shell命令，想要立马拿到结果的shell execSync exec字节上限200kb
exec("node -v", (err, stdout, stderr) => {
  if (err) {
    return err;
  }
  console.log("unsync", stdout.toString());
});

const nodeVersion = execSync("node -v");
console.log("sync", nodeVersion.toString());

execSync("start chrome http://www.baidu.com");

// 4. spawn 没有字节上限 返回的是一个流
// 5. spawnSync(同步) 用的比较少
// const a = execSync("netstat");
// console.log(a);

const { stdout } = spawn("netstat");
stdout.on("data", (msg) => {
  console.log(msg.toString());
});

stdout.on("close", (msg) => {
  console.log("end");
});

// 传递参数
// spawn("netstat", ["-a"]);

// 6. execFile

execFile(path.resolve(process.cwd(), "./bat.cmd"), null, (err, stdout) => {
  console.log(stdout.toString());
});

// 7.
// 场景适合大量的计算，或者容易阻塞主进程操作的一些代码，就适合开发fork

// index.js
const { fork } = require("child_process");

const testProcess = fork("./test.js");

testProcess.send("我是主进程");

testProcess.on("message", (data) => {
  console.log("我是主进程接受消息111：", data);
});

// test.js
process.on("message", (data) => {
  console.log("子进程接受消息：", data);
});

process.send("我是子进程");
