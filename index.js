const inquirer = require('inquirer');
const writeFile = require('./utils/generate-readme.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'Please enter project title',
    validate: nameInput => nameInput? true : false
    },
    {
    type: 'input',
    name: 'description',
    message: 'Please enter project description',
    validate: nameInput => nameInput? true : false
    },
    {
    type: 'input',
    name: 'installation',
    message: 'Please enter installation instructions',
    validate: nameInput => nameInput? true : false
    },
    {
    type: 'confirm',
    name: 'install_command',
    message: 'Would you like to enter a code block for installation instructions?',
    default: true
    },
    {
    type: 'input',
    name: 'codeBlock',
    message: 'Enter your code now:',
    when: ({ install_command }) => install_command,
    validate: nameInput => nameInput? true : false
    },
    {
    type: 'input',
    name: 'usage',
    message: 'Please enter usage information',
    validate: nameInput => nameInput? true : false
    }
    ,
    {
    type: 'confirm',
    name: 'usage_link',
    message: 'Would you like to create a link to a video tutorial or wiki page?',
    default: true
    }
    ,
    {
     type: 'input',
     name: 'link_name',
     message: 'Please enter the name of your link',
     when: ({ usage_link}) => usage_link,
     validate: nameInput => nameInput? true : false
    }
    ,
    {
     type: 'input',
     name: 'link_url',
     message: 'Please enter the url of your link',
     when: ({ usage_link}) => usage_link,
     validate: nameInput => nameInput? true : false
       
    }
    ,
    {
    type: 'input',
    name: 'contributing',
    message: 'Please enter contribution guidelines',
    validate: nameInput => nameInput? true : false
        
     }
     ,
     {
    type: 'input',
    name: 'tests',
    message: 'Testing Instructions',
    validate: nameInput => nameInput? true : false
     }
     ,
     {
    type: 'input',
    name: 'github_user',
    message: 'Please enter your Github username',
    validate: nameInput => nameInput? true : false
     }
     ,
     {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address',
    validate: nameInput => nameInput? true : false
     },
     {
    type: 'rawlist',
    name: 'license',
    message: 'Enter your license',
    choices: ['Apache v2.0', 'MIT License','GNU General Public License v3.0','Mozilla Public License 2.0']
     }
  ];

// inquirer prompt
const promptUser = () => {
    return inquirer.prompt(questions);
  };


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {


    promptUser()
    .then(data => {
    
      return generateMarkdown(data);
    })
    .then(readmeData => writeFile(readmeData))

}


// function call to initialize program
init();
