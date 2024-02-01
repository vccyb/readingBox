const http = require("node:http");
const url = require("node:url");

// req 接受请求， res 给前端返回
http
  .createServer((req, res) => {
    if (req.method === "POST") {
      res.end("POST");
    } else if (req.method === "GET") {
      res.end("GET");
    }
  })
  .listen(3000);
