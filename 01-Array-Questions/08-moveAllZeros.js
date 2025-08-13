function moveAllZeros(arr) {
    let j = -1;

    for(let i=0; i<arr.length; i++) {
        if(arr[i] === 0) {
            j = i;
            break;
        }
    }

    // no non zero numbers
    if(j === -1) return arr;
[[]]
    for(let i=j+1; i<arr.length; i++) {
        if(arr[i] !== 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }
    return arr;
}

let arr = [1, 2, 0, 2, 5, 0, 0, 3, 1];

// [1, 2, 2, 5, 0, 0, 3, 1]

console.log(moveAllZeros(arr));