// This is where I will run my code
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const inquirer = require('inquirer');

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
    ]).then(employeeInfo => {
        if (employeeInfo.role === 'Manager') {
            inquirer.prompt([
                {
                  type: 'input',
                  name: 'officeNumber',
                  message: 'Enter this managers office number!'
                }]).then(officeNumber => {
                    const member = new Manager(employeeInfo.name, '1', employeeInfo.email, officeNumber.officeNumber);
                    console.log(member);
                });
        }  else if (employeeInfo.role === 'Engineer') {
            inquirer.prompt([
                {
                  type: 'input',
                  name: 'github',
                  message: 'Enter this engineers github username!'
                }]).then(github => {
                    const member = new Engineer(employeeInfo.name, '1', employeeInfo.email, github.github);
                    console.log(member);
                });
        } else if (employeeInfo.role === 'Intern') {
            inquirer.prompt([
                {
                  type: 'input',
                  name: 'school',
                  message: 'Enter the school that this intern is attending!'
                }]).then(school => {
                    const member = new Intern(employeeInfo.name, '1', employeeInfo.email, school.school);
                    console.log(member);
                });
        }
        // This is where my conditional statement will go which will either
        // call the prompt user function again or call the create html function
        
        }
    });
};






promptUser();