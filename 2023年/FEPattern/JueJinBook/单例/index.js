class SingleDog {
  show() {
    console.log("单例模式");
  }

  static getInstance() {
    if (!SingleDog.instance) {
      SingleDog.instance = new SingleDog(); // 创建单例实例
    }
    return SingleDog.instance; // 返回已创建的单例实例
  }
}

const s1 = SingleDog.getInstance();
const s2 = SingleDog.getInstance();
console.log(s1 === s2); // 输出 true
