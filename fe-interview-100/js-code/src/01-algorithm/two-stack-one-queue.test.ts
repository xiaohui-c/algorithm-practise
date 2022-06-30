import { myQueue } from "./two-stack-one-queue";

describe("两个栈,一个队列", () => {
  it("add and length", () => {
    const q = new myQueue();
    expect(q.length).toBe(0);
    q.add(100);
    q.add(200);
    q.add(300);
    expect(q.length).toBe(3);
  });
  it("delete", () => {
    const q = new myQueue();
    expect(q.delete()).toBeUndefined();
    q.add(100);
    q.add(200);
    q.add(300);
    expect(q.delete()).toBe(100);
    expect(q.length).toBe(2);
    expect(q.delete()).toBe(200);
    expect(q.length).toBe(1);
  });
});
