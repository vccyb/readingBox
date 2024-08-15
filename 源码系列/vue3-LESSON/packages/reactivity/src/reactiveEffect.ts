import { activeEffect, trackEffect, triggerEffects } from "./effect";

const targetMap = new WeakMap();

export const createDep = (cleanup, key) => {
  const dep = new Map() as any; // 创建的收集器还是一个map
  dep.cleanup = cleanup;
  dep.name = key; // 自定义的为了标识这个映射表是给那个属性服务的
  return dep;
};

export function track(target, key) {
  if (activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, (depsMap = new Map()));
    }

    let dep = depsMap.get(key);

    if (!dep) {
      depsMap.set(key, (dep = createDep(() => depsMap.delete(key), key)));
    }

    // 讲当前的effect放入到dep中，
    trackEffect(activeEffect, dep);
  }
}

export function trigger(target, key, newValue, oldValue) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    //  找不到直接return
    return;
  }
  let dep = depsMap.get(key);
  if (dep) {
    triggerEffects(dep);
  }
}
