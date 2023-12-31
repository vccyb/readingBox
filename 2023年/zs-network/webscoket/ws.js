const ws = require("ws");

const wss = new ws.Server({ port: 8080 }, () => {
  console.log("scoket Server started on port 8080");
});

wss.on("connection", (scoket) => {
  console.log("Client connected");
  scoket.on("message", (e) => {
    console.log("received: ", e.toString());
    // 广播消息
    wss.clients.forEach((client) => {
      client.send(
        JSON.stringify({
          type: "message",
          message: "我是服务端处理后发送给客户端的消息" + e.toString(),
        })
      );
    });
  });

  // 心跳检测

  let heartInterval = null;
  const heartCheck = () => {
    if (scoket.readyState === ws.OPEN) {
      scoket.send(
        JSON.stringify({
          type: "heartbeat",
          message: "心跳检测",
        })
      );
    } else {
      clearInterval(heartInterval);
    }
  };

  heartInterval = setInterval(heartCheck, 5000);
});
