const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
      // console.log("new Manager,"+this.name);
    }
    getOfficeNumber() {
      return this.officeNumber;
    }
    getRole() {
      return "Manager";
    }
  }

  module.exports = Manager;