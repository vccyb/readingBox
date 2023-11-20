const myIteragble = {
  data: [1,2,3,4,5],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if(index < this.data.length) {
          return { value: this.data[index ++], done: false};
        } else {
          return { value: undefined, done: true}
        }
      }
    }
  }
}


for(const item of myIteragble) {
  console.log(item)
}