function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

// 可能有bug
function randomColor2() {
  // return "#" + Math.random().toString(16).substr(2, 8);
  return "#" + (0.03125).toString(16).substr(2, 8).padStart(6, "0");
}
