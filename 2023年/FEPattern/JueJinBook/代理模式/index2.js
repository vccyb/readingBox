// 获取父元素

const father = document.getElementById("father");

// 给父亲节点安装监听

father.addEventListener("click", function (e) {
  // 识别是否是目标子元素
  if (e.target.tagName === "A") {
    e.preventDefault(); // 阻止默认行为
    alert(`我是${e.target.innerText}`);
  }
});

// class PreLoadImage {
//   static LOADING_URL = "xxxxxx";

//   constructor(imgNode) {
//     // 获取实例对应的DOM节点
//     this.imgNode = imgNode;
//   }

//   // 该方法用于设置真实的图片地址
//   setSrc(targetUrl) {
//     // img节点初始化时展示的是一个占位图
//     this.imgNode.src = PreLoadImage.LOADING_URL;
//     // 创建一个帮我们加载图片的Image实例
//     const img = new Image();
//     // 监听目标图片加载的情况，完成时再将DOM上的img节点的src属性设置为目标图片的url
//     img.onload = () => {
//       this.imgNode.src = targetUrl;
//     };
//     // 设置src属性，Image实例开始加载图片
//     img.src = targetUrl;
//   }
// }

// 优化

class PreLoadImage {
  constructor(imgNode) {
    this.imgNode = imgNode;
  }

  setSrc(imgUrl) {
    this.imgNode.src = imgUrl;
  }
}

class ProxyImage {
  static LOADING_URL = "xxxxxx";

  // targetImage 是上面的实例
  constructor(targetImage) {
    this.targetImage = targetImage;
  }

  setSrc(targetUrl) {
    this.targetImage.setSrc(ProxyImage.LOADING_URL);
    const virtualImage = new Image();
    virtualImage.onload = () => {
      this.targetImage.setSrc(targetUrl);
    };
    virtualImage.src = targetUrl;
  }
}
