function arrify(value) {
  if (value === null || value === undefined) {
    return [];
  }

  if (Array.isArray(value)) {
    return value;
  }

  if (typeof value[Symbol.iterator] === "function") {
    return [...value];
  }

  return [value];
}

console.log(arrify("🦄"));
// arrify("🦄");
//=> ['🦄']

console.log(arrify(["🦄"]));
// arrify(["🦄"]);
//=> ['🦄']

console.log(arrify(new Set(["🦄"])));
// arrify(new Set(["🦄"]));
//=> ['🦄']

console.log(arrify(null));
// arrify(null);
//=> []

console.log(arrify(undefined));
// arrify(undefined);
//=> []
