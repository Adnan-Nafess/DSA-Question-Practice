function maxConsecutiveOnes(arr) {
    let count = 0;
    let maxCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            count++;
            maxCount = Math.max(maxCount, count);
        } else {
            count = 0; // reset when 0 comes
        }
    }

    return maxCount;
}

let arr = [1, 1, 0, 1, 1, 1];

console.log(maxConsecutiveOnes(arr)); 
