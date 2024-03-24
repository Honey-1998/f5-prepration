/**
 * Given an array [2, 4, 2, 5, 3, 6, 3] and a size n
 * Chunk the array into smaller size arrays such that no subarray is greater than size n
**/



// const chunk = (arr, size) => {
//     const result = [];
//     let chunk = [];

//     for (const element of arr) {
//         if (chunk.length === size) {
//             result.push(chunk);
//             chunk = [];
//         }
//         chunk.push(element);
//     }

//     if (chunk.length > 0) {
//         result.push(chunk);
//     }

//     return result;
// };=======================================================================

const chunk = (arr, size) => {
    const result = [];
    
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
  
    return result;
  };
  
  
  
  
  
  console.log(chunk([2, 4, 2, 5, 3, 6, 3], 3)); // [[2, 4, 2], [5, 3, 6], [3]]
  console.log(chunk([2, 4, 2, 5, 3, 6], 3)); // [[2, 4, 2], [5, 3, 6]]
  console.log(chunk([2, 4, 2, 5, 3, 6], 2)); // [[2, 4], [2, 5], [3, 6]]
  console.log(chunk([2, 4, 2, 5, 3, 6, 3], 1)); // [[2], [4], [2], [5], [3], [6], [3]]
  console.log(chunk([2, 4, 2, 5], 5)); // [[2, 4, 2, 5]]
  console.log(chunk([2, 2], 3)); // [[2, 2]]
  
  