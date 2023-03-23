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
    <li>${this.name}</li>
    <li>Employee ID: ${this.id}</li>
    <li> <a href="mailto:${this.email}">Contact: ${this.email}</a> </li>
    <li> <a href="https://github.com/${this.getGithub()}">Github user: ${this.getGithub()}</a> </li>
    </ul>
    </div>`
}
}

module.exports = Engineer;