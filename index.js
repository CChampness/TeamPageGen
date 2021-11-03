// This is a command-line application to create an HTML page.
// The page will be a team profile for a software team.
// Collect user input for the team members.
// To use the app in bash, type node index.js
// To install the app, first npm install the inquirer package
// The jest package is used for testing.

const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./employee");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");

// Collect all of the members of the team
// into an array of objects.
const team = [];

// // Generic class that all employee types inherit from
// class Employee {
//   constructor(name, id, email) {
//     this.name = name;
//     this.id = id;
//     this.email = email;
//   }
//   getName() {
//     return this.name;
//   }
//   getId() {
//     return this.id;
//   }
//   getEmail() {
//     return this.email;
//   }
//   getRole() {
//     return "Employee";
//   }
// }

// class Manager extends Employee {
//   constructor(name, id, email, officeNumber) {
//     super(name, id, email);
//     this.officeNumber = officeNumber;
//     // console.log("new Manager,"+this.name);
//   }
//   getOfficeNumber() {
//     return this.officeNumber;
//   }
//   getRole() {
//     return "Manager";
//   }
// }

// class Engineer extends Employee {
//   constructor(name, id, email, github) {
//     super(name, id, email);
//     this.github = github;
//   }
//   getGithub() {
//     return this.github;
//   }
//   getRole() {
//     return "Engineer";
//   }
// }
  
// class Intern extends Employee {
//   constructor(name, id, email, school) {
//     super(name, id, email);
//     this.school = school;
//   }
//   getSchool() {
//     return this.school;
//   }
//   getRole() {
//     return "Intern";
//   }
// }
  
// Array of questions for user input
// Common to all employee types
const employeeQuestions = [
  {
    type: 'input',
    name: 'empname',
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

// Write HTML file
function writeHTML(answers) {
  const part1File = "./src/html1.html";
  const part2File = "./src/html2.html";
  const htmlFile = "index.html";
  fs.writeFile(htmlFile, answers, (err) =>
    err ? console.log(err) : console.log(htmlFile+' has been written.'));
}

const internInputs = async (intInputs = []) => {
  const internQuestions = [{
    type: 'input',
    name: 'school',
    message: 'What is this intern\'s school?',
  }, ...employeeQuestions  ];
  const { ...intAnswers } = await inquirer.prompt(internQuestions);
  const newIntInputs = [...intInputs, intAnswers];
  return newIntInputs;
};

const getInternProfile = async () => {
  const intInputs = await internInputs();
  console.log("getInternProfile: "+JSON.stringify(intInputs));
  team.push(new Intern(intInputs[0].empname, intInputs[0].id, intInputs[0].email, intInputs[0].school));
  if (intInputs[0].more.toUpperCase() === "Y") {
    mainMenu();
  } else {
    processTeam();
  }
};

const engineerInputs = async (engInputs = []) => {
  const engineerQuestions = [{
    type: 'input',
    name: 'github',
    message: 'What is this engineer\'s github?',
  }, ...employeeQuestions  ];
  const { ...engAnswers } = await inquirer.prompt(engineerQuestions);
  const newEngInputs = [...engInputs, engAnswers];
  return newEngInputs;
};

const getEngineerProfile = async () => {
  const engInputs = await engineerInputs();
  console.log("getEngineerProfile: "+JSON.stringify(engInputs));
  team.push(new Engineer(engInputs[0].empname, engInputs[0].id, engInputs[0].email, engInputs[0].github));
  if (engInputs[0].more.toUpperCase() === "Y") {
    mainMenu();
  } else {
    processTeam();
  }
};

const managerInputs = async (mgrInputs = []) => {
  const managerQuestions = [   {
    type: 'input',
    name: 'officeNumber',
    message: 'What is the manager\'s office number?',
  }, ...employeeQuestions ];
  const { ...mgrAnswers } = await inquirer.prompt(managerQuestions);
  const newMgrInputs = [...mgrInputs, mgrAnswers];
  return newMgrInputs;
};

const getManagerProfile = async () => {
  const mgrInputs = await managerInputs();
  console.log("getManagerProfile: "+JSON.stringify(mgrInputs));
  // console.log("manager's name: "+mgrInputs[0].empname);
  team.push(new Manager(mgrInputs[0].empname, mgrInputs[0].id, mgrInputs[0].email, mgrInputs[0].officeNumber));
  if (mgrInputs[0].more.toUpperCase() === "Y") {
    mainMenu();
  } else {
    processTeam();
  }
};

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
  return more ? menuInputs(newInputs) : newInputs;
};

const mainMenu = async () => {
//  Add the welcome note
// Add tests for throwing errors
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

function memberHtml(member) {
  console.log("memberHtml");
  let html = "";
  // team.forEach(member => {
    const role = member.getRole();
    // htmlStr += role;
    html += `
      <section class="proj-card">
        <table>
        <tr>
          <td>Name</td><td>${member.getName()}</td>
        </tr>
        <tr>
          <td>Role</td><td>${role}</td>
        </tr>
        <tr>
          <td>Employee Id</td><td>${member.getId()}</td>
        </tr>
        <tr>
          <td>Email</td><td><a href="mailto:${member.getEmail()}">${member.getEmail()}</a></td>
        </tr>
`;
    switch (role) {
      case "Manager":
        html += `
        <tr>
          <td>Office number</td><td><a href="tel:${member.getOfficeNumber()}">${member.getOfficeNumber()}</a></td>
        </tr>
`;
        break;
      case "Engineer":
        html += `
        <tr>
          <td>GitHub</td><td><a href="${member.getGithub()}">NEED NEW TAB!!! ${member.getGithub()}</a></td>
        </tr>
`;
        break;
      case "Intern":
        html += `
        <tr>
          <td>School</td><td><a href="${member.getSchool()}"</a></td>
        </tr>
`;
        break;
    }
    html += `
        </table>
      </section>
`;
  return html;
}

function processTeam() {
  const part1File = "./src/html1.html";
  const part2File = "./src/html2.html";
  const htmlFile = "index.html";
  let htmlStr = "YEHAH ";

  // Part 1 will be the top part of the html file.
  htmlStr = fs.readFileSync(part1File);

  // The employee description cards go into
  //  the middle of the html file.
  team.forEach(member => htmlStr += memberHtml(member));

  // Part 2 will be the bottom of the file.
  htmlStr += fs.readFileSync(part2File);
  fs.writeFile(htmlFile, htmlStr, (err) => {
    if (err) throw err;
  });
}

mainMenu();

// module.exports = { Employee, Intern, Engineer, Manager };