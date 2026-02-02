const numbers = [87, 21, 2, 4, 5];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(21, 23, 12, 4);
// console.log(max);

const largest = Math.max(...numbers);
// console.log(largest);

const first = [1, 2, 3, 4, 5];
const second = [...first];
const third = [0, ...first, 6, 7, 8, 9];
second.push(6);
// console.log(first);
// console.log(second);
// console.log(third);