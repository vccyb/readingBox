// states
const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";

class APromise {
  constructor(executor) {
    this.state = PENDING;
    this.queue = [];
    doResolve(this, executor);
  }

  then(onFulfilled, onRejected) {
    handle(this, { onFulfilled, onRejected });
  }
}

function handle(promise, handler) {
  // PENDING状态存储操作，只有在状态改变的时候，才会去执行onFulfilled 和 onRejected
  if (promise.state === PENDING) {
    promise.queue.push(handler);
  } else {
    handleResolved(promise, handler);
  }
}

function fulfill(promise, value) {
  promise.state = FULFILLED;
  promise.value = value;
  finale(promise);
}

function reject(promise, reason) {
  promise.state = REJECTED;
  promise.value = reason;
  finale(promise);
}

// 调用一次 executor
function doResolve(promise, executor) {
  let called = false;
  function wrapFulfill(value) {
    if (called) {
      return;
    }
    called = true;
    fulfill(promise, value);
  }

  function wrapReject(reason) {
    if (called) {
      return;
    }
    called = true;
    reject(promise, reason);
  }
  try {
    executor(wrapFulfill, wrapReject);
  } catch (err) {
    wrapReject(err);
  }
}

function finale(promise) {
  const length = promise.queue.length;
  for (let i = 0; i < length; i++) {
    handle(promise, promise.queue[i]);
  }
}

function handleResolved(promise, handler) {
  const cb =
    promise.state === "FULFILLED" ? handler.onFulfilled : handler.onRejected;
  cb(promise.value);
}

module.exports = APromise;
