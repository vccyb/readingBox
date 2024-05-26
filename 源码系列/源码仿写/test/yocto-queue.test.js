import Queue from "../code/yocto-queue";

describe("yocto-queue test", () => {
  it("test", () => {
    const queue = new Queue();
    queue.enqueue("张三");
    queue.enqueue("李四");
    expect(queue.size).toBe(2);
    expect(queue.dequeue()).toBe("张三");
    expect([...queue]).toEqual(["李四"]);
    queue.clear();
    expect(queue.size).toBe(0);
  });
});
