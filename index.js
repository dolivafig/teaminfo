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
    },
    {
        type: 'input',
        message: 'What is the engineers name?',
        name: 'engineer_name',
        when: (prompt) => prompt.team_list == 'Engineer',

    },
    {
        type: 'input',
        message: 'What is their ID number?',
        name: 'eng_id_number',
        when: (prompt) => prompt.team_list == 'Engineer',

    },
    {
        type: 'input',
        message: 'What is their email address?',
        name: 'eng_email_address',
        when: (prompt) => prompt.team_list == 'Engineer',

    },
    {
        type: 'input',
        message: 'What is their github username?',
        name: 'github_username',
        when: (prompt) => prompt.team_list == 'Engineer',
    },
    {
        type: 'input',
        message: 'What is the interns name?',
        name: 'intern_name',
        when: (prompt) => prompt.team_list == 'Intern',

    },
    {
        type: 'input',
        message: 'What is your ID number?',
        name: 'int_id_number',
        when: (prompt) => prompt.team_list == 'Intern',

    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'int_email_address',
        when: (prompt) => prompt.team_list == 'Intern',

    },
    {
        type: 'input',
        message: 'What is the name of your school?',
        name: 'int_school',
        when: (prompt) => prompt.team_list == 'Intern',

    }
]).then((response) => {
const manager = new Manager (response.manager_name, response.id_number, response.email_address, response.office_number);
const engineer1 = new Engineer (response.engineer_name, response.eng_id_number, response.eng_email_address, response.github_username);
const intern1 = new Intern (response.intern_name, response.int_id_number, response.int_email_address, response.int_school);

    if (response.team_list == "Engineer") {
qEngineer();
console.log(manager)
    } else if (response.team_list == "Intern") {
qIntern();
console.log("test2")
    }

    fs.writeFile('./test.txt', `${manager} bla`, (err) =>
        err ? console.error(err) : console.log('Commit logged!'))
})


function qEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the engineers name?',
            name: 'engineer_name',
        },
        {
            type: 'input',
            message: 'What is their ID number?',
            name: 'eng_id_number',
        },
        {
            type: 'input',
            message: 'What is their email address?',
            name: 'eng_email_address',
        },
        {
            type: 'input',
            message: 'What is their github username?',
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
            message: 'What is the interns name?',
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