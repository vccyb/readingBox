const eventEmitter = require("events");

// 发布订阅模式 off on emit once

const bus = new eventEmitter();

// 订阅一个事件
bus.on("test", (...args) => {
  console.log(args);
});

// 发布
bus.emit("test", "ccc", "123");
bus.emit("test", "ccc", "123");

// once
bus.once("test", (...args) => {
  console.log(args);
});

bus.emit("test", "ccc", "123");
bus.emit("test", "ccc", "123");

// off
const fn = () => {};
bus.on("test", fn);
bus.off("test", fn);
