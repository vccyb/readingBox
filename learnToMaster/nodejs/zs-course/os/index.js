const os = require("node:os");
const { exec } = require("node:child_process");
console.log(os.platform());

console.log(os.release());
console.log(os.type());

console.log(os.version());

// 不同的操作系统，分别调用对应的shell命令

const platform = os.platform();

const open = (url) => {
  if (platform === "darwin") {
    exec(`open ${url}`);
  } else if (platform === "win32") {
    exec(`start ${url}`);
  } else if (platform === "linux") {
    exec(`xdg-open ${url}`);
  }
};

// open("https://www.baidu.com");

// 读取到用户所在的目录 $HOME
console.log(os.homedir());

console.log(os.arch());

console.log(os.cpus().length);

console.log(os.networkInterfaces());
