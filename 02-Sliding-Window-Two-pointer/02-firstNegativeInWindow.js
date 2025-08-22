// @ts-nocheck
function firstNegativeInWindow(arr, k) {
  let start = 0, end = 0;
  let negatives = [];
  let result = [];

  while (end < arr.length) {
    if (arr[end] < 0) {
      negatives.push(arr[end]);
    }

    if (end - start + 1 === k) {
      if (negatives.length > 0) {
        result.push(negatives[0]);
      } else {
        result.push(0);

        if (arr[start] === negatives[0]) {
          negatives.shift();
        }

        start++;
      }

      end++;
    }

    return result;
  }
}

// Example
let arr = [12, -1, -7, 8, -15, 30, 16, 28];
let k = 3;
console.log(firstNegativeInWindow(arr, k));
