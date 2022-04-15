// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')


// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {
    return inquirer.prompt([
       {
           type: 'input',
           name: 'username',
           message: 'Enter your GitHub user name.'
       } 
    ])
    
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



promptUser().then(answers => console.log(answers));


// https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR> 
// https://img.shields.io/badge/license-MIT-brightgreen?style=plastic