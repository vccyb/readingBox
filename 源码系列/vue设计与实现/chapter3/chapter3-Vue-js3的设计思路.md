



## 1 渲染器



虚拟dom -> 渲染器 -> 真实dom



小例子，假设我们有一个虚拟dom

来编写一个渲染器

```ts
const vnode = {
  tag: 'div',
  props: {
    onClick: () => alert('hello')
  },
  children: 'click me'
}
```

```ts
function renderer(vnode, container) {
  // vnode.tag => 创建dom元素
  const el = document.createElement(vnode.tag)
  // 遍历vnode.props 添加到dom上
  for(const key in vnode.props) {
    if(/^on/.test(key)) {
      el.addEventListener(key.substr(2).toLowerCase(), vnode.props[key])
    }
  }
  
  if(typeof vnode.children === 'string') {
    el.appendChild(document.createTextNode(vnode.children))
  }else if(Array.isArray(vnode.children)) {
    vnode.children.forEach(child => renderer(child, el))
  }
  
  // 将元素挂载
  container.appendChild(el)
}
```







渲染器的精髓在于更新节点的阶段

```ts
const vnode = {
  tag: 'div',
  props: {
    onClick: () => alert('hello')
  },
  children: 'click again' // 从 click me 改成 click again
}
```

对于渲染器来说，它需要精确地找到 vnode 对象的变更点并且只 更新变更的内容。就上例来说，渲染器应该只更新元素的文本内容， 而不需要再走一遍完整的创建元素的流程。这些内容后文会重点讲 解，但无论如何，希望大家明白，渲染器的工作原理其实很简单，归 根结底，都是使用一些我们熟悉的 DOM 操作 API 来完成渲染工作。



## 2 组件

**组件就是一组DOM元素的封装** ，这组 DOM 元素就是组件要渲染的内容，因此 我们可以定义一个函数来代表组件，而函数的返回值就代表组件要渲 染的内容:

```ts
const MyComponent = function () {
  return {
    tag: 'div',
    props: {
      onClick: () => alert('hello')
    },
    children: 'click me'
  }
}


// 假设组件有多了一类，比如对象
const MyComponent = {
  render() {
    return {
      tag: 'div',
      props: {
        onClick: () => alert('hello')
      },
      children: 'click me'
    }
  }
}
```

组件的返回值也是虚拟dom（用js描述dom），它代表组建要渲染的内容

```ts
const vnode = {
  tag: MyComponent
}
```

就像tag: 'div'用来描述<div>标签一样，tag: MyComponent 用来描述组件，只不过此时的 tag 属性不是标签名 称，而是组件函数。为了能够渲染组件，需要渲染器的支持。修改前 面提到的 renderer 函数，如下所示:

更新我们的渲染器-支持渲染组件

```ts
function renderer(vnode, container) {
  if(typeof vnode.tag === 'string') {
    // 说明vnode描述的书标签元素
    mountElement(vnode, container)
  } else if(typeof vnode.tag === 'function') {
    // 说明vnode描述的书组件  // 优化， vnode.tag === 'object'
    mountComponent(vnode, container)
  }
}



function mountElement(vnode, container) {
  const el = document.createElement(vnode.tag)
  for(const key in vnode.props) {
    if(/^on/.test(key)) {
      el.addEventListener(key.substr(2).toLowerCase(), vnode.props[key])
    }
  }
  
  // 处理children
  if(typeof vnode.children === 'string') {
    el.appendChild(document.createTextNode(vnode.children))
  } else if(Array.isArray(vnode.children)) {
    vnode.children.forEach(child => renderer(child, el))
  }
  
  // 挂载
  container.appendChild(el)
}

// 组件的处理
function mountComponent(vnode, container) {
  // 调用组件函数，获取虚拟dom
  const subtree = vnode.tag()  // 优化 vnode.tag.render()
  // 递归调用renderer 去渲染 subtree即可
  renderer(subtree, container)
}
```



## 3 模板

无论是手写虚拟 DOM(渲染函数)还是使用模板，都属于声明式 地描述 UI，并且 Vue.js 同时支持这两种描述 UI 的方式。上文中我们讲 解了虚拟 DOM 是如何渲染成真实 DOM 的，那么模板是如何工作的 呢?这就要提到 Vue.js 框架中的另外一个重要组成部分: 。



> 编译器的作用其实就是将模板编译为渲染函数,
>
> 对于编译器来说，模板就是一个普通的字符串，它会分析该字符串并生成一个功能与之相同的渲染函数



```vue
<template>
	<div @click="handler">
    click me
  </div>
</template>

<script>
	export default {
    data() {},
    methods: {
      handler: () => {}
    }
  }
</script>
```

 编译器会编译为一个渲染函数

```ts
export default {
  data() {},
  methods: {
    handler: () => {}
  },
  render() {
    return h('div', { onClick: handler}, 'click me')
  }
}
```

所以，**无论是使用模板还是直接手写渲染函数**，对于一个组件来 说，它要渲染的内容最终都是**通过渲染函数产生的**，然后 再把 **渲染函数返回的虚拟 DOM 渲染为真实 DOM，这就是模板的工作原 理，也是 Vue.js 渲染页面的流程。**



## 4 总结

Vue.js 是一个声明式的框架。声明式的好处在于，它直接描述结果，用 户不需要关注过程。**Vue.js 采用模板的方式来描述 UI，但它同样支持 使用虚拟 DOM 来描述 UI。虚拟 DOM 要比模板更加灵活，但模板要 比虚拟 DOM 更加直观。**

然后我们讲解了最基本的渲染器的实现。**渲染器的作用是，把虚 拟 DOM 对象渲染为真实 DOM 元素**。它的工作原理是，递归地遍历虚 拟 DOM 对象，并调用原生 DOM API 来完成真实 DOM 的创建。渲染 器的精髓在于后续的更新，它会通过 Diff 算法找出变更点，并且只会 更新需要更新的内容。后面我们会专门讲解渲染器的相关知识。

接着，我们讨论了组件的本质。**组件其实就是一组虚拟 DOM 元素 的封装，它可以是一个返回虚拟 DOM 的函数，也可以是一个对象，但 这个对象下必须要有一个函数用来产出组件要渲染的虚拟 DOM**。渲染器在渲染组件时，会先获取组件要渲染的内容，即执行组件的渲染函 数并得到其返回值，我们称之为 subtree，最后再递归地调用渲染器 将 subtree 渲染出来即可。

Vue.js 的模板会被一个叫作编译器的程序编译为渲染函数，后面我 们会着重讲解编译器相关知识。最后，编译器、渲染器都是 Vue.js 的 核心组成部分，它们共同构成一个有机的整体，不同模块之间互相配 合，进一步提升框架性能。