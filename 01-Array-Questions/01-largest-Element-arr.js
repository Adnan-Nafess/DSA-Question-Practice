function largestElement(arr) {
    let larget = arr[0];

    for(let i=0; i<arr.length; i++) {
        if(arr[i] > larget) {
            larget = arr[i];
        }
    }
    
    return larget;

};

let arr = [3, 1, 2, 5, 4];

console.log(largestElement(arr));