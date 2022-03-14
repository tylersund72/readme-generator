// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  "What would you like your project title to be?",
  "What is the description of your project?",
  "How would you like your project to be installed?",
  "What will your project be used for?",
  "What are the contribution details for you project?",
  "Would you like to include test instructions?",
  "Please pick a license for your project",
  "Please provide your GitHub username",
  "Pleaase provide your email address connected to GitHub",
];

const promptQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: questions[0],
    },
    {
      type: "input",
      name: "description",
      message: questions[0],
    },
    {
      type: "input",
      name: "installation",
      message: questions[0],
    },
    {
      type: "input",
      name: "usage",
      message: questions[0],
    },
    {
      type: "input",
      name: "contributions",
      message: questions[0],
    },
    {
      type: "input",
      name: "testing",
      message: questions[0],
    },
    {
      type: "input",
      name: "license",
      message: questions[0],
    },
    {
      type: "input",
      name: "g-username",
      message: questions[0],
    },
    {
      type: "input",
      name: "g-email",
      message: questions[0],
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
