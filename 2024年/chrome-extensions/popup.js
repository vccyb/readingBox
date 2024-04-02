console.log("pop.js");
// 在弹出页面加载时就监听消息
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "videoInfo") {
    console.log("popup.js收到消息：", request.content);
    // 更新弹出页面中的内容
    // 获取弹出页面中的一个用于展示内容的元素
    let contentElement = document.querySelector(".container");
    // 将获取到的内容设置到展示元素中
    contentElement.textContent = request.content;
  }
});
