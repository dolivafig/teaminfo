const Engineer = require("../models/Engineer");
const name = "Daniel";
const id = 1;
const email = 'Test@test.com';
const github = "dolivafig";

describe("Engineer", () => {
    describe("getName", () => {
        it("should return a string name", () => {
            const Daniel = new Engineer(name, id, email, github);
            const result = Daniel.getName();
            expect(result).toEqual(name);
        });
    });

    describe("getId", () => {
        it("should return an id value", () => {
            const Daniel = new Engineer(name, id, email, github);
            const result = Daniel.getId();
            expect(result).toEqual(id);
        });
    });

    describe("getEmail", () => {
            it("should return an email address", () => {
                const Daniel = new Engineer(name, id, email, github);
                const result = Daniel.getEmail();
                expect(result).toEqual(email);
            });  
    })
    describe("getRole", () => {
        it("should return the class role", () => {
            const Daniel = new Engineer(name, id, email, github);
            const result = Daniel.getRole();
            expect(result).toEqual("Engineer");
        });  
})
    describe("getGithub", () => {
        it("should return a github user", () => {
            const Daniel = new Engineer(name, id, email, github);
            const result = Daniel.getGithub();
            expect(result).toEqual(github);
        });  
})



})
