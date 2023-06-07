const inquirer = require('inquirer');
const fs = require('fs');
const createShape = require('./lib/createShape');


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

function writeToFile(name, data) {

    fs.writeFile(`./examples/${name}.svg`, data, err => err ? console.error(err) : console.log('Generated logo.svg!'));

}
inquirer.prompt(questions)
    .then((response) => {
        if(response.text.length > 3 || response.text.length == 0){
            throw new Error('Text must be less than 3 chars')
        }else{
            //get the shape, color , text variables
            //pass into create and get str return
            const dataToWrite = createShape(response);
            writeToFile('logo', dataToWrite);
        }
    })


