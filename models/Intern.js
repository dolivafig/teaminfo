const Employee = require('./Employee');

class Intern extends Employee{
    constructor (name, id, email, school) {
    super(name, id, email);
    this.school = school;
} 
getRole(){
    return "Intern";
}
getSchool(){
    return this.school;
}
getTemplate () {
    return `<div class = "card" id="intern"> 
    <h2 id="role"> ${this.getRole()} </h2>
    <ul>
    <li>${this.name}</li>
    <li>Employee ID: ${this.id}</li>
    <li> <a href="mailto:${this.email}">Contact: ${this.email}</a></li>
    <li>School Name ${this.getSchool()}</li>
    </ul>
    </div>`
}
}

module.exports = Intern;