// This is where I will run my code
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const inquirer = require('inquirer');

var employeeList = [];

// I may need a global array that holds list of created employees 

// that way my if (continue), else (call print template function)

// I can add new employees to the array and their id would just be

// their index + 1



// function to prompt the user
const promptUser = function() {

    return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Enter the name of a member of your team!'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the email of this team member!'
        },
        {
            type: 'list',
            name: 'role',
            message: 'Choose the role of this team member!',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ]);   
};

const promptRole = function(employee) {
    if (employee.role === 'Manager') {
        return inquirer.prompt([
            {
              type: 'input',
              name: 'officeNumber',
              message: 'Enter this managers office number!'
            }]).then(officeNumber => {
                const member = new Manager(employee.name, (employeeList.length + 1), employee.email, officeNumber.officeNumber);
                // console.log(member);
                // return member;
                employeeList.push(member);
                // console.log(employeeList);
            });
    } else if (employee.role === 'Engineer') {
        return inquirer.prompt([
            {
              type: 'input',
              name: 'github',
              message: 'Enter this engineers github username!'
            }]).then(github => {
                const member = new Engineer(employee.name, (employeeList.length + 1), employee.email, employee.github);
                // return member;
                employeeList.push(member);
                // console.log(employeeList);
            });
    } else if (employee.role === 'Intern') {
        return inquirer.prompt([
            {
              type: 'input',
              name: 'school',
              message: 'Enter the school that this intern is attending!'
            }]).then(school => {
                const member = new Intern(employee.name, (employeeList.length + 1), employee.email, school.school);
                // return member;
                employeeList.push(member);
                // console.log(employeeList);
            });
    }
};

const runAgain = function() {
    inquirer.prompt([
        {
          type: 'confirm',
          name: 'yesOrNo',
          message: 'Would you like to add another empoyee?',
          default: false
        }]).then(yesOrNo => {
            if (yesOrNo) {
                console.log(employeeList);
                return runApp();
            } else {
                console.log("populate the html page!");
            }
        });
};

// create empty array at top to hold list of employees
// push new employee to the end of the array
// prompt user to add more or stop
const runApp = function() {
    promptUser()
        .then(employeeInfo => {
            return promptRole(employeeInfo);
        }).then(newEmployee => {
            // return runAgain(newEmployee);
            return runAgain();
        });
};

runApp();