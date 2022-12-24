工作能力不等于面试能力，工作是工作，面试是面试



##### 什么是复杂度

程序执行时需要的计算量和内存空间(和代码是否简洁无关)

复杂度是数量级(方便记忆，推广)，不是具体的数字

一般针对一个具体的算法，而非一个完整的系统



时间复杂度 - 程序执行时需要的计算量(CPU)

O(1)一次就够(数量级)

O(n)和传输的数据量一样(数量级)

O(n^2)数据量的平方(数量级)

O(logn)数据量的对数(数量级)

O(n*logn)数据量*数据量的对数(数量级)



空间复杂度  -  程序执行时需要的内存空间



前端开发：重时间，轻空间





##### 将一个数组旋转k步

输入一个数组[1,2,3,4,5,6,7]，k=3，即旋转3步，输出[5,6,7,1,2,3,4]

思路1：把末尾的元素挨个pop,然后unshift到数组前面

```tsx
function rotate(arr:number[],k:number):number[]{
    const length = arr.length
    if(!arr || length === 0) return arr
    const step = Math.abs(k%length)
    
    for(let i = 0; i < step; i++){//O(n)
        const num = arr.pop()
        if(num){
            arr.unshift(num)//O(n)
        }
    }
    return arr
}
```

时间复杂度==O(n^2)==，空间复杂度O(1)



思路2：把数组拆分，最后concat拼接到一起

```tsx
function rotate(arr:number[],k:number):number[]{
    const length = arr.length
    if(!arr || k === 0)  return arr
    const step = Math.abs(k % length)//解决k为负数，k>length以及k==length的情况
    
    const part1 = arr.slice(-step)
    const part2 = arr.slice(0,length - step)
    return part1.concat(part2)
}
```

时间复杂度==O(1)==,空间复杂度O(n)

数组是顺序结构，unshift操作会非常慢

单元测试命令`npx jest 路径`



比复杂度更重要的是代码逻辑清晰易读











##### 判断字符串是否括号匹配

一个字符串s可能包含{}    ()    []三种括号，判断s是否是括号匹配的，如(a{b}c)匹配，而{a(b或{a(b}c)就不匹配

栈是==逻辑结构==。理论模型，不管如何实现，不受任何语言的限制；数组是==物理结构==，真实的功能实现，受限于编程语言;先进后出

```tsx
function isMatch(left:string,right:String):boolean{
    if(left === '(' && right === ')') return true
    if(left === '[' && right === ']') return true
    if(left === '{' && right === '}') return true
    return false
}

function matchBracket(str:string):boolean{
    const length = str.length
    if(length === 0)  return true
    
    const stack:String[] = []
    
    const leftSymbols = '({['
    const rightSymbols = ')]}'
    
    for(let i = 0; i < length; i++){
        const s = str[i]
        if(leftSymbols.includes(s)){
            stack.push(s)
        }else if(rightSymbols.inlcudes(s)){
            const top = stack[stack.length - 1]
            if(isMatch(top,s)){
                stack.pop()
            }else{
                return false
            }
        }
    }
    return stack.length === 0
}
```









##### 两个栈实现一个队列

请用两个栈实现一个队列，功能add delete length

队列：先进先出

```tsx
class myQueue{
    private stack1:number[] = []
    private stack2:number[] = []
    
    add(num:number):void{
    	this.stack1.push(num)    
    }
    
    delete():number|undefined{
        let res
        const stack1 = this.stack1
        const stack2 = this.stack2
        while(stack1.length){
            const num = stack1.pop()
            if(num){
            	stack2.push(num)    
            }
        }
        
        res = stack2.pop()
        
        while(stack2.length){
            const num = stack2.pop()
            if(num){
                stack1.push(num)
            }
        }
        return res
    }

	get length:number{
        return this.stack1.length
    }
}
```



时间复杂度：add O(1); delete O(n)

空间复杂度，整体是O(n)





##### 使用JS反转单向链表

链表是一种物理结构(非逻辑结构)，类似于数组

数组需要一段连续的内存空间，而链表是零散的

链表节点的数据结构`{value,next?,prev?}`



链表和数组都是有序结构，链表==查询==慢O(n)，==新增和删除==快O(1),数组查询快O(1),新增和删除慢O(n)



```tsx
interface ILinkListNode{
    value:number
    next?.ILinkListNode
}

function createLinkListNode(arr:number[]):ILinkListNode{
    const length = arr.length
    if(length === 0)  throw new Error('arr is empty')
    
    let curNode = {
        value:arr[length - 1],
        next:curNode
    }
    
    if(arr.length === 1) return curNode
    
    for(let i = length - 2; i >= 0; i--){//从右往左
        curNode = {
            value:arr[i],
            next:curNode
        }
    }
    return curNode
}

function reverseLinkList(listNode:ILinkListNode):ILinkListNode{
    let prevNode:ILinkNodeList | undefined = undefined
    let curNode:ILinkNodeList  | undefined = undefined
    let nextNode:listNode
    
    while(nextNode){
        if(curNode && !prevNode){//避免循环引用
            delete curNode.next
        }
        //反转指针
        if(prevNode && nextNode){
            curNode.next = prevNode
        }
        //整体向后移动指针(把下一个赋值给前一个)
        prevNode = curNode
        curNode = nextNode
        nextNode = nextNode?.next
    }
    curNode!.next = prevNode
    return curNode!
}
```

==允许失败，允许放错，因为这才是完整的人生，但是追求更好，积极乐观向上的心不可磨灭==

==我们不能帮别人去决定什么，我们唯一能做的只是帮他人尽量抹平信息差。做什么选择和决定只能交由他自己==

==做事要有目的性==









##### 链表实现队列

1：单向链表，但要同时记录head和tail

2：要从tail(尾部)入队，从head出队，否则出队时tail不好定位

3：length要实时记录，不可遍历链表来获取

```tsx
interface IListNode{
    value:number,
    next:IListNode | null
}

class MyQueue{
    private head:IListNode | null = null
    private tail:IListNode | null = null
    private len:number = 0
    
    add(n:number){
        //先处理一个节点，再处理多个节点，分为两种情况
        const newNode = {
            value:n,
            next:null
        }
        
        this.head = newNode
        
        const tailNode = this.tail
        if(tailNode){
            tailNode.next = newNode
        }
        tailNode = newNode
        
        this.len ++
    }
    delete():number:null{
        
        //修改next指向即可
        const headNode = this.head
        
        if(headNode == null)   return null
        if(this.len <= 0)    return null
        
        const value = headNode.value
        this.head = headNode.next
        
        this.len --
        return value
    }
	get len():number{
        return this.len
    }
    
}
```





链表结构在JS中的体现

![image-20220625150409592](https://s2.loli.net/2022/06/25/Khp8GsVWmL9CdZo.png)





数据结构的选择要比算法优化更重要









##### 用JS实现二分查找

递归 - 代码逻辑更加清晰

非递归 - 性能更好

时间复杂度==O(logn)==



使用循环

```tsx
function binarySearch(arr:number[],target:number):number{
    if(!arr)  return -1
    const length = arr.length
    if(length === 0)    return -1
    
    let startIndex:number = 0
    let endIndex:number = length - 1
    
    while(startIndex <= endIndex){
        const midIndex = Math.floor((startIndex + endIndex) / 2)
        
        if(target < arr[midIndex]){
            endIndex = midIndex - 1
        }else if(target > arr[midIndex]){
            startIndex = midIndex + 1
        }else{
            return midIndex
        }
    }
    
   return -1
}
```





使用递归

```tsx
function binarySearch(arr:number[],target:number,startIndex?:number,endIndex?:number):number{
    if(!arr)  return -1
    const length = arr.length
    if(length === 0)    return -1
    
    if(startIndex == null) startIndex = 0
    if(endIndex == null)   endIndex = length - 1
    
    if(startIndex > endIndex)  return -1
    
    const midIndex = Math.floor((startIndex + endIndex)/2)
    
    const midValue = arr[midIndex]
    
    if(target < midValue){
        return binarySearch(arr,target,startIndex,midIndex - 1)
    }else if(target > midValue){
        return binarySearch(arr,target,midIndex + 1,endIndex)
    }else{
        return midValue
    }
}
```

递归 - 代码逻辑更加清晰

非递归 - 性能更好

时间复杂度O(logn)   - 非常快



只要是有序的数据结构，一定要使用二分法





##### 给一个数组，找出其中和为n的两个元素

有一个递增的数组[1,2,4,7,11,15]和一个n = 15,数组中有两个数，和是n。即4 + 11 === 15；写一个JS函数，找出这两个数

使用两层嵌套循环，时间复杂度为O(n^2)，不可用

使用双指针，时间复杂度降低到O(n)

1:定向i指向头，j指向尾，求arr[i]+arr[j]

2:如果大于n，则j需要向前移动

3:如果小于n，则i需要向后移动

```tsx
function findTwoNumbers(arr:number[],n:number):number[]{
    const length = arr.length
    let  res:number[] = []
    if(length === 0)  return res
    
    let headIndex = 0
    let tailIndex = length - 1
    
    while(headIndex < tailIndex){
        const n1 = arr[headIndex]
        const n2 = arr[tailIndex]
        const sum = n1 + n2
        
        if(sum >  n){
            tailIndex --
        }else if(sum < n){
            headIndex ++
        }else{
            res.push(n1)
            res.push(n2)
            break
        }
    }
    
    return res
    
}
```





##### 二叉树

是一棵树，每个节点最多只能有2个子节点，树节点的数据结构`{value,left?,right?}`



二叉树的遍历

前序遍历：root -> left  ->  right

中序遍历：left  -> root  -> right

后序遍历：left  -> right ->  root

注意这里的三个坐标是相对的



##### 求二叉搜索树的第K小值

1：BST中序遍历，即从小到大的排序

2：找到排序后的第K值即可

```tsx
interface ITreeNode{
    value:number,
    left:ITreeNode | null,
    right:ITreeNode | null
}

const bst:ITreeNode = {
    value:5,
    left:{
        value:3,
        left:{
            value:2,
            left:null,
            right:null
        },
        right:{
            value:4,
            left:null,
            right:null
        }
    },
    right:{
        value:7,
        left:{
            value:6,
            left:null,
            right:null
        },
        right:{
            value:8,
            left:null,
            right:null
        }
    }
}

function findKthValue(arr:number[],k:number):number | null{
    const length = arr.length
    if(length === 0)   return null
    return arr[k - 1]
}

function inOrderTraverse(node:ITreeNode | null){
    if(node == null)  return
    inOrderTraverse(node.left)
    arr.push(node.value)
    inOrderTraverse(node.rigth)
}
```



二叉搜索树的特点：left < = root;right >= root

二叉搜索树的价值：可使用二分法进行快速查找



为何二叉树如此重要，而不是三叉树，四叉树？



JS代码执行时，值类型变量存储在栈，引用类型变量存储在堆



堆

是完全二叉树，最大堆：父节点 >= 子节点    最小堆：父节点 <= 子节点

逻辑结构是一颗二叉树，物理结构是一个数组；数组适合连续存储 + 节省空间(回顾堆栈模型)

查询比BST慢，增删比BST快，维持平衡更快，但整体的时间复杂度都在O(logn)级别，即树的高度



堆的使用场景：

特别适合"堆栈模型"，堆的数据都是在栈中引用的，不需要从root遍历，堆恰巧是数组形式，根据栈的地址，可用O(1)找到目标







##### 求斐波那契数列的第n值

斐波那契数列：前面两个数之和作为下一个数  f(n) = f(n - 1) + f(n - 2)

递归算法会导致程序奔溃，时间复杂度为O(2 ^ n)

```tsx
function fabonacci(n:number):number{
    let n1 = 0
    let n2 = 1
    let res = 0
    for(let i = 2; i < n; i++){
        res = n1 + n2
        n1 = n2
        n2 = res
    }
    return res
}
```



动态规划：

1：把一个大问题拆解为多个小问题，逐级向下拆解

2：用递归的思路去分析问题，再改为循环来实现

算法三大思维：贪心，二分，动态规划

##### 青蛙跳台阶有几种方式

f(n) = f(n - 1) + f(n - 2)











##### 移动0到数组的末尾

如输入[1,0,3,0,11,0]，输出[1,3,11,0,0,0];如移动0,其他顺序不变，必须在原数组进行操作

如果不限制必须在原数组进行操作这一个条件，那么只需要定义两个数组part1和part2，把不是0的push到part1,是0的push到part2，最后合并两个数组即可

splice本身就会消耗O(n)的时间复杂度



使用双指针

1：定义j指向第一个0，i指向j后面的第一个非0，交换i和j的值，继续向后移动，只遍历一次，所以时间复杂度是O(n)

```tsx
function moveZero(arr:number[]):void{
    const length = arr.length
    if(length <= 0) return
    
    let zeroPoint = -1
    
    for(let i = 0; i < length; i++){
        if(arr[i] === 0){
            if(zeroPoint < 0){
                zeroPoint = i
            }
        }
        
        if(arr[i] !== 0 && zeroPoint >= 0){
            let n = arr[i]
            arr[i] = arr[j]
            arr[j] = n
            
            j+
        }
    }
}
```







##### 获取字符串中连续最多的字符以及次数

如输入‘abbcccddeeee1234’，计算得到连续最多的字符是‘e’,4次

```tsx
interface IRes{
   str:String,
   length:Number
}

function findContinuousChar(str:string):IRes{
    const res = {
        str:'',
        length:0
    }
    if(!str)  return
    const length = str.length
    if(length === 0) return res
    
    let tempLength = 0
    for(let i = 0; i < length; i++){//O(n)
        tempLength = 0
        for(let j = i; j < length; j++;){
            if(str[i] === str[j]){
                tempLength ++
            }
            if(str[i] !== str[j] || j === length - 1){
                //两个比较的值不相等或者已经遍历到最后一位
              if(tempLength > res.length)  {//在这里进行赋值
                  res.length = tempLength
                  res.str = str[i]
              }
              if(i < length - 1){//跳步
                  i = j - 1
              }
            }
        }
    }
    return res
}
```















##### 为何0.1 + 0.2 ！== 0.3

==计算机使用**二进制**存储数据==，整数转换为二进制没有误差，如9转换为二进制是1001，而==小数可能无法用二进制准确表达==，如0.2转换为1.1001100

不光JS，其他编程语言也都一样







##### 请说明Ajax Fetch Axios三者的区别

三者都用于网络请求，但是不同维度

Ajax是一种技术统称，Fetch是一个具体API，Axios是第三方库

```js
function ajax(url){
    let xhr = new XMLHttpRequest()
    xhr.open('GET',url,false)
    xhr.onreadystatechange = () =>{
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                console.log(xhr.responseText)
            }
        }
    }
    xhr.send()
}
```



```js
function ajax(url){
	fetch(url)	.then(res => res.json())
}
```





##### 防抖和节流有什么区别，分别用于什么场景

区别





由相互关联的原型组成的链状结构就是原型链
