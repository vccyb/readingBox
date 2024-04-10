// 我们的 Service Worker 将监听的第一个事件是 runtime.onInstalled()。此方法可让扩展程序在安装时设置初始状态或完成一些任务。扩展程序可以使用 Storage API 和 IndexedDB 存储应用状态。不过，在这种情况下，由于我们只处理两种状态，因此将使用操作的标记文本本身来跟踪扩展程序处于“开启”还是“关闭”状态。

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({ text: "OFF" });
});
