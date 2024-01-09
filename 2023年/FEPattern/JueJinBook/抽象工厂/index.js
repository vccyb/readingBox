// 抽象
class MobilePhoneFactory {
  // 提供操作系统的接口
  createOS() {
    throw new Error("抽象工厂方法不能调用!，你需要讲我重写");
  }

  // 提供硬件的接口
  createHardWare() {
    throw new Error("抽象工厂方法不能调用!，你需要讲我重写");
  }
}

// 具体工厂

class FakeStarFactory extends MobilePhoneFactory {
  createOS() {
    // 提供安卓系统实例
    return new AndroidOS();
  }

  createHardWare() {
    // 提供高通硬件实例
    return new QualcommHardWare();
  }
}

class OS {
  controlHardWare() {
    throw new Error("抽象产品方法不能调用!，你需要讲我重写!");
  }
}

// 定义具体操作系统的具体产品类
class AndroidOS extends OS {
  controlHardWare() {
    console.log("我会用安卓的方式去操作硬件");
  }
}

class AppleOS extends OS {
  controlHardWare() {
    console.log("我会用苹果的方式去操作硬件");
  }
}

class HardWare {
  // 收集硬件的共性方法，
  operateByOrder() {
    throw new Error("抽象产品方法不能调用!，你需要讲我重写!");
  }
}

class QualcommHardWare extends HardWare {
  operateByOrder() {
    console.log("我会用高通的方式去运转");
  }
}

class MiWare extends HardWare {
  operateByOrder() {
    console.log("我会用小米的方式去运转");
  }
}

const myPhone = new FakeStarFactory();
const myOS = myPhone.createOS();
const myHardWare = myPhone.createHardWare();

myOS.controlHardWare();
myHardWare.operateByOrder();

class newStarFactory extends MobilePhoneFactory {
  createOS() {
    return new AppleOS();
  }

  createHardWare() {
    return new MiWare();
  }
}

const myNewPhone = new newStarFactory();
const myNewOS = myNewPhone.createOS();
const myNewHardWare = myNewPhone.createHardWare();
myNewOS.controlHardWare();
myNewHardWare.operateByOrder();
