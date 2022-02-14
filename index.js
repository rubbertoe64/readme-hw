// TODO: Include packages needed for this application
const inquirer =  require("inquirer");
const fs = require("fs");
const { type } = require("os");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = ["Enter project title.", "Enter a description for project."];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
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
        ])
    };

    promptUser()
        .then((answers) => writeToFile(answers))
}

// Function call to initialize app
init();
