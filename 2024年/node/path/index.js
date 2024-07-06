const path = require("node:path");
// console.log(path.basename("/foo/bar/baz/xx/c.html"));

// console.log(path.dirname("/foo/bar/baz/xx/c.html"));

// console.log(path.extname("/a/b/c/index.js"));

// console.log(path.join("/a", "/b", "/c", "../"));

// 都是绝对路径返回最后一个
console.log(path.resolve("/a"));
console.log(path.resolve("./index.js"));

console.log(path.resolve(__dirname, "./index.js"));

console.log(path.parse("/home/user/dir/file.txt"));

console.log(
  path.format({
    root: "/",
    dir: "/home/user/documents",
    base: "file.txt",
    ext: ".txt",
    name: "file",
  })
);
// {
//   root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file'
// }
