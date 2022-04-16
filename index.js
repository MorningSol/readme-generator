// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information.'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'If any, please provide contribution guidelines.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'if any, please provide test instructions.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which open source license are you using?',
            choices: ['None', 'Apache_v2', 'GNU_AGPv3', 'GNU_GPLv3', 'GNU_LGPLv3', 'Mozilla_PLv2', 'MIT', 'Boost_Software_v1', 'The_Unlicense']
        },
        {
            type: 'input',
            name: 'email',
            message: 'For the questions section, please enter you e-mail address',

            validate: nameInput => {
                if (nameInput){
                    return true;
                }
                else {
                    console.log('Please enter your e-mail address!');
                }
            }
        }

   
    ])
   
};




promptUser().then(answers => {
   const markdownPage = generateMarkdown(answers)
   
   fs.writeFile('./dist/readme.md', markdownPage, err => {
       if (err) throw new Error(err);
       console.log('Checkout your new readme file in the dist folder');
   });
});

