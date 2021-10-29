// This is a command-line application to create an HTML page.
// The page will be a team profile for a software team.
// Collect user input for the team members.
// To use the app in bash, type node index.js
// To install the app, first npm install the inquirer package
// The jest package is used for testing.

const inquirer = require('inquirer');
const fs = require('fs');
// const jest = require('jest');
// const { getSystemErrorName } = require('util');

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

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return `"Manager"`;
  }
}

class Engineer extends Employee {
  constructor(name, id, email, github) {
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
  
class Intern extends Employee {
  constructor(name, id, email, school) {
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
function writeHTML(fileName, answers) {
  fs.writeFile(fileName, answers, (err) =>
    err ? console.log(err) : console.log('Success!'));
}

function getEmployeeProfile() {
  inquirer
  .prompt(employeeQuestions)
  .then((data) => {
    const filename = "./dist/index.html";
//    appendFile(filename, data);
    console.log(data);
  });
}

function getProfile(questionSet) {

}

function getManagerProfile() {
  inquirer
  .prompt(employeeQuestions)
  .then((data) => {
    const filename = "./dist/index.html";
//    writeToFile(filename, data);
    console.log(data);
  });
  getEmployeeProfile();
}

function engineerProfile() {
  getEmployeeProfile();
}

function internProfile() {
  getEmployeeProfile();
}

function init() {
  getManagerProfile();
  while(moreEmployees) {
    if(employeeType === 'Engineer') {
        getEngineerProfile();
    } else {
        getInternProfile();
    }
  }
}

const menuQuestion = [
  {
    type: 'list',
    message: 'Which employee would you like to add next (or finish)?',
    name: 'empType',
    choices: ['Manager', 'Engineer', 'Intern', '[Finish]'],
  },
]

function menu(notDone) {
  while(notDone) {
  inquirer
  .prompt(menuQuestion)
  .then((data) => {
    console.log(data);
    switch (data) {
      case "Manager":
        getManagerProfile();
        break;
      case "Engineer":
        getEngineerProfile();
        break;
      case "Intern":
        getInternProfile();
        break;
      case "Finish":
        notDone = false;
        break;
    }
  });
 }
}

// // Initialize app
// function init() {
//   inquirer
//   .prompt(managerQuestions)
//   .then((data) => {
//     const filename = "./dist/index.html";
//    writeHTML(filename, data.officeNumber);
//     console.log(data);
//   });
// }

/*
const collectInputs = async (inputs = []) => {
  const prompts = [
    {
      type: 'input',
      name: 'inputValue',
      message: 'Enter some input: '
    },
    {
      type: 'confirm',
      name: 'again',
      message: 'Enter another input? ',
      default: true
    }
  ];

  const { again, ...answers } = await inquirer.prompt(prompts);
  const newInputs = [...inputs, answers];
  return again ? collectInputs(newInputs) : newInputs;
};

const main = async () => {
  const inputs = await collectInputs();
  console.log(inputs);
};
*/

const collectInputs = async (inputs = []) => {
  const menuQuestions = [
    {
      type: 'list',
      message: 'Which employee would you like to add next?',
      name: 'empType',
      choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
      type: 'confirm',
      name: 'again',
      message: 'Enter another employee? ',
      default: true
    }
  ];

  const { again, ...answers } = await inquirer.prompt(menuQuestions);
  const newInputs = [...inputs, answers];
  return again ? collectInputs(newInputs) : newInputs;
};

const main = async () => {
  const inputs = await collectInputs();
  console.log(inputs);
};

main();
