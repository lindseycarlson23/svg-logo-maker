const inquirer = require('inquirer');
const fs = require('fs/promises');
const Triangle = require('./lib/triangle');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const SVG = require('./svg');



// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'Please enter text for the logo, up to three characters.',
      name: 'characters',
    },
    {
      type: 'list',
      message: 'Choose your text color.',
      name: 'textcolor',
      choices: ['blue', 'green', 'purple', 'yellow', 'red', 'orange']
    },
    {
      type: 'list',
      message: 'What shape would you like?',
      name: 'logoshape',
      choices: ['circle', 'square', 'triangle']
    },
    {
      type: 'list',
      message: 'Choose your shape color.',
      name: 'shapecolor',
      choices: ['blue', 'green', 'purple', 'yellow', 'red', 'orange']
    },
  
];



function init() {
  //Inquirer Prompt(insert questions here)
 
inquirer
  .prompt(questions)
  .then(({characters, textcolor, logoshape, shapecolor}) => {

    let myShape=null;
    switch(logoshape) {
        case 'triangle': {
            myShape = new Triangle();
            myShape.setColor(shapecolor);
          };
          break;
          case 'circle': {
            myShape = new Circle();
            myShape.setColor(shapecolor);
          };
          break;
          case 'square': {
            myShape = new Square();
            myShape.setColor(shapecolor);
          };
          break;
    }
    // if (logoshape === 'triangle') {
    //     myShape = new Triangle();
    //     myShape.setColor(shapecolor);
    // }
    let mySVG = new SVG();
    mySVG.setText(characters, textcolor)
    mySVG.setShape(myShape)
    console.log(myShape);
    return fs.writeFile("logo.svg", mySVG.render())
    
  })


};
// Function call to initialize app

init();

