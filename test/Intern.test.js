const Intern = require("../models/Intern");
const name = "Daniel";
const id = 1;
const email = 'Test@test.com';
const school = "FIT";

describe("Intern", () => {
    describe("getName", () => {
        it("should return a string name", () => {
            const Daniel = new Intern (name, id, email, school);
            const result = Daniel.getName();
            expect(result).toEqual(name);
        });
    });

    describe("getId", () => {
        it("should return an id value", () => {
            const Daniel = new Intern(name, id, email, school);
            const result = Daniel.getId();
            expect(result).toEqual(id);
        });
    });

    describe("getEmail", () => {
            it("should return an email address", () => {
                const Daniel = new Intern(name, id, email, school);
                const result = Daniel.getEmail();
                expect(result).toEqual(email);
            });  
    })
    describe("getRole", () => {
        it("should return the class role", () => {
            const Daniel = new Intern(name, id, email, school);
            const result = Daniel.getRole();
            expect(result).toEqual("Intern");
        });  
})
    describe("getSchool", () => {
        it("should return a school name", () => {
            const Daniel = new Intern(name, id, email, school);
            const result = Daniel.getSchool();
            expect(result).toEqual(school);
        });  
})



})