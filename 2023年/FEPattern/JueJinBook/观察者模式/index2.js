class EventEmitter {
  constructor() {
    this.handles = {};
  }

  on(eventName, cb) {
    if (!this.handles[eventName]) {
      this.handles[eventName] = [];
    }

    this.handles[eventName].push(cb);
  }

  emit(eventName, ...args) {
    if (this.handles[eventName]) {
      const handles = this.handles[eventName];
      handles.forEach((cb) => cb(...args));
    }
  }

  off(eventName, cb) {
    const callbacks = this.handles[eventName];
    const index = callbacks.indexOf(cb);
    if (index !== -1) {
      callbacks.splice(index, 1);
    }
  }

  once(eventName, cb) {
    const wrapper = (...args) => {
      cb(...args);
      this.off(eventName, wrapper);
    };
    this.on(eventName, wrapper);
  }
}
