const Employee = require('./Employee');

class Engineer extends Employee{
    constructor (name, id, email, github) {
    super(name, id, email);
    this.github = github;
} 
getRole(){
    return "Engineer";
}
getGithub(){
    return this.github;
}
getTemplate () {
    return `<div class = "card" id="engineer"> 
    <h2 id="role"> ${this.getRole()} </h2>
    <ul>
    <li>Name: ${this.name}</li>
    <li>Employee ID: ${this.id}</li>
    <li>Contact: <a href="mailto:${this.email}">${this.email}</a> </li>
    <li> <a href="https://github.com/${this.getGithub()}">Github User: ${this.getGithub()}</a> </li>
    </ul>
    </div>`
}
}

module.exports = Engineer;