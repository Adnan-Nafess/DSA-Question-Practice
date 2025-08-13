function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

function leftRotate(arr, d) {
    const n = arr.length;
    d = d % n;

    // Step 1: Reverse first d elements
    reverse(arr, 0, d - 1);

    // Step 2: Reverse remaining n-d elements
    reverse(arr, d, n - 1);

    // Step 3: Reverse whole array
    reverse(arr, 0, n - 1);

    return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let d = 2;
console.log(leftRotate(arr, d)); 
