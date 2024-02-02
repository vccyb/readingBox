const wizard = {
  name: "Merlin",
  health: 50,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
};

const archer = {
  name: "Robin",
  health: 30,
};

console.log("1", archer);
wizard.heal.call(archer, 10, 20);
console.log("2", archer); // 输出 100

wizard.heal.apply(archer, [15, 25]);
console.log("3", archer); // 输出 100

function multiply(a, b) {
  return a * b;
}

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4)); // 输出 8
