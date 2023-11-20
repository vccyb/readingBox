

let handler = {
  set(target, key, value) {
    console.log(`${key} is set to ${value}`)
    target[key] = value;
    return true
  }
}

let proxy = new Proxy({}, handler)

proxy.name = "xxx"