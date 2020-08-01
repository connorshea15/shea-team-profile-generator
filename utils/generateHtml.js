const generateHTML = employees => {
    console.log(
        employees[0].getName() + "\n" +
        employees[0].getRole() + "\n" +
        employees[0].getId() + "\n" +
        employees[0].getEmail() + "\n" +
        employees[0].getOfficeNumber()
    );
}


module.exports = generateHTML;