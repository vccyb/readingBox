const APromise = require("./index");
const { resolver } = require("./jest.config");

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
