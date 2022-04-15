// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')


// TODO: Create an array of questions for user input

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'Enter your GitHub user name.',

            validate: nameInput => {
                if (nameInput){
                    return true;
                }
                else {
                    console.log('Please enter your GitHub user name!');
                }
            }
        },
        {
            type: 'input',
            name: 'reponame',
            message: 'Please enter your GitHub repository name.',

            validate: nameInput => {
                if (nameInput){
                    return true;
                }
                else {
                    console.log('Please enter your GitHub repository name!');
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'Please enter your project title.',

            validate: nameInput => {
                if (nameInput){
                    return true;
                }
                else {
                    console.log('Please enter your project title!');
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter your project description.',

            validate: nameInput => {
                if (nameInput){
                    return true;
                }
                else {
                    console.log('Please enter your project description!');
                }
            }
        },




        
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