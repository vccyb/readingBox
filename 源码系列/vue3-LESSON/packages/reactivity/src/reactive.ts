import { isObject } from "@vue/shared";
import { mutableHandlers, ReactiveFlags } from "./baseHandler";

// 缓存
const reactiveMap = new WeakMap();
// 重复代理

export function reactive(target) {
  return createReactiveObject(target);
}

function createReactiveObject(target) {
  // 统一判断，响应式对象必须是对象
  if (!isObject(target)) {
    return target;
  }

  if (target[ReactiveFlags.IS_REACTIVE]) {
    return target;
  }

  // 取缓存，如果有直接返回
  const exitsProxy = reactiveMap.get(target);
  if (exitsProxy) {
    return exitsProxy;
  }
  let proxy = new Proxy(target, mutableHandlers);
  // 根据对象缓存代理结果
  reactiveMap.set(target, proxy);
  return proxy;
}
