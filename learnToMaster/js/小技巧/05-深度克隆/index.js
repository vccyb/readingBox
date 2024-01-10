function deepClone(value) {
  // 非原始值
  // 数组
  if (Array.isArray(value)) {
    let clone = [];
    for (let i = 0; i < value.length; i++) {
      clone[i] = deepClone(value[i]);
    }
    return clone;
  }

  // 对象
  if (typeof value === "object" && value !== null) {
    let clone = {};
    for (let key in value) {
      clone[key] = deepClone(value[key]);
    }
    return clone;
  }

  // 原始值
  return value;
}
