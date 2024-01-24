const path = require("node:path");

// windows 兼容正斜杠
// 但是posix处理不了的
console.log(path.posix.basename("/foo/bar/baz/asdf/xm.html"));

// dirname
console.log(path.posix.dirname("/foo/bar/baz/asdf/xm.html"));

// extname
console.log(path.posix.extname("/foo/bar/baz/asdf/xm.html.xx"));

// path.join
console.log(path.join("/foo", "bar", "baz/asdf", "xm.html", ".."));

// path.resolve
console.log(path.resolve("/a", "/b", "/c"));
console.log(path.resolve("./index.js"));
console.log(path.resolve(__dirname, "./index.js"));

// path.parse()  path.format()
console.log(path.parse("/foo/bar/baz/asdf/xm.html"));

// path.sep

console.log(path.sep);
