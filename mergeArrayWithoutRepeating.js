function mergeArrays(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            if (!result.includes(arr1[i])) {
                result.push(arr1[i]);
            }
            i++;
        } else if (arr1[i] > arr2[j]) {
            if (!result.includes(arr2[j])) {
                result.push(arr2[j]);
            }
            j++;
        } else {
            // Both elements are equal
            if (!result.includes(arr1[i])) {
                result.push(arr1[i]);
            }
            i++;
            j++;
        }
    }

    // Add remaining elements from arr1 (if any)
    while (i < arr1.length) {
        if (!result.includes(arr1[i])) {
            result.push(arr1[i]);
        }
        i++;
    }

    // Add remaining elements from arr2 (if any)
    while (j < arr2.length) {
        if (!result.includes(arr2[j])) {
            result.push(arr2[j]);
        }
        j++;
    }

    return result;
}

// Example usage:
const array1 = [1, 2, 3, 5, 6, 6, 7];
const array2 = [3, 4, 5, 6, 8];

const mergedArray = mergeArrays(array1, array2);
console.log(mergedArray);
