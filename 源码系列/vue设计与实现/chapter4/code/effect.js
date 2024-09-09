// 全局变量

let activeEffect;

// effectStack

const effectStack = [];

function effect(fn, options = {}) {
  // cleanup
  const effectFn = () => {
    cleanup(effectFn);
    activeEffect = effectFn;
    // 入栈
    effectStack.push(effectFn);
    const res = fn();
    // 出栈
    effectStack.pop(); // 当前副作用函数执行完毕了，active就要指向外层，即栈底
    activeEffect = effectStack[effectStack.length - 1];
    return res;
  };
  effectFn.options = options; // 副作用函数的选项

  effectFn.deps = []; // 添加一个deps，基于这个副作用函数相关联的依赖集合

  if (!options.lazy) {
    effectFn();
  }

  return effectFn;
}

/** 从各个set中清楚掉这个副作用函数 */
function cleanup(effectFn) {
  for (let i = 0; i < effectFn.deps.length; i++) {
    const deps = effectFn.deps[i];
    deps.delete(effectFn);
  }

  //
  effectFn.deps.length = 0;
}

function computed(getter) {
  let value; // 计算的缓存值
  // 是否需要重新计算
  let dirty = true;

  const effectFn = effect(getter, {
    lazy: true,
    scheduler() {
      if (!dirty) {
        dirty = true;
        trigger(obj, "value");
      }
    },
  });

  const obj = {
    get value() {
      if (dirty) {
        value = effectFn();
        dirty = false; // 计算完成之后，dirty置为false
      }
      track(obj, "value"); // 依赖收集
      return value;
    },
  };

  return obj;
}

// source 响应式数据
function watch(source, cb, options = {}) {
  let getter;
  if (typeof source === "function") {
    getter = source;
  } else {
    getter = () => traverse(source);
  }
  let newValue, oldValue;

  // cleanup 用来存储用户注册的过期函数
  let cleanup;
  function onInvalidate(fn) {
    cleanup = fn;
  }

  const job = () => {
    newValue = effectFn();
    // 在调用回掉钱，调用过期回掉
    if (cleanup) {
      cleanup();
    }
    cb(newValue, oldValue, onInvalidate);
    oldValue = newValue;
  };
  const effectFn = effect(() => getter(), {
    lazy: true,
    scheduler() {
      if (options.flush === "post") {
        const p = Promise.resolve();
        p.then(job);
      } else {
        job();
      }
    },
  });

  if (options.immediate) {
    job();
  } else {
    // 手动执行
    oldValue = effectFn();
  }
}

function traverse(value, seen = new Set()) {
  if (typeof value !== "object" || value === null || seen.has(value)) return;

  seen.add(value);
  for (const k in value) {
    traverse(value[k], seen);
  }
  return value;
}
