const generateEmployeeSection = employeeList => {
    // variable to hold html content for employees
    let employeeString = "";
    for (var i = 0; i < employeeList.length; i++) {
        employeeString = employeeString.concat(
            `<div class="card text-white bg-primary m-3" style="max-width: 18rem;">
            <div class="card-header">
                <h3>${employeeList[i].getName()}</h3>
                <h4>${employeeList[i].getRole()}</h4>
            </div>
            <div class="card-body bg-light text-dark">
                <ul class="list-group">
                    <li class="list-group-item">${employeeList[i].getId()}</li>
                    <li class="list-group-item">${employeeList[i].getEmail()}</li>
                    <li class="list-group-item">${employeeList[i].getOfficeNumber()}</li>
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