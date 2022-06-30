function fibonacci( n: number ): number{
    if ( n <= 0 ) return 0
    if ( n === 1 ) return 1
    
    let n1 = 0   //记录n - 2的值
    let n2 = 1   //记录n - 1的值
    let res = 0
    for ( let i = 2; i <= n; i++ ){
        res = n1 + n2
        n1 = n2
        n2 = res
    }

    return res
    
}

// 功能测试
console.log(fibonacci(10));
