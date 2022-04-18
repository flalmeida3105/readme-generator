// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return "";
  } else {
    // the URL uses dash as separator, so to avoid conflicts the dash it's replace with underscore for building license name
    return `![License](https://img.shields.io/badge/License-${license.replace(/-/g,"%5F")}-orange.svg?style=plastic&logo=appveyor)`
  }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "None") {
    return "";
  } else {
    return `https://api.github.com/licenses/${license}`
  }

}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return "";
  } else {
    return `## License\n ${renderLicenseLink(license)}`;
  }
}

//  if there is no demo link, create the Demo Section letting the user know about it.
function renderDemoSection(liveDemo) {
  if (liveDemo === null || liveDemo === "" || liveDemo === "undefined") {
    return `## Live Demo\n No live demo at the moment!`;
  } else {
    return `## Live Demo\n <img src="../assets/images/${liveDemo}" width="550" height="500">`;
  }
}


// Generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title} \n
${renderLicenseBadge(data.license)}

## Table of Contents
* [General Info](#general-information)
* [Project Website](#project-website)
* [Built With](#Built-With)
* [Live Demo](#live-demo)
* [Setup](#setup)
* [Usage](#usage)
* [Author](#author)
* [Contact](#Contact)

## Purpose
${data.description} \n

## General Information
${data.motivation} \n
${data.reasonBuild} \n
${data.problemSolve} \n

## Project Website
Follow the link below for further details about the project \n
${data.gitHubLink} \n

## Built With
The following languages were used to build this project. \n
* ${data.languages} \n

${renderDemoSection(data.liveDemo)} \n

## Setup
Please follow the step by step below to implement this project. \n
${data.installProcess} \n

## Usage
Please follow the step by step below to use this application. \n
${data.usageProcess} \n

## Author
This application was created by ${data.author}

## Contact
If you have any question, contact the author ${data.author} at https://github.com/${data.contact}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;