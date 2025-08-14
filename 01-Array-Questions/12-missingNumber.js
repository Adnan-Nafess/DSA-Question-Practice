function findMissingNumber(arr) {
    let n = arr.length + 1; 
    let totalSum = (n * (n + 1)) / 2; 
    let sum = 0;

    for (let num of arr) {
        sum += num;
    }

    return totalSum - sum;
}

let arr = [1, 2, 4, 5];

console.log(findMissingNumber(arr)); 
