import { isObject } from "@vue/shared";
import { activeEffect } from "./effect";
import { track, trigger } from "./reactiveEffect";
import { reactive } from "./reactive";

export enum ReactiveFlags {
  IS_REACTIVE = "__v_isReactive",
}

export const mutableHandlers: ProxyHandler<any> = {
  get(target, key, recevier) {
    if (key === ReactiveFlags.IS_REACTIVE) {
      return true;
    }
    track(target, key); // 收集这个对象的这个属性，和effect关联在一起
    //  当取值的时候，应该让响应式属性记住effect
    let res = Reflect.get(target, key, recevier);

    if (isObject(res)) {
      return reactive(res);
    }
    return res;
  },
  set(target, key, value, recevier) {
    // 找到属性，让对应的effect重新执行
    let oldValue = target[key];
    let result = Reflect.set(target, key, value, recevier);
    if (oldValue !== value) {
      // 需要触发更新
      trigger(target, key, value, oldValue);
    }
    return result;
  },
};
