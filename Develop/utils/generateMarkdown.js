// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT License':
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case 'GNU GPLv3':
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case 'Apache 2.0':
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
    default:
      return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents 
  * [Description](#description)
  * [Usage](#usage)
  * [Installation](#installation)
  * [Tests](#tests)
  * [Contributions](#contributions)
  * [License](#license)
  * [Questions](#questions)

  ## Description
  ${data.description}

  ## Usage
  ${data.usage}

  ## Installation
  ${data.install}

  ## Tests
  ${data.test}

  ## Contributions
  ${data.contribute}

  ## License
  This project abides by the - ${data.license}. To see more information, click on the badge link at the top of the page.
  ${renderLicenseSection(data.license)}

  ## Questions
  ${data.questions}
`;
}

module.exports = generateMarkdown;
