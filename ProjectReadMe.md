 # ReadMe Generator
This is a command line application that generates a quality ReadMe.md for the user. 

### Built with:
* JavaScript
* Node.Js

### License:
This project is licensed under the following: 
* MIT
You can view this lincese at:
  * https://opensource.org/licenses/MIT


 ### Instalation:
 * The user should run npm i

 ## Creating the Questions: 
* In the index.js file I created the questions for the user using an "Array of Objects."  Each object in the array contained three and in one instance four keys. Those keys were "name, type, message, and choices."

* The messages were displayed to the user and thier answers they gave, weather it was inputing strings or selecting from a selection of given option, were used in the generateMarkdown.js file to create the generated ReadME.

## Creating Badge and Links:
* For the functions that I used to rednder both the Badge and the Links I used switch statmenst where each case corrisponded with a possible list answer from the user.  Each one of the possible list answers were set equal to a link to either a badge of a given licence or a URl of that given licence so that whatever the user chose a badge and a URL would be rendered on there generated ReadME.md. 

## GenerateMarkdown function:
* It was in this fucntion where the ReadMe was generated using the replies that the was given to the the questions that were generated in the index.js file.   It was also here where I hard coded in a Table of Context and the the corresponding sections to act as the template for the ReadMe.  Using data. and the functions created for the links and badges this funciton creates a quality ReadMe.md that is populated with the user imput. 



[Walk Through](./assets/ReadME%20.mp4)

