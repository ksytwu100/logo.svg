// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { Console } = require('console');
const {Circle, Triangle, Square} = require('./lib/shapes');
inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter 3 characters for the logo:',
    },
    {
        type: 'list',
        name: 'color',
        message: 'Enter a text color for the logo:',
        choices: ["black", "white"],
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select shape for the logo:',
        choices: ["circle", "triangle", "square"],
    },
    {
        type: 'list',
        name: 'shapeColor',
        message: 'Enter shape color for the logo:',
        choices: ["red", "green", "blue"],
    },

]).then(answers => {
    console.log(answers);
    
    // Call a function to generate the SVG with the provided answers
    let logoFactory;
    let logo;
    switch(answers.shape){
        case "circle": 
        logoFactory = new Circle(answers.shapeColor, answers.color, answers.text);
        logo = logoFactory.createCircle();
        console.log(logo);
        break;
        case "triangle": 
        logoFactory = new Triangle(answers.shapeColor, answers.color, answers.text);
        logo = logoFactory.createTriangle();
        console.log(logo);
        break;
        case "square": 
        logoFactory = new Square(answers.shapeColor, answers.color, answers.text);
        logo = logoFactory;
        console.log(logo);
        break;
    }  
    fs.writeFileSync('logo.svg', logo); { 
        console.log('Generated logo.svg');
    }
});

//Generate the SVG:
function generateSVGLogo(answers) {
   
    fs.writeFileSync('logo.svg', svgContent); { 
    console.log('SVG logo generated: logo.svg');
}
}
   
