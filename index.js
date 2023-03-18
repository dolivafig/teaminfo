const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./models/Engineer')
const Intern = require('./models/Intern')
const Manager = require('./models/Manager')
let employees = [];

// const rita = new Employee('Rita', 'JavaScript');



// const selectPromise = new Promise ((resolve, reject) => {

//         resolve('hello');

// });

// selectPromise.then((result)=> {
//     console.log(result);
// });



inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'manager_name',
    },
    {
        type: 'input',
        message: 'What is your ID number?',
        name: 'id_number',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email_address',
    },
    {
        type: 'input',
        message: 'What is your office number?',
        name: 'office_number',
    },
    {
        type: 'checkbox',
        message: 'Want to add someone else to your team?',
        name: 'team_list',
        choices: ['Engineer', 'Intern', 'Exit Application']
    }
]).then((response) => {

    if (response.team_list === "Engineer") {
qEngineer();
    } else if (response.team_list === "Intern") {
qIntern();
    }

//     fs.writeFile('./dist/team.html', `bla bla`, (err) =>
//         err ? console.error(err) : console.log('Commit logged!'))
})


function qEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'engineer_name',
        },
        {
            type: 'input',
            message: 'What is your ID number?',
            name: 'eng_id_number',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'eng_email_address',
        },
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'github_username',
        }
    ]).then((response) => {
        console.log(response)
    })
}

function qIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'intern_name',
        },
        {
            type: 'input',
            message: 'What is your ID number?',
            name: 'int_id_number',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'int_email_address',
        },
        {
            type: 'input',
            message: 'What is the name of your school?',
            name: 'int_school',
        }
    ]).then((response) => {
        console.log(response)
    })

}