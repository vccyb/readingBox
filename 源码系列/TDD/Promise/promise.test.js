const APromise = require("./index");

it("构造函数接收一个executor，并且他立即调用一次", () => {
  // mock function with spies
  const executor = jest.fn();
  const promise = new APromise(executor);
  expect(executor.mock.calls.length).toBe(1);
  expect(typeof executor.mock.calls[0][0]).toBe("function");
  expect(typeof executor.mock.calls[0][1]).toBe("function");
});

it("promise初始状态为PENDING", () => {
  const promise = new APromise(function executor(fulfill, reject) {});
  expect(promise.state).toBe("PENDING");
});

it("调用fulfill,状态改变为FULFILLED", () => {
  const value = ":)";
  const promise = new APromise((fulfill, reject) => {
    fulfill(value);
  });
  expect(promise.state).toBe("FULFILLED");
});

it("调用reject，状态改变为REJECTED", () => {
  const reason = "I failed :(";
  const promise = new APromise((fulfill, reject) => {
    reject(reason);
  });
  expect(promise.state).toBe("REJECTED");
});

it("promise拥有一个.then的方法", () => {
  const promise = new APromise(() => {});
  expect(typeof promise.then).toBe("function");
});

it("promise处于FULFILLED状态时，调用onFulfilled方法", () => {
  const value = ":)";
  const onFulfilled = jest.fn();
  const promise = new APromise((fulfill, reject) => {
    fulfill(value);
  }).then(onFulfilled);
  expect(onFulfilled.mock.calls.length).toBe(1);
  expect(onFulfilled.mock.calls[0][0]).toBe(value);
});

it("promise处于REJECTED状态时，调用onRejected方法", () => {
  const reason = "I failed :(";
  const onRejected = jest.fn();
  const promise = new APromise((fulfill, reject) => {
    reject(reason);
  }).then(null, onRejected);

  expect(onRejected.mock.calls.length).toBe(1);
  expect(onRejected.mock.calls[0][0]).toBe(reason);
});

it("PENDING 变为 FULFILLED后，状态不再改变", () => {
  const value = ":)";
  const reason = "I failed :(";
  const onFulfilled = jest.fn();
  const onRejected = jest.fn();

  const promise = new APromise((resolve, reject) => {
    resolve(value);
    reject(reason);
  });
  promise.then(onFulfilled, onRejected);
  expect(onFulfilled.mock.calls.length).toBe(1);
  expect(onFulfilled.mock.calls[0][0]).toBe(value);
  expect(onRejected.mock.calls.length).toBe(0);
  expect(promise.state).toBe("FULFILLED");
});

it("PENDING 变为 REJECTED后，状态不再改变", () => {
  const value = ":)";
  const reason = "I failed :(";
  const onFulfilled = jest.fn();
  const onRejected = jest.fn();
  const promise = new APromise((resolve, reject) => {
    reject(reason);
    resolve(value);
  });
  promise.then(onFulfilled, onRejected);
  expect(onRejected.mock.calls.length).toBe(1);
  expect(onRejected.mock.calls[0][0]).toBe(reason);
  expect(onFulfilled.mock.calls.length).toBe(0);
  expect(promise.state).toBe("REJECTED");
});

it("如果执行失败，应该状态转为REJECTED，执行onRejected方法", () => {
  const reason = new Error("I failed :(");
  const onRejected = jest.fn();
  const promise = new APromise((resolve, reject) => {
    throw reason;
  });
  promise.then(null, onRejected);
  expect(onRejected.mock.calls.length).toBe(1);
  expect(onRejected.mock.calls[0][0]).toBe(reason);
  expect(promise.state).toBe("REJECTED");
});

it("promise的执行应该再队列返回后，而不是立即执行 - resolve", (done) => {
  const value = ":)";
  const promise = new APromise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, 1);
  });
  const onFulfilled = jest.fn();
  promise.then(onFulfilled);
  setTimeout(() => {
    expect(onFulfilled.mock.calls.length).toBe(1);
    expect(onFulfilled.mock.calls[0][0]).toBe(value);
    promise.then(onFulfilled);
  }, 5);

  // 并不是立即执行的
  expect(onFulfilled.mock.calls.length).toBe(0);
  setTimeout(() => {
    expect(onFulfilled.mock.calls.length).toBe(2);
    expect(onFulfilled.mock.calls[1][0]).toBe(value);
    done();
  }, 10);
});

it("promise的执行应该再队列返回后，而不是立即执行 - resolve", (done) => {
  const reason = "I failed :(";
  // 1s 后拒绝
  const promise = new APromise((fulfill, reject) => {
    setTimeout(reject, 1, reason);
  });
  const onRejected = jest.fn();
  promise.then(null, onRejected);
  setTimeout(() => {
    expect(onRejected.mock.calls.length).toBe(1);
    expect(onRejected.mock.calls[0][0]).toBe(reason);
    promise.then(null, onRejected);
  }, 5);

  // 不是立即执行的
  expect(onRejected.mock.calls.length).toBe(0);

  setTimeout(() => {
    expect(onRejected.mock.calls.length).toBe(2);
    expect(onRejected.mock.calls[1][0]).toBe(reason);
    done();
  }, 10);
});

it("连续promise,promise的.then返回一个新的promise", () => {
  expect(() => {
    const qOnFulfilled = jest.fn();
    const rOnFulfilled = jest.fn();
    const p = new APromise((resolve, reject) => resolve());
    const q = p.then(qOnFulfilled);
    const r = q.then(rOnFulfilled);
  }).not.toThrow();
});

it("如果.then返回的promise，onFulfilled正常处理，状态会转到FULFILLED", () => {
  const value = ":)";
  const f1 = jest.fn();
  new APromise((resolve) => resolve()).then(() => value).then(f1);
  expect(f1.mock.calls.length).toBe(1);
  expect(f1.mock.calls[0][0]).toBe(value);
});

it("如果.then返回的promise，onRejected正常处理，状态会转到FULFILLED", () => {
  const value = ":)";
  const f1 = jest.fn();
  new APromise((resolve, reject) => reject()).then(null, () => value).then(f1);
  expect(f1.mock.calls.length).toBe(1);
  expect(f1.mock.calls[0][0]).toBe(value);
});

it("如果.then返回的promise，在onFulfilled有异常，状态会转到REJECTED", () => {
  const reason = new Error("I failed :(");
  const f1 = jest.fn();
  new APromise((resolve, reject) => resolve())
    .then(() => {
      throw reason;
    })
    .then(null, f1);
  expect(f1.mock.calls.length).toBe(1);
  expect(f1.mock.calls[0][0]).toBe(reason);
});

it("如果.then返回的promise，在onRejected有异常，状态会转到REJECTED", () => {
  const reason = new Error("I failed :(");
  const f1 = jest.fn();
  new APromise((resolve, reject) => reject())
    .then(null, () => {
      throw reason;
    })
    .then(null, f1);

  expect(f1.mock.calls.length).toBe(1);
  expect(f1.mock.calls[0][0]).toBe(reason);
});

it("如果返回的是promise，就应该采用该promise", () => {
  const value = ":)";
  const f1 = jest.fn();
  new APromise((resolve) => resolve())
    .then(() => {
      return new APromise((resolve) => resolve(value));
    })
    .then(f1);

  expect(f1.mock.calls.length).toBe(1);
  expect(f1.mock.calls[0][0]).toBe(value);
});

it("异步返回的promise，也是一样采用返回的promise", (done) => {
  const value = ":)";
  const f1 = jest.fn();
  new APromise((resolve) => setTimeout(resolve, 0))
    .then(() => {
      return new APromise((resolve) => setTimeout(resolve, 0, value));
    })
    .then(f1);

  setTimeout(() => {
    expect(f1.mock.calls.length).toBe(1);
    expect(f1.mock.calls[0][0]).toBe(value);
    done();
  }, 10);
});
