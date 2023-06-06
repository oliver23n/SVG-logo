// I WANT to generate a simple logo for my projects
// GIVEN a command - line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword(OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword(OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named`logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

const inquirer = require('inquirer');
const fs = require('fs');
const Triangle = require('./lib/Triangle');

const questions = [
    {
        type: 'input',
        message: 'Enter Up to 3 characters:',
        name: 'text'
    },
    {
        type: 'input',
        message: 'Enter text color:',
        name: 'colorText'
    },
    {
        type: 'input',
        message: 'Enter shape color:',
        name: 'colorShape'
    },
    {
        type: 'list',
        message: 'Select a shape',
        choices: ['circle', 'triangle', 'square'],
        name: 'shape'
    }
];

function createShape({text,colorText,colorShape,shape}){
    //check what type of shape user inputs
    switch (shape){
        //make a class with it 
        case 'triangle':
            const logo = new Triangle();
            break;
        case 'circle':
            break;
        case 'square':
            break;
    }
    //set the color of the shape
    logo.setColor(colorShape);
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${logo.render()}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${colorText}">${text}</text>

</svg>
    `
}
inquirer.prompt(questions)
.then((response) => {
    //get the shape, color , text variables
    //pass into create and get str return
    const dataToWrite = createShape(response)
})


