export class myQueue {
  private stack1: number[] = [];
  private stack2: number[] = [];

    // 入队
  add(num: number) {
    this.stack1.push(num);
  }

    // 出队
  delete(): number | undefined {
    let res;
    const stack1 = this.stack1;
    const stack2 = this.stack2;
    while (stack1.length) {
      const n = stack1.pop();
      if (n) {
        stack2.push(n);
      }
    }

    res = stack2.pop();

    while (stack2.length) {
        const n = stack2.pop();
        if (n) {
          stack1.push(n);
        }
    }

    return res;
  }
  get length(): number {
    return this.stack1.length;
  }
}

// 功能测试
const q = new myQueue()
q.add( 1 )
q.add( 100 )
q.add( 2 )

console.info(q.length)
console.info(q.delete())
console.info(q.length)
