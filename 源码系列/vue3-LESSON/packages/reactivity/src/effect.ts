export function effect(fn, options) {
  //  创建一个响应式的effect，数据变化后可以重新执行
  //  创建一个effect，只要以来的熟悉变化了就要执行回掉
  const _effect = new ReactiveEffect(fn, () => {
    _effect.run();
  });
  // 这个响应式的effect会默认执行一次
  _effect.run();

  if (options) {
    // 用户传递的覆盖掉内置的
    Object.assign(_effect, options);
  }

  const runner = _effect.run.bind(_effect);
  runner.effect = _effect;
  return runner;
}

function cleanDepEffect(dep, effect) {
  dep.delete(effect);
  if (dep.size === 0) {
    dep.cleanup(); // 如果map为空，就删除
  }
}

function preCleanEffect(effect) {
  effect._depsLength = 0;
  effect._trackId++; // 每次执行id+1，如果当前的同一个effect执行，会id相同的
}

function postCleanEffect(effect) {
  if (effect.deps.length > effect._depsLength) {
    for (let i = effect._depsLength; i < effect.deps.length; i++) {
      cleanDepEffect(effect.deps[i], effect);
    }
    effect.deps.length = effect._depsLength;
  }
}

export let activeEffect;
class ReactiveEffect {
  _trackId = 0;
  deps = [];
  _depsLength = 0;
  _running = 0;
  active = true; // 创建的effect是响应式的
  // fn 用户编写的函数
  // 如果fn中以来的数据变化之后，需要重新调用 -> run()
  constructor(public fn, public scheduler) {}
  run() {
    // 让fn执行
    if (!this.active) {
      return this.fn(); // 不是激活的，执行后，不用做啥
    }
    let lastEffect = activeEffect;
    try {
      activeEffect = this;

      // effect重新执行前，清理掉上一次的依赖
      preCleanEffect(this);
      this._running++;
      return this.fn();
    } finally {
      this._running--;
      postCleanEffect(this);
      activeEffect = lastEffect;
    }
  }
}

// 1. _trackId 用来区分同一个effect执行了多次, 防止一个属性在effect多次依赖收集
// 2. 拿到上一次依赖的最后一个和这次的比较
// {flag, age}
// {flag, name}
export function trackEffect(effect, dep) {
  if (dep.get(effect) !== effect._trackId) {
    // 没有收集过
    dep.set(effect, effect._trackId);

    let oldDep = effect.deps[effect._depsLength];
    // 如果没有存过
    if (oldDep !== dep) {
      // 老的dep的处理
      if (oldDep) {
        cleanDepEffect(oldDep, effect);
      }
      // 换成新的
      effect.deps[effect._depsLength++] = dep;
    } else {
      effect._depsLength++;
    }
  }
  // effect关联dep
  // dep关联effect
  // 需要重新收集依赖，讲不需要的移除
  // dep.set(effect, effect._trackId);
  // // effect 关联dep
  // // 双向记忆
  // effect.deps[effect._depsLength++] = dep;
}

export function triggerEffects(dep) {
  for (const effect of dep.keys()) {
    if (effect.scheduler) {
      if (!effect._running) {
        effect.scheduler();
      }
    }
  }
}
