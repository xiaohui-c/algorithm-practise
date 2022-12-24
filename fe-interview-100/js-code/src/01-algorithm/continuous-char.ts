interface IRes{
    char: string
    length:number
}
// 获取字符串中连续最多的字符以及次数
export function findContinuousChar1( str: string ): IRes{
    const res: IRes = {
        char: '',
        length:0
    }
    const length = str.length
    if ( length === 0 ) return res
    
    let tempLength = 0;
    // O(n)
    //  a a a b c a d e a
    for ( let i = 0; i < length; i++ ){
        tempLength = 0; //重置  -- 当i发生改变的时候该值会被重置

        for ( let j = i; j < length; j++ ){
            if ( str[i] === str[j] ) {
                tempLength++
            }

            if ( str[i] !== str[j] || j === length - 1 ) {
                // 不相等。或者已经到了最后一个元素，要去判断最大值
                if ( tempLength > res.length ) {
                    res.char = str[i]
                    res.length = tempLength
                }

                if ( i < length - 1 ) {
                    i = j - 1//跳步
                }

                break
            }
        }
    }

    return res
    
}

// 功能测试
const str = 'aabbcccddeeeee11223'
console.info(findContinuousChar1(str))