# TeamPageGen
This is a command-line app to build an HTML page for a software team's profile.  It runs under node.js to produce an index.html file.
It takes in information from the user about employees on a software engineering team, then generates the index.html webpage that displays summaries for each person. Testing is also provided by means of Jest functions.  This helps make the code maintainable. There is a unit test for each of the classes.

## Link to the walkthrough video
Here is a link to a walkthrough video that demonstrates the functionality and all of the tests passing.

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Features

```
* When the user is prompted for the team members' names and other information, an HTML file is generated that displays a formatted team roster based on user input.
* The user is prompted to enter the team manager’s name, employee ID, email address, and office number
* One of the fields is for the employee's email address.  When it is clicked, the user's default email program opens and populates the TO field of the email with the employee's email address.
* When the end user clicks on a manager's office number, the default phone client opens with the manager's phone number field populated.
* Next, the user is presented with a menu with the option to add an engineer or an intern or to finish building the team
* For the engineer option, the user is prompted to enter the engineer’s name, ID, email, and GitHub username
* After each entry, the user is prompted to choose to enter another employee, or to finish.
* When the user selects the intern option, the user is prompted to enter the intern’s name, ID, email, and school.
* When the user exits the application, the HTML is generated as a file named index.html
* When the end user (as a client user accessing the html file) clicks on an engineer's GitHub username, then that GitHub profile opens in a new tab.
* When the end user clicks on an email address, the default email client opens with the employee's email field populated.
```

## Mock-Up

The following image shows a mock-up of the generated HTML’s appearance and functionality:

![HTML webpage titled “My Team” features five boxes listing employee names, titles, and other key info.](./Assets/10-object-oriented-programming-homework-demo.png)

The styling in the image is just an example, so feel free to add your own.

## Getting Started
## Getting Started

This homework will combine many of the skills we've covered so far. In addition to the User Story and Acceptance Criteria, we’ve provided some guidelines to help get started.

Your application should use [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user. The application will be invoked by using the following command:

```bash
node index.js
```

It is recommended that you start with a directory structure that looks like the following example:

```md
.
├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js
├── dist/                  // rendered output (HTML) and CSS style sheet
├── lib/                   // classes
├── src/                   // template helper code
├── .gitignore             // indicates which folders and files Git should ignore


**Important**: Make sure that you remove `dist` from the `.gitignore` file so that Git will track this folder and include it when you push up to your application's repository.

The application must include `Employee`, `Manager`, `Engineer`, and `Intern` classes. The tests for these classes (in the `_tests_` directory) must ALL pass.

The first class is an `Employee` parent class with the following properties and methods:

* `name`

* `id`

* `email`

* `getName()`

* `getId()`

* `getEmail()`

* `getRole()`&mdash;returns `'Employee'`

The other three classes will extend `Employee`.

In addition to `Employee`'s properties and methods, `Manager` will also have the following:

* `officeNumber`

* `getRole()`&mdash;overridden to return `'Manager'`

In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

* `github`&mdash;GitHub username

* `getGithub()`

* `getRole()`&mdash;overridden to return `'Engineer'`

In addition to `Employee`'s properties and methods, `Intern` will also have the following:

* `school`

* `getSchool()`

* `getRole()`&mdash;overridden to return `'Intern'`

Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.

### Walkthrough Video: 32%

* A walkthrough video that demonstrates the functionality of the Team Profile Generator and passing tests must be submitted, and a link to the video should be included in your README file.

* The walkthrough video must show all four tests passing from the command line.

* The walkthrough video must demonstrate how a user would invoke the application from the command line.

* The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

* The walkthrough video must demonstrate a generated HTML file that matches the user input.

