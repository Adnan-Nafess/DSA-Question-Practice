function secondLargestElement(arr) {
    let larget = arr[0];
    let slargest = -1;

    for(let i=0; i<arr.length; i++) {
        if(arr[i] > larget) {
            larget = arr[i];
        }
        else if(arr[i] < larget && arr[i] > slargest) {
            slargest = arr[i]
        }
    }

    return slargest;
}

let arr = [1, 3, 4, 7, 7, 5];

console.log(secondLargestElement(arr));