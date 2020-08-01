// This is where I will run my code
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHtml.js')

var employeeList = [];

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
                employeeList.push(member);
            });
    } else if (employee.role === 'Engineer') {
        return inquirer.prompt([
            {
              type: 'input',
              name: 'github',
              message: 'Enter this engineers github username!'
            }]).then(github => {
                const member = new Engineer(employee.name, (employeeList.length + 1), employee.email, github.github);
                employeeList.push(member);
            });
    } else if (employee.role === 'Intern') {
        return inquirer.prompt([
            {
              type: 'input',
              name: 'school',
              message: 'Enter the school that this intern is attending!'
            }]).then(school => {
                const member = new Intern(employee.name, (employeeList.length + 1), employee.email, school.school);
                employeeList.push(member);
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
            if (yesOrNo.yesOrNo) {
                // console.log(employeeList);
                return runApp();
            } else {
                 return generateHTML(employeeList);
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