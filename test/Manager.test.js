const Manager = require("../index.js");

describe("Manager", () => {
    describe("Initialization", () => {
      it("should create an object with string properties 'name', 'id', 'email', and 'officeNumber'", () => {
        const manager = new Manager("Bob", 1, "Bob@junkmail.com", "123-456-7890");
  
        // Verify that the new object has the correct properties
        expect(dayCare).toEqual({ name: "Bob", id: "1", email: "Bob@junkmail.com", officeNumber: "123-456-7890" });
      });
    });
  
    describe("getName", () => {
      it("should be the manager's name as a string", () => {
        // Create new object to test with
        const manager = new Manager("Bob", 1, "Bob@junkmail.com", "123-456-7890");
    
        // Verify that the name was added to the object
        expect(manager.getName()).toEqual("Bob");
      });
  
      it("should have the manager's id as '2'", () => {
        const manager = new Manager("Joe", "2", "Joe@junkmail.com", "123-456-7890");
  
        // Verify that the id was added to the object
        expect(manager.getId()).toEqual("2");
      });
  
      it("should have the manager's email as 'Jon@junkmail.com'", () => {
        const manager = new Manager("Jon", "3", "Jon@junkmail.com", "123-456-7890");
  
        // Verify that the email was added to the object
        expect(manager.getEmail()).toEqual("Jon@junkmail.com");
      });

      it("should have the manager's role as 'Manager'", () => {
        const manager = new Manager("Rob", "4", "Rob@junkmail.com", "123-456-7890");
  
        // Verify that the officeNumber was added to the object
        expect(manager.getRole()).toEqual("Manager");
      });
    });
});
  