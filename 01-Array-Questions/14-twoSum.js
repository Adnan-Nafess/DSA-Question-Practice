function twoSum(arr, target) {
    // sort array
    arr.sort((a, b) => a - b);

    let left = 0, right = arr.length-1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if(sum === target) {
            return [arr[left], arr[right]];
        }
        else if(sum < target) {
            left++;
        }
        else {
            right--;
        }
    }

    return [];
};

let arr = [2, 8, 7, 5, 11];
let target = 9;

console.log(twoSum(arr, target));