// @ts-nocheck
function maxSubArray(arr, k) {
    let start = 0, end = 0;
    let sum = 0;
    let maxSum = -Infinity;

    while (end < arr.length) {
        // calculate sum
        sum += arr[end];

        // condition check k === window
        if(end - start + 1 === k) {
            maxSum = Math.max(maxSum, sum);
            sum -= arr[start];
            start++;
        }

        // update end because window size equal
        end++;
    }

    return maxSum;
    
};

let arr = [2, 1, 5, 1, 3, 2]
let k = 3;

console.log(maxSubArray(arr, k));