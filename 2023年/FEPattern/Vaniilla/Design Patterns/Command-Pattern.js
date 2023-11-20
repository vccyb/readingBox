// command pattern

// class OrderManager {
//   constructor() {
//     this.orders = [];
//   }

//   placeOrder(order, id) {
//     this.orders.push(id);
//     return `You have successfully ordered ${order} (${id})`;
//   }

//   trackOrder(id) {
//     return `Your order ${id} will arrive in 20 minutes.`;
//   }

//   cancelOrder(id) {
//     this.orders = this.orders.filter((order) => order !== id);
//     return `You have canceled your order ${id}`;
//   }
// }

// const manager = new OrderManager();
// manager.placeOrder("Pad Thai", "1234");
// manager.trackOrder("1234");
// manager.cancelOrder("1234");

class OrderManager {
  constructor() {
    this.orders = [];
  }

  execute(command, ...args) {
    return command.execute(this.orders, ...args);
  }
}

class Command {
  constructor(execute) {
    this.execute = execute;
  }
}

function PlaceOrderCommand(order, id) {
  return new Command((orders) => {
    orders.push(id);
    return `You have successfully ordered ${order} (${id})`;
  });
}

function CancelOrderCommand(id) {
  return new Command((orders) => {
    orders = orders.filter((order) => order !== id);
    return `You have canceled your order ${id}`;
  });
}

function TrackOrderCommand(id) {
  return new Command(() => `Your order ${id} will arrive in 20 minutes.`);
}

const manager = new OrderManager();

console.log(manager.execute(new PlaceOrderCommand("Pad Thai", "1234")));
console.log(manager.execute(new TrackOrderCommand("1234")));
console.log(manager.execute(new CancelOrderCommand("1234")));

// 优点
// 命令模式允许我们将方法与执行操作的对象解耦。如果您正在处理具有一定生命周期的命令或应排队并在特定时间执行的命令，它可以为您提供更多控制。

// 缺点
// 命令模式的用例非常有限，并且经常向应用程序添加不必要的样板。
