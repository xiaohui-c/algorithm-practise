export  function rotate1( arr: number[], k: number ): number[]{
    const length = arr.length
    if(!k || length === 0)  return arr
    const step = Math.abs( k % length )
    for ( let i = 0; i < step; i++ ){
        const num = arr.pop()
        if ( num) {
            arr.unshift(num)
        }
    }
    return arr
}

export  function rotate2( arr: number[], k: number ): number[]{
    const length = arr.length
    if ( !arr || length === 0 ) return arr
    const step = Math.abs( k % length )
    
    const part1 = arr.slice( -step )
    const part2 = arr.slice( 0, length - step )
    return part1.concat(part2)
}

// 功能测试
// const arr = [1, 2, 3, 4, 5, 6, 7]
// const arr1 = rotate2( arr, 3 )
// console.info(arr1);

// 性能测试
const arr1 = []
for ( let i = 0; i < 10 * 10000; i++ ){
    arr1.push(i)
}

console.time( 'rotate1' )
rotate1( arr1, 9 * 10000 )
console.timeEnd('rotate1');


const arr2 = []
for ( let i = 0; i < 10 * 10000; i++ ){
    arr2.push(i)
}
console.time( 'rotate2' );
rotate2( arr2, 9 * 10000 )
console.timeEnd('rotate2');


