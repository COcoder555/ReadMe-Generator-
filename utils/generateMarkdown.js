// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 let badge ="";
 switch(license){
   case "MIT": badge ="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
   break;
   case "BSD 3": badge ="[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
   break;
   case "Apache 2.0": badge ="[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
   break;
   case "NONE": break;
}
return badge; 
 }
 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// let link = "";
function renderLicenseLink(license) {
  let link = "";
     switch(license){
     case "MIT": link = "https://opensource.org/licenses/MIT"; 
     break;
     case "BSD 3": link = "https://opensource.org/licenses/BSD-3-Clause";
     break;
     case "Apache 2.0": link ="https://opensource.org/licenses/Apache-2.0";
     break;
     case "NONE": break;
   }
   return link;
   
   
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
let badge = renderLicenseBadge(data.license);
let link = renderLicenseLink(data.license);
  return `# ${data.title}

## Description
${data.description}         
${badge}
## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}


## Usage
${data.usage}

## License
This project is licensed under the following: 
* ${data.license}

You can view this lincese at:
  * ${link}

## Tests
${data.tests}

## Contributing 
${data.contributing}

## Questions? 
[Github Profile](https://www.github.com/${data.github})

${data.email}

`;
}

module.exports = generateMarkdown;
