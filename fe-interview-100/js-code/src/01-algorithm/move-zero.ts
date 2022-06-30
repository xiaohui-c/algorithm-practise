function moveZero(arr: number[]): void {
    const length = arr.length;
    if (length <= 0) return;
    let i; //指向非0
    let j = -1; //指向0
    for (i = 0; i < length; i++) {
        if (arr[i] === 0) {
            if (j < 0) {
                j = i;
            }
        }

        if (arr[i] !== 0 && arr[j] >= 0) {
            let n = arr[i];
            arr[i] = arr[j];
            arr[j] = n;
            j++
        }
    }
}

const arr = [1, 0, 0, 1, 0, 1]; //[1,1,0,0,0,1]
moveZero( arr )
console.log(arr);


