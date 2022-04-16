


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

const generateInstall = install => {

  if(!install) {
    return '';
  }
 
  return `
  ## Installation
  ${install}
  ` 
};

const generateUsage = usage => {

  if(!usage) {
    return '';
  }
 
  return `
  ## Usage
  ${usage}
  ` 
};

const generateContribution = contribution => {

  if(!contribution) {
    return '';
  }
 
  return `
  ## Contribution
  ${contribution}
  ` 
};




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  const {username, reponame, title, description, installation, usage, contribution, license, email} = data;
  
  return `
  # ${title}
  ![License badge](https://img.shields.io/badge/License-${license}-brightgreen?style=plastic)

  ## Description
  ${description}

  ${generateInstall(installation)}

  ${generateUsage(usage)}

  ${generateContribution(contribution)}

  ## License
  Licensed by ${license}

  ## Questions

  Please contact me if you have any questions.
  - [GitHub Profile](https://github.com/${username})
  - [${email}](mailto:${email})

`;
}

module.exports = generateMarkdown;
