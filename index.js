// TODO: Include packages needed for this application
const inquirer =  require("inquirer");
const fs = require("fs");
const { type } = require("os");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    "Enter project title.", 
    "Enter a description for project.", 
    "Enter installation instructions.", 
    "How do you use this app?",
    "Enter Contribution Guidelines.",
    "Enter Test Instructions.", 
    "Choose a license"];


// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFileSync(`${data.title}.md`, generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {
    const promptUser = () => {
        return inquirer.prompt([
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
                name: "contribution",
                message: questions[4],
            },
            {
                type: "input",
                name: "test",
                message: questions[5],
            },
            {
                type: "input",
                name: "questionUsername",
                message: "What is your Github Username?"

            },
            {
                type: "input",
                name: "questionEmail",
                message: "What is your email?"
            },
            {
                type: "list",
                name: "license",
                message: questions[6],
                choices: ['Apache', 'Boost', 'BSD 3-Clause', 'BSD 2-Clause', 'None'] 
            },
        ])
    };

    promptUser()
        .then((answers) => writeToFile(answers))
}

// Function call to initialize app
init();
