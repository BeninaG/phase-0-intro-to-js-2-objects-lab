const employee = {
    name: 'Dell',
    streetAddress: "098 left ln",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: "11 Broadway",
    };
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee};
    delete newEmployee['name'];
    return newEmployee;

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
   
    let newEmployee = employee;
    delete newEmployee['name'];
    return newEmployee;
}