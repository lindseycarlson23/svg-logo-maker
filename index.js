const inquirer = require('inquirer');
const fs = require('fs');
const Triangle = require('./lib/triangle');



// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'Please enter up to three characters.',
      name: 'characters',
    },
    {
      type: 'list',
      message: 'Choose your text color.',
      name: 'textcolor',
      choices: ['blue', 'green', 'purple', 'yellow', 'red', 'orange']
    },
    // {
    //   type: 'input',
    //   message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    //   name: 'installation',
    // },
    // {
    //   type: 'input',
    //   message: 'Provide instructions and examples for use. Include screenshots as needed. To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax: ```md ![alt text](assets/images/screenshot.png)',
    //   name: 'usage',
    // },
    // {
    //   type: 'input',
    //   message: 'What is your GitHub user name?',
    //   name: 'github',
    // },
    // {
    //   type: 'input',
    //   message: 'What is your email address?',
    //   name: 'email',
    // },
    // {
    //   type: 'input',
    //   message: 'What information does the user require to contribute?',
    //   name: 'contributions',
    // },
    // {
    //   type: 'list',
    //   message: 'What license did you use?',
    //   name: 'license',
    //   choices: ['MIT', 'none']
    // },
];



function init() {
  //Inquirer Prompt(insert questions here)
 
inquirer
  .prompt(questions)
  .then(({characters, textcolor}) => {
//   writeToFile('logo.svg', data);
    let myTriangle = new Triangle(characters, textcolor);
    console.log(myTriangle);
    
  })


}
// Function call to initialize app

init();

