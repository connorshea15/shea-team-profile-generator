// This variable holds html for role specific icon
var icon = "";

// I need a function to decide what the role is and return the proper method
const chooseMethod = currentEmployee => {
    if (currentEmployee.getRole() === "manager") {
        icon =`<i class="fas fa-coffee"></i>`
        return `Office Number: ${currentEmployee.getOfficeNumber()}`;
    }
    if (currentEmployee.getRole() === "engineer") {
        icon = `<i class="fas fa-glasses"></i>`
        return `GitHub: <a href="https://github.com/${currentEmployee.getGitHub()}">${currentEmployee.getGitHub()}</a>`;
    }
    if (currentEmployee.getRole() === "intern") {
        icon = `<i class="fas fa-user-graduate"></i>`
        return `School: ${currentEmployee.getSchool()}`;
    }
};

const generateEmployeeSection = employeeList => {
    // variable to hold html content for employees
    let employeeString = "";
    for (var i = 0; i < employeeList.length; i++) {
        var method = chooseMethod(employeeList[i]);
        employeeString = employeeString.concat(
            `<div class="card text-white bg-primary m-3" style="max-width: 18rem;">
            <div class="card-header">
                <h3>${employeeList[i].getName()}</h3>
                <h4>${icon} ${employeeList[i].getRole()}</h4>
            </div>
            <div class="card-body bg-light text-dark">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${employeeList[i].getId()}</li>
                    <li class="list-group-item">Email: <a class="d-inline" href="mailto:${employeeList[i].getEmail()}">${employeeList[i].getEmail()}</a></li>
                    <li class="list-group-item">${method}</li>
                </ul>
            </div>
        </div>`
        );
    };
    return employeeString;
};

const generateHTML = employees => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=decive-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <title>Team Profile</title>
</head>

<body>
    <header>
        <div>
            <h1 class="text-center bg-danger p-5 m-3">My Team</h1>
        </div>
    </header>
    <main>
        <div class="card-columns d-flex justify-content-center flex-wrap">
            ${generateEmployeeSection(employees)}
        </div>
    </main>
  </body>
  </html> 
    `;

}

module.exports = generateHTML;