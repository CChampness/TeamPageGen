const Intern = require("../index.js");

describe("Intern", () => {
    describe("Initialization", () => {
      it("should create an object with string properties'name', 'id', 'email', and 'github'", () => {
        const intern = new Intern("Bob", 1, "Bob@junkmail.com", "bob.github.com");
  
        // Verify that the new object has the correct properties
        expect(dayCare).toEqual({ name: "Bob", id: "1", email: "Bob@junkmail.com", github: "bob.github.com" });
      });
    });
  
    describe("getName", () => {
      it("should be the intern's name as a string", () => {
        // Create new objects to test with
        const intern = new Intern("Bob", 1, "Bob@junkmail.com", "bob.github.com");
    
        // Verify that the child was added to the children array
        expect(intern.getName()).toEqual("Bob");
      });
  
      it("should have the intern's id as '2'", () => {
        const intern = new Intern("Joe", "2", "Joe@junkmail.com", "bob.github.com");
  
        // Verify that the child was not added to the array
        expect(intern.getId()).toEqual("2");
      });
  
      it("should have the intern's email as 'Jon@junkmail.com'", () => {
        const intern = new Intern("Jon", "3", "Jon@junkmail.com", "bob.github.com");
  
        // Verify that the fourth child was not added to the array
        expect(intern.getEmail()).toEqual("Jon@junkmail.com");
      });

      it("should have the intern's role as 'Intern'", () => {
        const intern = new Intern("Rob", "4", "Rob@junkmail.com", "bob.github.com");
  
        // Verify that the fourth child was not added to the array
        expect(intern.getRole()).toEqual("Intern");
      });
    });
});
  