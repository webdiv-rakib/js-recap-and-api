// function declaration
add(5, 7);
function add(num1, num2) {
    const total = num1 + num2;
    console.log(total);
}

// function expression
const addition = function (num1, num2) {
    return num1 + num2;
}
const result = addition(10, 12);
console.log(result);

// arrow function
const add2 = (num1, num2) => {
    return num1 + num2;
}
const result2 = add2(5, 5);
console.log(result2);
// arrow function-2
const add3 = (num1, num2) => num1 + num2;
const result3 = add3(2, 3);
console.log(result3);