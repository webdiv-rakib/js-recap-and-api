const employee = {
    name: 'rakib',
    designation: 'HR',
    salary: 20000,
    experience: 2,
    age: 26
};

Object.seal(employee);
employee.salary = 30000;
console.log(employee);