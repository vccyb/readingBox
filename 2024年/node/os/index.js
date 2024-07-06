const { exec } = require("node:child_process");
const os = require("node:os");

// 1. platform 操作系统平台
console.log(os.platform());

// 2. release 操作系统版本号
console.log(os.release());

// 3. 平台
console.log(os.type());

// 4. 版本
console.log(os.version());

// 5. 返回用户目录 例如c:\user\xiaoman 原理就是 windows echo %USERPROFILE% posix $HOME
console.log(os.homedir());

// 6. cpu
// cpu架构
console.log(os.arch());
// cpu
console.log(os.cpus());
// cpu线层数
console.log(os.cpus().length);

// 7. 网络
console.log(os.networkInterfaces());
