# JavaScript 权威指南 第七版





译者：李松峰

总共有17章

- 前8章属于JS基础，介绍了很多的最基本，最常用的语法，特性
- 9～14章属于JS进阶，介绍了，类、元编程、异步，迭代器生成器、标准库等
- 15～17章属于JS扩展相关，介绍了浏览器的JS、Node的JS，以及一些工具。



时间有限，没有办法进行全面的笔记，对于之前就了解的内容，简单略过，着重记录一些之前没发现的特性，以及一些优秀实践，工具、api等。







# 1 简介



略



# 2 词法结构



## 1、分号

JS中分号是用来分隔语句的。这其实是一种风格，不加分号也是可以的，但是当你碰到一些特殊的case的时候，要注意识别。

eg：

```js
let m = n + f
(b+c).toString()
```

上述代码，会被解析为

```js
let m = n + f(a+b).toString();

// bug了吧 解决可以, 但是是不是看上去很怪
let m = n + f
;(b+c).toString()
```

实际上，现代的开发，往往会使用一些工具来规范，比如eslint，这样他会自动给你规范化，按照他的要求，不会出现上上述问题的。

值得一提的是，vue的开发者，尤大是一个不写分号党😊。

![image-20230325223730164](/Users/chenyubo/Library/Application Support/typora-user-images/image-20230325223730164.png)

总结：用好工具，按照团队的规范来走，分号只是一种风格，这并不是一个复杂问题。



# 3 类型、值和变量

## 1、数值字面量的分隔符号

 ```js
let billion = 1_000_000_000 // 10亿
 ```

在开发中，还是经常有这种类型的，有时候会定义常量去



## 2、算数：

JS中算数遇到上溢出、下溢出、被除零时候不会发生错误。结果是一个特殊的无穷值 `Infinity`

浮点数的精度问题，在开发中可以的话尽量转化为等量的正数去使用。



## 3、字符串

字符串的一些api，在开发中，发现有人特别喜欢indexOf，其实还是有一些好用的api不是

```js
s.includes("or")  // 判断是否包含字串 or

s.trim() // 去掉两遍的空字符

s.split(",")   // 从定界符拆开
```



## 4、符号

开发中暂时好像很少使用到symbol。

symbol的主要作用就是作为对象的属性名

Symbol () 永远不会返回相同的值

而Symbol.for() 根据入参返回的，如果有了，他就会返回那个相同的

```js
let s = Symbol.for("shared")
let t = Symbol.for("shared")
s === t  // true
s.toString() // "Symbol(shared)"
Symbol.keyFor(t) // shared
```



## 5、全局对象 

全局对象的属性是全局性定义的标识符，在js程序的任何地方都可以使用。

JS解释器启动后（或者每次浏览器加载新页面的时候），就会创建新的全局对象并为其添加一些初始的属性。

node中，global属性就是全局对象他自己

浏览器中，window属性可以应用全局对象。

注意：工作线程的全局对象不是哦，他们是self，来引用他们的全局对象。

还有：es2020后，浏览器和node，都可以使用globalThis，作为引用全局对象的标准方式

![image-20230325232527293](/Users/chenyubo/Library/Application Support/typora-user-images/image-20230325232527293.png)



## 6、转换

避免隐式转换。



## 7、变量声明和赋值

使用es6之后的 let、const



## 8、解构赋值

```js
let [x, y] = [1, 2]

[x, y] = [x + 1, y + 1]

// ==================
let [x, y] = [1] // x == 1, y == undefined
[x, y] = [1, ,2 ,3] // x == 1, y == 2
[,x,,y] = [1,2,3,4] // x == 2, y == 4, 

// ==================
let [x, ...y] = [1,2,3,4] // y == [2,3,4]
let [a, [b, c]] = [1, [2, 2.5,], 3] // a == 1, b == 2, c == 2.5
let [first, ...rest] = "Hello" // first="H" rest="["e", "l", "l", "o"]"

// ==================
let transparent = {r: 0.0, g: 0.0, b:0.0, a:1.0}
let {r, g, b} = transparent // r == 0.0 g == 0.0 b == 0.0
const {sin, cos, tan} = Math

const {cos: cosine, tan: tangent} = Math

```

解构赋值不是万能的，如果复杂解构，还不如用传统的方式

```js
let points = {p1: [1,2], p2: [3,4]}
let {p1: [x1, y1], p2: [x2, y2]} = points

// ===========
let x1 = points.p1[0] // 更加简单易懂
```





# 4 表达式与操作符

## 1、条件式访问表达式  ?. 和 ?.[]

?. 和 ?.[] 就是防止 null，和undefined，不会报错，会返回undefined

```js
let a = {b: null}
a.b?.c.d // => undefined

let a = {b: {}};
a.b?.c?.d // => undefined


```

开发过程中经常遇到这种场景，就可以改成 `?.`

 ```js
if(res.data && res.data.result) {
   ...
}
   
// ======
if(res?.data?.result){
  ...
}
 ```



 条件式调用 ?.()

```js
function square(x, log) {
  log?.(x);
  return x * x;
}
```



## 2、=和==和===

实践中就是要严格用 === 和 !==



## 3、in操作符号

判断左侧的值是不是右侧对象的属性

```js
let point = {x: 1, y: 1}
"x" in point // => true
"z" in point // => false
"toString" in point // => true
```

注意，in操作符，会往原型链往上找



## 4、instance操作符

o instance f 

js会求值f.prototype 然后在o的原型链查找这个值，如果找到了，则o是f的实力，返回true



## 5、??

```js
// 如果maxWidth 有定义，就用它，否则 ... 否则 ...
let max = maxWidth ?? perferences.maxWidth ?? 500


let options = {timeout:0, title:"", verbose:false, n:null}

options.timeout ?? 1000 // 0 
options.title ?? "xxx" // ""
options.n ?? 10 // 10 
```



# 5 语句

## 1、for of

es6新增了一个for of专门用来迭代可迭代对象。

常见的可迭代对象有，数组，字符串，集合、映射。还有Object.keys, Object.values

```js
for(let k of Object.keys(o))
  
for(let [k, v] of Object.entries(o))

let wordSet = new Set(['a', 'b'])
for(let word of wordSet) {
  ...
}

let m = new Mao([[1, "one"]])
for(let [key, value] of m) {
  // ...
}
```

少用for in



## 2、for await 与异步迭代

```js
async function printStream(stream) {
  for await (let chunk of stream) {
    ...
  }
}
```



## 3、throw

开发过程中，大家很少写throw，

```js
function p(x) {
  if(x < 0) throw new Error("xxx")
  ...
}
```



# 6 对象

## 1、Object.create()

```js
let o1 = Object,create({x:1, y:2}) // o1 继承属性 x 和 y
o1.x + o1.y

let o2 = Object.create(null) // o2 不继承任何属性和方法
```

## 2、属性

```js
// 1 测试属性是否在 这个对象
o.hasOwnProperty("x") // 自有属性
“toString” in o // 继承的也会找到


// 2 枚举属性
Object.keys() // 自有属性，不包含不可枚举、继承、和符号
Object.getOwnPropertyNames() // 自由属性，+ 不可枚举的
Object.getPropertySymbols() // 返回符号
Refect.ownKeys() //所有
```

## 3、扩展对象 Object.assign

```js
Object.assign(o, defaults) // 用defaults覆盖o的所有属性

Object.assign({}, defaults, o) // 新建一个对象，默认复制到对象中，在用o的覆盖默认
```



# 7 数组

## 1、sort

大家很多时候，sort用的还是有点少

```js
a.sort((a,b) => a-b) // 升序
a.sort((a,b) => b-a) // 降序

// 当然这是对数字来说

// 核心，返回  正负值
// < 0 参数1 应该在参数2 的前面
// > 0 参数1 应该在参数2的后面
```



## 2、判断数组

```js
Array.isArray([]) // true
```



## 3、遍历数组

最好使用for of



# 8 函数

## 1、箭头函数

```js
const sum = (x, y) => x + y
```

注意，箭头函数他们没有prototype属性，这意味着箭头函数不能作为构造函数

**箭头函数，他的this少从定义他的环境继承this的。**



## 2、函数调用

调用的几种方式

作为函数调用

方法

构造函数

call、apply

隐式调用



# 9 类

类的使用 略

# 10 模块

## 1、再导出

```js
export {mean as default} from 'xxx'
```

## 2、动态导入

```js
import("xxx").then((stats) => {
  let average = stats.mean(data)
})
```

# 11 标准库

## 1、weakSet和weakMap

注意weak类型的，key要说对象类型

## 2、正则

正则的学问很深

这个可以试试chatgpt

## 3、URL API

这里注意url有个searchParams

```js
let url = new URL("https://example.com/search")
url.search // => ""
url.searchParams.append("q", "term")
url.search // => "?q=term"
url.searchParams.set("q", "x")
url.searchParams.get("q") // => x

[...url.searchParams]
```





12 13 14 章略过，重点是异步和promise。还有反射、proxy可以看下

# 12 迭代器 生成器

for of 和 ... ，



## 1、迭代器概念

迭代器对象是指任何具有next方法，切该方法返回迭代结果对象，迭代结果对象是具备value和done的对象。

要迭代一个可迭代对象，搜寻调用方法获得一个迭代器对象，然后执行next，知道返回done=true

```js
let list = [1,2,3,4,5]
let iter = list[Symbol,iterator]()

let head = list.next().value
let tail = [...iter] // tail = [2,3,4,5]
```



## 2、实现可迭代对象

```js
class xxx {
  [Symbol.iterator]() {
    ///
    return {
      ...
      next() {
       // xxx.  return {value:xxxx} || {done: true}
    }
    }
  }
}
```

## 3、生成器

```js
function* fn() {
  yield 2;
  yield 3;
  yield 5;
  yield 7;
}

let primes = fn();

primes.next().value // 2
primes.next().value // 3
primes.next().value // 5
primes.next().value // 7
primes.next().done // true

[...fn()]

for(let x of fn()) {
  ...
}
```

利用生成器的代码有点难以理解，建议async await



# 13 异步

异步主要就是promise async await这几个点

## 1、期约链

```js
fetch("/api/user/profile")
.then(response => {
  return response.json()
})
.then(profile => {
  ....
})

fetch().then().then()
```

## 2、串行期约

```js
function fetchSequentially(urls) {
  const bodies = [];
  
  function fetchOne(url) {
    return fetch(url)
    	.then(response => response.text())
    	.then(body => {
      	bodies.push(body)
    })
  }
  
  
  let p = Promise.resolve(undefined);
  
  for(url of urls) {
    p = p.then(() => fetchOne(url))
  }
  
  return p.then(() => bodies)
}
```

## 3、async await

ES2017新增的关键字，极大简化了期约的使用

```js
let response = await fetch("/api/user/profile")
let profile = await response.json()
```

```js
async function fn() {
  let response = await fetch("/api/user/profile");
  let profile = await respnose.json();
  return profile.xxx
}
```

## 4、等待多个期约

```js
let [v1, v2] = await Promise.all([getJSON(url1), getJSON(url2)])
```

## 5、异步迭代

```js
for await(const response of promise) {
  handle(response)
}
```

# 14 元编程

## 1、属性的特性

JS的属性有名字和值，但每个属性也有3个关联的特性，用于指定属性的行为以及你可以对它执行什么操作

如果加上value和访问器，我们说书一个属性有一个名字和4个特性

```
// 数据属性
value
writable   // 是否可以修改属性的值
enumerable  // for in 或者 Object.keys()
configurable //删除属性、是否可以修改属性

// 访问器属性
get
set
enumerable
configurable
```

 如何去获取对象的某个属性的属性描述符呢？

```js
Object.getOwnPropertyDescriptor({x: 1}, "x") //
// 返回 {value:1, writable:true, enumerable:true, configrable: true}
```

如何设置呢？

```js
Object.defineProperty(o, "x", {writable: false})
```

## 2、对象的可扩展能力

首先：对象的可扩展能力是控制是否可以给对象添加新的属性

```js
Object.isExtensible() // 判断是否可扩展

Object.preventExtensions() // 阻止扩展。注意 是不可逆的，切只影响对象本身
```

Objec.seal() 和 Object.freeze()

```js
Object.seal() // 封存 

Objec.freeze() // 冻结 所有的只有属性变成只读，不可扩展，不可配置
```

## 3、prototype特性

```js
Object.getPrototypeOf({})  // Object.prototype
```



## 4、反射 Reflect

反射不是类，它的属性是定义了一组相关函数，可以模拟核心语言语法的行为

```js
Reflect.apply(f, o, args) //将函数f作为o的方法调用，如果o是null，则没有this值

Reflect.construct(c, args, newTarget) 
//
.... 好多
```

## 5、代理

```js
let proxy = new Proxy(target, handlers)
```

可撤销的代理

```js
let {proxy, revoke} = Proxy.revocable(target, {})

revoke() // 取消代理
```

代理和反射都很复杂，需要单独的去看



# 15 浏览器中的js

## 1、模块

如果你使用的是 import 和 export这种，那么必须需要一个带有`type="module"`的script标签来加载

## 2、async defer

script标签上，defer和async都会明确的告诉浏览器，下载脚本的同时进行继续解析和渲染文档。（没有document。wirte）

而defer会让浏览器把脚本的执行推迟到文档完全加载和解析之后，而async则让浏览器经早运行脚本。

defer会有顺序的

如果都存在，按照async

## 3、网络请求 fetch

实际上还是用的axios用的多，这个单独看看

## 4、服务端发送事件

