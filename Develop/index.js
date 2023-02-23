// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require("fs");

const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'githubUsername',
        },

        {
            type: 'input',
            message: 'What is your email address?',
            name: 'userEmail',
        },

        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'projectTitle',
        },

        {
            type: 'input',
            message: 'What are the instructions for installation?',
            name: 'projectInstallation',
        },

        {
            type: 'input',
            message: 'Write a brief description of your project:',
            name: 'projectDescription',
        },

        {
            type: 'input',
            message: 'What problem does this project solve?',
            name: 'projectSolution',
        },

        {
            type: 'input',
            message: 'Who collaborated with you on this project?',
            name: 'projectCollaborators',
        },

        {
            type: 'list',
            name: 'projectLicense',
            message: 'Choose the appropriate license for this project',
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open",
            ],
        },

    ])

    .then((answers) => {
        const readMeContent = generateMarkdown(answers)

        // // TODO: Create a function to write README file
        fs.writeFile('README.md', readMeContent, (err) =>
            err ? console.log(err) : console.log('README.md file has been saved!'));
    })


