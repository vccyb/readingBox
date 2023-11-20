let validator = {
  set(target, key, value) {
    if (key === "age") {
      if (!Number.isInteger(value)) {
        throw new TypeError("The age is not an integer");
      }
      if (value < 0 || value > 200) {
        throw new RangeError("The age is invalid");
      }
    }
    target[key] = value
    return true
  },
};


let person = new Proxy({}, validator)

person.age = 100
console.log(person.age)

// person.age = "sss"
person.age = 2222
