class Storage {
  static getInstance() {
    if (!Storage.instance) {
      return new Storage();
    }
    return Storage.instance;
  }

  getItem(key) {
    return localStorage.getItem(key);
  }

  setItem(key, value) {
    return localStorage.setItem(key, value);
  }
}

const storage1 = Storage.getInstance();
const storage2 = Storage.getInstance();

storage1.setItem("name", "李雷");
// 李雷
storage1.getItem("name");
// 也是李雷
storage2.getItem("name");

// 返回true
storage1 === storage2;
