const employee = {
    name: 'rakib',
    designation: 'HR',
    salary: 20000,
    experience: 2,
    age: 26
}
// delete employee.experience;
Object.freeze(employee);
employee.salary = employee.salary + 5000;
employee.location = 'Dhaka'
console.log(employee);