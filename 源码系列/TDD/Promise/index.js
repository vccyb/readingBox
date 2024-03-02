// states
const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";

class APromise {
  constructor(executor) {
    this.state = PENDING;

    doResolve(this, executor);
  }

  then(onFulfilled, onRejected) {
    handleResolved(this, onFulfilled, onRejected);
  }
}

function fulfill(promise, value) {
  promise.state = FULFILLED;
  promise.value = value;
}

function reject(promise, reason) {
  promise.state = REJECTED;
  promise.value = reason;
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

function handleResolved(promise, onFulfilled, onRejected) {
  const cb = promise.state === "FULFILLED" ? onFulfilled : onRejected;
  cb(promise.value);
}

module.exports = APromise;
