// This is a command-line application to create a README file.
// Collect user input for the available sections of the README file
// To use the app in bash, thye node index.js
// To install the app, first npm install the inquirer package
// The README file that is created will be in mardown format and is based on
// the Professional README Guide at (https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

const inquirer = require('inquirer');
const fs = require('fs');
const fs = require('jest');
const { getSystemErrorName } = require('util');

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
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

class Manager extends Employee(name, id, email, officeNumber) {
  constructor(officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  get officeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return `"Manager"`;
  }
}

class Engineer extends Employee(name, id, email, github) {
  constructor(github) {
    this.github = github;
    super(name, id, email);
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return `"Engineer"`;
  }
}
  
class Intern extends Employee(name, id, email, school) {
  constructor(school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return `"Intern"`;
  }
}
  
  // Array of questions for user input
const employeeQuestions = [
  {
    type: 'input',
    name: 'emp-name',
    message: 'What is the employee\'s name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the employee\'s id?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the employee\'s email?',
  },
]

const managerQuestions = [
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is the employee\'s office number?',
  },
]

const engineerQuestions = [
  {
    type: 'input',
    name: 'gethub',
    message: 'What is the employee\'s github?',
  },
]

const internQuestions = [
  {
    type: 'input',
    name: 'school',
    message: 'What is the employee\'s school?',
  },
]


// Write HTML file
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
//    writeToFile(filename, data);
    console.log(data);
  });
}
  
init();