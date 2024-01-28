const eventEmitter = require("events");

const bus = new eventEmitter();

// 订阅一个事件

const fn = (name, num) => {
  console.log(`收到消息：${name} ${num}`);
};

// bus.once("test", fn);
bus.on("test", fn);

// bus.off("test", fn);

// 发布
bus.emit("test", "Hello World", 123);
bus.emit("test", "Hello World", 456);
bus.emit("test", "Hello World", 456);

bus.emit("test", "Hello World", 456);

bus.emit("test", "Hello World", 456);

bus.emit("test", "Hello World", 456);

bus.emit("test", "Hello World", 456);

bus.emit("test", "Hello World", 456);
bus.emit("test", "Hello World", 456);
bus.emit("test", "Hello World", 456);
bus.emit("test", "Hello World", 456);
bus.emit("test", "Hello World", 456);
bus.emit("test", "Hello World", 456);
bus.emit("test", "Hello World", 456);
bus.emit("test", "Hello World", 456);
bus.emit("test", "Hello World", 456);
bus.emit("test", "Hello World", 456);
bus.emit("test", "Hello World", 456);
bus.emit("test", "Hello World", 456);
bus.emit("test", "Hello World", 456);
bus.emit("test", "Hello World", 456);

// 默认监听10个
