const generateEmployeeSection = employeeList => {
    // variable to hold html content for employees
    let employeeString = "";
    for (var i = 0; i < employeeList.length; i++) {
        employeeString = employeeString.concat(
            employeeList[i].getName() + "\n",
            employeeList[i].getRole() + "\n",
            employeeList[i].getId() + "\n",
            employeeList[i].getEmail() + "\n",
            employeeList[i].getOfficeNumber() + "\n",
            "\n"
        );
    };

    return employeeString;

};

const generateHTML = employees => {
    console.log(generateEmployeeSection(employees));
    /* console.log(
        generateEmployeeSection(employees);
        employees[0].getName() + "\n" +
        employees[0].getRole() + "\n" +
        employees[0].getId() + "\n" +
        employees[0].getEmail() + "\n" +
        employees[0].getOfficeNumber()
    ); */
}


module.exports = generateHTML;