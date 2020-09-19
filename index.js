const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user to input their answers in
function promptUser() {
    return inquirer.prompt([
    {
        type: "input",
        name: "Title",
        message: "What is the title of the project?"
    },
    {
        type: "input",
        name: "Description",
        message: "What is the description of your project?"
    },
    {
        type: "input",
        name: "Installation",
        message: "How to properly install application?"
    },
    {
        type: "input",
        name: "Usage",
        message: "How to properly use application?"
    },
    {
        type: "list",
        name: "License",
        message: "What type of license would you like?",
        choices: ["Apache License 2.0", "Academic Free License v3.0", "Creative Commons Attribution 4.0", "ISC", "Microsoft Public License", "MIT", "Mozilla Public License", "Open Software License 3.0"]
    },
    {
        type: "input",
        name: "Contribution",
        message: "How do we contribute to the application?"
    },
    {
        type: "input",
        name: "Test",
        message: "What are the application tests?"
    },
    {
        type: "input",
        name: "Username",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "Repository",
        message: "What is the name of your repository?"
    },
    {
        type: "input",
        name: "Github",
        message: "What is the link to your github?"
    },
    {
        type: "input",
        name: "Email",
        message: "What is your email address?"
    },
]);
}

// function datalicense(License) {
//     switch () {
        
//     }
// }


function generateMd(answers) {
    return `
# ${answers.Title} ![GitHub](https://img.shields.io/github/license/${answers.Username}/${answers.Repository}?style=for-the-badge) 

## License 
${answers.License} 
  
## Table of Contents
1. [Description](#1.-description)
2. [Installation](#2.-installation-instructions)
3. [Usage](#3.-usage-information)
4. [Contribution](#4.-contribution-guidelines)
5. [Test](#5.-test-instructions)
6. [Questions & Contact](#6.-questions?-contact-information-below)

### 1. Description
${answers.Description}  

### 2. Installation Instructions
${answers.Installation}

### 3. Usage Information
${answers.Usage}

### 4. Contribution Guidelines
${answers.Contribution}

### 5. Test Instructions
${answers.Test}

### 6. Questions? Contact Information Below
#### Github Username: ${answers.Username}
#### Github Link: ${answers.Github}
#### Email: ${answers.Email}
    `
}

promptUser()
  .then(function(answers) {
    const md = generateMd(answers);

    return writeFileAsync("README.md", md);
  })
  .then(function() {
    console.log("Successfully wrote to README.md");
  })
  .catch(function(err) {
    console.log(err);
  });



// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
