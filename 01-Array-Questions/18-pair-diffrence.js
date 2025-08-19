function pairDifference(arr, target) {
    arr.sort((a, b) => a - b);

    let start = 0, end = 1;

    while (start < arr.length && end < arr.length) {
        if (start !== end && arr[end] - arr[start] === target) {
            return 1;  
        }
        else if (arr[end] - arr[start] < target) {
            end++; 
        } else {
            start++; 
        }
    }

    return 0; 
}

const arr = [5, 10, 3, 2, 50, 80];
const target = 78;

console.log(pairDifference(arr, target)); 
