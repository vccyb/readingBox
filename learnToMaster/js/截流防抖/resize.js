window.resize = function () {
  console.log("resize");
  layout();
};

let func = debounce(layout, 500);

func();
func();
func(); // 1s后，。调用layout

function debounce(func, wait) {
  let timerId;
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func();
    }, wait);
  };
}
