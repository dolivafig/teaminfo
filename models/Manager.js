const Employee = require('./Employee');

class Manager extends Employee{
    constructor (name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
} 
getRole(){
    return "Manager";
}
getOffice(){
    return this.officeNumber;
}
getTemplate () {
    return `<div class = "card" id="manager"> 
    <h2 id="role"> ${this.getRole()} </h2>
    <ul>
    <li>${this.name}</li>
    <li>Employee ID: ${this.id}</li>
    <li> <a href="mailto:${this.email}">Contact: ${this.email}</a></li>
    <li>Office No. ${this.getOffice()}</li>
    </ul>
    </div>`
}
}

module.exports = Manager;