// import express from "express";
// import jwt from "jsonwebtoken";
// import cors from "cors";
var express = require("express");
var jwt = require("jsonwebtoken");
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var Key = "CYB";
var user = {
    name: "admin",
    password: "123456",
    id: 1
};
// 1. 登陆接口
app.post("api/login", function (req, res) {
    console.log("login");
    if (req.body.name === user.name && req.body.password === user.password) {
        res.json({
            message: "登陆成功",
            token: jwt.sign({ id: user.id }, Key, { expiresIn: "1h" })
        });
    }
    else {
        res.status(403).json({ message: "用户名或密码错误" });
    }
});
// 2. 列表接口，必须是授权状态才能访问
app.get("api/list", function (req, res) {
    var token = req.headers.authorization; // 前端会吧token存放到这个请求头里面，规范
    jwt.verify(token, Key, function (err) {
        if (err) {
            res.status(403).json({ message: "没有授权" });
        }
        else {
            res.json({
                message: "获取列表成功",
                list: [
                    { id: 1, name: "张三" },
                    { id: 2, name: "李四" },
                    { id: 3, name: "王五" },
                ]
            });
        }
    });
});
app.listen(5501, function () {
    console.log("Server started on port 3000");
});
