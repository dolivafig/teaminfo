const inquirer = require ('inquirer');
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
// inquirer.prompt([
//     {
//         type: 'input',
//         message: 'What is your name?',
//         name: 'manager_name',
//     },
//     {
//         type: 'number',
//         message: 'What is your ID number?',
//         name: 'id_number',
//     },
//     {
//         type: 'input',
//         message: 'What is your email address?',
//         name: 'email_address',
//     },
//     {
//         type: 'number',
//         message: 'What is your office number?',
//         name: 'office_number',
//     },
//     {
//         type: 'checkbox',
//         message: 'Want to add someone else to your team?',
//         name: 'team_list',
//         choices: ['Engineer', 'Intern', 'Exit Application']
//     },
//     {
//         type: 'input',
//         message: 'What is the engineers name?',
//         name: 'engineer_name',
//         when: (prompt) => prompt.team_list == 'Engineer',

//     },
//     {
//         type: 'input',
//         message: 'What is their ID number?',
//         name: 'eng_id_number',
//         when: (prompt) => prompt.team_list == 'Engineer',

//     },
//     {
//         type: 'input',
//         message: 'What is their email address?',
//         name: 'eng_email_address',
//         when: (prompt) => prompt.team_list == 'Engineer',

//     },
//     {
//         type: 'input',
//         message: 'What is their github username?',
//         name: 'github_username',
//         when: (prompt) => prompt.team_list == 'Engineer',
//     },
//     {
//         type: 'input',
//         message: 'What is the interns name?',
//         name: 'intern_name',
//         when: (prompt) => prompt.team_list == 'Intern',

//     },
//     {
//         type: 'input',
//         message: 'What is your ID number?',
//         name: 'int_id_number',
//         when: (prompt) => prompt.team_list == 'Intern',

//     },
//     {
//         type: 'input',
//         message: 'What is your email address?',
//         name: 'int_email_address',
//         when: (prompt) => prompt.team_list == 'Intern',

//     },
//     {
//         type: 'input',
//         message: 'What is the name of your school?',
//         name: 'int_school',
//         when: (prompt) => prompt.team_list == 'Intern',

//     }
// ]).then((response) => {
// const mgr = new Manager (response.manager_name, response.id_number, response.email_address, response.office_number);
// const engineer1 = new Engineer (response.engineer_name, response.eng_id_number, response.eng_email_address, response.github_username);
// const intern1 = new Intern (response.intern_name, response.int_id_number, response.int_email_address, response.int_school);
// }
//     if (response.team_list == "Engineer") {
// qEngineer();
// console.log(mgr)
//     } else if (response.team_list == "Intern") {
// qIntern();
// console.log("test2")
//     }

const engQ = [
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
];
const intQ = [
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
];
const mgrQ = 
[
    {
        type: 'input',
        message: 'What is your name?',
        name: 'manager_name',
    },
    {
        type: 'number',
        message: 'What is your ID number?',
        name: 'id_number',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email_address',
    },
    {
        type: 'number',
        message: 'What is your office number?',
        name: 'office_number',
    }
];

function checklist (){
    inquirer.prompt({
        type: 'checkbox',
        message: 'Want to add someone else to your team?',
        name: 'team_list',
        choices: ['Engineer', 'Intern', 'Exit App']
    }).then((response) => {
        let option = response.team_list;
        if (option == "Engineer"){
            qEngineer();
            console.log('engineer')
        } else if(option == "Intern"){
            qIntern();
            console.log('intern')
        } else {
        let mgr = employees[0].getTemplate();
        let engineer1 = employees[1].getTemplate();
        let intern1 = employees[2].getTemplate();

        append(mgr, engineer1, intern1);

            return option;
        }
    })
    
}

function append (mgr, engineer1, intern1) {
    fs.writeFile('./team.html', `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Team</title>
</head>
<style>
body {background-color: grey;}
h1   {color: black;
    display: flex;
        
}
p    {color: red;}
ul   {list-style-type: none;}
.card {display: flex;
    flex-wrap: wrap;
    width: 250px;
    height: auto;
    justify-content: center;
        align-items: center;
        box-sizing: content-box;
}
h2   {color: blue}
</style>
<body>
    <h1 id="title" >Your Team</h1>
    ${mgr}
    ${engineer1}
    ${intern1}
</body>
</html>`, (err) =>
        err ? console.error(err) : console.log('Commit logged!'))
}
// const mgr = new Manager (response.manager_name, response.id_number, response.email_address, response.office_number);
// const engineer1 = new Engineer (response.engineer_name, response.eng_id_number, response.eng_email_address, response.github_username);
// const intern1 = new Intern (response.intern_name, response.int_id_number, response.int_email_address, response.int_school);

function qManager() {
    inquirer.prompt(mgrQ).then((response) => {
        const mgr = new Manager (response.manager_name, response.id_number, response.email_address, response.office_number);
        checklist();
        employees.push(mgr);
        return mgr;
    })
}
function qEngineer() {
    inquirer.prompt(engQ).then((response) => {
        const engineer1 = new Engineer (response.engineer_name, response.eng_id_number, response.eng_email_address, response.github_username);
        checklist();
        employees.push(engineer1);
        return engineer1;
    })
}
function qIntern() {
    inquirer.prompt(intQ).then((response) => {
        const intern1 = new Intern (response.intern_name, response.int_id_number, response.int_email_address, response.int_school);
        checklist();
        employees.push(intern1);
        return intern1;
    })
}

qManager();

