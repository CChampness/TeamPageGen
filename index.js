// This is a command-line application to create a README file.
// Collect user input for the available sections of the README file
// To use the app in bash, thye node index.js
// To install the app, first npm install the inquirer package
// The README file that is created will be in mardown format and is based on
//  the Professional README Guide at (https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

const inquirer = require('inquirer');
const fs = require('fs');
const fs = require('jest');
const { getSystemErrorName } = require('util');

class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      getName() {
        return this.name;
      }
      getId() {
        return this.id;
      }
      getEmail() {
        return this.email;
      }
      getRole() {
        return `"Employee"`;
      }
    }
}

class Manager extends Employee() {
  constructor(officeNumber) {
    this.officeNumber = officeNumber;
  }
  get officeNumber() {
    return this.officeNumber;
  }
}

class Engineer extends Employee() {
  constructor(github) {
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
}
  
class Intern extends Employee() {
  constructor(school) {
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
}
  
  // Array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'emp-name',
      message: 'What is the employee\'s name?',
    },
]
  


// Write README file
function writeToFile(fileName, answers) {
    fs.writeFile(fileName, generateHTML(answers), (err) =>
      err ? console.log(err) : console.log('Success!'));
  }
  
  // Initialize app
  function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
      const filename = "./dist/index.html";
      writeToFile(filename, data);
    });
  }
  
  init();