// TODO: Include packages needed for this application
const inquirer =  require("inquirer");
const fs = require("fs");
const { type } = require("os");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = ["Enter project title.", "Enter a description for project.", "Enter installation instructions.","Enter Contribution Guidelines.","Enter Test Instructions."];


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
                type: "list",
                name: "licence",
                message: "Enter a License",
                choices: ['Apache', 'Boost', 'BSD', 'BSD 2-Clause License'] 
            },
            {
                type: "input",
                name: "usage",
                message: "How do you use this?"
            },
            {
                type: "input",
                name: "contribution",
                message: "Enter Contribution Guidelines"
            },
            {
                type: "input",
                name: "test",
                message: "Enter Testing Instructions"
            },
        ])
    };

    promptUser()
        .then((answers) => writeToFile(answers))
}

// Function call to initialize app
init();
