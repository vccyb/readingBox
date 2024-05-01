function get(object, path, defaultValue) {
  let obj = object;
  if (typeof path === "string") {
    const reg = /[^\[\].]+/g;
    path = path.match(reg);
  }
  for (const key of path) {
    if (!obj) {
      return defaultValue;
    }
    obj = obj[key];
  }
  return obj === undefined ? defaultValue : obj;
}

const object = { a: [{ b: { c: 3 } }] };

// console.log(get(object, ["a", "0", "b", "c"], "default")); // 输出: 3
console.log(get(object, "a[0].b.c", "default")); // 输出: "default"
