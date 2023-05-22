// Imports from other files
const inquirer = require('inquirer');
const Circle = require ('./lib/circle')
const Square = require ('./lib/square')
const Triangle = require ('./lib/triangle')
const fs = require('fs');


// Prompt questions to construct SVG

const questions = [
    {
        type: 'list',
        message: 'What shape would you like the create?',
        choices: ['Circle', 'Square', 'Triangle'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'What colour would you like your shape?',
        name: 'shapeColour',
    },
    {
        type: 'input',
        message: 'What text would you like in your shape (3 letters max!)',
        name: 'content',
    },
    {
        type: 'input',
        message: 'What colour would you like your text?',
        name: 'contentColour',
    },
]
function ask() {
    inquirer.prompt(questions).then(answers => {
        let shape = null
        switch (answers.shape){
            case 'Circle': {
                shape = new Circle (answers.shapeColour, answers.content, answers.contentColour); break ;
            }
            case 'Square': {
                shape = new Square (answers.shapeColour, answers.content, answers.contentColour); break ;
            }
            case 'Triangle': {
                shape = new Triangle (answers.shapeColour, answers.content, answers.contentColour); break ;
            }
            default: {shape = new Shape (answers.shapeColour, answers.content, answers.contentColour); break ;
            }
        }

        fs.writeFile(`icon.svg`, shape.builder()

            ,
            (err) => err ? console.log(err) : console.log('SVG created')
        )
    })
}

// Calls function when index.js runs in terminal

ask()