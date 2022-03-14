// packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// array of questions for user input
const questions = [
  "What would you like your project title to be?",
  "What is the description of your project?",
  "How would you like your project to be installed?",
  "What will your project be used for?",
  "What are the contribution details for you project?",
  "Would you like to include test instructions?",
  "Which license would you like your project to have?",
  "Please provide your GitHub username",
  "Please provide your email address connected to GitHub",
];

const promptQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: questions[0],
      },
      {
        type: "input",
        name: "description",
        message: questions[1],
      },
      {
        type: "input",
        name: "installation",
        message: questions[2],
      },
      {
        type: "input",
        name: "usage",
        message: questions[3],
      },
      {
        type: "input",
        name: "contributions",
        message: questions[4],
      },
      {
        type: "input",
        name: "testing",
        message: questions[5],
      },
      {
        type: "input",
        name: "license",
        message: questions[6],
        choices: ['Apache', 'MIT', 'GNU', 'Mozilla', 'None'],
      },
      {
        type: "input",
        name: "username",
        message: questions[7],
      },
      {
        type: "input",
        name: "email",
        message: questions[8],
      },
    ])
    .then((responses) => {
      return responses;
    });
};

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log("Invalid response, please try again.");
      return;
    }
  });
}

// function to initialize app
function init() {
  promptQuestions()
    .then((responses) => {
      return generateMarkdown(responses);
    })
    .then((responses) => {
      writeToFile("./dist/README.md", responses);
    });
}

// Function call to initialize app
init();
