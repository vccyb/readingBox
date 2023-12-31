const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.all("*", function (req, res, next) {
  console.log(req.headers.origin);
  const origin = req.headers.origin; //动态获取origin
  res.header("Access-Control-Allow-Origin", origin);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
});
app.get("/api/jsonp", (req, res) => {
  const { callback } = req.query;
  res.send(`${callback}('hello xiaoman')`);
});

app.get("/api/json", (req, res) => {
  //res.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:5500');
  res.json({ name: "xiaoman" });
});

app.get("/api/txt", (req, res) => {
  const data = fs.readFileSync("./index.txt", "utf-8");
  res.send(data);
});

app.post("/api/post", (req, res) => {
  console.log(req.body.name);
  res.json({
    code: 200,
  });
});

// app.post("/api/upload", upload.single("file"), (req, res) => {
//   console.log(req.file);
//   res.json({
//     code: 200,
//   });
// });

// sse

app.get("/api/sse", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
  });
  const txt = fs.readFileSync("./index.txt", "utf-8");
  const arr = txt.split("");
  let current = 0;
  let timer = setInterval(() => {
    if (current < arr.length) {
      res.write(`event: lol\n`);
      res.write(`data: ${arr[current++]}\n\n`);
    } else {
      clearInterval(timer);
    }
  });
});

app.listen(5500, () => {
  console.log("server is running");
});
