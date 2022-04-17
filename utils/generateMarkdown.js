// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title} \n


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

## live Demo
${data.liveDemo} \n

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

`;
}

module.exports = generateMarkdown;
