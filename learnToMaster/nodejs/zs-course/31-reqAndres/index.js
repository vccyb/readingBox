import express from "express";

const app = express();

app.use("*", (req, res, next) => {
  // 不是很安全
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5501");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// cros 默认的content-type不支持

// 预检请求 options请求，浏览器发起的
// 1. content-type application/json
// 2. 或者是 自定义请求头
// 3. 非普通请求 patch put delete

app.post("/info", (req, res) => {
  res.set("cyb", 123456);
  res.json({
    code: 200,
    type: "get",
  });
});

app.get("/info", (req, res) => {
  res.set("cyb", 123456);
  res.setHeader("Access-Control-Expose-Headers", "cyb");
  res.json({
    code: 200,
    type: "get",
  });
});

app.patch("/info", (req, res) => {
  res.json({
    code: 200,
    type: "patch",
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
