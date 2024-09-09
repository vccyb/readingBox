// 渲染函数，render， 调用获取虚拟dom，就是对象那种类型

/**
 *
 * const vnode = {
 * tag: 'div',
 * ...
 * }
 */

// 渲染器, 把虚拟dom转化为真实的dom

function renderer(vnode, container) {
  if (typeof vnode.tag === "object") {
    // vnode描述的是一个组件
    mountComponent(vnode, container);
  } else if (typeof vnode.tag === "string") {
    // vnodemdesc的是一个元素
    mountElement(vnode, container);
  }
}

function mountElement(vnode, container) {¬
  // 创建真实的dom
  const el = document.createElement(vnode.tag);
  // 设置属性
  for (const key in vnode.props) {
    if (/^on/.test(key)) {
      // 方法
      el.addEventListener(key.slice(2).toLowerCase(), vnode.props[key]);
    }
  }
  // 子节点就是一个string
  if (typeof vnode.children === "string") {
    el.appendChild(document.createTextNode(vnode.children));
  } else {
    // 递归的渲染子节点
    vnode.children.forEach((child) => {
      renderer(child, el);
    });
  }

  // 最后挂载到容器上
  container.appendChild(el);
}

function mountComponent(vnode, container) {
  // 如果是函数类型，tag调用就会返回vnode
  const subtree = vnode.tag.render();
  renderer(subtree, container);
}
