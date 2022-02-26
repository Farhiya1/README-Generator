// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fileName = "./output/README.md";

// Array of questions for users
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "How do you install your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is the usage information?",
    name: "usage",
  },
  {
    type: "input",
    message: "What are the contribution guidelines?",
    name: "contribution",
  },
  {
    type: "input",
    message: "What are the test instructions?",
    name: "tests",
  },
  {
    type: "checkbox",
    message: "Please select a license.",
    name: "license",
    choices: [
      "MIT",
      "Apache2.0",
      "ISC",
      "GNU Public v3.0",
      "Boost Software 1.0",
      "Eclipse Public 2.0",
      "Moziilla Public 2.0",
    ],
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  const markdown = generateMarkdown(data);
  fs.writeFile(fileName, markdown, function (err) {
    if (err) throw err;
    console.log("Generated Markdown!");
  });
}

