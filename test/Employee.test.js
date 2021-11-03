const Employee = require("../employee.js");

describe("Employee", () => {
    describe("Initialization", () => {
      it("should create an object with 'name' string property, 'id' string property, and 'email' string property", () => {
        const employee = new Employee("Bob", "1", "Bob@junkmail.com");
 
        // Verify that the new object has the correct properties
        expect(employee).toEqual({ name: "Bob", id: "1", email: "Bob@junkmail.com" });
      });
    });
  
    describe("getName", () => {
      it("should be the employee's name as a string", () => {
        // Create new object to test with
        const employee = new Employee("Bob", "1", "Bob@junkmail.com");
    
        // Verify that the name was added to the object
        expect(employee.getName()).toEqual("Bob");
      });
  
      it("should have the employee's id as '2'", () => {
        const employee = new Employee("Joe", "2", "Joe@junkmail.com");
  
        // Verify that the id was added to the object
        expect(employee.getId()).toEqual("2");
      });
  
      it("should have the employee's email as 'Jon@junkmail.com'", () => {
        const employee = new Employee("Jon", "3", "Jon@junkmail.com");

        // Verify that the email was added to the object
        expect(employee.getEmail()).toEqual("Jon@junkmail.com");
      });

      it("should have the employee's role as 'Employee'", () => {
        const employee = new Employee("Rob", "4", "Rob@junkmail.com");
  
        // Verify that the role was added to the object
        expect(employee.getRole()).toEqual("Employee");
      });
    });
});
  