const Manager = require("../models/Manager");
const name = "Daniel";
const id = 1;
const email = 'Test@test.com';
const office = 5;

describe("Intern", () => {
    describe("getName", () => {
        it("should return a string name", () => {
            const Daniel = new Manager (name, id, email, office);
            const result = Daniel.getName();
            expect(result).toEqual(name);
        });
    });

    describe("getId", () => {
        it("should return an id value", () => {
            const Daniel = new Manager (name, id, email, office);
            const result = Daniel.getId();
            expect(result).toEqual(id);
        });
    });

    describe("getEmail", () => {
            it("should return an email address", () => {
                const Daniel = new Manager (name, id, email, office);
                const result = Daniel.getEmail();
                expect(result).toEqual(email);
            });  
    })
    describe("getRole", () => {
        it("should return the class role", () => {
            const Daniel = new Manager (name, id, email, office);
            const result = Daniel.getRole();
            expect(result).toEqual("Manager");
        });  
})
    describe("getOfficeNumber", () => {
        it("should return an office number", () => {
            const Daniel = new Manager (name, id, email, office);
            const result = Daniel.getOffice();
            expect(result).toEqual(office);
        });  
})


})