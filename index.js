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
