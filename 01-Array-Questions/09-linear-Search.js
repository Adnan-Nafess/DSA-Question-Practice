function linearSearch(arr, target) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === target) {
            return i;
        }
    }

    return -1
};

let arr = [1, 4, 6, 3, 8];
let target = 4;

console.log(linearSearch(arr, target));