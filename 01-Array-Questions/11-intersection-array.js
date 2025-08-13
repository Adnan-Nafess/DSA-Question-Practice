function intersectionSorted(arr1, arr2) {
    let i = 0, j = 0;
    let result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr2[j] < arr1[i]) {
            j++;
        } else {
            if (result[result.length - 1] !== arr1[i]) {
                result.push(arr1[i]);
            }
            i++;
            j++;
        }
    }

    return result;
}

let arr1 = [1, 2, 3, 4];
let arr2 = [2, 3, 5, 6];

console.log(intersectionSorted(arr1, arr2));
