// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// removed break becuase return stops continuation of switch statement
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case "Boost":
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    case "BSD 3-Clause":
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    case "BSD 2-Clause":
      return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
  
    default:
      return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// 
function renderLicenseLink(license) {
  switch (license) {
    case "Apache":
      return `### Apache 2.0 License
[https://opensource.org/licenses/Apache-2.0](https://opensource.org/licenses/Apache-2.0)`;
    case "Boost":
      return `### Boost Software License
[https://www.boost.org/LICENSE_1_0.txt](https://www.boost.org/LICENSE_1_0.txt)`;
    case "BSD 3-Clause":
      return `### BSD 3-Clause License
[https://opensource.org/licenses/BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause)`;
    case "BSD 2-Clause":
      return `### BSD 2-Cluase License
[https://opensource.org/licenses/BSD-2-Clause](https://opensource.org/licenses/BSD-2-Clause)`;
    default:
      return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  if(license == "None"){
    return ``
  } else if( license != "None"){
    return `## License:`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Table of Contents
${addTableOfContents(data)}

## Description
${data.description}  

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution Guidelines
${data.contribution}

## Testing Instructions
${data.test}
${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}

## Questions
Github Username: https://github.com/${data.questionUsername}
Email: ${data.questionEmail}

`;
}

function addTableOfContents(data) {
  return `[Description](#description)
[Installation](#installation)
[Usage](#usage)
[Contribution Guidelines](#contribution-guidelines)
[Testing Instructions](#testing-instructions)
${data.license != "None" ? "[License](#license)" : ""}`
};

module.exports = generateMarkdown;

