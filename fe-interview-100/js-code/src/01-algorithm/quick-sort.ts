// 快速排序

export function quickSort1(arr:number[]):number[]{
    const length = arr.length
    if(!arr.length) return []
    
    const midIndex = Math.floor(length / 2)
    // 第一个参数表示要操作的数组下标，第二个参数表示从下标位置开始要删除第几个，第三个参数表示从操作起始位置插入的数据
    const midValue = arr.splice(midIndex,1)[0]

    let left:number[] = []
    let right:number[] = []

    // splice改变原数组，不能直接用length
    for(let i = 0; i < arr.length; i++){
        const n = arr[i]
        if(n < midValue){
            left.push(n)
        }else{
            right.push(n)
        }
    }

    return quickSort1(left).concat([midValue],quickSort1(right))

}

export function quickSort2(arr:number[]):number[]{
    const length = arr.length
    if(!arr.length) return []
    
    const midIndex = Math.floor(length / 2)
    // slice(begin,end) 截取从begin(包含)开始(不包含)到end下标结束位置的值
    const midValue = arr.slice(midIndex,midIndex + 1)[0]

    let left:number[] = []
    let right:number[] = []
   
    for(let i = 0; i < length; i++){
        if(i !== midIndex){
            const n = arr[i]
            if(n < midValue){
                left.push(n)
            }else{
                right.push(n)
            }
        }
    }

    return quickSort2(left).concat([midValue],quickSort1(right))

}

// 功能测试
const arr = [6,3,1,6,8,3,9]
console.info(quickSort2(arr))