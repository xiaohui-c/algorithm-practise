export interface ILinklistNode {
  value: number;
  next?: ILinklistNode;
}
export function createLinkList(arr: number[]): ILinklistNode {
  const length = arr.length;
  if (length === 0) throw new Error("arr is empty");

  let curNode: ILinklistNode = {
    value: arr[length - 1],
  };

  if (length === 1) return curNode;

  for (let i = length - 2; i >= 0; i--) { //从后往前来生成
    curNode = {
      value: arr[i],
      next: curNode,
    };
  }
  return curNode;
}


export function reverseLinkList( listNode: ILinklistNode ): ILinklistNode{
    // 定义三个指针
    let prevNode:ILinklistNode | undefined = undefined
    let curNode:ILinklistNode | undefined = undefined
    let nextNode: ILinklistNode | undefined = listNode

    // 以nextNode为主，遍历链表
    while ( nextNode ) {
        // 第一个元素，删掉next，防止循环引用
        if ( curNode && !prevNode ) {
            //@ts-ignore
            delete curNode.next
        }

        //反转指针
        if ( curNode && prevNode ) {
            //@ts-ignore
            curNode.next = prevNode
        }

        // 整体向后移动指针
        prevNode = curNode
        curNode = nextNode
        nextNode = nextNode?.next
    }

    curNode!.next = prevNode

    return curNode!
}
const list: number[] = [100, 200, 300, 400, 500];
const newList = createLinkList( list )

const newList1 = reverseLinkList( newList )
console.log(newList1);

