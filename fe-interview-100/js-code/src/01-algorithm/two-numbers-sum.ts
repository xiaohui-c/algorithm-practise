// 嵌套循环  时间复杂度为O(n^2)
export function findTwoNumbers1( arr: number[], n: number ):number[] {
    const res:number[] = []
    if ( arr.length === 0 ) return res
    const length = arr.length
    for ( let i = 0; i < length; i++ ) {
        for ( let j = i + 1; j < length; j++ ) {
            if ( ( arr[i] + arr[j] ) === n ) {
                res.push(arr[i])
                res.push(arr[j])
                return res
            }
        }
    }
    return res
}

export function findTwoNumbers2( arr: number[], n: number ): number[] {
    const res: number[] = []
    if ( arr.length === 0 ) return res

    const length = arr.length
    
    let headIndex: number = 0
    let tailIndex: number = length - 1

    while ( headIndex < tailIndex ) {
        const n1 = arr[headIndex]
        const n2 = arr[tailIndex]
        const sum = n1 + n2
        if ( sum > n ) {
            tailIndex--
        } else if ( ( sum < n ) ) {
            headIndex++
        } else {
            res.push( n1 )
            res.push( n2 )
            break
        }
    }
    return res
}


const arr12 = [1,2,4,7,11,15]
console.log(findTwoNumbers2(arr12,15))
