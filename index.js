const inquirer = require ('inquirer');
const fs = require('fs');
const Engineer = require('./models/Engineer')
const Intern = require('./models/Intern')
const Manager = require('./models/Manager')
let test = [];

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
            string = test.join(" ");
        append (string);
            return option;
        }
    })
    
}

function append (object) {
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
body {background-color: rgb(223, 217, 217);
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: auto;
width: 400px;
height: auto;
text-align: center;
flex-direction: column;
}

h1   {color: black;
    justify-items: center;
}
p    {color: red;}
ul   {list-style-type: none;}

.container {display: flex;
justify-items: center;}

.card {
    display: flex;
    flex-direction: column;
    margin: 3px;
    background-color: beige;
    padding: 4px;
    flex-wrap: wrap;
    width: auto;
    height: auto;
    text-align: left;
    border: 3px solid black;
}
.card li {
    margin:2px;
    font-size: 20px;
}
h2   {color: blue;
margin: 2px;
text-align: left;}
</style>
<body>
    <h1 id="title" >Your Team</h1>
    ${object}
</body>
</html>`, (err) =>
        err ? console.error(err) : console.log('Commit logged!'))
}

function qManager() {
    inquirer.prompt(mgrQ).then((response) => {
        const mgr = new Manager (response.manager_name, response.id_number, response.email_address, response.office_number);
        test.push(mgr.getTemplate());
        checklist();
        return test;
    })
}
function qEngineer() {
    inquirer.prompt(engQ).then((response) => {
        const engineer1 = new Engineer (response.engineer_name, response.eng_id_number, response.eng_email_address, response.github_username);
        test.push(engineer1.getTemplate());
        checklist();
        return test;
    })
}
function qIntern() {
    inquirer.prompt(intQ).then((response) => {
        const intern1 = new Intern (response.intern_name, response.int_id_number, response.int_email_address, response.int_school);
        test.push(intern1.getTemplate());
        checklist();
        return test;
    })
}

qManager();

