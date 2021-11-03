const Engineer = require("../engineer.js");

describe("Engineer", () => {
    describe("Initialization", () => {
      it("should create an object with string properties 'name', 'id', 'email', and 'school'", () => {
        const engineer = new Engineer("Bob", "1", "Bob@junkmail.com", "bob.github.com");
  
        // Verify that the new object has the correct properties
        expect(engineer).toEqual({ name: "Bob", id: "1", email: "Bob@junkmail.com", github: "bob.github.com" });
      });
    });
  
    describe("getName", () => {
      it("should be the engineer's name as a string", () => {
        // Create new objects to test with
        const engineer = new Engineer("Bob", "1", "Bob@junkmail.com", "bob.github.com");
    
        // Verify that the child was added to the children array
        expect(engineer.getName()).toEqual("Bob");
      });
  
      it("should have the engineer's id as '2'", () => {
        const engineer = new Engineer("Joe", "2", "Joe@junkmail.com", "bob.github.com");
  
        // Verify that the child was not added to the array
        expect(engineer.getId()).toEqual("2");
      });
  
      it("should have the engineer's email as 'Jon@junkmail.com'", () => {
        const engineer = new Engineer("Jon", "3", "Jon@junkmail.com", "bob.github.com");
  
        // Verify that the fourth child was not added to the array
        expect(engineer.getEmail()).toEqual("Jon@junkmail.com");
      });

      it("should have the engineer's role as 'engineer'", () => {
        const engineer = new Engineer("Rob", "4", "Rob@junkmail.com", "bob.github.com");
  
        // Verify that the fourth child was not added to the array
        expect(engineer.getRole()).toEqual("Engineer");
      });
    });
});
  