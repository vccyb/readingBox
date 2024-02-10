class Publisher {
  constructor() {
    this.observers = [];
    console.log("Publisher created");
  }

  //  添加订阅者
  add(observer) {
    console.log("publish.add invoked");
    this.observers.push(observer);
  }

  //  移除一个订阅者
  remove(observer) {
    console.log("publish.remove invoked");
    this.observers.forEach((item, i) => {
      if (item === observer) {
        this.observers.splice(i, 1);
      }
    });
  }

  //  通知所有订阅者
  notify() {
    console.log("publish.notify invoked");
    this.observers.forEach((observer) => {
      observer.update(this);
    });
  }
}

class Observer {
  constructor() {
    console.log("Observer created");
  }

  update() {
    console.log("Observer.update invoked");
  }
}

class PrdPublisher extends Publisher {
  constructor() {
    super();
    this.prdState = null;
    this.observers = [];
    console.log("PrdPublish created");
  }

  getState() {
    console.log("PrdPublish.getState invoked");
    return this.prdState;
  }

  setState(state) {
    console.log("PrdPublish.setState invoke");
    this.prdState = state;
    this.notify();
  }
}

class DeveloperObserver extends Observer {
  constructor() {
    super();
    console.log("DeveloperObserver created");
  }

  update(publisher) {
    console.log("DeveloperObserver.update invoked");
    this.prdState = publisher.getState();
    this.work();
  }

  work() {
    const prd = this.prdState;
    console.log(`developer is working on ${prd}`);
  }
}
