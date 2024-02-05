// 未知妹纸
const girl = {
  // 姓名
  name: "未知妹纸",
  aboutMe: "....",
  age: 24,
  career: "teacher",
  fakeAvatar: "xxx",
  avatar: "xxx",
  phone: 123456,
  presents: [],
  bottomValue: 50,
  lastPresent: present,
};

const baseInfo = ["age", "career"];
const privateInfo = ["avatar", "phone"];

const user = {
  // 姓名us
  isValidate: true,
  isVIP: false,
};

const present = {
  type: "巧克力",
  value: 60,
};

const proxyLovers = new Proxy(girl, {
  get(girl, key) {
    if (baseInfo.includes(key) && !user.isValidate) {
      alert("您还没有完成验证哦");
      return;
    }

    if (user.isValidate && privateInfo.includes(key) && !user.isVIP) {
      alert("您还不是会员哦");
      return;
    }
  },

  set(girl, key, val) {
    if (key === "lastPresent") {
      if (val.value < girl.bottomValue) {
        alert("礼物价值太低了");
        return;
      }
    }

    girl.lastPresent = val;
    girl.presents = [...girl.presents, val];
  },
});
