let key = "文字";
let name = " 这是一段文字，其中包含了很多信息";
console.log(name, key);
let reg;
if (key) {
  reg = new RegExp(key, "g");
}

console.log(reg);

if (reg) {
  name = name.replace(reg, function (key) {
    return `<em>${key}</em>`;
  });
}

console.log(name);
