const numbers = [1, 2, 3, 4, 5];

// Using reduce to sum all numbers in the array
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

// Using reduce to find the maximum number in the array
const max = numbers.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue), -Infinity);
console.log(max); // Output: 5
