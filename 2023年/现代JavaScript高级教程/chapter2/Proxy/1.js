
let target = {
  name: 'target'
}


let proxy = new Proxy(target, {
  get(target, property) {
    return property in target ? target[property] : "Default"
  }
})


console.log(proxy.name)
console.log(proxy.unkonw)