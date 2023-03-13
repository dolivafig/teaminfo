const inquirer = require('inquirer');
const fs = require('fs');

function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.introduction = () => {
        console.log(`Hi, my name is ${this.name} and I love ${this.tech}!`);
    };
} 
const rita = new Employee('Rita', 'JavaScript');

rita.introduction();


const selectPromise = new Promise ((resolve, reject) => {

        resolve('hello');
    
});

selectPromise.then((result)=> {
    console.log(result);
});


// inquirer.prompt([
// {
//     type: 'input',
//         message: 'Who is the team manager?',
//             name: 'manager_name',
//     },
// {
//     type: 'checkbox',
//         message: 'Want to add someone to your team?',
//             name: 'team_list',
//                 choices: ['Engineer', 'EPL', 'MIT', 'BSD']
// },
// ]).then((response) => {
//     fs.writeFile('team.html', `bla bla`, (err) =>
// err ? console.error(err) : console.log('Commit logged!')
// };

