const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// cosnt choices =require("inquirer/lib/objects/choices");



// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message:"What is the title of you project?",

},
{
    type: "input",
    name: "description",
    message: "Please describe your project",

},
{
    type:"input",
    name:"installation",
    message:"What command should be run to install dependencies?",

},
{
    type:"input",
    name:"usage",
    message:"What does the user need to know aout using the application repository?"
},
{
    type:"list",
    name:"license",
    message: "What licenses should your project have?",
    choices: ["MIT","Apache 2.0","BSD 3","NONE"]
},
{
     type:"input",
     name:"github",
     message:"What is you git hub username?"
},
{
     type:"input",
     name:"email",
     message:"What is your email?",

}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName,data)
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response=>{
        console.log(response)
        writeToFile("ReadMe.md",generateMarkdown(response))
    } )
}

// Function call to initialize app
init();

