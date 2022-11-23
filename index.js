// Write your solution in this file!
const employee = {
    name: "Melvin",
    streetAddress: "25 Savannah Lane",
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    employee;
    const employees = {...employee};
    employees.name = "Sam";
    employees.streetAddress = "11 Broadway";
    return employees;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key, value){
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;    
}
function  destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const employees = {...employee.streetAddress};
    delete employee.streetAddress;
    return employees;

}

