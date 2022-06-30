interface IListNode {
  value: number;
  next: IListNode | null;
}

export class MyQueue {
  private head: IListNode | null = null;
  private tail: IListNode | null = null;
  private len = 0;

  /**
     * 入队，在tail位置
     * @param n number
     */
  add( n: number ) { 
    //思路是先处理一个节点，接着再处理多个节点，分为以上两种情况
    const newNode: IListNode = {
      value: n,
      next: null,
    };

    // 处理head
    if (this.head == null) {
      this.head = newNode;
    }

    // 处理tail
    const tailNode = this.tail;

    if (tailNode) {
      tailNode.next = newNode;
    }
    this.tail = newNode;

    // 记录长度
    this.len++;
  }

  /**
     * 出队，在head位置
     */
  delete(): number | null {
    const headNode = this.head;
    if (headNode == null) return null;
    if (this.len <= 0) return null;

    // 取值
    const value = headNode.value;

    // 处理head
    this.head = headNode.next;

    // 记录长度
    this.len--;

    return value;
  }
  get length(): number {
    // length要单独存储，不能遍历链表来获取(否则时间复杂度太高O(n))
    return this.len;
  }
}

// const q = new MyQueue()
// q.add( 100 )
// q.add( 200 )
// q.add( 300 )
// console.info( 'length1', q.length )
// console.log( q.delete() );
// console.info( 'length2', q.length )
// console.log( q.delete() );
// console.info('length3',q.length)
// console.log( q.delete() );
// console.info('length4',q.length)
// console.log( q.delete() );
// console.info( 'length5', q.length )


// 性能测试
const q1 = new MyQueue()
console.time( 'queue with list' )
for ( let i = 0; i < 10 * 10000; i++ ){
  q1.add(i)
}

for ( let i = 0; i < 10 * 10000; i++ ){
  q1.delete()
}
console.timeEnd( 'queue with list' )

const q2 = []
console.time( 'queue with array' )
for ( let i = 0; i < 10 * 10000; i++ ){
  q2.push(i)
}

for ( let i = 0; i < 10 * 10000; i++ ){
  q2.shift()
}

console.timeEnd('queue with array')


