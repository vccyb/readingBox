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





