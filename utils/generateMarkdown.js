
// generate table of contents if any needed and ad tabs for each section needed.
const generateToC = (installation, usage, contributing, test, license) => {
  if (license ==='None') {
    license = false;
  }

  if (!installation && !usage && !contributing && !license && !test) {
    return '';
  }

  return `
  &nbsp;
  
  ---
  ## Table of Contents
  ${installation ? '* [Installation Instructions](#Installation Instructions)':'' }

  ${usage ? '* [Usage Information](#Usage Information)':'' }

  ${contributing ? '* [Contributing](#Contributing Guidelines)':'' }

  ${license ? '* [License](#license)':'' }
  
  ${test ? '* [Test Instructions](#Test Instructions)':'' }

  * [Questions](#questions)`
};

// associate license link to user chosen license.
function renderLicenseLink(license) {

  switch(license) {
    
    case 'Apache_v2':
      return 'https://choosealicense.com/licenses/apache-2.0';

    case 'GNU_AGPv3':
      return 'https://choosealicense.com/licenses/agpl-3.0';

    case 'GNU_GPLv3':
      return 'https://choosealicense.com/licenses/gpl-3.0';

    case 'GNU_LGPLv3':
      return 'https://choosealicense.com/licenses/lgpl-3.0';

    case 'Mozilla_PLv2':
      return 'https://choosealicense.com/licenses/mpl-2.0';

    case 'MIT':
      return 'https://choosealicense.com/licenses/mit';

    case 'Boost_Software_v1':
      return 'https://choosealicense.com/licenses/bsl-1.0';

    case 'The_Unlicens':
      return 'https://choosealicense.com/licenses/unlicense'; 
  };

};

// create license section if needed.
function renderLicenseSection(license) {
  if(license === "None") {
    
    return '';
  }
 
  return `
  &nbsp;

  ---
  ## License
  Open Source License used: [${license}](${renderLicenseLink(license)})` 
};

// create install section if needed.
const generateInstall = install => {

  if(!install) {
    return '';
  }
 
  return `
  &nbsp;

  ---
  ## Installation Instructions
  ${install}` 
};

// create usage section if needed.
const generateUsage = usage => {

  if(!usage) {
    return '';
  }
 
  return `
  &nbsp;

  ---
  ## Usage Information
  ${usage}` 
};

// create contribution section if needed.
const generateContribution = contributing => {

  if(!contributing) {
    return '';
  }
 
  return `
  &nbsp;

  ---
  ## Contributing Guidelines
  ${contributing}` 
};

// create contribution section if needed.
const generateTest = test => {

  if(!test) {
    return '';
  }
 
  return `
  &nbsp;

  ---
  ## Test Instructions
  ${test}` 
};


// Function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  const {username, title, description, installation, usage, contributing, license, test, email} = data;
  
  return `
  # ${title}
  ![License badge](https://img.shields.io/badge/License-${license}-brightgreen?style=plastic)

  &nbsp;
  ## Description
  ${description}
  ${generateToC(installation, usage, contributing, test, license)}
  ${generateInstall(installation)}
  ${generateUsage(usage)}
  ${generateContribution(contributing)}
  ${renderLicenseSection(license)}
  ${generateTest(test)}

  &nbsp;

  ---
  ## Questions
  Please contact me if you have any questions.
  - [GitHub Profile](https://github.com/${username})
  - [By e-mail](mailto:${email})

`;
}

module.exports = generateMarkdown;

