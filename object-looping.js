const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
    // console.log(num);
}

const information = {
    name: 'rakib',
    location: 'tangail',
    salary: 20000,
    job: 'developer'
}
for (const info in information) {
    const value = information[info];
    // console.log(info, value);
}
// console.log(information);

const keys = Object.keys(information);
for (const key of keys) {
    console.log(key);
}
const values = Object.values(information);
for (const value of values) {
    console.log(value);
}