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
// Common to all employee types
const employeeQuestions = [
  {
    type: 'input',
    name: 'emp-name',
    message: 'What is this employee\'s name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is this employee\'s id?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is this employee\'s email?',
  },
  {
    type: 'input',
    name: 'more',
    message: 'Enter another employee? (y/n)',
  }
]

// const managerQuestions = [
//   {
//     type: 'input',
//     name: 'officeNumber',
//     message: 'What is the employee\'s office number?',
//   },
// ]

// const engineerQuestions = [
//   {
//     type: 'input',
//     name: 'gethub',
//     message: 'What is this employee\'s github?',
//   },
// ]

// const internQuestions = [
//   {
//     type: 'input',
//     name: 'school',
//     message: 'What is this employee\'s school?',
//   },
// ]


// Write HTML file
function writeHTML(fileName, answers) {
  fs.writeFile(fileName, answers, (err) =>
    err ? console.log(err) : console.log('Success!'));
}

// function getEmployeeProfile() {
//   inquirer
//   .prompt(employeeQuestions)
//   .then((data) => {
//     const filename = "./dist/index.html";
// //    appendFile(filename, data);
//     console.log("Employee: "+data);
//   });
// }

// function getProfile(questionSet) {
// }

// function engineerProfile() {
//   getEmployeeProfile();
// }

// function internProfile() {
//   getEmployeeProfile();
// }

// function init() {
//   getManagerProfile();
//   while(moreEmployees) {
//     if(employeeType === 'Engineer') {
//         getEngineerProfile();
//     } else {
//         getInternProfile();
//     }
//   }
// }

// const menuQuestion = [
//   {
//     type: 'list',
//     message: 'Which employee would you like to add next (or finish)?',
//     name: 'empType',
//     choices: ['Manager', 'Engineer', 'Intern'],
//   },
// ]

// function menu(notDone) {
//   while(notDone) {
//   inquirer
//   .prompt(menuQuestion)
//   .then((data) => {
//     console.log("data: "+data);
//     switch (data) {
//       case "Manager":
//         getManagerProfile();
//         break;
//       case "Engineer":
//         getEngineerProfile();
//         break;
//       case "Intern":
//         getInternProfile();
//         break;
//       case "Finish":
//         notDone = false;
//         break;
//     }
//   });
//  }
// }

const internQuestion = [
  {
    type: 'input',
    name: 'school',
    message: 'What is this intern\'s school?',
  },
]

const internInputs = async (intInputs = []) => {
  const internQuestions = [ ...internQuestion, ...employeeQuestions  ];
  const { ...intAnswers } = await inquirer.prompt(internQuestions);
  const newIntInputs = [...intInputs, intAnswers];
  return newIntInputs;
};

const getInternProfile = async () => {
  const intInputs = await internInputs();
  console.log("getInternProfile: "+JSON.stringify(intInputs));
  if (intInputs[0].more.toUpperCase() === "Y") {
    mainMenu();
  }
};

const engineerQuestion = [
  {
    type: 'input',
    name: 'github',
    message: 'What is this engineer\'s github?',
  },
];

const engineerInputs = async (engInputs = []) => {
  const engineerQuestions = [ ...engineerQuestion, ...employeeQuestions  ];
  const { ...engAnswers } = await inquirer.prompt(engineerQuestions);
  const newEngInputs = [...engInputs, engAnswers];
  return newEngInputs;
};

const getEngineerProfile = async () => {
  const engInputs = await engineerInputs();
  console.log("getEngineerProfile: "+JSON.stringify(engInputs));
  if (engInputs[0].more.toUpperCase() === "Y") {
    mainMenu();
  }
};


const managerQuestion = [
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is this manager\'s office number?',
  },
];

const managerInputs = async (mgrInputs = []) => {
  const managerQuestions = [ ...managerQuestion, ...employeeQuestions ];
  const { ...mgrAnswers } = await inquirer.prompt(managerQuestions);
  const newMgrInputs = [...mgrInputs, mgrAnswers];
  return newMgrInputs;
};

const getManagerProfile = async () => {
  const mgrInputs = await managerInputs();
  console.log("getManagerProfile: "+JSON.stringify(mgrInputs));
  if (mgrInputs[0].more.toUpperCase() === "Y") {
    mainMenu();
  }
};

let getMore = true;

const menuInputs = async (inputs = []) => {
  const menuQuestions = [
    {
      type: 'list',
      message: 'Which employee would you like to add next?',
      name: 'empType',
      choices: ['Manager', 'Engineer', 'Intern'],
    },
  ];

  const { more, ...answers } = await inquirer.prompt(menuQuestions);
  const newInputs = [...inputs, answers];
  getMore = more;
  return more ? menuInputs(newInputs) : newInputs;
};

const mainMenu = async () => {
  getMore = false;
  const inputs = await menuInputs();
  switch (inputs[0].empType) {
    case "Manager": 
      getManagerProfile();
    break;
    case "Engineer":
      getEngineerProfile();
    break;
    case "Intern":
      getInternProfile();
    break;
  }
};

mainMenu();
