class Node {
  value;
  next;
  constructor(value) {
    this.value = value;
  }
}

export default class Queue {
  #head;
  #tail;
  #size;
  constructor() {
    this.clear();
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.#head) {
      this.#tail.next = node;
      this.#tail = node;
    } else {
      // 空-初始化时候
      this.#head = node;
      this.#tail = node;
    }
    this.#size++;
  }

  dequeue() {
    const current = this.#head;
    if (!current) {
      return;
    }

    this.#head = current.next;
    this.#size--;
    return current.value;
  }

  clear() {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
  }

  get size() {
    return this.#size;
  }

  *[Symbol.iterator]() {
    let current = this.#head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
}
