// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}

  ##Table of Contents 
  *[Description](#Description)
  *[Usage](#Usage)
  *[Installation](#Installation)
  *[Tests](#Tests)
  *[Contributions](#Contributions)
  *[License](#License)
  *[Questions](#Questions)

  ##Description
  ${data.description}

  ##Usage
  ${data.usage}

  ##Installation
  ${data.install}

  ##Tests
  ${data.test}

  ##Contributions
  ${data.contribute}

  ##License
  ${data.license}

  ##Questions
  ${data.questions}
`;
}

module.exports = generateMarkdown;
