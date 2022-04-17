// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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
            message: "What was your motivation in building this project? (Optional)\n",
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
            validate: languageInput => {
                if (languageInput) {
                    return true;
                } else {
                    console.log('You need to enter the language used to build the project!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "liveDemo",
            message: "Enter the URL for your live demo.\n",
            validate: liveDemoInput => {
                if (liveDemoInput) {
                    return true;
                } else {
                    return false;
                }
            }
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
            message: `How to use the application? (Optional)\n\n ####### use <br> to break lines in the instruction ####### \n Sample: (step 1 <br> Step 2):\n`,
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
   
// TODO: Create a function to write README file

function writeToFile(res) { 
    fs.writeFile('./README2.md', res, (err) => {
        if (err) { 
            console.log(err)
        } 
    })
};

// TODO: Create a function to initialize app
function init() {
    promptQuestions()
    // .then(data => console.log(data))
    // .then(writeFile)
    // .then(installStepsData => {
    //     return generateMarkdown(installStepsData)
    // })
    .then(res => generateMarkdown(res))
    .then(res => writeToFile(res))
    // .then((data) => { return writeToFile(data).toString; })
    // .catch((err) => console.log(err));
    // .then(writeToFile)
}
// Function call to initialize app
init();
