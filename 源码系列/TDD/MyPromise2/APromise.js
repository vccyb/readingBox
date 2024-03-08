class APromise {
  static PENDING = "PENDING";
  static FULFILLED = "FULFILLED";
  static REJECTED = "REJECTED";
  constructor(executor) {
    this.PromiseState = APromise.PENDING;
    this.PromiseResult = null;
    this.callbacks = [];
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  resolve(value) {
    if (this.PromiseState === APromise.PENDING) {
      this.PromiseState = APromise.FULFILLED;
      this.PromiseResult = value;
      queueMicrotask(() => {
        this.callbacks.map((callback) => {
          callback.onFulfilled(value);
        });
      });
    }
  }
  reject(reason) {
    if (this.PromiseState === APromise.PENDING) {
      this.PromiseState = APromise.REJECTED;
      this.PromiseResult = reason;
      queueMicrotask(() => {
        this.callback.map((callback) => {
          callback.onRejected(reason);
        });
      });
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };
    if (this.PromiseState === APromise.PENDING) {
      this.callbacks.push({
        onFulfilled,
        onRejected,
      });
    }
    if (this.PromiseState === APromise.FULFILLED) {
      // 下一次执行
      queueMicrotask(() => {
        onFulfilled(this.PromiseResult);
      });
    }

    if (this.PromiseState === APromise.REJECTED) {
      // 下一次执行
      queueMicrotask(() => {
        onRejected(this.PromiseResult);
      });
    }
  }
}

console.log(1);
let promise1 = new APromise((resolve, reject) => {
  console.log(2);
  setTimeout(() => {
    console.log("A", promise1.PromiseState);
    resolve("这次一定");
    console.log("B", promise1.PromiseState);
    console.log(4);
  });
});
promise1.then(
  (result) => {
    console.log("C", promise1.PromiseState);
    console.log("fulfilled:", result);
  },
  (reason) => {
    console.log("rejected:", reason);
  }
);
console.log(3);
