let a = undefined;
let b = void 0;

// window.undefined = 1;
// 当然他是只读属性

// 隐患
function m() {
  var undefined = 1;
  var a = undefined;
  console.log(undefined);
  console.log(a); // 1
}

m();
