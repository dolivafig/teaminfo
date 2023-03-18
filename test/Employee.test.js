const Employee = require("../models/Employee");
const name = "Daniel";
const id = 1;
const email = 'Test@test.com'

describe("Employee", () => {
    describe("getName", () => {
        it("should return a string name", () => {
            const Daniel = new Employee(name, id, email);
            const result = Daniel.getName();
            expect(result).toEqual(name);
        });
    });

    describe("getId", () => {
        it("should return an id value", () => {
            const Daniel = new Employee(name, id, email);
            const result = Daniel.getId();
            expect(result).toEqual(id);
        });
    });

    describe("getEmail", () => {
            it("should return an email address", () => {
                const Daniel = new Employee(name, id, email);
                const result = Daniel.getEmail();
                expect(result).toEqual(email);
            });  
    })
    describe("getRole", () => {
        it("should return the class role", () => {
            const Daniel = new Employee(name, id, email);
            const result = Daniel.getRole();
            expect(result).toEqual("Employee");
        });  
})



})