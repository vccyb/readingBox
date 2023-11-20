function defaultValues(target, defaults) {
  return new Proxy(target, {
    apply(target, thisArg, args) {
      args = args.map((arg, index) => arg === undefined ? defaults[index] : arg)
      return target.apply(thisArg, args)
    }
  })
}


  let add = defaultValues(function(x, y) {
    return x + y;
  }, [0, 0]);
  
  console.log(add(1, 1)); // 输出 2
  console.log(add(undefined, 1)); // 输出 1
  console.log(add(1)); // 输出 1