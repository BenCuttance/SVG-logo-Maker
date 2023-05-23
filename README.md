# SVG-logo-Maker

## Description

The required task is to build a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file. The application prompts the user to select a color and shape, provide text for 
the logo, and save the generated SVG to in the repository. The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest. Each shape class should be tested 
for a  method that returns a string for the corresponding SVG file with the given shape color.

The following example test should pass:

### User story

```
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```
### Acceptance Criteria 

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## ScreenShots

Questions for users to create SVG when node ./index.js is typed into terminal. 
![prompts](https://github.com/BenCuttance/SVG-logo-Maker/assets/123234427/420b4d9b-e681-4894-b0f4-ca4f943cbfce)

Code used to prompt users in the terminal
![questions](https://github.com/BenCuttance/SVG-logo-Maker/assets/123234427/758ec790-a760-4ccd-9a68-87f986cb2690)

Created icon.svg file with matching qualities from the inputted prompts
![Svg](https://github.com/BenCuttance/SVG-logo-Maker/assets/123234427/bbaa2e51-912a-422c-9558-8a223a7d55be)

Test file using Jest to see if the shapes are collecting the correct attributes from the function 
![Test](https://github.com/BenCuttance/SVG-logo-Maker/assets/123234427/c391f7ec-45a8-42f5-a545-cc97a829322c)


## Links

Github:https://github.com/BenCuttance/SVG-logo-Maker

Video Link:https://drive.google.com/file/d/1VmsovqSdowzzherl0Y8wuW-iivd2qPGb/view
