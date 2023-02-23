// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === 'Apache') {
    return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';

  } else if (license === 'Academic') {
    return 'https://img.shields.io/badge/License-MIT-yellow.svg';

  } else if (license === 'GNU') {
    return 'https://img.shields.io/badge/License-GPLv3-blue.svg';

  } else if (license === 'ISC') {
    return 'https://img.shields.io/badge/License-ISC-blue.svg';

  } else if (license === 'MIT') {
    return 'https://img.shields.io/badge/License-MIT-yellow.svg';

  } else if (license === 'Mozilla') {
    return 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg';

  } else if (license === 'Open') {
    return 'https://img.shields.io/badge/License-ODC_BY-brightgreen.svg';

  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license === 'Apache') {
    return 'https://opensource.org/licenses/Apache-2.0';

  } else if (license === 'Academic') {
    return 'https://opensource.org/licenses/MIT';

  } else if (license === 'GNU') {
    return 'https://www.gnu.org/licenses/gpl-3.0';

  } else if (license === 'ISC') {
    return 'https://opensource.org/licenses/ISC';

  } else if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
    
  } else if (license === 'Mozilla') {
    return 'https://opensource.org/licenses/MPL-2.0';

  } else if (license === 'Open') {
    return 'https://opendatacommons.org/licenses/by/';

  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed under the [${license}](${renderLicenseLink(license)})   
![license](${renderLicenseBadge(license)})`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
const licenseSection = renderLicenseSection(answers.projectLicense);

return `# ${answers.projectTitle}

## Project Licenses
${licenseSection}

## Table of Contents
* [Licenses](#licenses)
* [Description](#description)
* [Solution](#solution)
* [Installation](#installation)
* [Collaborators](#collaborators)
* [Questions](#questions)

## Description
${answers.projectDescription}

## Solution
${answers.projectSolution}

## Installation
${answers.projectInstallation}

## Collaborators
${answers.projectCollaborators}

## Questions
Have questions about this project?  
Email: ${answers.userEmail}  
GitHub: https://github.com/${answers.githubUsername}`;

}

module.exports = generateMarkdown;
