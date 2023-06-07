const Triangle = require('./Triangle');
const Circle = require('./Circle');
const Square = require('./Square');

function createShape({ text, colorText, colorShape, shape }) {
    let logo;
    text = text.toUpperCase();
    //check what type of shape user inputs
    switch (shape) {
        //make a class with it 
        case 'triangle':
            logo = new Triangle();
            break;
        case 'circle':
            logo = new Circle();
            break;
        case 'square':
            logo = new Square();
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

module.exports = createShape;