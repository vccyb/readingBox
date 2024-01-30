class Dog {
  constructor(name, age) {
    this.age = age;
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

function deepClone(value) {
  if (Array.isArray(value)) {
    let clone = [];
    for (let i = 0; i < value.length; i++) {
      clone[i] = deepClone(value[i]);
    }
    return clone;
  }

  if (typeof value === "object" && value !== null) {
    let clone = {};
    for (let key in value) {
      clone[key] = deepClone(value[key]);
    }
    return clone;
  }

  return value;
}
