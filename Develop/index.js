// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'title',
        message: 'What is the title of your README? (Required)',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter a title.');
              return false;
            }
          }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your application. (Required)',
            validate: descInput => {
                if (descInput) {
                return true;
                } else {
                console.log('Please enter a description.');
                return false;
                }
            }
            },
            {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for use. (Required)',
            validate: useInput => {
                if (useInput) {
                    return true;
                } else {
                    console.log('Please enter usage instructions.');
                    return false;
                }
                }
                },    
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (Required)',
            validate: installInput => {
                if (installInput) {
                  return true;
                } else {
                  console.log('Please enter installation instructions.');
                  return false;
                }
              }
            },
            {
            type: 'input',
            name: 'test',
            message: 'If your application has tests, please describe how to run them. Otherwise, enter N/A. (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter test instructions.');
                    return false;
                }
                }
            },
            {
                type: 'input',
                name: 'contribute',
                message: 'Please provide guidelines on how you would like other developers to contribute to your project. Otherwise, enter N/A. (Required)',
                validate: contInput => {
                    if (contInput) {
                        return true;
                    } else {
                        console.log('Please enter test instructions.');
                        return false;
                    }
                    }
                },
            {
                type: 'checkbox',
                name: 'license',
                message: 'Which license applies to your project?',
                choices: ['MIT License', 'Apache 2.0', 'GNU GPLv3', 'None']
              },
            {
            type: 'input',
            name: 'email',
            message: 'Please enter your email. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email address.');
                    return false;
                }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'Please enter your github username. (Required)',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Please enter your github username.');
                        return false;
                    }
                    }
                }
        ])}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve,reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
              }
              resolve({
                ok: true,
                message: 'File created!'
              });
        })
    })
}

// Create a function to initialize app
function init() {
    questions().then((data) => {
      let markdown = generateMarkdown(data);
       writeToFile("README.md", markdown);
    });
  }
  
  // Function call to initialize app
  init();

  
