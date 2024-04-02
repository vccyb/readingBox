console.log("bilibili 换一换插件小组手启动啦");

// 尝试获取所有feed-card
const feedCards = document.querySelectorAll(
  ".recommended-container_floor-aside .feed-card"
);

// console.log("total feedCards", feedCards.length);
// console.log("feedCards", feedCards);

const feedCard = feedCards[0];
// 获取视频信息

function getVideoInfo(feedCard) {
  const videoInfo = {
    title: feedCard.querySelector(".bili-video-card__info--tit").title,
    url: feedCard.querySelector(".bili-video-card__info--tit a").href,
    pic: feedCard.querySelector(".bili-video-card__image picture img").src,
  };
  return videoInfo;
}

// console.log(getVideoInfo(feedCard));

const videoInfoList = Array.from(feedCards).map(getVideoInfo);

// 发送给popup
chrome.runtime.sendMessage({ message: "videoInfo", content: videoInfoList });
