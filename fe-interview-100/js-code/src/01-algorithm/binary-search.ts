export function binarySearch1( arr: number[], target: number ):number {
    if ( !arr ) return -1

    const length = arr.length
    if ( length === 0 ) return -1
    
    let startIndex: number = 0
    let endIndex: number = length - 1
    
    while ( startIndex <= endIndex ) {
        let midIndex = Math.floor( ( startIndex + endIndex ) / 2 )
        
        if(target === arr[midIndex])  return midIndex
        if( target < arr[midIndex] ) {//在左边
            endIndex = midIndex - 1
        } else if ( target > arr[midIndex] ) {
            startIndex = midIndex + 1
        }
    }

    return -1
}


export function binarySearch2( arr: number[], target: number, startIndex?: number, endIndex?: number ):number {
    if ( !arr ) return -1

    const length = arr.length
    if ( length === 0 ) return -1
    
    if(startIndex == null) startIndex = 0
    if ( endIndex == null ) endIndex = length - 1

    if(startIndex> endIndex)  return -1

    const midIndex = Math.floor((startIndex + endIndex) / 2)
    const midValue = arr[midIndex]

    if ( target < midValue ) {
      return  binarySearch2(arr,target,startIndex,midIndex - 1)
    } else if ( target > midValue ) {
        return binarySearch2(arr,target,midIndex + 1,endIndex)
    } else {
        return midIndex
    }
    
    
    

}

// 功能测试
const list = [10, 20, 30, 60, 80];
const target = 80;
console.log(binarySearch2(list,target));
