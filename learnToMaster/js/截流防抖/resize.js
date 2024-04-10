console.log("hello");
function layout() {
  console.log("layout");
}

let func = debounce(layout, 1000);

function debounce(func, wait) {
  let timerId;
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func();
    }, wait);
  };
}

function throttle(func, wait) {
  let timerId;
  return function () {
    if (timerId) return;
    timerId = setTimeout(() => {
      func.apply(this, arguments);
      timerId = null;
    }, wait);
  };
}

function throttle2(func, wait) {
  let time;
  return function () {
    // 立刻执行和 距离上一次执行的时间拆过wait
    if (!time || Date.now() - time >= wait) {
      func.apply(this, arguments);
      time = Date.now();
    }
  };
}

let func2 = throttle(layout, 1000);
let func3 = throttle2(layout, 2000);

window.onresize = () => {
  // console.log("resize");
  func3();
};
