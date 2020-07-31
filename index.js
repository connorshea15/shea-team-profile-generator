// This is where I will run my code
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const inquirer = require('inquirer');



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
    ]).then(employeeInfo => {
        console.log(employeeInfo);
    });
};






promptUser();