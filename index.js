// Required packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const promptQuestions = () => {

    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the project's title? (Required)\n",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter the project's title!");
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "license",
            message: "What license type does your project use? (Optional)\n",
            choices: [
                "AGPL-3.0",
                "Apache-2.0",
                "BSD-2-Clause",
                "BSD-3-Clause",
                "BSL-1.0",
                "CC0-1.0",
                "CDDL-1.0",
                "EPL-2.0",
                "GPL-license",
                "GPL-2.0",
                "GPL-3.0",
                "LGPL-license",
                "LGPL-2.1",
                "MIT",
                "MPL-2.0",
                "None",
            ],
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a brief description of the project (Required)\n',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to enter a project description!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "motivation",
            message: "What was your motivation in building this project? (Required)\n",
            validate: motivation => {
                if (motivation) {
                    return true;
                } else {
                    console.log('Add a brief statement about what motivated you to create this app!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "reasonBuild",
            message: "Why did you build this project? (Optional)\n",
        },
        {
            type: "input",
            name: "problemSolve",
            message: "Provide a short description about what this project solves! (Optional)\n",
        },
        {
            type: 'input',
            name: 'gitHubLink',
            message: 'Enter the GitHub link to your project. (Required)\n',
            validate: gitHubLinkInput => {
                if (gitHubLinkInput) {
                    return true;
                } else {
                    console.log('You need to enter a project GitHub link!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you this project with? (Check all that apply) (Required)\n',
            choices: [
                ' JavaScript', 
                ' HTML', 
                ' CSS', 
                ' ES6',
                ' jQuery', 
                ' Bootstrap', 
                ' Node'
            ],
        },
        {
            type: "input",
            name: "liveDemo",
            message: "Enter your live demo file's name! (Optional)\n Note: Your GIF file must exists under assets/images.\n\n",
        },
        {
            type: "input",
            name: "installProcess",
            message: `What are the steps required to install your project? (Required)\n\n ####### use <br> to break lines in the instruction ####### \n Sample: (step 1 <br> Step 2):\n`,
            validate: installProcessInput => {
                if (installProcessInput) {
                    return true; 
                } else {
                    console.log('Please provide the required steps to install this application!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "usageProcess",
            message: `How to use the application? (Required)\n\n ####### use <br> to break lines in the instruction ####### \n Sample: (step 1 <br> Step 2):\n`,
            validate: usageProcess => {
                if (usageProcess) {
                    return true;
                } else {
                    console.log('Please provide usage details to allow the user to run this application!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "author",
            message: "Enter the author's name. (Required)\n",
            validate: author => {
                if (author) {
                    return true;
                } else {
                    console.log('Please provide usage details to allow the user to run this application!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "contact",
            message: "Enter the author's GitHub username (Do not include the Git URL)!\n",
            validate: contact => {
                if (contact) {
                    return true;
                } else {
                    console.log('Please provide your github username!');
                    return false;
                }
            }
        },
    ])
};
   
// Write README file
function writeToFile(res) { 
    fs.writeFile('./dist/README.md', res, (err) => {
        if (err) { 
            console.log(err)
        } 
    })
};

// initiate the user prompts
function init() {
    promptQuestions()
    .then(res => generateMarkdown(res))
    .then(res => writeToFile(res))
}
// Function call to initialize app
init();
