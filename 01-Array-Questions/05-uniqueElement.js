function uniqueElement(arr) {
    let i = 0;

    for(let j=1; j<arr.length; j++) {
        if(arr[i] !== arr[j]) {
            arr[i+1] = arr[j];
            i++
        }
    }

    return i+1;
};

let arr = [1, 1, 2, 2, 3, 3];

console.log(uniqueElement(arr));