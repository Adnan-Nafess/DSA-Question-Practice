function secondSmallestElement(arr) {
    let smallest = arr[0];
    let ssmallest = Infinity;


    for(let i=0; i<arr.length; i++) {
        if(arr[i] < smallest) {
            ssmallest = smallest;
            smallest = arr[i];
        }
        else if(arr[i] !== smallest && arr[i] < ssmallest) {
            ssmallest = arr[i];
        }
    }

    return ssmallest;
};

let arr = [4, 1, 2, 6, 7];

console.log(secondSmallestElement(arr))
